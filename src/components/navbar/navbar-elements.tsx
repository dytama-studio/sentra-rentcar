"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";

import { handleToContact } from "@/helpers/globalHelper";
import { useSiteConfig } from "@/libs/site/site-config.provider";

export const NavbarLogo = () => {
  const config = useSiteConfig();

  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-black text-lg font-semibold"
    >
      <Image
        src={config.imgUrl || "/assets/img/brand/sentra-color.svg"}
        width={120}
        height={24}
        alt="Sentra Publisher"
        className="block w-8 md:w-10 lg:w-10"
        priority
      />
      {config.name}
    </Link>
  );
};

export const NavbarButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
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
      className={cn(
        "h-11 px-5 rounded-full text-sm font-medium text-white",
        "bg-gradient-to-b from-zinc-700 to-zinc-900",
        "hover:shadow-lg active:scale-95 transition",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
