-- SF Digital Solutions LK: accounts, saved roadmaps, enrolment requests.
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Safe to re-run (uses IF NOT EXISTS / OR REPLACE / DROP POLICY IF EXISTS).

-- ---------------------------------------------------------------- tables
create table if not exists public.profiles (
  id            uuid primary key references auth.users (id) on delete cascade,
  display_name  text check (display_name is null or char_length(display_name) between 2 and 60),
  role          text not null default 'student' check (role in ('student', 'admin')),
  created_at    timestamptz not null default now()
);

create table if not exists public.saved_roadmaps (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users (id) on delete cascade,
  goal           text not null check (goal in ('office','web','design','marketing','it','unsure')),
  level          text not null check (level in ('beginner','some','experienced')),
  hours_per_week int  not null check (hours_per_week between 1 and 40),
  plan           jsonb not null,
  created_at     timestamptz not null default now()
);
create index if not exists saved_roadmaps_user_idx on public.saved_roadmaps (user_id, created_at desc);

create table if not exists public.enrolment_requests (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  course_slug  text not null check (char_length(course_slug) between 1 and 100),
  note         text check (note is null or char_length(note) <= 500),
  status       text not null default 'new' check (status in ('new','contacted','enrolled','declined')),
  created_at   timestamptz not null default now()
);
create index if not exists enrolment_requests_user_idx on public.enrolment_requests (user_id, created_at desc);

-- ------------------------------------------- profile row for every new user
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------ admin helper
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- ------------------------------------------------------ row level security
alter table public.profiles            enable row level security;
alter table public.saved_roadmaps      enable row level security;
alter table public.enrolment_requests  enable row level security;

-- profiles: read own (admins read all), update own display name only
drop policy if exists "profiles read own"   on public.profiles;
drop policy if exists "profiles update own" on public.profiles;
create policy "profiles read own"   on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin());
create policy "profiles update own" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- users may change ONLY display_name (never their role)
revoke update on public.profiles from authenticated;
grant  update (display_name) on public.profiles to authenticated;

-- saved roadmaps: own rows only, at most 20 per user
drop policy if exists "roadmaps read own"   on public.saved_roadmaps;
drop policy if exists "roadmaps insert own" on public.saved_roadmaps;
drop policy if exists "roadmaps delete own" on public.saved_roadmaps;
create policy "roadmaps read own"   on public.saved_roadmaps for select to authenticated
  using (user_id = auth.uid() or public.is_admin());
create policy "roadmaps insert own" on public.saved_roadmaps for insert to authenticated
  with check (
    user_id = auth.uid()
    and (select count(*) from public.saved_roadmaps r where r.user_id = auth.uid()) < 20
  );
create policy "roadmaps delete own" on public.saved_roadmaps for delete to authenticated
  using (user_id = auth.uid());

-- enrolment requests: users create and read their own (status always starts as 'new');
-- only admins change the status
drop policy if exists "requests read own"     on public.enrolment_requests;
drop policy if exists "requests insert own"   on public.enrolment_requests;
drop policy if exists "requests admin update" on public.enrolment_requests;
create policy "requests read own"   on public.enrolment_requests for select to authenticated
  using (user_id = auth.uid() or public.is_admin());
create policy "requests insert own" on public.enrolment_requests for insert to authenticated
  with check (
    user_id = auth.uid()
    and status = 'new'
    and (select count(*) from public.enrolment_requests e where e.user_id = auth.uid()) < 50
  );
create policy "requests admin update" on public.enrolment_requests for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- No access for anonymous (signed-out) visitors to any of these tables.
revoke all on public.profiles, public.saved_roadmaps, public.enrolment_requests from anon;

-- -------------------------------------------------- make yourself an admin
-- After you sign in on the website once, run this with YOUR email:
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'you@example.com');
