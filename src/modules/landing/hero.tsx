"use client";
import Container from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";
// import { handleToContact } from "@/helpers/globalHelper";
import { FiArrowRight } from "react-icons/fi";

const fadeUp: any = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0.01,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariant: any = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0.01,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25,
    },
  },
};

const HeroSection = () => {
  return (
    <section id="hero" className="lg:mt-1 lg:px-6">
      <div className="bg-gradient-to-br from-white via-indigo-50 to-indigo-300 rounded-none lg:rounded-2xl">
        <Container className="relative py-10 lg:py-15 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-20 lg:mt-15">
            <motion.div
              className="flex flex-col gap-2"
              variants={fadeUp}
              style={{
                transform: "translateZ(0)",
              }}
            >
              <div className="flex w-full justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-sm text-gray-700 w-fit">
                  <Image
                    src="/assets/img/icon/trustedbadge.svg"
                    alt="Trusted badge"
                    width={20}
                    height={20}
                    priority
                    className="w-5"
                  />
                  Solusi Rental Mobil Terpercaya
                </div>
              </div>

              <div className="flex flex-col space-y-0 text-3xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-start leading-tight md:leading-snug lg:leading-tight text-black">
                <h2 className="">Cara Praktis</h2>
                <h2 className="">
                  <span data-no-animate className="me-2 text-primary">
                    Sewa Mobil
                  </span>
                  Untuk Kebutuhan Harian
                </h2>
              </div>

              <motion.p
                variants={fadeUp}
                className="text-gray-700 max-w-2xl leading-relaxed text-center lg:text-start"
              >
                Cara mudah dan praktis untuk temukan mobil impain mu untuk
                menujang kegiatan harian, tinggal cari, temukan yang sesui,
                booking
              </motion.p>

              <div className="mt-8 flex w-full justify-center lg:justify-start gap-4">
                <button className="px-6 py-3 inline-flex items-center gap-2 rounded-lg text-sm bg-indigo-600 text-white">
                  Mulai Cari Mobil <FiArrowRight />
                </button>
                <button className="px-6 py-3 rounded-lg text-sm bg-white">
                  Cara Sewa Mobil
                </button>
              </div>

              <motion.div
                variants={fadeUp}
                className="flex w-full justify-center lg:justify-start items-center gap-3 lg:mt-10 mt-5"
              >
                <div className="flex -space-x-2">
                  {[
                    "1568602471122-7832951cc4c5",
                    "1531927557220-a9e23c1e4794",
                    "1541101767792-f9b2b1c4f127",
                  ].map((id, i) => (
                    <Image
                      key={i}
                      className="size-11 rounded-full ring-2 ring-white"
                      src={`https://images.unsplash.com/photo-${id}?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80`}
                      alt="Avatar"
                      width={44}
                      height={44}
                    />
                  ))}
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="inline-flex items-center gap-1 pt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        src="/assets/img/icon/starticon.svg"
                        alt="star"
                        width={16}
                        height={16}
                        className="w-4"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">4.8</span> •
                    120K Ratings | Google Reviews
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={imageVariant}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <div className="pt-5 lg:pt-0 w-[380px] h-auto lg:w-[600px] lg:h-auto">
                <Image
                  src="/assets/img/illustration/hero.png"
                  alt="Hero illustration"
                  width={500}
                  height={600}
                  priority
                  fetchPriority="high"
                  loading="eager"
                  className="block w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
