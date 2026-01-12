"use client";

import React from "react";

interface Props {
  data: {
    overview_description: string;
    the_challenge: string[];
    the_solution: string[];
    features: string[];
  };
}

const PortofolioDesc = ({ data }: Props) => {
  return (
    <div className="relative w-full space-y-5">
      <div className="space-y-2">
        <h5 className="text-lg lg:text-xl font-bold text-black dark:text-white">
          Overview & Description
        </h5>
        <div
          className="prose prose-lg max-w-none text-gray-600 dark:text-neutral-200 text-xs lg:text-sm font-medium"
          dangerouslySetInnerHTML={{ __html: data.overview_description ?? "" }}
        />
        <ul className="list-disc list-inside text-gray-800 dark:text-white text-xs lg:text-sm">
          {data.the_solution.map((item, key: React.Key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg lg:text-xl font-bold text-black dark:text-white">
          The Challange
        </h5>
        <ul className="list-disc list-inside text-gray-800 dark:text-white text-xs lg:text-sm">
          {data.the_challenge.map((item, key: React.Key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h5 className="text-lg lg:text-xl font-bold text-black dark:text-white">
          The Solution
        </h5>
        <ul className="list-disc list-inside text-gray-800 dark:text-white text-xs lg:text-sm">
          {data.the_solution.map((item, key: React.Key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortofolioDesc;
