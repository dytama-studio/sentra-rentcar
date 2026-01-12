"use client";
import React from "react";
import Container from "@/components/container";
// import portofolioList from "@/data/portofolio.json";
import Link from "next/link";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { api } from "@/libs/trpc/react";
import Spinner1 from "@/components/spinners";
import BlurInView from "@/components/blurinview/BlurInView";

const PortofolioContent = () => {
  const { data: portofolioData, isLoading } =
    api.landing.getTop3Portofolio.useQuery();

  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900"
      id="PortofolioDytama"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
              Project
            </p>
            <h3 className="text-3xl lg:text-4xl text-slate-700 dark:text-white font-bold">
              Our Work
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-neutral-400">
              Beberapa Project yang pernah kolaborasi dengan dytama
            </p>
          </div>
        </div>
        <BlurInView once={true}>
          <div className="relative w-full py-5 lg:py-7">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-5 lg:py-10">
              {isLoading ? (
                <div className="lg:col-span-3">
                  <div className="flex w-full justify-center p-5">
                    <Spinner1 />
                  </div>
                </div>
              ) : (
                portofolioData.data.map((item: any, key: React.Key) => {
                  return (
                    <div className="group relative mb-4 rounded-2xl" key={key}>
                      <Link href={`/portofolio/${item.slug}`}>
                        <Image
                          width={300}
                          height={300}
                          src={item.cover}
                          alt={item.metaTitle}
                          className="w-full h-50 lg:w-90 lg:h-60 rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
                        />
                        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                          <div>
                            <h2 className="z-20 mt-2 font-bold tracking-tight text-black dark:text-neutral-200">
                              {item.title}
                            </h2>
                            <p className="mt-2 max-w-[20rem] text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                              {item.metaDescription}
                            </p>
                          </div>
                        </div>
                        <div className="transition-all duration-300 group-hover:px-4">
                          <button className="pt-2 text-sm lg:text=sm  text-primary dark:text-secondary dark:hover:text-lime-300 flex w-full font-semibold items-center hover:text-secondary">
                            Lihat Selengkapnya{" "}
                            <span className="ms-2">
                              <FiArrowRight />
                            </span>
                          </button>
                        </div>
                      </Link>
                    </div>
                  );
                })
              )}
            </div>
            <div className="flex w-full justify-center pt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
              >
                <Link
                  href={"/portofolio"}
                  className="py-3 px-4 inline-flex font-semibold items-center gap-x-2 text-sm rounded-full border border-transparent bg-secondary text-black hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Lihat lainnya <FiArrowDown className="" />
                </Link>
              </motion.div>
            </div>
          </div>
        </BlurInView>
      </Container>
    </section>
  );
};

export default PortofolioContent;
