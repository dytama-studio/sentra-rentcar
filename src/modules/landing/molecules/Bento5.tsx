import React from "react";
import Image from "next/image";

const Bento5 = () => {
  return (
    <div className="relative h-full rounded-2xl bg-gradient-to-t from-indigo-800 to-indigo-600 flex flex-col overflow-hidden border border-gray-200 hover:-translate-y-1.5 transition duration-300 hover:shadow-lg">
      <div className="px-4 py-5 lg:px-6 lg:py-3">
        <h3 className="text-xl lg:text-2xl font-semibold text-white">
          Aman & Terpercaya
        </h3>

        <p className="mt-2 text-neutral-100 text-sm">
          Digunakan untuk kebutuhan pribadi, bisnis, hingga liburan keluarga
          dengan rasa aman dan nyaman.
        </p>
      </div>

      <div className="relative w-full min-h-[200px] lg:flex-1">
        <div className="absolute inset-x-0 bottom-[-40px] h-full px-4">
          <div className="relative flex justify-center w-full h-full overflow-hidden rounded-t-2xl">
            <Image
              src="/assets/img/illustration/services-5.png"
              alt="Scopus Preview"
              width={500}
              height={300}
              className="w-65 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento5;
