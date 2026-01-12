"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlurInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function BlurInView({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  once = false,
}: BlurInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      }}
      viewport={{ once, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
