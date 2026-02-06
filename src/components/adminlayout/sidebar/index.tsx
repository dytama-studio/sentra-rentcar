import React from "react";
import { menuItem as MenuData } from "./menu";
import useLocalStorage from "@/hooks/useLocalStorage";
import SidebarItem from "./SidebarItem";
const MenuAdmin = () => {
  const menuGroups = MenuData;
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <div className="text-sm w-full lg:w-full p-3 bg-white border border-gray-500/30 text-gray-800/80 rounded-md font-medium">
      <nav className="min-h-100">
        <div className="relative w-full px-4 py-2.5 mb-4  border-gray-200 bg-indigo-50 rounded-md">
          <h5 className="text-black font-semibold text-lg">
            Hai, Sentra Rent Car
          </h5>
          <p className="text-xs font-normal text-gray-500 pt-1">
            Portal Pengaturan Website Anda
          </p>
        </div>
        {menuGroups.map((group: any, groupIndex: React.Key) => (
          <div key={groupIndex} className="border-t border-gray-200">
            <h3 className="mb-4 ml-4 mt-4 border-gray-200 text-xs font-semibold text-gray-500">
              {group.name}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {group.menuItems.length > 0 &&
                group.menuItems.map((menuItem: any, menuIndex: React.Key) => (
                  <SidebarItem
                    key={menuIndex}
                    item={menuItem}
                    pageName={pageName}
                    setPageName={setPageName}
                  />
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MenuAdmin;
