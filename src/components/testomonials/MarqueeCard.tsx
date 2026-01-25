/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { SocialMediaCard } from "./SocialMediaCard";

type MarqueeCardsProps = {
  data: any[];
  reverse?: boolean;
  speed?: number; // px per second
};

export const MarqueeCards = ({
  data,
  reverse = false,
  speed = 40,
}: MarqueeCardsProps) => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const contentWidth = useRef(0);

  useEffect(() => {
    if (!trackRef.current) return;

    contentWidth.current = trackRef.current.scrollWidth / 2;

    x.set(reverse ? -contentWidth.current : 0);
  }, [data, reverse]);

  useAnimationFrame((_, delta) => {
    const move = (speed * delta) / 1000;

    const currentX = x.get();

    if (!reverse) {
      x.set(currentX - move);

      if (currentX <= -contentWidth.current) {
        x.set(0);
      }
    } else {
      x.set(currentX + move);

      if (currentX >= 0) {
        x.set(-contentWidth.current);
      }
    }
  });

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <motion.div
        ref={trackRef}
        className="flex w-max py-10"
        style={{ x, touchAction: "pan-x" }}
        drag="x"
        dragElastic={0.06}
        dragMomentum={false}
      >
        {[...data, ...data].map((card, i) => (
          <SocialMediaCard key={i} {...card} />
        ))}
      </motion.div>

      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};
