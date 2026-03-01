"use client";
import Container from "@/components/container";
import React from "react";
import { useLanding } from "./action/uselanding.action";
import CarCard from "./molecules/CarCard";
import ModalRentCar from "./modal/ModalRentCar";
import { FiArrowUpRight } from "react-icons/fi";
import Spinner1 from "@/components/spinners";
import { CarItemValue } from "@/interface/landing";

const CarSection = () => {
  const {
    handleChangeTab,
    tabs,
    tabActive,
    openModalBook,
    handleOpenModalBook,
    handleCloseModalBook,
    loadingCar,
    visibleCars,
    shouldShowToggle,
    showAll,
    handleToggleShow,
    detailData,
    onSubmitRent,
  } = useLanding();

  return (
    <section className="relative justify-center mt-5 lg:mt-10" id="CarList">
      {detailData && (
        <ModalRentCar
          isOpen={openModalBook}
          handleClose={handleCloseModalBook}
          onSubmit={onSubmitRent}
          detailData={detailData}
        />
      )}
      <Container>
        <div className="flex flex-col lg:flex-row w-full justify-start lg:justify-between">
          <div className="flex flex-col">
            <div className="space-y-5">
              <div className="flex">
                <div className="flex items-center gap-2 border border-indigp-200 rounded-full px-3 py-1 text-sm text-primary bg-indigo-50">
                  <div className="size-1.5 rounded-full bg-indigo-500"></div>
                  <span>Unit Terbaik Kami</span>
                </div>
              </div>

              <div className="flex gap-2 max-w-xl">
                <h3 className="text-black font-semibold text-2xl lg:text-4xl leading-tight md:leading-snug lg:leading-normal">
                  Temukan dan{" "}
                  <span className="text-primary">Tentukan Mobil</span> Terbaik
                  Kami
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <p className="text-xs lg:text-sm text-start lg:text-end font-normal text-gray-500 mt-2 max-w-lg">
              Nikmati perjalanan tanpa ribet dengan layanan rental mobil yang
              fleksibel, armada terawat, dan harga transparan. Cocok untuk
              kebutuhan harian, perjalanan bisnis, hingga liburan keluarga.
            </p>
            <div className="flex w-full justify-start lg:justify-end">
              <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                <nav
                  className="flex gap-x-1"
                  aria-label="Tabs"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  {tabs.map((item, key) => {
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          handleChangeTab(item.id);
                        }}
                        type="button"
                        className={`relative py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out ${
                          tabActive === item.id
                            ? "bg-white text-primary shadow-sm"
                            : "bg-transparent text-gray-600 hover:text-primary"
                        }`}
                        role="tab"
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
        {loadingCar ? (
          <div className="relative w-full">
            <div className="flex w-full justify-center p-5">
              <Spinner1 />
            </div>
          </div>
        ) : visibleCars && visibleCars?.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-5 lg:mt-10">
            {visibleCars.map((item: CarItemValue, key: React.Key) => {
              return (
                <CarCard
                  key={key}
                  data={item}
                  handleOpenModal={handleOpenModalBook}
                />
              );
            })}
          </div>
        ) : (
          <div className="relative w-full justify-center items-center h-40"></div>
        )}

        <div className="pt-5 flex w-full justify-center">
          {shouldShowToggle && (
            <button
              onClick={handleToggleShow}
              className="flex items-center gap-2 text-primary hover:text-indigo-800 text-md font-semibold"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
              <span className="bg-indigo-100 text-primary text-sm font-medium px-2 py-2 rounded-full">
                <FiArrowUpRight />
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CarSection;
