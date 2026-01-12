"use client";

import React from "react";
import Container from "@/components/container";
import pricingListV2 from "@/data/pricingListv2.json";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import BlurInView from "@/components/blurinview/BlurInView";

const PricingPage2 = () => {
  return (
    <section
      id="PricingList"
      className="relative w-full bg-white dark:bg-slate-900 py-10 lg:py-15"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
              Pricing
            </p>
            <h3 className="text-3xl lg:text-4xl text-black dark:text-white font-bold">
              Pilih Paket Sesuai kebutuhan
            </h3>
          </div>
        </div>
        <div className="py-10 flex w-full justify-center">
          <BlurInView once={true}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:max-w-[850px] ">
              {pricingListV2.map((item: any, key: number) => {
                return (
                  <div
                    key={key}
                    className=" relative bg-gradient-to-br from-white via-slate-50 to-purple-100 dark:from-slate-950 dark:via-slate-900 dark:to-purple-900 border border-gray-200 rounded-xl   dark:border-neutral-900"
                  >
                    <div className="relative p-4 md:p-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-primary dark:text-secondary pb-2">
                        {item.title}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-neutral-400">
                        {item.subtitle}
                      </div>

                      <div className="mt-5 pb-5 border-b border-gray-200 dark:border-neutral-600">
                        <p className="text-gray-500 font-medium dark:text-neutral-200 pb-2">
                          Mulai dari
                        </p>
                        <span className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-neutral-200">
                          {item.price}
                        </span>
                        <Link
                          href={item.href}
                          className="mt-10 bottom-2 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-secondary hover:bg-lime-200 text-black "
                        >
                          {item.buttonText}
                        </Link>
                      </div>

                      <div className="mt-5 flex w-full">
                        <ul className="space-y-2 text-sm sm:text-base">
                          {item.features.map(
                            (featureItem: any, key: number) => {
                              return (
                                <li
                                  className="flex w-full gap-x-3 text-sm"
                                  key={key}
                                >
                                  <span className="mt-0.5 size-4 flex justify-center items-center rounded-full bg-indigo-50 text-primary dark:bg-warning dark:text-black">
                                    <svg
                                      className="shrink-0 size-3.5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </span>
                                  <span className="text-gray-800 dark:text-neutral-200">
                                    {featureItem}
                                  </span>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="lg:col-span-2">
                <div className="relative bg-gradient-to-br from-[#D1F701] to-lime-400 rounded-xl overflow-hidden">
                  <div className="flex flew-row items-center p-4 md:p-10 justify-between">
                    <div className="space-y-1 z-10 max-w-65 lg:max-w-xl">
                      <h3 className="text-xl lg:text-3xl font-bold text-black pb-2">
                        Paket Bundling ( Hemat 15% - 20% )
                      </h3>
                      <p className="text-gray-800 text-sm lg:text-base font-normal">
                        Ambil design + development sekaligus, hemat hingga 20%
                        dan proses lebih smooth karena dikerjakan 1 Tim
                      </p>
                      <div className="pt-4">
                        <Link
                          href={"/pricing/bundle"}
                          className="py-3 px-10 inline-flex font-semibold items-center gap-x-2 text-sm rounded-xl border border-transparent bg-slate-800 text-white hover:bg-primary focus:outline-hidden focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Lihat Bundling <FiArrowRight />
                        </Link>
                        {/* <Button
                          className="inline-flex bg-primary hover:bg-indigo-800 text-white font-semibold dark:shadow-none shadow-md light:shadow-slate-200"
                          color="primary"
                          href="/pricing/bundle"
                        >
                          Lihat Paket Bundle
                          <FiArrowRight />
                        </Button> */}
                      </div>
                    </div>
                    <div className="absolute -right-12 bottom-0 lg:right-0 lg:-bottom-5 w-80 lg:w-100">
                      <Image
                        src="/assets/img/illustration/ribbon.svg" // ganti dengan path elemen dekoratif kamu
                        alt="Decor"
                        className="w-full h-auto object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurInView>
        </div>
      </Container>
    </section>
  );
};

export default PricingPage2;
