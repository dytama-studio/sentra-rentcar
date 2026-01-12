"use client";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { handleToContact } from "@/helpers/globalHelper";

const TechnologyContent = () => {
  return (
    <section
      className="relative w-full  bg-white dark:bg-slate-900"
      id="TecnologyDytama"
    >
      <Container>
        <div className="relative w-full py-10 lg:py-15">
          <div className="relative w-full space-y-2 text-center justify-center pb-10">
            <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
              Technology <span className="text-primary">Dytama</span>
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-50">
              Jangan khawatir untuk kolaborasi bersama dytama, dytama memiliki
              fleksibilitas teknologi untuk menunjang project anda
            </p>
          </div>
          <div className="pt-10 lg:pt-15 flex w-full justify-center">
            <Image
              width={500}
              height={500}
              src={"/assets/img/illustration/tech-dytama.svg"}
              alt="feature-dytama"
              className="w-[500px] h-auto lg:w-[1000px] lg:h-auto"
            />
          </div>
          <div className="pt-10 lg:pt-15 flex w-full justify-center">
            <div className="relative max-w-5xl text-center justify-center pb-10">
              <h3 className="text-black text-2xl lg:text-5xl font-bold dark:text-white">
                Siap untuk bangun project
                <span className="text-primary ms-2 me-2">Anda</span>
                ketingkat yang berbeda ?
              </h3>
              <p className="text-md font-normal pt-10 lg:pt-5 text-gray-500 dark:text-gray-50">
                Mulai kolaborasi dengan dytama saya hari ini dan mari diskusikan
                bagaimana dytama dapat membantu Anda mencapai tujuan Anda.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <button
              onClick={handleToContact}
              type="button"
              className="py-3 px-10 inline-flex font-semibold items-center gap-x-2 text-sm rounded-xl border border-transparent bg-slate-800 text-white hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 disabled:opacity-50 disabled:pointer-events-none"
            >
              Hubungi Dytama <FiArrowUpRight className="" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechnologyContent;
