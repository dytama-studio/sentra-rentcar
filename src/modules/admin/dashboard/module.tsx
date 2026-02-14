"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import { FiArrowRight } from "react-icons/fi";
import { FaCar } from "react-icons/fa";

const DashboardAdmin = () => {
  return (
    <div className="relative w-full">
      <div className="relative bg-gradient-to-r from-indigo-800 to-indigo-500 rounded-2xl overflow-hidden px-5 py-10 lg:p-12 text-white">
        <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl space-y-1">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white to-gray-100 text-transparent bg-clip-text">
            Hai, Sentra Rentcar
          </h3>

          <p className="text-sm md:text-md text-white/90 max-w-xl">
            Selalu update segala kebutuhan rental mobil anda, tingkatkan setiap
            penawaran unit anda
          </p>
          <div>
            <Button size={"sm"} className="mt-4" endIcon={<FiArrowRight />}>
              Buat Mobil
            </Button>
          </div>
        </div>

        <div className="relative z-20 grid grid-cols-3 gap-4 w-full pt-10">
          <div className="relative w-full bg-white rounded-md border border-gray-200 px-4 py-5 shadow-6">
            <div className="flex w-full justify-between">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl lg:text-4xl font-semibold text-black">
                  14
                </h3>
                <p className="text-sm text-gray-500 font-normal">Total Mobil</p>
              </div>
              <div>
                <span className="inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-200 text-heading text-sm font-medium rounded-md shadow-sm bg-neutral-primary-soft">
                  <FaCar className="text-primary text-sm" />
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white rounded-md border border-gray-200 px-4 py-5 shadow-6">
            <div className="flex w-full justify-between">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl lg:text-4xl font-semibold text-black">
                  1
                </h3>
                <p className="text-sm text-gray-500 font-normal">
                  Mobil Tersewa
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-200 text-heading text-sm font-medium rounded-md shadow-sm bg-neutral-primary-soft">
                  <FaCar className="text-success text-sm" />
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white rounded-md border border-gray-200 px-4 py-5 shadow-6">
            <div className="flex w-full justify-between">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl lg:text-4xl font-semibold text-black">
                  13
                </h3>
                <p className="text-sm text-gray-500 font-normal">
                  Mobil Tersedia
                </p>
              </div>
              <div>
                <span className="inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-200 text-heading text-sm font-medium rounded-md shadow-sm bg-neutral-primary-soft">
                  <FaCar className="text-danger text-sm" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-indigo-900/20 lg:hidden z-10" />

        {/* ILLUSTRATION (visible on mobile & desktop) */}
        <div
          className="
                   absolute
                   right-1/2 translate-x-1/2 
                   w-full h-full
                   opacity-40
                   lg:opacity-100
                   lg:right-0 lg:translate-x-0 lg:bottom-30
                   lg:w-[420px] lg:h-[520px]
                   pointer-events-none
                   z-0
                 "
        >
          <Image
            src="/assets/img/illustration/cta.png"
            alt="CTA Illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
