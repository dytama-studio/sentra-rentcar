"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white
      "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex gap-2">
        <span className="size-3 animate-ping rounded-full bg-primary"></span>
        <span className="size-3 animate-ping rounded-full bg-primary [animation-delay:0.2s]"></span>
        <span className="size-3 animate-ping rounded-full bg-primary [animation-delay:0.4s]"></span>
      </div>
    </motion.div>
  );
}
