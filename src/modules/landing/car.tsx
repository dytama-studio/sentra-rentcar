import Container from "@/components/container";
import React from "react";

const CarSection = () => {
  const tabs = [
    { id: "all", name: "All" },
    { id: "city car", name: "City Car" },
    { id: "sedan", name: "Sedan" },
    { id: "mpv", name: "MPV" },
    { id: "van", name: "Van" },
  ];

  return (
    <section className="relative justify-center mt-5 lg:mt-10" id="car">
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
            <div className="flex w-full justify-end">
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
                        type="button"
                        className="bg-none text-gray-700 hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400 dark:hs-tab-active:bg-gray-800 py-2.5 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm  hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white active"
                        id="segment-item-1"
                        aria-selected="true"
                        data-hs-tab="#segment-1"
                        aria-controls="segment-1"
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
      </Container>
    </section>
  );
};

export default CarSection;
