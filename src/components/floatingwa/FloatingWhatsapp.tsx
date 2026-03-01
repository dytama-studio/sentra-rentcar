"use client";

import { handleToContact } from "@/helpers/globalHelper";
import { useSiteConfig } from "@/libs/site/site-config.provider";
import Image from "next/image";

export default function FloatingWhatsApp() {
  const config = useSiteConfig();
  const handleClick = () => {
    handleToContact({
      phone: config.phone,
      message:
        config.whatsappTemplate ??
        `Halo saya tertarik dengan layanan ${config.name}`,
    });
  };
  return (
    <button
      onClick={handleClick}
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-lg
        hover:scale-105 hover:shadow-xl
        transition-all duration-300
      "
      aria-label="WhatsApp"
    >
      <Image
        src="assets/img/icon/social-media/whatsappcircle.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        priority
      />
    </button>
  );
}
