import {
  FiBox,
  FiActivity,
  FiFileText,
  FiClock,
  FiFeather,
} from "react-icons/fi";

export const menuItem = [
  {
    name: "Main",
    menuItems: [
      {
        icon: FiActivity,
        label: "Dashoard",
        route: "/admin/dashboard",
        // children: [],
      },
      {
        icon: FiFileText,
        label: "Blog",
        route: "/admin/blog",
        // children: [],
      },
      {
        icon: FiFeather,
        label: "Portofolio",
        route: "/admin/portofolio",
        // children: [],
      },
      {
        icon: FiClock,
        label: "Timeline",
        route: "/admin/timeline",
        // children: [],
      },
      {
        icon: FiBox,
        label: "Product",
        route: "/admin/product",
        // children: [],
      },
    ],
  },
];
