import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthDefault = ({ children }: Props) => {
  return (
    <div className="relative flex content-center h-full w-full bg-white lg:w-full lg:px-8 lg:pt-0 xl:h-[100vh] xl:px-0">
      <div className="hidden lg:w-2/5 lg:block">
        <div className="p-4 h-full">
          <div
            className="relative h-full rounded-xl overflow-hidden
      bg-[url(/assets/img/illustration/auth-background.png)]
      bg-cover bg-center bg-no-repeat"
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text content */}
            <div className="absolute bottom-0 z-10 p-8 text-white">
              <h2 className="text-5xl font-semibold leading-tight">
                Panel Manajemen Rental Mobil
              </h2>

              <p className="mt-3 text-base leading-relaxed text-white/90 max-w-xl">
                Akses sistem untuk mengelola armada, transaksi, dan laporan
                operasional secara efisien.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:pl-10 xl:max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthDefault;
