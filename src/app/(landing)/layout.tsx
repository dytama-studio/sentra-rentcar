import React, { ReactNode } from "react";
import LayoutPage from "@/components/layout";

type Props = {
  children: ReactNode;
};

export default async function PublicLayout({ children }: Props) {
  return <LayoutPage>{children}</LayoutPage>;
}
