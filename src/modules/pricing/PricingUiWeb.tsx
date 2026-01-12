"use client";
import React from "react";
import { PricingDataValues } from "@/interface/pricing";
import Container from "@/components/container";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  title: string;
  data: PricingDataValues[];
}

const PricingUiWeb = ({ data, title }: Props) => {
  return (
    <section id="PricingHeader" className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 h-[24rem] w-full bg-gradient-to-t from-indigo-200 to-white dark:from-slate-900 dark:to-slate-950 z-0"></div>

      <div className="relative w-full py-10 lg:py-16 mt-10 lg:mt-15 z-10">
        <div className="flex w-full justify-center">
          <div className="flex flex-col justify-center max-w-sm lg:max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600 dark:from-neutral-50 dark:to-neutral-400">
              {title === "ui" ? "UI/UX Designer" : "Website Solution"}
            </h1>
            <p className="mt-4 font-normal text-sm lg:text-base text-gray-600 dark:text-neutral-300 max-w-2xl text-center mx-auto">
              {title === "ui"
                ? "Desain UI yang fungsional, clean, dan berorientasi pada pengalaman pengguna, dytama berfokus pada user journey menciptakan pengalaman baru dalam menggunakan aplikasi "
                : " Kami membantu Anda menciptakan website yang cepat, responsif, dan modern — dirancang untuk membangun kepercayaan dan meningkatkan performa bisnis Anda secara digital."}
            </p>
          </div>
        </div>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.map((item: any, key: number) => (
              <div
                key={key}
                className={`grid grid-rows-[auto_auto_auto_1fr] border rounded-2xl px-6 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  key === 3
                    ? "bg-gradient-to-r from-slate-950 to-indigo-900 border-slate-900"
                    : "bg-white dark:bg-slate-950 border-gray-200 dark:border-gray-800"
                }`}
              >
                {/* Row 1: Title & Price */}
                <div className="flex flex-col items-start space-y-2 mb-5">
                  <h4
                    className={`${
                      key === 3
                        ? "text-white"
                        : "text-gray-900 dark:text-neutral-300"
                    } font-semibold text-lg lg:text-xl`}
                  >
                    {item.title}
                  </h4>

                  <h3
                    className={`${
                      key === 3
                        ? "text-lime-400"
                        : "text-gray-900 dark:text-neutral-200"
                    } font-bold text-xl lg:text-3xl`}
                  >
                    {item.price}
                  </h3>

                  <p
                    className={`${
                      key === 3
                        ? "text-white"
                        : "text-gray-800 dark:text-neutral-400"
                    } font-medium text-sm lg:text-md`}
                  >
                    {item.name}
                  </p>
                </div>

                {/* Row 2: Tombol CTA */}
                <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => {
                      window.open(
                        `https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20${title}%20dengan%20paket%20${item.title}`,
                        "_blank"
                      );
                    }}
                    className={`py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg ${
                      key === 3
                        ? "bg-secondary text-black hover:bg-lime-300"
                        : "bg-primary text-white hover:bg-indigo-800"
                    } transition-colors`}
                  >
                    Hubungi Kami
                  </button>
                </div>

                {/* Row 3: Best For */}
                <div className="pt-5 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="space-y-2 pb-2">
                    <p
                      className={`${
                        key === 3
                          ? "text-secondary"
                          : "text-blue-600 dark:text-secondary"
                      } font-semibold`}
                    >
                      Best For :
                    </p>
                    <small
                      className={`text-xs ${
                        key === 3
                          ? "text-neutral-300"
                          : "text-gray-500 dark:text-neutral-400"
                      }`}
                    >
                      Pilihan terbaik untuk
                    </small>
                  </div>

                  <ul
                    className={`mt-2 space-y-2.5 text-sm ${
                      key === 3
                        ? "text-white"
                        : "text-gray-800 dark:text-neutral-400"
                    }`}
                  >
                    {item.best.map((detail: any, i: number) => (
                      <li key={i} className="flex items-center gap-x-2">
                        <FaCheckCircle
                          size={15}
                          className={`flex-shrink-0 ${key === 3 ? "text-lime-400" : "text-blue-600"}`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Row 4: Feature - Takes remaining space, content starts at same position */}
                <div className="pt-6">
                  <div className="space-y-2 pb-2">
                    <p
                      className={`${
                        key === 3
                          ? "text-lime-400"
                          : "text-blue-600 dark:text-lime-400"
                      } font-semibold`}
                    >
                      Feature :
                    </p>
                    <small
                      className={`text-xs ${
                        key === 3
                          ? "text-neutral-300"
                          : "text-gray-500 dark:text-neutral-400"
                      }`}
                    >
                      Fitur yang kamu dapat
                    </small>
                  </div>

                  <ul
                    className={`mt-2 space-y-2.5 text-sm ${
                      key === 3
                        ? "text-white"
                        : "text-gray-800 dark:text-neutral-400"
                    }`}
                  >
                    {item.get.map((detail: any, i: number) => (
                      <li key={i} className="flex items-center gap-x-2">
                        <FaCheckCircle
                          size={15}
                          className={`flex-shrink-0 ${key === 3 ? "text-lime-400" : "text-green-600"}`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PricingUiWeb;
