import { authClient } from "@/server/auth/client";
import React, { useState } from "react";
import ClickOutside from "../clickoutside";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiLayers, FiLogOut } from "react-icons/fi";
import { UserProfile } from "@/interface/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/UserDataSlice";

interface Props {
  user: UserProfile;
}

const DropdownUser = ({ user }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          dispatch(setUser(null));
          router.push("/signin");
        },
      },
    });
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
      >
        <span className="text-right lg:block flex flex-col">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user?.name || ""}
          </span>
          <span className="block text-xs font-normal text-gray-500 dark:text-white">
            {user?.email || ""}
          </span>
          {/* <span className="block text-xs dark:text-white">UX Designer</span> */}
        </span>

        <span className="h-10 w-10 rounded-full">
          <Image
            alt="user"
            width={112}
            height={112}
            className="w-10 h-10 rounded-full"
            src={"/assets/img/user/user-01.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </button>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <Link
            href={"/admin/dashboard"}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-sm"
          >
            <FiLayers /> Dashboard
          </Link>
          <button
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-sm"
            onClick={() => {
              handleSignOut();
            }}
          >
            <FiLogOut />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
