/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

interface Props {
  data: {
    category: string;
    duration: string;
    client: string;
    develope: string[];
  };
}

const PortofolioInfo = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center w-full bg-indigo-50 border-gray-200 rounded-xl p-4">
      <div className="relative w-full space-y-1">
        <p className="text-gray-500 text-xs lg:text-sm font-normal">
          Project Category
        </p>
        <h5 className="text-black text-sm font-semibold">{data.category}</h5>
      </div>
      <div className="relative w-full space-y-1">
        <p className="text-gray-500 text-xs lg:text-sm font-normal">Client</p>
        <h5 className="text-black text-sm font-semibold">{data.client}</h5>
      </div>
      <div className="relative w-full space-y-1">
        <p className="text-gray-500 text-xs lg:text-sm font-normal">Duration</p>
        <h5 className="text-black text-sm font-semibold">{data.duration}</h5>
      </div>
      <div className="relative w-full space-y-1">
        <p className="text-gray-500 text-xs lg:text-sm font-normal">
          Project Development
        </p>
        <div className="flex -space-x-4 rtl:space-x-reverse">
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="/assets/img/technology/nodejs.png"
            alt=""
          />
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="/assets/img/technology/nextjs2.png"
            alt=""
          />
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="/assets/img/technology/figma.png"
            alt=""
          />
          <img
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src="/assets/img/technology/react.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortofolioInfo;
