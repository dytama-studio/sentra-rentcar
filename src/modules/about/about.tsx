"use client";
import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import BlurInView from "@/components/blurinview/BlurInView";

const AboutContent = () => {
  return (
    <section
      className="relative w-full  bg-white dark:bg-slate-900"
      id="AboutDytama"
    >
      <Container>
        <BlurInView once={true}>
          <div className="relative w-full">
            <div className="relative w-full space-y-2 text-center justify-center pb-10">
              <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
                Apa itu <span className="text-primary">Dytama</span>
              </h4>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-50">
                Semua tentang dytama akan dijelaskan disini
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-primary bg-gradient-to-tl from-indigo-500 to-indigo-800 rounded-xl">
                <div className="p-5 flex w-full justify-between">
                  <h4 className="text-white text-lg lg:text-2xl font-semibold text-start">
                    Menyatukan design, teknologi dan solusi digital
                  </h4>
                </div>
                <div className="bottom-0 left-0 w-full flex justify-center">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <Image
                      width={400}
                      height={400}
                      src={"/assets/img/photo/lentera.png"}
                      alt="feature-dytama"
                      className="w-[200px] h-auto lg:w-[350px] lg:h-auto"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 bg-gradient-to-t from-indigo-100 to-white rounded-xl shadow-sm">
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="flex flex-row left-0 justify-end">
                    <Image
                      width={400}
                      height={400}
                      src={"/assets/img/photo/website-dytama.svg"}
                      alt="feature-dytama"
                      className="w-[300px] h-auto lg:w-[350px] lg:h-auto left-0"
                    />
                  </div>
                </motion.div>

                <div className="flex flex-col space-y-1 p-4 lg:mt-10">
                  <h4 className="text-xl lg:text-2xl font-semibold text-black">
                    Our Laboratorium
                  </h4>
                  <p className="text-gray-600 text-sm font-normal">
                    Dytama adalah laboratorium kecil saya untuk membangun
                    hal-hal digital Berdiri sebagai gabungan antara frontend
                    engineering dan desain digital kreatif
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm bg-gradient-to-t from-indigo-100 to-white">
                  <Image
                    width={100}
                    height={100}
                    src={"/assets/img/photo/tools-develope.svg"}
                    alt="dytama-step"
                    className="w-auto h-auto lg:w-full lg:auto pt-5"
                  />

                  <div className="flex flex-col space-y-1 px-4 py-0">
                    <h4 className="text-xl lg:text-xl font-semibold text-black">
                      Product Design
                    </h4>
                    <p className="text-gray-600 text-xs font-normal">
                      Mulai kolaborasi dan buat product digitalmu
                    </p>
                    <div className="flex flex-row gap-2 pt-2">
                      <Chip
                        variant="bordered"
                        className="bg-white text-black border border-gray-200 rounded-md text-xs font-bold"
                      >
                        Website
                      </Chip>
                      <Chip
                        variant="bordered"
                        className="bg-white text-black border border-gray-200 rounded-md text-xs font-bold"
                      >
                        UI
                      </Chip>
                      <Chip
                        variant="bordered"
                        className="bg-white text-black border border-gray-200 rounded-md text-xs font-bold"
                      >
                        UX
                      </Chip>
                      <Chip
                        variant="bordered"
                        className="bg-white text-black border border-gray-200 rounded-md text-xs font-bold"
                      >
                        Digital Product
                      </Chip>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary border border-gray-200 rounded-xl">
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
                        <h4 className="text-black text-lg lg:text-xl font-bold w-60">
                          Kenal Lebih Dekat dengan
                          <span className="text-primary ms-2 me-2">Dytama</span>
                        </h4>
                        <Link
                          href="/about/aditya-septama"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-900 focus:outline-hidden focus:bg-indigo-900 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Hubungi <FiArrowUpRight className="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 end-0 pointer-events-none">
                    <Image
                      width={400}
                      height={400}
                      src={"/assets/img/photo/globe.svg"}
                      alt="dytama-step"
                      className="w-[100px] h-auto lg:w-[250px] lg:h-auto pt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurInView>
      </Container>
    </section>
  );
};

export default AboutContent;
