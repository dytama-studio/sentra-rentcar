"use client";
import React, { useEffect, useState } from "react";
import HeaderAdmin from "./header";
import Sidebar from "./sidebar";
import Breadcrumb from "./breadcrumb";
import { authClient } from "@/server/auth/client";
import { Loader } from "../loader";

interface Props {
  children: React.ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = () => {
      authClient.getSession().then((session: any) => {
        setUser(session?.data?.user ?? null);
        setLoading(false);
      });
    };

    fetchSession();
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center bg-white ">
      <Loader variant="dots" />
    </div>
  ) : (
    <div className="flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        user={{}}
      />
      <div
        className={`relative flex flex-1 flex-col transition-all duration-300 ${
          // !isSidebarMinimized ? "lg:ml-65" : "lg:ml-20" // versi lama
          !sidebarOpen ? "lg:ml-62.5" : "lg:ml-20"
        }`}
      >
        <HeaderAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          user={user}
        />
        <main className="dark:bg-boxdark-2 bg-[#f8f9fa] dark:bg-slate-950 dark:text-bodydark min-h-screen h-full">
          <div className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:py-8 2xl:px-5">
            <Breadcrumb />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPageLayout;
