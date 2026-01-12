"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/container";
import Image from "next/image";
import { LuShieldCheck } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { handleToContact } from "@/helpers/globalHelper";
import Link from "next/link";

const words = [
  "Bangun kreatifitasmu",
  "Website Profesional",
  "Kembangkan Sistem Bisnis",
  "Desain UI/UX",
  "Produk Digital Inovatif",
  "Solusi Teknologi Modern",
];

const FlippingWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Durasi sama dengan animasi (4 detik)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full justify-center items-center h-[3rem] lg:h-[2rem]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute text-3xl lg:text-6xl font-semibold tracking-tight 
                     lg:leading-[1.2] text-center bg-gradient-to-b 
                     from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground 
                     bg-clip-text text-transparent z-5"
        >
          {words[currentWordIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default function Hero() {
  const lightGradient = useMemo(
    () => ({
      background:
        "radial-gradient(125% 125% at 50% 1%, #fff 40%, #6366f1 100%)",
    }),
    []
  );

  const darkGradient = useMemo(
    () => ({
      backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), #0f172a)`,
    }),
    []
  );

  return (
    <section className="-mt-25 lg:-mt-16  relative w-full" id="hero">
      <div className="absolute inset-0 z-0 dark:hidden" style={lightGradient} />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={darkGradient}
      />
      <div className="lg:min-h-screen">
        <Container className="relative z-10 px-4 py-36 gap-12 md:px-8 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.6, type: "spring", bounce: 0 }}
            className="h-full flex flex-col justify-center items-center max-w-6xl mx-auto text-center space-y-2"
          >
            <div className="pt-10">
              <div className="flex flex-row items-center px-5 py-1.5 bg-indigo-100 dark:bg-slate-700 rounded-full mb-0 lg:mb-4">
                <span className="bg-white dark:bg-lime-50 rounded-full items-center justify-center p-1 me-2">
                  <LuShieldCheck className="text-lime-500 text-xs" />
                </span>
                <p className="text-primary dark:text-secondary text-xs font-semibold">
                  IT Solution dan Digital Product
                </p>
              </div>
            </div>

            <FlippingWords />

            <h1 className="text-3xl lg:text-6xl font-semibold tracking-tight lg:leading-[1.2] text-center bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
              Bersama{" "}
              <span className="bg-gradient-to-r from-indigo-500 dark:from-indigo-400 to-indigo-800 dark:to-indigo-600 bg-clip-text text-transparent">
                Dytama
              </span>
            </h1>
            <p className="max-w-4xl text-xs lg:text-sm mx-auto text-muted-foreground text-balance dark:text-white py-2">
              Selamat datang di Dytama – tempat di mana ide kreatif, desain
              digital, dan portofolio profesional bersatu. Temukan siapa saya,
              karya yang saya banggakan, dan berbagai produk digital yang siap
              menunjang produktivitas dan kreativitasmu.
            </p>

            <div className="mt-2 flex space-x-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  className="relative items-center text-xs lg:text-sm bg-secondary hover:bg-lime-200 inline-flex h-10 gap-2 overflow-hidden rounded-full px-5 dark:text-black font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  onClick={handleToContact}
                >
                  Lets,s Work Together <FiArrowRight />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  className="relative items-center text-xs lg:text-sm bg-indigo-700 hover:bg-indigo-400 inline-flex h-10 gap-2 overflow-hidden rounded-full px-5 text-white font-normal focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href={"/portofolio"}
                >
                  Portofolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </Container>
        <div className="hidden lg:block absolute top-60 start-20 z-10">
          <Image
            width={300}
            height={300}
            src="/assets/img/illustration/side-left.svg"
            alt="side-left-dytama"
            loading="lazy"
          />
        </div>
        <div className="hidden lg:block absolute top-60 end-20 z-10">
          <Image
            width={300}
            height={300}
            src="/assets/img/illustration/side-right.svg"
            alt="side-right-dytama"
            loading="lazy"
          />
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="bottom-0 w-full z-10 relative"
        >
          <Image
            src="/assets/img/illustration/hero-illustration.webp"
            alt="Ilustrasi Dashboard"
            width={1000}
            height={500}
            className="mx-auto h-auto w-full max-w-[1000px] z-10"
            priority
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
