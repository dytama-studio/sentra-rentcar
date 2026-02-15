"use client";

import React, { ReactNode } from "react";
import FooterLanding from "../footer";
import NavbarLanding from "../navbar";
import PageTransition from "../pageloader/PageTransition";
import FloatingWhatsApp from "../floatingwa/FloatingWhatsapp";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const { user } = useSelector((state: RootState) => state.User);

  return (
    <PageTransition>
      <main className="flex-1 content bg-white" id="app-container">
        <NavbarLanding user={user} />
        {children}
        <FloatingWhatsApp />
        <FooterLanding />
      </main>
    </PageTransition>
  );
}
