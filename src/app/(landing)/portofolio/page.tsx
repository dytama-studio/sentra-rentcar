import React from "react";
import HeroPortofolio from "@/modules/portofolio/HeroPortofolio";
import PortofolioList from "@/modules/portofolio/PortofolioList";
import { Metadata, NextPage } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/portofolio`;

  return {
    title: "Portofolio Aditya Septama| Dytama",
    description:
      "Lihat portofolio Dytama yang berisi hasil karya website, desain UI/UX, dan produk digital untuk berbagai bisnis.",
    alternates: {
      canonical: url,
    },
    keywords: [
      "portofolio jasa website",
      "portofolio desain UI/UX",
      "Dytama",
      "pembuatan website profesional",
      "jasa web Depok",
      "jasa web jakarta",
      "desain aplikasi",
      "aditya septama portofolio",
    ],
    openGraph: {
      title: "Dytama Portofolio – Jasa Website & Desain UI/UX",
      description:
        "Lihat hasil karya Dytama untuk website dan desain profesional.",
      url: url,
      images: [
        {
          url: "/assest/img/brand/dytama-logo.png",
          width: 1200,
          height: 630,
          alt: "Dytama Portofolio",
        },
      ],
      type: "website",
    },
  };
}

const PortofolioPage: NextPage = () => {
  return (
    <>
      <HeroPortofolio />
      <PortofolioList />
    </>
  );
};

export default PortofolioPage;
