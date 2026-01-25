/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { handleToContact } from "@/helpers/globalHelper";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/container";

const CTASection = () => {
  return (
    <section className="py-10 lg:py-20" id="cta">
      <Container>
        <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-2xl overflow-hidden px-5 py-10 lg:p-12 text-white">
          {/* CONTENT */}
          <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white to-gray-100 text-transparent bg-clip-text">
              Mulai Perjalanan Nyamanmu Hari Ini
            </h3>

            <p className="text-sm md:text-base text-white/90 mt-4 max-w-xl">
              Nikmati perjalanan tanpa khawatir. Pilihan mobil lengkap, harga
              jelas, dan layanan ramah.
            </p>

            <button
              onClick={handleToContact}
              className="mt-6 inline-flex items-center gap-3 bg-white text-black hover:bg-blue-100 transition-all rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Hubungi Kami
              <span className="rounded-full bg-primary text-white h-8 w-8 flex items-center justify-center">
                <FiArrowRight />
              </span>
            </button>
          </div>

          {/* OVERLAY (mobile readability) */}
          <div className="absolute inset-0 bg-indigo-900/20 lg:hidden z-10" />

          {/* ILLUSTRATION (visible on mobile & desktop) */}
          <div
            className="
              absolute
              right-1/2 translate-x-1/2 bottom-[-40px]
              w-full h-full
              opacity-40
              lg:opacity-100
              lg:right-0 lg:translate-x-0 lg:bottom-0
              lg:w-[520px] lg:h-[620px]
              pointer-events-none
              z-0
            "
          >
            <Image
              src="/assets/img/illustration/cta.png"
              alt="CTA Illustration"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* DECORATION */}
          <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/10 blur-3xl" />
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
