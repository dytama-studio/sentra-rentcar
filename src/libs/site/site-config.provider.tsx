"use client";
import React, { createContext, useContext } from "react";

const SiteConfigContext = createContext<any>(null);

export function SiteConfigProvider({ value, children }: any) {
  return (
    <SiteConfigContext.Provider value={value}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}
