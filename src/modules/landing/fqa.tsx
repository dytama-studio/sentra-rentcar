"use client";
import Container from "@/components/container";
import React, { useState } from "react";
import faqData from "@/data/faq.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const FqaContent = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <section
      className="relative w-full bg-white dark:bg-slate-900"
      id="faqContent"
    >
      <Container className="relative bg-gray-50 dark:bg-slate-950 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 z-0 dark:hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />
        <div className="relative z-10 grid md:grid-cols-5 gap-10 py-10 px-10 lg:py-14 lg:px-10 mx-auto">
          <div className="md:col-span-2">
            <div className="max-w-sm space-y-1">
              <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
                FAQ
              </p>
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Punya Pertanyaan?
                <br />
                Berikut jawabannya
              </h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                Berikut beberapa pertanyaan yang sering ditanyakan pelanggan,
                beserta jawabannya untuk membantu Anda lebih memahami layanan.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              {faqData.map((item, key: React.Key) => {
                const isOpen = openQuestion === item.question;
                return (
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id={item.question}
                    key={key}
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      onClick={() => {
                        handleToggle(item.question);
                      }}
                    >
                      {item.question}
                      {isOpen ? (
                        <FiChevronUp className="size-5 shrink-0 text-gray-600 dark:text-neutral-400" />
                      ) : (
                        <FiChevronDown className="size-5 shrink-0 text-gray-600 dark:text-neutral-400" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-2 text-gray-600 dark:text-neutral-400">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FqaContent;
