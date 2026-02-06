"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919613333393"; // Country code + number
  const message = "Hello, I would like to know more details";

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
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14
        bg-[#25D366]
        text-white
        rounded-full
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition-all duration-300
        active:scale-95
      "
    >
      <MessageCircle size={28} />
    </a>
  );
}
