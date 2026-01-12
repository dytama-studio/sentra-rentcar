"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiGlobe, FiShare2 } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Props {
  data: { name: string; type: string; picture: string };
}

const PortofolioPict = ({ data }: Props) => {
  const [copied, setCopied] = useState(false);
  const [viewPhoto, setViewPhoto] = useState(false);
  const [photoSrc, setPhotoSrc] = useState<{ src: string }[]>([
    { src: "/assets/img/media/1.jpg" },
  ]);

  const handleOpenPhoto = async (src: any) => {
    setViewPhoto(true);
    setPhotoSrc([{ src }]);
  };

  const pathname = usePathname();

  const link = `${window.location.origin}${pathname}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.warn("Failed to copy: ", err);
    }
  };
  return (
    <div className="space-y-5">
      <Lightbox
        open={viewPhoto}
        close={() => setViewPhoto(false)}
        plugins={[Zoom]}
        slides={photoSrc}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
        }}
      />
      <div className="flex w-full ">
        <Link
          href="/portofolio"
          className="inline-flex w-full gap-2 items-center text-black dark:text-white font-semibold hover:text-primary text-xs lg:text-sm pb-5 justify-end"
        >
          <span>Kembali</span>
          <FiArrowRight />
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <h1 className="text-black dark:text-white font-bold text-2xl lg:text-4xl">
          {data.name}
        </h1>
        <div className="flex w-full justify-between items-center">
          <div className="inline-flex gap-2 items-center">
            <FiGlobe className="text-primary dark:text-secondary" />
            <p className="text-gray-600 dark:text-neutral-400 text-xs lg:text-sm">
              {data.type}
            </p>
          </div>
          <div className="flex  items-center gap-2 lg:gap-4 justify-start lg:justify-end ">
            {/* <button
              type="button"
              className="flex flex-row items-center justify-between"
            >
              <div className="flex z-10 gap-1 items-center rounded-full bg-white border border-gray-200  dark:bg-indigo-100 dark:text-black px-5 py-1.5 lg:px-6 lg:py-2 text-[10px] lg:text-xs font-bold text-black">
                Share <FiShare2 />
              </div>
            </button> */}
            <button
              type="button"
              className="flex flex-row items-center justify-between"
              onClick={copyToClipboard}
            >
              <div className="flex items-center gap-2  z-10  rounded-full bg-black dark:bg-secondary dark:text-black px-5 py-1.5 lg:px-6 lg:py-2 text-[10px] lg:text-xs font-bold text-white hover:bg-gray-400">
                {copied ? (
                  "Link Copied"
                ) : (
                  <>
                    Share
                    <FiShare2 />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleOpenPhoto(data.picture);
        }}
        className="w-full"
      >
        <figure>
          <Image
            width={1000}
            height={1040}
            src={data.picture}
            alt="adioty"
            className="w-full h-full lg:h-[600px] object-cover rounded-xl"
          />
        </figure>
      </button>
    </div>
  );
};

export default PortofolioPict;
