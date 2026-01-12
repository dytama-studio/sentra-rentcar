"use client";
import React from "react";
import Link from "next/link";
import { FiFileText, FiClock, FiBox, FiUser } from "react-icons/fi";

const NavigatePost = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <Link
        href={"/admin/portofolio"}
        className="bg-white border border-gray-200 shadow-md rounded-md p-4"
      >
        <div className="flex flex-col lg:flex-row justify-start items-start lg:inline-flex lg:items-center gap-4">
          <FiUser className="text-primary font-bold text-xl lg:text-2xl" />
          <div className="flex flex-col space-y-1">
            <h5 className="text-black font-semibold text-base">
              Update your profile info
            </h5>
            <p className="text-xs font-normal text-gray-600">
              Always uptodate your profile information
            </p>
          </div>
        </div>
      </Link>
      <Link
        href={"/admin/portofolio"}
        className="bg-white border border-gray-200 shadow-md rounded-md p-4"
      >
        <div className="flex flex-col lg:flex-row justify-start items-start lg:inline-flex lg:items-center gap-4">
          <FiFileText className="text-secondary font-bold text-xl lg:text-2xl" />
          <div className="flex flex-col space-y-1">
            <h5 className="text-black font-semibold text-base">Blog</h5>
            <p className="text-xs font-normal text-gray-600">
              Create a new blog or news
            </p>
          </div>
        </div>
      </Link>
      <Link
        href={"/admin/portofolio"}
        className="bg-white border border-gray-200 shadow-md rounded-md p-4"
      >
        <div className="flex flex-col lg:flex-row justify-start items-start lg:inline-flex lg:items-center gap-4">
          <FiClock className="text-warning font-bold text-xl lg:text-2xl" />
          <div className="flex flex-col space-y-1">
            <h5 className="text-black font-semibold text-base">
              Carrier Timeline
            </h5>
            <p className="text-xs font-normal text-gray-600">
              Post your carrier timeline
            </p>
          </div>
        </div>
      </Link>
      <Link
        href={"/admin/portofolio"}
        className="bg-white border border-gray-200 shadow-md rounded-md p-4"
      >
        <div className="flex flex-col lg:flex-row justify-start items-start lg:inline-flex lg:items-center gap-4">
          <FiBox className="text-info font-bold text-xl lg:text-2xl" />
          <div className="flex flex-col space-y-1">
            <h5 className="text-black font-semibold text-base">Product</h5>
            <p className="text-xs font-normal text-gray-600">
              Post your product affiliate with lynk
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavigatePost;
