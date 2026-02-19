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
import { usePathname } from "next/navigation";
import DropdownUser from "./dropdownuser";
import { UserProfile } from "@/interface/auth";

interface Props {
  user: UserProfile;
  session: any;
}

export default function NavbarLanding({ user, session }: Props) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const isHome = pathname === "/";

  // ScrollSpy ONLY for home page
  const scrollActiveId = useScrollSpy(
    isHome
      ? siteConfig.navItems
          .filter((i) => i.href.startsWith("#"))
          .map((i) => i.href.replace("#", ""))
      : [],
    120
  );

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (isHome && window.scrollY < 100) {
        setActiveId("home");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // URL change handler
  useEffect(() => {
    if (!isHome) {
      setActiveId(pathname.replace("/", ""));
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveId(hash);
    }
  }, [pathname, isHome]);

  // ScrollSpy active (home only)
  useEffect(() => {
    if (scrollActiveId) {
      setActiveId(scrollActiveId);
    }
  }, [scrollActiveId]);

  // Lock body scroll
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
            {session ? (
              <DropdownUser user={user} />
            ) : (
              <>
                <NavbarButton>Hubungi Whatsapp</NavbarButton>
              </>
            )}
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
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              if (item.href === "/") setActiveId("home");
              else if (item.href.startsWith("#"))
                setActiveId(item.href.replace("#", ""));
              else setActiveId(item.href.replace("/", ""));
              setIsMenuOpen(false);
            }}
            className="text-lg font-medium"
          >
            {item.label}
          </Link>
        ))}

        <NavbarButton className="w-48">Hubungi Whatsapp</NavbarButton>
      </MobileNavMenu>
    </>
  );
}
