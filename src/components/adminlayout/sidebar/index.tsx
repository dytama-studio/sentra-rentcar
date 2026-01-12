"use client";

import React from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import ClickOutside from "@/components/clickoutside";
import useLocalStorage from "@/hooks/useLocalStorage";

import { menuItem as MenuData } from "./menu";
import { FiArrowLeft } from "react-icons/fi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  user: any;
}

const menuGroups = MenuData;

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  // const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-62.5 flex-col overflow-y-hidden bg-white border-r  border-gray-200 duration-300 ease-linear dark:bg-slate-900 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-10 py-5.5 lg:py-4 border-b border-gray-200">
          <Link href="/">
            <Image
              width={114}
              height={22}
              src={"/assets/img/brand/dytama-black.svg"}
              alt="Logo"
              priority
            />
          </Link>
          <div className="hidden lg:block">
            <button
              type="button"
              className="btn btn-circle btn-text"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="collapsible-mini-sidebar"
              aria-label="Minify navigation"
              data-overlay-minifier="#collapsible-mini-sidebar"
            >
              <span className="icon-[tabler--menu-2] size-5"></span>
              <span className="sr-only">Navigation Toggle</span>
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-indigo-900 ">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-0 lg:px-6">
            {menuGroups.map((group: any, groupIndex: React.Key) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-xs font-semibold text-gray-500">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.length > 0 &&
                    group.menuItems.map(
                      (menuItem: any, menuIndex: React.Key) => (
                        <SidebarItem
                          key={menuIndex}
                          item={menuItem}
                          pageName={pageName}
                          setPageName={setPageName}
                        />
                      )
                    )}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
        <div className="p-4 px-6 border-t border-gray-200 mt-auto">
          <Link
            href={"/"}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <FiArrowLeft />
            Back to Landing
          </Link>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
