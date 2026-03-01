"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizeblenavbar";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const NavbarLanding2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={siteConfig.navItems} />
          <div className="flex items-center gap-4">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex gap-2 h-full  w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-slate-900 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Chat Whatsapp{" "}
                <span className="w-6 h-6 bg-white text-sm p-1 text-black rounded-full flex items-center justify-center">
                  <FiArrowRight />
                </span>
              </span>
            </button>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {siteConfig.navItems.map((item, key: React.Key) => (
              <Link
                key={key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.label}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-4">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex gap-2 h-full  w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-slate-900 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Chat Whatsapp{" "}
                    <span className="w-6 h-6 bg-white text-sm p-1 text-black rounded-full flex items-center justify-center">
                      <FiArrowRight />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarLanding2;
