"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./navbar-components";
import { NavbarLogo, NavbarButton } from "./navbar-elements";
import { siteConfig } from "@/config/site";
import { useScrollSpy } from "@/hooks/useColorSpy";
import Link from "next/link";

export default function NavbarLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeId = useScrollSpy(
    siteConfig.navItems.map((i) => i.href.replace("#", "")),
    120
  );

  useEffect(() => {
    let last = false;

    const onScroll = () => {
      const next = window.scrollY > 10;
      if (next !== last) {
        last = next;
        setIsScrolled(next);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar isScrolled={isScrolled}>
        <NavBody isScrolled={isScrolled}>
          <NavbarLogo />
          <NavItems items={siteConfig.navItems} activeId={activeId} />
          <div className="hidden md:flex gap-4 items-center">
            <NavbarButton>Hubungi Whatsapp</NavbarButton>
          </div>
        </NavBody>

        <MobileNav isScrolled={isScrolled}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {siteConfig.navItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium"
            >
              {item.label}
            </Link>
          );
        })}

        <NavbarButton className="w-48">Hubungin Whatsapp</NavbarButton>
      </MobileNavMenu>
    </>
  );
}
