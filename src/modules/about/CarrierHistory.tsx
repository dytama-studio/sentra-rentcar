import React from "react";
import Container from "@/components/container";
import carrierHistory from "@/data/carrier.json";
import BlurInView from "@/components/blurinview/BlurInView";

const CarrierHistory = () => {
  return (
    <section className="pt-14  lg:pt-28 relative w-full  bg-white dark:bg-slate-900">
      <Container>
        <BlurInView once={true}>
          <div className="relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="flex flex-col space-y-4 lg:col-span-2">
                <p className="text-primary text-xs lg:text-sm font-medium">
                  Experience
                </p>
                <h4 className="text-black text-xl lg:text-4xl font-bold dark:text-white ">
                  Tentang Karier saya
                </h4>
                <p className="text-gray-500 dark:text-white text-sm font-normal">
                  ini adalah beberapa pengalaman saya selama berkarir dibidang
                  IT
                </p>
              </div>
              <div className="lg:col-span-3">
                <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
                  {carrierHistory.map((item, key: React.Key) => {
                    return (
                      <li
                        className="relative -ms-1.5 flex items-start gap-4"
                        key={key}
                      >
                        <span className="size-3 shrink-0 rounded-full bg-primary"></span>
                        <div className="-mt-2 space-y-5">
                          <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
                            <div className="flex flex-col space-y-2">
                              <h3 className="text-xl font-bold text-black dark:text-secondary">
                                {item.job_position}
                              </h3>
                              <h6 className="text-sm font-semibold text-black dark:text-white">
                                {item.company}
                              </h6>
                            </div>

                            <div>
                              <time className="text-xs font-medium px-4 py-1.5  lg:px-5 lg:py-2 bg-primary mt-4 mb-4 rounded-full text-white">
                                {item.start_date} - {item.end_date}
                              </time>
                            </div>
                          </div>

                          <p className="mt-2.5 text-xs lg:text-sm text-gray-500 dark:text-white">
                            {item.job_desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </BlurInView>
      </Container>
    </section>
  );
};

export default CarrierHistory;
