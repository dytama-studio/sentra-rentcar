/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "@/components/container";
import { Marquee } from "@/components/marquee";
import technologyList from "@/data/tecnology.json";
import BlurInView from "@/components/blurinview/BlurInView";

const TechnologyMe = () => {
  return (
    <section className="pt-14 lg:pt-28 relative w-full bg-white dark:bg-slate-900">
      <BlurInView once={true}>
        <Container>
          <div className="flex w-full justify-center">
            <div className="flex flex-col space-y-4 text-center">
              <p className="text-primary text-xs lg:text-sm font-medium">
                Technology
              </p>
              <h4 className="text-black text-xl lg:text-4xl font-bold dark:text-white ">
                Teknologi yang dikembangkan
              </h4>
            </div>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Marquee className="max-w-full [--duration:60s]">
              {technologyList.map((item, key: React.Key) => {
                return (
                  <div
                    key={key}
                    className="flex w-30 lg:w-50 h-12 lg:h-18 items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm"
                  >
                    <img
                      src={item.url}
                      alt="Figma"
                      className="h-5 w-5 lg:h-10 lg:w-10 me-2"
                    />
                    <span className="text-xs lg:text-medium text-black font-medium">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </Container>
      </BlurInView>
    </section>
  );
};

export default TechnologyMe;
