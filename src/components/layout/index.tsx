"use client";

import React, { ReactNode, useEffect, useState } from "react";
// import NavbarLanding from "@/components/navbar";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import FooterLanding from "../footer";
import NavbarLanding2 from "../navbar2";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <HeroUIProvider>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        disableTransitionOnChange
      >
        <main className="flex-1 content" id="app-container">
          <NavbarLanding2 />
          {/* <NavbarLanding /> */}
          {children}
          <FooterLanding />
        </main>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
