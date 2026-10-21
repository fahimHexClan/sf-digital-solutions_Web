export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export const isPhone = (v: string) => {
  const digits = v.replace(/[\s()+-]/g, "");
  return /^\d{9,15}$/.test(digits);
};

/** Accepts either an email address or a phone / WhatsApp number. */
export const isEmailOrPhone = (v: string) => isEmail(v) || isPhone(v);
