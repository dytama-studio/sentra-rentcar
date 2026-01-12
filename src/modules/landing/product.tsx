"use client";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import digitalProductData from "@/data/digitalproduct.json";
// import { CardBody, CardContainer, CardItem } from "@/components/3dcard";
import Link from "next/link";
import BlurInView from "@/components/blurinview/BlurInView";
// import { Card, Image, Button } from "@heroui/react";

const ProductList = () => {
  return (
    <section
      className="relative py-2 lg:py-4 bg-white dark:bg-slate-900"
      id="ProductList"
    >
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
              Our Product
            </p>
            <h3 className="text-3xl lg:text-4xl text-slate-700 dark:text-white font-bold">
              Digital Product
            </h3>
            <p className="text-sm font-normal text-gray-500 dark:text-neutral-400">
              Dytama memiliki salah satu product digital yang siap pakai, untuk
              informasi selengkapnya silahkan lihat card dibawah ini
            </p>
          </div>
        </div>
        <BlurInView once={true}>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-16 gap-5">
              {digitalProductData.map((item: any, key: React.Key) => {
                return (
                  <Link
                    key={key}
                    href={item.link}
                    className="group block rounded-xl overflow-hidden focus:outline-hidden"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                      <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                          className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                          src={item.img}
                          alt={`product-${item.title}`}
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="grow">
                        <h3 className="text-base lg:text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs lg:text-sm text-gray-600 dark:text-neutral-400 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="mt-4 inline-flex items-center gap-x-1 text-xs lg:text-sm text-primary decoration-2 group-hover:underline group-focus:underline font-medium dark:text-secondary">
                          Lihat Selengkapnya
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </BlurInView>
        {/* <div className="flex w-full justify-center py-2 lg:py-5">
          <Link href="https://lynk.id/adityamo/9465pnqpgx2e">
            <CardContainer
              className="max-w-3xl"
              containerClassName="py-2 lg:py-5"
            >
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                <CardItem translateZ="50" className="">
                  <h4 className="text-xl font-bold pb-2 text-black dark:text-white">
                    💍 Planus – Digital Wedding Planner
                  </h4>
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    width={500}
                    height={500}
                    src={"/assets/img/product/planus.png"}
                    alt="wedding-planner-template"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-gray-200"
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
                >
                  Buat persiapan pernikahanmu jadi lebih rapi dan mudah,Cocok
                  buat kamu yang sedang mempersiapkan pernikahan, tapi bingung
                  mulai dari mana. Dengan template ini, kamu bisa merencanakan
                  semua keperluan pernikahan dari A–Z dengan mudah dan praktis.
                </CardItem>
                <div className="flex justify-between">
                  <CardItem
                    translateZ={20}
                    translateX={-0}
                    as="button"
                    className="pt-5 rounded-xl text-xs font-normal text-primary dark:text-white"
                  >
                    Lihat selengkapnya →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Link>
        </div> */}
      </Container>
    </section>
  );
};

export default ProductList;
