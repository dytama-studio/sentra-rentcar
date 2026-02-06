import { FaCar } from "react-icons/fa";
import { FiActivity, FiHome } from "react-icons/fi";

export const menuItem = [
  {
    name: "Main",
    menuItems: [
      {
        icon: FiActivity,
        label: "Dashboard",
        route: "/admin/dashboard",
        // children: [],
      },
      {
        icon: FiHome,
        label: "Profile Rental",
        route: "/admin/profile",
        // children: [],
      },
      {
        icon: FaCar,
        label: "Unit Management",
        route: "/admin/cars",
      },
    ],
  },
];
