import React from "react";
import Image from "next/image";

const Bento4 = () => {
  return (
    <div className="relative h-full rounded-2xl bg-gray-50 flex flex-col overflow-hidden border border-gray-200 hover:-translate-y-1.5 transition duration-300 hover:shadow-lg">
      <div className="px-4 py-5 lg:px-6 lg:py-3">
        <h3 className="text-xl lg:text-2xl font-semibold text-slate-800">
          Proses Mudah & Respons Cepat
        </h3>

        <p className="mt-2 text-gray-500 text-sm">
          Proses pemesanan dibuat sederhana dengan respons cepat dari tim kami,
          sehingga Anda tidak perlu menunggu lama atau menghadapi prosedur yang
          berbelit.
        </p>
      </div>

      <div className="relative w-full min-h-[200px] lg:flex-1">
        <div className="absolute inset-x-0 bottom-[-20px] h-full px-4">
          <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
            <Image
              src="/assets/img/illustration/services-4.png"
              alt="proses-mudah-untuk-sewa"
              fill
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento4;
