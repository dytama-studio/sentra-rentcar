"use client";
import React from "react";
import Container from "@/components/container";
import BannerKontak from "./molecules/bannerkontak";
import { FiArrowRight } from "react-icons/fi";
import { handleToContact } from "@/helpers/globalHelper";
import { useSiteConfig } from "@/libs/site/site-config.provider";

export default function ContactModule() {
  const config = useSiteConfig();
  console.log(config);

  const handleClick = () => {
    handleToContact({
      phone: config.phone,
      message:
        config.whatsappTemplate ??
        `Halo saya tertarik dengan layanan ${config.name}`,
    });
  };

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
                  onClick={handleClick}
                  className="mt-6 inline-flex items-center gap-3 bg-gradient-to-t from-gray-900 to bg-gray-800 text-white hover:from-indigo-500 hover:to-indigo-700 transition-all rounded-full px-5 py-2.5 text-sm font-medium"
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
                  {config.email || ""}
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 font-normal text-xs">Phone</p>
                <h3 className="text-black font-semibold text-sm lg:text-3xl">
                  {config.phone || ""}
                </h3>
                <p className="text-gray-500 font-normal text-xs lg:text-sm">
                  Available Monday to Friday, 9 AM - 6 PM GMT
                </p>
              </div>
              <div className="col-span-2">
                <GoogleMapEmbed values={config.googleMapUrl || ""} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const GoogleMapEmbed = ({ values }: { values: string }) => {
  if (!values) return null;

  return (
    <div
      className="w-full h-[300px] rounded-xl overflow-hidden border [&>iframe]:w-full [&>iframe]:h-full"
      dangerouslySetInnerHTML={{ __html: values }}
    />
  );
};
