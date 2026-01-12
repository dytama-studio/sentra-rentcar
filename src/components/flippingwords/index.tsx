"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  words: string[];
  color?: string;
};

const FlippingWords = ({ words, color }: Props) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Durasi sama dengan animasi (4 detik)
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="relative flex w-full h-[3rem] lg:h-[2rem]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[currentWordIndex]}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute text-4xl lg:text-6xl font-semibold tracking-tight 
                     lg:leading-[1.2] text-center ${color !== "" ? color : "bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent"}`}
        >
          {words[currentWordIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default FlippingWords;
