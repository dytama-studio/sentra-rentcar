"use client";

import Container from "@/components/container";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import faqData from "@/data/fqa.json";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-gray-50" id="faq">
      <Container className="py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="max-w-xl">
            <span className="px-4 py-2.5 bg-white border rounded-full text-primary text-sm">
              FAQ’S
            </span>

            <h2 className="mt-4 text-2xl lg:text-4xl font-semibold">
              Pertanyaan dan
              <span className="text-primary mx-1">Jawaban</span>
              yang sering ditanyakan
            </h2>

            <div className="mt-10 space-y-2">
              <p className="text-sm text-gray-500">Ada pertanyaan lain </p>
              <p className="text-xl font-semibold text-primary">
                hello.cs@sentra.com
              </p>
            </div>
          </div>

          <div className="">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-lg text-left font-semibold"
                  >
                    {item.question}
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 text-gray-600"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
