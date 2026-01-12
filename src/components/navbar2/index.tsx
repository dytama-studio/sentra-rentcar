"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizeblenavbar";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import ThemeSwitcher from "../themeswitcher";
import { handleToContact } from "@/helpers/globalHelper";

const NavbarLanding2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={siteConfig.navItems} />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <NavbarButton
              onClick={handleToContact}
              className="bg-secondary rounded-full"
            >
              Contact
            </NavbarButton>
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
              <ThemeSwitcher />
              <NavbarButton
                onClick={() => handleToContact()}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarLanding2;
