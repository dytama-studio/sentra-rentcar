"use client";

import React from "react";
import PageTransition from "../pageloader/PageTransition";
import NavbarLanding from "../navbar";
import FooterLanding from "../footer";
import Container from "../container";
import MenuAdmin from "./sidebar";

interface Props {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  return (
    <PageTransition>
      <main className="flex-1 content bg-white h-screen" id="app-container">
        <NavbarLanding />
        <Container className="mt-24 lg:mt-24 ">
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="lg:w-1/5">
              <MenuAdmin />
            </div>
            <div className="lg:w-4/5">{children}</div>
          </div>
        </Container>
        <FooterLanding />
      </main>
    </PageTransition>
  );
};

export default AdminPageLayout;
