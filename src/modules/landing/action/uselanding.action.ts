import { useState } from "react";
import { tabCarsType as tabs } from "../mockdata";

export function useLanding() {
  const [tabActive, setTabActive] = useState("all");

  const handleChangeTab = (tabId: string) => {
    setTabActive(tabId);
  };

  return {
    tabs,
    tabActive,
    handleChangeTab,
  };
}
