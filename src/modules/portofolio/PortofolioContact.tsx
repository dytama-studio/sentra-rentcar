"use client";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { handleToContact } from "@/helpers/globalHelper";

const PortofolioContact = () => {
  return (
    <div className="bg-secondary border border-gray-200 rounded-xl relative">
      <div className="flex flex-row w-full justify-center space-y-2">
        <div className="flex flex-col max-w-lg text-center justify-center items-center">
          <Image
            width={100}
            height={100}
            src={"/assets/img/photo/tangga.svg"}
            alt="dytama-step"
            className="w-[50px] h-auto lg:w-[60px] lg:h-auto pt-5"
          />

          <div className="relative px-2 py-4 space-y-3">
            <h4 className="text-black text-xl lg:text-2xl font-bold w-60">
              Kenal Lebih Dekat dengan
              <span className="text-primary ms-2 me-2">Dytama</span>
            </h4>
            <button
              type="button"
              onClick={handleToContact}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-900 focus:outline-hidden focus:bg-indigo-900 disabled:opacity-50 disabled:pointer-events-none"
            >
              Hubungi <FiArrowUpRight className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 end-0 pointer-events-none z-0">
        <Image
          width={400}
          height={400}
          src={"/assets/img/photo/globe.svg"}
          alt="dytama-step"
          className="w-[100px] h-auto lg:w-[250px] lg:h-auto pt-5"
        />
      </div>
    </div>
  );
};

export default PortofolioContact;
