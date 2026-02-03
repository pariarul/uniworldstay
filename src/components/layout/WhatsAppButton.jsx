"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919613333393"; // country code + number
  const message = "Hello, I want to know more details";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-4 right-4 z-50
        flex items-center justify-center
        w-14 h-14 md:w-auto md:h-auto
        md:px-4 md:py-3
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        shadow-lg
        transition-all duration-300
        active:scale-95
      "
    >
      <MessageCircle size={26} />

      {/* Desktop text only */}
      <span className="hidden md:block ml-2 font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}
