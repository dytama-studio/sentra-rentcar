"use client";

import React from "react";
import NavbarLanding from "../navbar";
import FooterLanding from "../footer";
import Container from "../container";
import MenuAdmin from "./sidebar";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import useFetchUser from "@/hooks/useFetchUser";
import PageLoader from "../pageloader/PageLoader";

interface Props {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  const { user } = useSelector((state: RootState) => state.User);
  const { isLoading, session } = useFetchUser();

  if (isLoading) return <PageLoader key="loader" />;

  return (
    <main className="flex-1 content bg-white h-screen" id="app-container">
      <NavbarLanding user={user} session={session} />
      <Container className="mt-24 lg:mt-24 ">
        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="lg:w-1/5">
            <MenuAdmin user={user} />
          </div>
          <div className="lg:w-4/5">{children}</div>
        </div>
      </Container>
      <FooterLanding />
    </main>
  );
};

export default AdminPageLayout;
