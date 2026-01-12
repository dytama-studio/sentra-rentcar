import React from "react";
import HeroAbout from "@/modules/about/HeroAbout";
import CarrierHistory from "@/modules/about/CarrierHistory";
import TechnologyMe from "@/modules/about/TechnologyMe";
import AboutContent from "@/modules/about/about";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/about/aditya-septama`;

  return {
    title: "Aditya Septama – Web Developer & UI/UX Designer | Dytama",
    description:
      "Aditya Septama adalah Web Developer & UI/UX Designer berpengalaman yang menyediakan jasa pembuatan website Next.js, desain UI/UX profesional, dan konsultasi IT melalui Dytama.",
    alternates: {
      canonical: url,
    },
    keywords: [
      "Frontend Engineer Indonesia",
      "Aditya Septama",
      "Aditya Septama Portofolio",
      "Tentang Aditya Septama",
      "Aditya Septama UI/UX",
      "Aditya Septama nextjs developer",
      "Dytama web development",
      "Jasa Website Aditya Septama",
    ],
    openGraph: {
      title:
        "Tentang Aditya Septama – Web Developer & UI/UX Designer Profesional",
      description:
        "Pelajari lebih lanjut tentang Aditya Septama, Web Developer & UI/UX Designer yang ahli di bidang Next.js, desain antarmuka, dan pengembangan website profesional melalui Dytama.",
      url: "https://dytama.com/about/aditya-septama",
      siteName: "Dytama",
      type: "profile",
      images: [
        {
          url: "https://dytama.com/assets/photo/aditya-septama-clean.png",
          width: 1200,
          height: 630,
          alt: "Aditya Septama – Web Developer & UI/UX Designer",
        },
      ],
    },
  };
}

const Page = () => {
  return (
    <>
      <HeroAbout />
      <AboutContent />
      <TechnologyMe />
      <CarrierHistory />
    </>
  );
};

export default Page;
