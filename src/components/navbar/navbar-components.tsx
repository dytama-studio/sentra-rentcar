"use client";

import { ReactNode } from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = ({
  children,
  isScrolled,
}: {
  children: ReactNode;
  isScrolled?: boolean;
}) => (
  <nav
    className={cn(
      "fixed top-0 left-0 z-50 w-full",
      "min-h-[72px]", // ⬅️ PENTING
      "transition-[background-color] duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
    )}
  >
    <div className="container mx-auto h-full px-1 lg:px-12 flex items-center">
      {children}
    </div>
  </nav>
);
export const NavBody = ({
  children,
  isScrolled,
}: {
  children: ReactNode;
  isScrolled?: boolean;
}) => (
  <div
    className={cn(
      "hidden md:flex items-center justify-between w-full transition-[box-shadow] duration-300",
      isScrolled ? "py-3 shadow-sm" : "py-3"
    )}
  >
    {children}
  </div>
);

export const NavItems = ({
  items,
  activeId,
}: {
  items: { label: string; href: string }[];
  activeId?: string;
}) => {
  return (
    <div className="hidden md:flex gap-5 items-center">
      {items.map((item) => {
        let key = "";

        if (item.href === "/") key = "home";
        else if (item.href.startsWith("#")) key = item.href.replace("#", "");
        else key = item.href.replace("/", "");

        const isActive = key === activeId;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition",
              isActive ? "text-primary" : "text-gray-700 hover:text-black"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
export const MobileNav = ({
  children,
  isScrolled,
}: {
  children: ReactNode;
  isScrolled?: boolean;
}) => (
  <div
    className={cn(
      "md:hidden w-full transition-all",
      isScrolled ? "py-3 shadow-sm" : "py-4"
    )}
  >
    {children}
  </div>
);

export const MobileNavHeader = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center px-4 justify-between">{children}</div>
);

export const MobileNavMenu = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 md:hidden bg-white">
        <div className="container max-w-screen-xl mx-auto px-5 h-full flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2  border border-gray-200 rounded-md bg-white active:scale-90"
          >
            <FiX className="text-black"></FiX>
          </button>

          <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 active:scale-90 border border-gray-200 rounded-md"
  >
    {isOpen ? <FiX /> : <FiMenu />}
  </button>
);
