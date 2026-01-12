"use client";

import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import workProcess from "@/data/howwork.json";
import { motion } from "framer-motion";

const HowWeWorkContent = () => {
  return (
    <section className="bg-indigo-100 relative">
      <div className="bg-[url('/assets/img/background/background-pattern-1.svg')] bg-no-repeat bg-center bg-cover">
        <Container>
          <div className="relative w-full py-10">
            <div className="relative w-full space-y-2 text-center justify-center pb-5">
              <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
                How we work
              </p>
              <h4 className="text-black text-2xl lg:text-4xl font-bold dark:text-black">
                Proses Kerja <span className="text-primary">Dytama</span>
              </h4>
              <p className="text-sm font-normal text-gray-700 dark:text-black">
                Ciptakan langkah kreatif dan keunggulan melalui setiap langkah
              </p>
            </div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 py-14 gap-5 overflow-hidden">
                {workProcess.map((item: any, key: number) => {
                  return (
                    <div
                      className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                      key={key}
                    >
                      {/* background */}
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background:
                            "radial-gradient(ellipse at bottom right, rgba(99,102,241,0.35) 11%, rgba(255,255,255,1) 38%)",
                        }}
                      />

                      {/* content */}
                      <div className="relative z-10 flex flex-col space-y-1 p-4 flex-grow">
                        <h5 className="font-semibold text-md lg:text-lg text-black">
                          {item.title}
                        </h5>
                        <p className="text-gray-700 font-normal text-[11px] lg:text-xs pb-5 lg:pb-20">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-end w-full px-3 pb-5 relative z-10 mt-auto">
                        <span className="w-5 h-5 lg:w-10 lg:h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {key + 1}
                        </span>
                        <Image
                          width={350}
                          height={200}
                          src={item.imgUrl}
                          alt="feature-dytama"
                          className="w-28 h-auto lg:w-35 lg:h-auto"
                          priority
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HowWeWorkContent;
