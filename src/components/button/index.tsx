"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import React from "react";
import Link from "next/link";

const buttonVariants = cva(
  "relative inline-flex h-12 overflow-hidden rounded px-5 py-2.5 lg:py-4 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      color: {
        default:
          "bg-white text-gray-900 border border-gray-200 hover:bg-neutral-100 hover:ring hover:ring-gray-500",
        success:
          "bg-success hover:bg-emerald-700 hover:ring hover:ring-emerald-700",
        primary:
          "bg-primary hover:bg-indigo-700 hover:ring hover:ring-indigo-700",
        secondary:
          "bg-secondary hover:bg-cyan-500 hover:ring hover:ring-cyan-700",
        info: "bg-info hover:bg-blue-700 hover:ring-blue-700",
        danger: "bg-danger hover:bg-rose-700 hover:ring-rose-700",
      },
      size: {
        xs: "h-8 px-3 py-2 text-xs",
        sm: "h-9 px-3 py-2 text-sm",
        md: "h-10 px-3 py-4 text-base",
        lg: "h-12 p-4 lg:p-5 text-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-lg",
        full: "rounded-full",
      },
      isDisabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
      radius: "md",
    },
  }
);

type ButtonHTMLProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
>;
// type AnchorHTMLProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">;

export interface ButtonProps
  extends ButtonHTMLProps,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  size,
  radius,
  isDisabled,
  isLoading,
  startIcon,
  endIcon,
  href,
  target,
  rel,
  ...props
}) => {
  const buttonClasses = cn(
    buttonVariants({ color, size, radius, isDisabled }),
    className
  );

  const content = (
    <span className="relative flex items-center justify-center gap-2">
      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {startIcon && !isLoading && <span>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && !isLoading && <span>{endIcon}</span>}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        aria-disabled={isDisabled || isLoading}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
