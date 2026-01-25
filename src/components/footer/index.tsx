/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
// import { siteConfig } from "@/config/site";
// import Link from "next/link";

const FooterLanding = () => {
  return (
    <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-gray-50 bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href=""
            className="relative  z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
          >
            <Image
              src={"/assets/img/brand/sentra-color.svg"}
              width={300}
              height={300}
              alt="dytama-icon"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
            <span className=" text-sm lg:text-lg text-white font-semibold dark:text-white">
              Sentra Rent Car
            </span>
          </a>
          <p className="text-sm/7 mt-6">
            Nikmati perjalanan tanpa ribet dengan layanan rental mobil yang
            fleksibel, armada terawat, dan harga transparan. Cocok untuk
            kebutuhan harian, perjalanan bisnis, hingga liburan keluarga.
          </p>
        </div>
        <div className="flex w-full lg:justify-center">
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold mb-2 text-white">Company</h2>
            {siteConfig.navItems.map((item, key) => (
              <a
                key={key}
                className="hover:text-white transition"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:items-start lg:justify-center gap-5">
            <div className="inline-flex items-start gap-4">
              <FiMapPin className="text-white text-xl mt-1" />
              <div className="flex flex-col space-y-1">
                <p className="text-md font-semibold text-white">
                  Sentra Car Garage
                </p>
                <p className="text-sm font-normal text-gray-100">
                  MT Haryono St No.Kav. 8 Lantai 9, Cawang, Jatinegara, East
                  Jakarta City, Jakarta 13340
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <FiMail className="text-white text-sm mt-1" />
              <p className="text-md font-semibold text-white">
                example.email@agrinas.co.id
              </p>
            </div>
            <div className="inline-flex items-center gap-2">
              <FiPhone className="text-white text-sm mt-1" />
              <p className="text-md font-semibold text-white">
                +62 869948457879
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200">
        <p className="text-center">
          Copyright 2026 © <a href="https://prebuiltui.com">Dytama Studio</a>{" "}
          All Right Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>
      </div>
      <svg
        className="hidden md:block absolute -bottom-30 -left-80 opacity-30 w-full h-full pointer-events-none z-1"
        width="68"
        height="26"
        viewBox="0 0 68 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8678_1074)">
          <path
            d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z"
            fill="#0F172A"
          />
          <path
            d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z"
            fill="#0F172A"
          />
        </g>
        <defs>
          <clipPath id="clip0_8678_1074">
            <rect width="68" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </footer>
    // <footer className="bg-white lg:grid lg:grid-cols-5">
    //   <div className="relative bg-[url(/assets/img/illustration/card-footer-2.svg)] bg-no-repeat bg-center bg-cover block h-auto lg:col-span-2 lg:h-full">
    //     <div className="flex flex-col  space-y-5 py-5 px-15 lg:mt-10">
    //       <Image
    //         src={"/assets/img/brand/dytama-icon.svg"}
    //         width={300}
    //         height={300}
    //         alt="dytama-icon"
    //         className="h-8 w-8 lg:h-15 lg:w-15"
    //       />
    //       <h1 className="text-3xl lg:text-5xl font-bold text-white">
    //         Creative
    //       </h1>
    //       <h1 className="text-3xl lg:text-5xl font-bold text-white">
    //         Realiable
    //       </h1>
    //       <h1 className="text-3xl lg:text-5xl font-bold text-white">
    //         Inovative
    //       </h1>
    //     </div>
    //     <div className="lg:bottom-1 flex flex-col space-y-4 px-15 pb-5 lg:pb-0">
    //       <p className="text-white text-sm font-normal">Catch me</p>
    //       <div className="inline-flex items-center gap-4">
    //         <Image
    //           src={"/assets/img/photo/aditya-septama-clean.png"}
    //           width={300}
    //           height={300}
    //           alt="dytama-icon"
    //           className="h-10 w-10"
    //         />
    //         <h6 className="text-white text-lg font-semibold">Aditya Septama</h6>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 bg-gray-100">
    //     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
    //       <div>
    //         <Image
    //           src={"/assets/img/brand/dytama-black.svg"}
    //           width={300}
    //           height={300}
    //           alt="dytama-icon"
    //           className="h-auto w-25 lg:h-auto lg:w-50"
    //         />
    //         <p className="text-xs lg:text-sm font-gray-500 font-normal text-start pt-5 dark:text-gray-600 ">
    //           Dytama adalah studio kreatif yang berfokus pada pengembangan
    //           solusi digital mulai dari desain UI/UX, pengembangan website
    //           modern, hingga pembuatan produk digital siap pakai. Kami
    //           menggabungkan kreativitas dan teknologi untuk membantu brand
    //           tumbuh di era digital.
    //         </p>
    //         {/* <p>
    //           <span className="text-xs tracking-wide text-gray-500 uppercase">
    //             {" "}
    //             Hubungi saya{" "}
    //           </span>

    //           <a
    //             href="#"
    //             className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
    //           >
    //             +62 8788 8362 186
    //           </a>
    //         </p> */}

    //         <ul className="mt-8 space-y-1 text-sm text-gray-700">
    //           <li>Monday to Friday: 8pm - 12pm</li>
    //           <li>Weekend: 09am - 10pm</li>
    //         </ul>

    //         <ul className="mt-8 flex gap-6">
    //           <li>
    //             <a
    //               href={siteConfig.links.facebook}
    //               rel="noreferrer"
    //               target="_blank"
    //               className="text-gray-700 transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Facebook</span>

    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href={siteConfig.links.instagram}
    //               rel="noreferrer"
    //               target="_blank"
    //               className="text-gray-700 transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Instagram</span>

    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href={siteConfig.links.twitter}
    //               rel="noreferrer"
    //               target="_blank"
    //               className="text-gray-700 transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Twitter</span>

    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //               </svg>
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href={siteConfig.links.github}
    //               rel="noreferrer"
    //               target="_blank"
    //               className="text-gray-700 transition hover:opacity-75"
    //             >
    //               <span className="sr-only">GitHub</span>

    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href={siteConfig.links.dribbble}
    //               rel="noreferrer"
    //               target="_blank"
    //               className="text-gray-700 transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Dribbble</span>

    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    //         <div>
    //           <p className="font-medium text-gray-900">Services</p>

    //           <ul className="mt-6 space-y-4 text-sm flex flex-col">
    //             {siteConfig.navItems.map((item, key: React.Key) => {
    //               return (
    //                 <Link
    //                   href={siteConfig.navItems[0].href}
    //                   className="text-gray-700 transition hover:opacity-75"
    //                   key={key}
    //                 >
    //                   {item.label}
    //                 </Link>
    //               );
    //             })}
    //           </ul>
    //         </div>

    //         <div>
    //           <p className="font-medium text-gray-900">About Dytama</p>

    //           <ul className="mt-6 space-y-4 text-sm">
    //             <li>
    //               <Link
    //                 href={"/about"}
    //                 className="text-gray-700 transition hover:opacity-75"
    //               >
    //                 About
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href={"/about"}
    //                 className="text-gray-700 transition hover:opacity-75"
    //               >
    //                 Meet the creator
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-12 border-t border-gray-100 pt-12">
    //       <div className="sm:flex sm:items-center sm:justify-between">
    //         <ul className="flex flex-wrap gap-4 text-xs">
    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-500 transition hover:opacity-75"
    //             >
    //               {" "}
    //               Terms & Conditions{" "}
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-500 transition hover:opacity-75"
    //             >
    //               {" "}
    //               Privacy Policy{" "}
    //             </a>
    //           </li>

    //           <li>
    //             <a
    //               href="#"
    //               className="text-gray-500 transition hover:opacity-75"
    //             >
    //               {" "}
    //               Cookies{" "}
    //             </a>
    //           </li>
    //         </ul>

    //         <p className="mt-8 text-xs text-gray-500 sm:mt-0">
    //           &copy; 2025. Dytama. All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default FooterLanding;
