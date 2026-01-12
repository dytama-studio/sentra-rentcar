"use client";
import React, { useMemo } from "react";
import Container from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceCards = [
  {
    id: "website-design",
    title: "Website Design",
    description:
      "Dytama membangun pengalaman baru pada website yang memadukan antara estetika dan fungsi, serta memadukan dengan teknologi terbaru",
    image: "/assets/img/illustration/services-4.png",
    colSpan: "lg:col-span-2",
    bgGradient: "bg-gradient-to-tl from-indigo-500 to-indigo-800",
    textColor: "text-white",
    isLarge: true,
  },
  {
    id: "mobile-design",
    title: "Mobile Design",
    description: "Buat tampilan aplikasi mobile anda lebih user friendly",
    image: "/assets/img/illustration/services-2.png",
    colSpan: "lg:col-span-1",
    bgGradient: "bg-gradient-to-t from-indigo-200 to-white",
    textColor: "text-black",
    borderColor: "border-gray-200",
    isLarge: false,
  },
  {
    id: "seo-optimize",
    title: "SEO Optimize",
    description:
      "Membantu website Anda tampil di halaman pertama mesin pencari untuk menjangkau audiens yang tepat.",
    image: "/assets/img/illustration/services-3.png",
    colSpan: "lg:col-span-1",
    bgGradient: "bg-gradient-to-t from-indigo-200 to-white",
    textColor: "text-black",
    borderColor: "border-neutral-200",
    isLarge: false,
  },
  {
    id: "web-development",
    title: "Website Development",
    description:
      "Dengan kemajuan teknologi sekarang dytama akan membantu anda membangun website anda dengan fitur yang high end",
    image: "/assets/img/illustration/services-5.png",
    colSpan: "lg:col-span-2",
    bgGradient: "bg-gradient-to-tl from-indigo-500 to-indigo-800",
    textColor: "text-white",
    isLarge: true,
  },
];

// Memoize animation variants
const getContainerVariants: any = () => ({
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
});

const getBubbleVariants: any = () => ({
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: delay + 0.15,
      ease: "easeOut",
    },
  }),
});

const getImageVariants: any = () => ({
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: delay + 0.25,
    },
  }),
});

const ServiceCard = ({ card, delay }: any) => {
  // Memoize variants
  const containerVariants = useMemo(() => getContainerVariants(), []);
  const bubbleVariants = useMemo(() => getBubbleVariants(), []);
  const imageVariants = useMemo(() => getImageVariants(), []);

  return (
    <motion.div
      custom={delay}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`${card.colSpan} group/bento shadow-input row-span-1 flex flex-col justify-between space-y-1 lg:space-y-4 rounded-xl border ${
        card.borderColor || "border-none"
      } ${card.bgGradient} transition-shadow duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden relative will-change-transform`}
    >
      {/* Animated Background Bubbles - Optimized */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ willChange: "auto" }}
      >
        <motion.div
          custom={delay}
          variants={bubbleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-2xl"
          style={{ willChange: "transform" }}
        />
        <motion.div
          custom={delay}
          variants={bubbleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col space-y-2 h-auto lg:h-40 p-4">
        <h3 className={`text-lg lg:text-2xl font-semibold ${card.textColor}`}>
          {card.title}
        </h3>
        <p
          className={`font-normal text-xs lg:text-sm max-w-lg line-clamp-3 ${
            card.textColor === "text-white"
              ? "text-white"
              : "text-neutral-700 dark:text-neutral-700"
          }`}
        >
          {card.description}
        </p>
      </div>

      {/* Image Container */}
      <motion.div
        custom={delay}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-5"
        style={{ willChange: "opacity" }}
      >
        {card.isLarge ? (
          <div className="overflow-hidden relative w-full">
            <div className="w-full h-full pt-2 px-2 lg:pt-4 lg:px-4 pb-0 rounded-t-2xl lg:rounded-t-3xl bg-slate-700 dark:border-neutral-700 ml-6 mt-2">
              <Image
                width={800}
                height={400}
                src={card.image}
                alt={card.id}
                loading="lazy"
                className="w-full h-full lg:h-auto lg:object-cover"
                quality={75}
              />
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center pb-4">
            <Image
              width={300}
              height={250}
              src={card.image}
              alt={card.id}
              loading="lazy"
              className="w-50 lg:w-70 h-auto object-contain"
              quality={75}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const FeatureContent = () => {
  const headerVariants: any = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    []
  );

  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900 pt-5 lg:pt-10"
      id="featureDytama"
    >
      <Container className="py-10">
        <div className="relative w-full">
          {/* Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col space-y-2 text-center justify-center"
          >
            <p className="text-sm lg:text-lg font-semibold text-primary dark:text-secondary">
              Services
            </p>
            <h2 className="text-black text-2xl lg:text-4xl font-bold dark:text-white">
              Beberapa layanan{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dytama
              </span>
            </h2>
          </motion.div>

          {/* Grid Container */}
          <div className="flex w-full justify-center">
            <div className="grid w-full grid-cols-1 max-w-5xl lg:grid-cols-3 mx-auto gap-4 auto-rows-auto lg:auto-rows-[24rem] pt-5 lg:pt-10 lg:pb-5 overflow-visible">
              {serviceCards.map((card, index) => (
                <ServiceCard key={card.id} card={card} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureContent;
