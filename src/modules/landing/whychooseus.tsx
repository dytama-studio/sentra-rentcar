import Container from "@/components/container";
import React from "react";
import Bento1 from "./molecules/Bento1";
import Bento2 from "./molecules/Bento2";
import Bento3 from "./molecules/Bento3";
import Bento4 from "./molecules/Bento4";
import Bento5 from "./molecules/Bento5";

const WhyChooseUsSection = () => {
  return (
    <section className="mt-5 lg:mt-10 lg:px-6" id="WhyChooseUs">
      <Container className="relative py-10 lg:py-15 z-10">
        <div className="flex w-full justify-center pb-5 lg:pb-10">
          <div className="flex flex-col items-center space-y-3">
            <div>
              <span
                className="inline-flex w-fit items-center gap-2 
        bg-white text-primary text-sm font-medium 
        px-3 py-1 rounded-full"
              >
                <span className="size-1.5 rounded-full bg-indigo-500" />
                Mengapa Sentra
              </span>
            </div>

            <div className="max-w-3xl text-center">
              <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                Kenapa Banyak
                <span className="text-primary mx-2">Pelanggan </span> Memilih
                Kami
              </h3>
            </div>
            <div className="max-w-2xl text-center">
              <p className="text-black font-normal text-sm lg:text-md">
                Kami memahami bahwa kenyamanan dan kepercayaan adalah hal utama
                dalam perjalanan Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5 items-stretch">
          <div className="lg:col-span-3">
            <Bento1 />
          </div>
          <div className="lg:col-span-2">
            <Bento2 />
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 items-stretch pt-4">
          <Bento3 />
          <Bento4 />
          <Bento5 />
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
