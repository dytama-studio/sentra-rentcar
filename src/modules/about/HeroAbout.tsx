"use client";
import React from "react";
import Container from "@/components/container";
import { motion } from "framer-motion";
import FlippingWords from "@/components/flippingwords";
import Image from "next/image";
import BlurInView from "@/components/blurinview/BlurInView";

const words = [
  "Aditya Septama",
  "Web Developers",
  "UI/UX Designer",
  "Product Designer",
  "System Analyst",
];

const HeroAbout = () => {
  return (
    <section className='"mt-14  lg:-mt-16 relative w-full  bg-gradient-to-t from-white  to-gray-50 dark:from-slate-900 dark:to-slate-950'>
      <div
        className="hidden dark:block absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #0f172a",
        }}
      />
      <div
        className="absolute dark:hidden inset-0 z-0"
        style={{
          backgroundImage: ` linear-gradient(to right, #e7e5e4 1px, transparent
    1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px) `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: ` repeating-linear-gradient( to right, black 0px, black 3px, transparent
    3px, transparent 8px ), repeating-linear-gradient( to bottom, black 0px, black 3px, transparent 3px, transparent 8px
    ), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%) `,
          WebkitMaskImage: `
    repeating-linear-gradient( to right, black 0px, black 3px, transparent 3px, transparent 8px ),
    repeating-linear-gradient( to bottom, black 0px, black 3px, transparent 3px, transparent 8px ),
    radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%) `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="">
        <Container className="py-36">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:items-center">
              <div className="order-2 lg:order-1 relative items-start space-y-2 ">
                <p className="text-primary dark:text-secondary text-xs lg:text-sm font-medium">
                  Profile Saya
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight lg:leading-[1.2] text-black dark:text-white">
                  Hello folks, I&apos;m
                </h1>
                <FlippingWords
                  words={words}
                  color={
                    "bg-gradient-to-b from-indigo-300 dark:from-lime-100 to-indigo-800 dark:to-lime-500 bg-clip-text text-transparent"
                  }
                />
                <div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-50 pt-5 lg:pt-10">
                    Membangun aplikasi yang sukses adalah sebuah tantangan. Saya
                    sangat energik dalam pengalaman pengguna, antarmuka
                    pengguna, dan pengembangan web.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex w-full justify-center lg:justify-end z-10">
                <Image
                  width={340}
                  height={340}
                  src={"/assets/img/photo/aditya-septama.png"}
                  alt="aditya-septama"
                />
              </div>
            </div>
          </motion.div>
          <BlurInView once={true}>
            <div className="py-15 relative">
              <div className="flex w-full p-5 lg:px-16 lg:py-10 bg-gray-100 rounded-xl shadow-sm border-border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-center">
                  <div>
                    <Image
                      width={400}
                      height={440}
                      src={"/assets/img/photo/momoji.png"}
                      alt="aditya-septama-picture"
                    />
                  </div>
                  <div className="flex w-full justify-end">
                    <div className="flex flex-col space-y-4">
                      <p className="text-primary text-xs lg:text-sm font-medium">
                        About Me
                      </p>
                      <h4 className="text-black text-xl lg:text-4xl font-bold ">
                        Bangun Kreativitas dan Digitalisasi ke lingkungan kerja
                        anda
                      </h4>
                      <p className="text-sm text-gray-500  font-normal">
                        Saya adalah seorang Frontend Developer dan UI/UX
                        Designer yang berfokus pada pembuatan antarmuka web yang
                        modern, responsif, dan mudah digunakan. Berpengalaman
                        menggunakan Next.js, React, TypeScript, Laravel, PHP
                        serta integrasi dengan teknologi backend seperti Lumen
                        ,tRPC, Prisma, dan NextAuth. Kombinasi antara kemampuan
                        teknis dan estetika desain membantu saya menciptakan
                        produk digital yang tidak hanya berfungsi baik, tetapi
                        juga memiliki pengalaman pengguna yang menarik dan
                        profesional. Saya senang bekerja dalam lingkungan yang
                        kolaboratif, berpikir kritis terhadap solusi yang
                        efisien, serta terus belajar teknologi baru untuk
                        meningkatkan kualitas hasil kerja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurInView>
        </Container>
      </div>
    </section>
  );
};

export default HeroAbout;
