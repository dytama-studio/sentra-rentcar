import React from "react";
import Image from "next/image";

const Bento1 = () => {
  return (
    <div
      className=" relative h-full overflow-hidden rounded-2xl
        bg-gray-50 border border-gray-200
        transform-gpu will-change-transform
        transition-shadow duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="grid grid-cols-1  gap-8 px-3 py-4 lg:px-5 lg:py-4">
        <div className="z-10 lg:max-w-md">
          <h2 className="text-xl lg:text-2xl font-semibold text-slate-800">
            Armada Terawat & Siap Digunakan
          </h2>

          <p className="mt-4 text-gray-500 text-sm">
            Setiap mobil dalam armada kami dirawat secara berkala dan melalui
            pengecekan rutin sebelum digunakan. Kebersihan, kenyamanan, dan
            performa kendaraan selalu menjadi prioritas.
          </p>
        </div>
      </div>

      <div
        className="
      relative lg:absolute
      lg:right-[-20px] lg:top-1/2 lg:-translate-y-1/2
      w-full lg:w-[420px]
      px-6 lg:px-0
    "
      >
        <Image
          src="/assets/img/illustration/services-1.png"
          alt="Hero Person"
          width={220}
          height={520}
          className="w-full select-none"
        />
      </div>
    </div>
  );
};

export default Bento1;
