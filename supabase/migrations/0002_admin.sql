-- Adds the student's email to profiles so an admin can contact people who send
-- enrolment requests. Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- Safe to re-run.

alter table public.profiles add column if not exists email text;

-- Backfill existing accounts
update public.profiles p
set email = u.email
from auth.users u
where u.id = p.id and p.email is distinct from u.email;

-- New sign-ups get their email stored automatically
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email)
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

-- Keep it in sync if someone changes their sign-in email
create or replace function public.handle_user_email_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles set email = new.email where id = new.id;
  return new;
end;
$$;

drop trigger if exists on_auth_user_email_changed on auth.users;
create trigger on_auth_user_email_changed
  after update of email on auth.users
  for each row when (old.email is distinct from new.email)
  execute function public.handle_user_email_change();

-- Policies from 0001 already restrict who can read profiles:
-- each person sees only their own row; admins see all rows.
-- Users still cannot edit email or role (only display_name is updatable).
