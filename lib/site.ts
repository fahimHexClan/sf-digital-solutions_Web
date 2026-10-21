// Central place for contact details and external URLs.
// Change a value here and it updates everywhere on the site.

export const WHATSAPP_NUMBER = "94785194631"; // country code first, no + or leading 0
export const PHONE_DISPLAY = "+94 78 519 4631";
export const PHONE_E164 = "+94785194631";
export const CONTACT_EMAIL = "sfdigitalsolutions.lk@gmail.com";

export const REGISTRATION_URL =
  "https://sf-digital-solutions-lk-registratio.vercel.app";
export const LMS_URL = "https://sfdigitalsolutionslk-lms.web.app";

export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Optional form-submission service (for example a Formspree endpoint).
 * Set NEXT_PUBLIC_QUOTE_FORM_ENDPOINT in .env.local / Vercel to enable it.
 * When empty, forms hand the enquiry over via WhatsApp instead and nothing
 * is stored on this website.
 */
export const QUOTE_FORM_ENDPOINT = process.env.NEXT_PUBLIC_QUOTE_FORM_ENDPOINT || "";
