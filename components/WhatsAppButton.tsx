"use client";

import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

// Update this if the WhatsApp number is different from the contact phone.
const WHATSAPP_NUMBER = "94785194631"; // no + or leading 0, country code first
const DEFAULT_MESSAGE = "Hi! I'd like to know more about SF Digital Solutions courses.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SF Digital Solutions on WhatsApp"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-3.5 py-3.5 text-white shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300 sm:pr-5"
    >
      <MessageCircle size={22} className="shrink-0" fill="white" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Chat with SF
      </span>
    </a>
  );
}
