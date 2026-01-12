"use client";
import React from "react";
import { Spotlight } from "@/components/spotlightnew";
import Image from "next/image";

const HeroPortofolio = () => {
  return (
    <section className="relative w-full">
      <div className="h-[34rem] w-full rounded-md flex md:items-center md:justify-center   bg-gradient-to-t from-indigo-200  to-white antialiased dark:from-slate-950 dark:to-slate-950  relative overflow-hidden">
        <Spotlight />
        <div className="flex flex-col w-full justify-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-indigo-700 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
            Ciptakan Kolaborasi Baru <br />{" "}
            <span className="text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-indigo-500 dark:to-indigo-700">
              Bersama Dytama
            </span>
          </h1>
          <p className="mt-4 font-normal text-base text-gray-600 dark:text-neutral-300 max-w-lg text-center mx-auto">
            Transformasi digital untuk bisnis yang ingin tumbuh lebih cepat.
          </p>
        </div>
        <div className="hidden lg:block absolute top-80 start-40">
          <Image
            width={300}
            height={300}
            src={"/assets/img/illustration/side-left-1.png"}
            alt="side-left-dytama"
            className="lg:w-50"
          />
        </div>
        <div className="hidden lg:block absolute top-25 end-40">
          <Image
            width={300}
            height={300}
            src={"/assets/img/illustration/side-right-1.png"}
            alt="side-left-dytama"
            className="lg:w-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPortofolio;
