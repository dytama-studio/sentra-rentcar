/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useId } from "react";
import Container from "@/components/container";
import whychooseusdata from "@/data/whychooseusdata.json";
import * as FiIcons from "react-icons/fi";
import BlurInView from "@/components/blurinview/BlurInView";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white dark:bg-slate-900">
      <Container>
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-md lg:text-lg font-semibold text-primary dark:text-secondary">
              Benefits
            </p>
            <h3 className="text-3xl lg:text-4xl text-black dark:text-white font-bold">
              Kenapa memilih Dytama ?
            </h3>
          </div>
        </div>
        <BlurInView>
          <div className="py-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-10 md:gap-6 max-w-7xl mx-auto">
              {whychooseusdata.map((feature) => {
                const Icon = FiIcons[feature.icon as keyof typeof FiIcons];
                return (
                  <div
                    key={feature.title}
                    className="relative bg-gradient-to-b dark:from-slate-900 from-neutral-100 dark:to-slate-950 to-white px-6 py-8 border border-gray-200 dark:border-slate-600 rounded-3xl overflow-hidden"
                  >
                    <Grid size={20} />
                    {Icon && (
                      <div className="mb-4 relative z-20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <p className="text-sm lg:text-base font-bold text-neutral-800 dark:text-white relative z-20">
                      {feature.title}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-xs lg:text-sm font-normal relative z-20">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </BlurInView>
      </Container>
    </section>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, i: number) => (
            <rect
              key={`${patternId}-${x}-${y}-${i}`}
              strokeWidth="0"
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default WhyChooseUs;
