"use client";

import { motion } from "framer-motion";
import React from "react";

type LoaderVariant = "dots" | "wave" | "bolt" | "glitch" | "text";

interface LoaderProps {
  variant?: LoaderVariant;
  text?: string;
}

export const Loader = ({
  variant = "dots",
  text = "Loading...",
}: LoaderProps) => {
  switch (variant) {
    case "dots":
      return (
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="h-4 w-4 rounded-full border border-indigo-300 bg-gradient-to-b from-indigo-400 to-indigo-300"
            />
          ))}
        </div>
      );

    case "wave":
      return (
        <div className="flex items-center">
          {[0, 0.4, 0.8].map((delay, i) => (
            <motion.div
              key={i}
              initial={{ x: 0 }}
              animate={{ x: [0, 20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                delay,
                ease: "easeInOut",
              }}
              className={`h-4 w-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500 -translate-x-${i * 2}`}
            />
          ))}
        </div>
      );

    case "bolt":
      return (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-20 w-20 stroke-neutral-500 dark:stroke-neutral-100"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            initial={{ pathLength: 0, fill: "var(--color-neutral-50)" }}
            animate={{ pathLength: 1, fill: "var(--color-yellow-300)" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
          />
        </motion.svg>
      );

    case "glitch":
      return (
        <div className="relative font-bold text-black dark:text-white">
          <motion.span
            animate={{ skewX: [0, -40, 0], scaleX: [1, 2, 1] }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 1,
              ease: "linear",
            }}
            className="relative z-20 inline-block"
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-[#00e571]/50 blur-[0.5px] dark:text-[#00e571]"
            animate={{
              x: [-2, 4, -3, 1.5, -2],
              y: [-2, 4, -3, 1.5, -2],
              opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          >
            {text}
          </motion.span>
        </div>
      );

    case "text":
      return (
        <div className="font-sans font-bold">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "mirror",
                delay: i * 0.05,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      );
  }
};
