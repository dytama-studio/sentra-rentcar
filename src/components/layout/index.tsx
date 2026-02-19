"use client";

import React, { ReactNode, useEffect, useState } from "react";
import FooterLanding from "../footer";
import NavbarLanding from "../navbar";
import PageTransition from "../pageloader/PageTransition";
import FloatingWhatsApp from "../floatingwa/FloatingWhatsapp";
import { authClient } from "@/server/auth/client";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [session, setSession]: any = useState();

  useEffect(() => {
    const fetchSession = async () => {
      const { data }: any = await authClient.getSession();
      setSession(data ?? null);
    };

    fetchSession();
  }, []);

  console.log(session);
  return (
    <PageTransition>
      <main className="flex-1 content bg-white" id="app-container">
        <NavbarLanding user={session?.user ?? null} session={session ?? null} />
        {children}
        <FloatingWhatsApp />
        <FooterLanding />
      </main>
    </PageTransition>
  );
}
