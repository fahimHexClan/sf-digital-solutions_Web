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
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
