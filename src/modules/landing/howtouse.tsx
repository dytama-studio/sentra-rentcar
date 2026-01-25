import Container from "@/components/container";
import React from "react";
import { howToUseData } from "./mockdata";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const HowToUseSection = () => {
  return (
    <section className="mt-5 lg:mt-10 lg:px-6" id="HowToUse">
      <div className="bg-indigo-50 rounded-none lg:rounded-2xl">
        <Container className="relative py-10 lg:py-15 z-10">
          <div className="flex w-full justify-center">
            <div className="flex flex-col items-center space-y-3">
              <div>
                <span
                  className="inline-flex w-fit items-center gap-2 
        bg-white text-primary text-sm font-medium 
        px-3 py-1 rounded-full"
                >
                  <span className="size-1.5 rounded-full bg-indigo-500" />
                  Cara Pesan
                </span>
              </div>

              <div className="max-w-2xl text-center">
                <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                  Cara
                  <span className="text-primary mx-2">Sewa Mobil</span> di
                  Tempat Kami Kami
                </h3>
              </div>
              <div className="max-w-2xl text-center">
                <p className="text-black font-normal text-sm lg:text-md">
                  Dengan sistem pemesanan yang terstruktur dan respons cepat
                  dari tim kami, proses sewa mobil menjadi lebih efisien, aman,
                  dan dapat diandalkan untuk kebutuhan pribadi maupun bisnis.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:pt-20 relative w-full">
            <ol className="relative grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-8">
              {howToUseData.map((item, key) => {
                return (
                  <li key={key} className="relative mb-8 sm:mb-0">
                    <div className="relative flex items-center">
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>

                      <span className="hidden sm:block absolute left-12 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-indigo-300" />
                    </div>

                    <div className="mt-4 sm:pe-8">
                      <h3 className="text-lg font-semibold text-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body">{item.subtitle}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="pt-5 lg:pt-10 flex w-full justify-center">
              <Link
                href={"/"}
                className="flex items-center gap-2 text-primary hover:text-indigo-800 text-md font-semibold"
              >
                Lihat Syarat dan Ketentuan
                <span className="bg-indigo-100 text-primary text-sm font-medium px-2 py-2 rounded-full">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HowToUseSection;
