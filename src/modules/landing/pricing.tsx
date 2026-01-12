"use client";

import React from "react";
import Container from "@/components/container";
import pricingList from "@/data/pricing.json";
import { handleToContact } from "@/helpers/globalHelper";

const PricingPage = () => {
  return (
    <section
      id="PricingList"
      className="relative w-full bg-white dark:bg-slate-900 py-10 lg:py-20"
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
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-10 md:gap-6 max-w-7xl mx-auto">
            {pricingList.map((item, key: React.Key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col h-full bg-white border border-gray-200 shadow-md text-start rounded-2xl p-4 md:p-8 dark:bg-slate-800 dark:border-neutral-800"
                >
                  <h4 className="font-bold text-lg text-primary dark:text-secondary">
                    {item.title}
                  </h4>
                  <span className="mt-7 font-bold text-3xl md:text-3xl xl:text-4xl text-black dark:text-neutral-200">
                    {item.pricing}
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-200">
                    {item.subtitle}
                  </p>

                  <ul className="py-4 space-y-2.5 text-sm">
                    {item.detail.map((item, keyDetail: React.Key) => (
                      <li className="flex gap-x-2" key={keyDetail}>
                        <svg
                          className="shrink-0 mt-0.5 size-4 text-indigo-700"
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
                        <span className="text-gray-800 dark:text-neutral-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="mt-auto bottom-2 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-500  focus:outline-hidden focus:border-violet-500  disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-100 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400"
                    onClick={handleToContact}
                  >
                    Hubungi Kami
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingPage;
