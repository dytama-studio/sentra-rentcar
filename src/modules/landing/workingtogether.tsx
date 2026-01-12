import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import { RiBankLine } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const WorkingTogetherContent = () => {
  return (
    <section
      id="WorkingTogether"
      className="relative w-full  bg-white dark:bg-slate-900"
    >
      <Container className="py-10 lg:py-15">
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative w-full order-last lg:order-first">
              <div className="flex flex-col space-y-2">
                <h3
                  className="text-2xl lg:text-5xl font-bold text-black tracking-wide 
             line-clamp-2 leading-snug lg:leading-tight dark:text-white"
                >
                  Bangun kerjasama bersama{" "}
                  <span className="text-primary">Dytama</span>
                </h3>
                <p className="text-gray-600 w-[90%] dark:text-white">
                  Bangun aplikasi mobile ataupun website yang indah dan modern
                  dengan komponen yang fleksibel. Dirancang untuk berkinerja
                  cepat di semua perangkat seluler terbaru. Bangun aplikasi
                  dengan ukuran kecil dan praktik terbaik bawaan seperti
                  transisi yang dipercepat perangkat keras, gestur yang
                  dioptimalkan untuk sentuhan, pra-render, dan banyak lagi,
                  beberapa alasan membangun bersama dytama
                </p>
              </div>
              <div className="grid grid-rows-1 gap-5 pt-10">
                <div className="flex w-full items-start ">
                  <div className="p-2 h-12 w-12 flex  bg-gray-100 rounded-lg justify-center items-center text-xl text-black me-4">
                    <RiBankLine />
                  </div>
                  <div className="flex flex-col space-y-2 w-[80%]">
                    <h4 className="text-black font-semibold text-lg lg:text-2xl dark:text-primary">
                      Solusi Digital yang Tepat untuk Bisnis Anda
                    </h4>
                    <p className="text-gray-600 font-normal text-xs lg:text-sm dark:text-white">
                      Kami membantu merancang dan mengimplementasikan aplikasi,
                      sistem backend, dan integrasi teknologi agar bisnis Anda
                      lebih efisien dan modern.
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start ">
                  <div className="p-2 h-12 w-12 flex  bg-gray-100 rounded-lg justify-center items-center text-xl text-black me-4">
                    <FiCodesandbox />
                  </div>
                  <div className="flex flex-col space-y-2 w-[80%]">
                    <h4 className="text-black font-semibold text-lg lg:text-2xl dark:text-primary">
                      Teknologi Cepat & Siap Berkembang
                    </h4>
                    <p className="text-gray-600 font-normal text-xs lg:text-sm dark:text-white">
                      Setiap solusi kami ringan, cepat, dan mudah diskalakan,
                      memastikan bisnis Anda siap menghadapi pertumbuhan tanpa
                      hambatan.
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-start ">
                  <div className="p-2 h-12 w-12 flex  bg-gray-100 rounded-lg justify-center items-center text-xl text-black me-4">
                    <BiSupport />
                  </div>
                  <div className="flex flex-col space-y-2 w-[80%]">
                    <h4 className="text-black font-semibold text-lg lg:text-2xl dark:text-primary">
                      Konsultasi & Dukungan Penuh
                    </h4>
                    <p className="text-gray-600 font-normal text-xs lg:text-sm dark:text-white">
                      Tim kami siap mendampingi dari perencanaan hingga
                      pemeliharaan, memastikan teknologi Anda selalu optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <Image
                width={500}
                height={500}
                src={"/assets/img/illustration/kerjasama-1.png"}
                alt="feature-dytama"
                className="w-[200px] h-auto lg:w-[450px] lg:h-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5 lg:pt-25 lg:items-center">
            <div className="flex w-full justify-center lg:justify-start">
              <Image
                width={500}
                height={500}
                src={"/assets/img/illustration/kerjasama-2.png"}
                alt="kerjasama-dytama"
                className="w-full h-auto lg:w-[450px] lg:h-auto"
              />
            </div>

            <div className="relative w-full">
              <div className="flex flex-col space-y-2">
                <h3
                  className="text-2xl lg:text-5xl font-bold text-black tracking-wide 
             line-clamp-2 leading-snug lg:leading-tight dark:text-white"
                >
                  Website Profesional untuk
                  <span className="text-primary mx-2">Bisnis</span> Anda
                </h3>
                <p className="text-gray-600 w-[90%] dark:text-white">
                  Di era digital, website bukan sekadar profil
                  perusahaan—website adalah wajah utama bisnis Anda. Dytama
                  membantu Anda memiliki website yang modern, cepat, dan
                  responsif, dirancang khusus untuk meningkatkan kepercayaan,
                  menarik lebih banyak pengunjung, dan mengubah mereka menjadi
                  pelanggan. Dengan desain yang user-friendly, optimasi
                  performa, dan dukungan penuh dari tim ahli, website Anda akan
                  siap membantu bisnis bertumbuh dan bersaing di pasar online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkingTogetherContent;
