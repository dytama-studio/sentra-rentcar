"use client";

import React, { ReactNode } from "react";
import FooterLanding from "../footer";
import NavbarLanding from "../navbar";
import PageTransition from "../pageloader/PageTransition";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <PageTransition>
      <main className="flex-1 content bg-white" id="app-container">
        <NavbarLanding />
        {children}
        <FooterLanding />
      </main>
    </PageTransition>
  );
}
