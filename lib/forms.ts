import { QUOTE_FORM_ENDPOINT, whatsappLink } from "@/lib/site";

export type LeadResult = "sent" | "whatsapp" | "error";

/**
 * Delivers an enquiry.
 * - If NEXT_PUBLIC_QUOTE_FORM_ENDPOINT is configured, it is POSTed there ("sent").
 * - Otherwise WhatsApp is opened with the message ready to send ("whatsapp").
 *   Nothing is stored by this website in that case.
 */
export async function deliverLead(
  payload: Record<string, string>,
  whatsappText: string,
): Promise<LeadResult> {
  if (QUOTE_FORM_ENDPOINT) {
    try {
      const res = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      return res.ok ? "sent" : "error";
    } catch {
      return "error";
    }
  }
  window.open(whatsappLink(whatsappText), "_blank", "noopener,noreferrer");
  return "whatsapp";
}
