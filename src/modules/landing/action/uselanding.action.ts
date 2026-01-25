import { useState } from "react";
import { tabCarsType as tabs } from "../mockdata";

export function useLanding() {
  const [tabActive, setTabActive] = useState("all");
  const [openModalBook, setOpenModalBook] = useState(false);

  const handleOpenModalBook = () => {
    setOpenModalBook(!openModalBook);
  };

  const handleChangeTab = (tabId: string) => {
    setTabActive(tabId);
  };

  return {
    tabs,
    tabActive,
    handleChangeTab,
    openModalBook,
    handleOpenModalBook,
  };
}
