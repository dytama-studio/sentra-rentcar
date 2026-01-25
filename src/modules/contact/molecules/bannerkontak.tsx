import React from "react";
import Image from "next/image";

const BannerKontak = () => {
  return (
    <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden">
      <Image
        src="/assets/img/illustration/kontak-banner.png"
        alt="Sentra Rent Car Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-10 pb-5 ">
        <div className="max-w-2xl text-white">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            Solusi Rental Mobil Profesional untuk Kebutuhan Bisnis & Operasional
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerKontak;
