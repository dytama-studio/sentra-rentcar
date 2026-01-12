"use client";
import React from "react";
import pricingData from "@/data/pricingbundle.json";
import Container from "@/components/container";

const PricingBundle = () => {
  return (
    <section id="PricingBundle" className="relative w-full overflow-hidden">
      {/* === Background Grid Pattern === */}

      {/* === Main Section === */}
      <div className="relative w-full min-h-screen bg-white dark:bg-slate-950 z-10">
        <div
          className="dark:hidden absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
          }}
        />

        <div
          className="hidden dark:block absolute inset-0 z-0"
          style={{
            backgroundColor: "#0a0a0a",
            backgroundImage: ` radial-gradient(circle
    at 25% 25%, #222222 0.5px, transparent 1px), radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px) `,
            backgroundSize: "10px 10px",
            imageRendering: "pixelated",
          }}
        />

        {/* Your Content/Components */}
        <Container className="relative z-10 pt-10 lg:pt-24">
          <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* === Heading === */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Compare Bundle Packages
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg">
                  UI/UX Design × Web Development — Save more with bundles!
                </p>
              </div>

              {/* === Table === */}
              <div className="overflow-x-auto rounded-2xl shadow-lg ring-1 ring-gray-200 dark:ring-neutral-800 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/40">
                <table className="min-w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100/80 dark:bg-slate-900/60 text-gray-900 dark:text-gray-100 uppercase text-sm tracking-wider">
                      <th className="px-4 py-3 text-left font-semibold">
                        Tier
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        UI/UX Design
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Web Development
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Bundle
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Hemat
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {pricingData.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-t border-gray-200 dark:border-neutral-800 hover:bg-gray-50/70 dark:hover:bg-neutral-800/60 transition-colors"
                      >
                        <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">
                          <div>{item.tier}</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.description}
                          </p>
                        </td>

                        <td className="px-4 py-4 text-gray-800 dark:text-gray-300">
                          {item.uiux_design}
                        </td>

                        <td className="px-4 py-4 text-gray-800 dark:text-gray-300">
                          {item.web_development}
                        </td>

                        <td className="px-4 py-4 text-primary font-semibold dark:text-secondary">
                          {item.bundle}
                        </td>

                        <td className="px-4 py-4 text-gray-800 dark:text-gray-300">
                          <span className="font-medium">
                            {item.hemat.value}
                          </span>{" "}
                          <span className="text-gray-500 dark:text-gray-400">
                            ({item.hemat.percent})
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* === Footer note === */}
              <p className="mt-5 text-center text-sm text-gray-500 dark:text-gray-500">
                *All bundle packages include optimized design and code
                integration.
              </p>
            </div>
          </section>
        </Container>
      </div>
    </section>
  );
};

export default PricingBundle;
