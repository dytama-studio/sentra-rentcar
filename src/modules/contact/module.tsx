"use client";
import React from "react";
import Container from "@/components/container";
import BannerKontak from "./molecules/bannerkontak";
import { FiArrowRight } from "react-icons/fi";
import { handleToContact } from "@/helpers/globalHelper";

export default function ContactModule() {
  return (
    <section className="mt-18 lg:mt-25">
      <Container>
        <BannerKontak />
        <div className="flex flex-col space-y-10 lg:flex-row w-full py-5 lg:py-12 lg:gap-22">
          <div className="lg:w-2/5">
            <div className="relative max-w-xl lg:max-w-xl">
              <h2 className="text-black text-2xl lg:text-5xl font-semibold ">
                Butuh Informasi
                <span className="mx-2 text-primary">Lebih Lanjut ?</span>
              </h2>
              <p className="text-gray-500 font-normal text-md pt-10">
                Perjalanan jauh jadi lebih tenang dengan mobil bersih, nyaman,
                dan siap jalan, lengkap dengan layanan ramah dan fleksibel
                sesuai kebutuhan Anda.
              </p>
              <div className="pt-10 lg:pt-18">
                <button
                  onClick={handleToContact}
                  className="mt-6 inline-flex items-center gap-3 bg-gradient-to-t from-gray-900 to bg-gray-800 text-white hover:bg-blue-100 transition-all rounded-full px-5 py-2.5 text-sm font-medium"
                >
                  Hubungi Kami
                  <span className="rounded-full bg-primary text-white h-8 w-8 flex items-center justify-center">
                    <FiArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <p className="text-gray-500 font-normal text-xs">Email</p>
                <h3 className="text-black font-semibold  text-sm lg:text-3xl">
                  Hello@sentra.co.id
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 font-normal text-xs">Phone</p>
                <h3 className="text-black font-semibold text-sm lg:text-3xl">
                  +61 783 678 37
                </h3>
                <p className="text-gray-500 font-normal text-xs lg:text-sm">
                  Available Monday to Friday, 9 AM - 6 PM GMT
                </p>
              </div>
              <div className="col-span-2">
                <GoogleMapEmbed />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666666666667!2d106.827153!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f1c2a3b8df%3A0x6a6f3d4b5c2e7a6!2sMonas!5e0!3m2!1sen!2sid!4v1710000000000"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        allowFullScreen
      />
    </div>
  );
};
