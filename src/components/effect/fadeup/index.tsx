"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

const EASE: any = [0.16, 1, 0.3, 1];

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 1,
  y = 32,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      className={className}
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
