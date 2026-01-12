import { Metadata } from "next";
import React from "react";
import pricingUi from "@/data/pricingui.json";
import pricingWeb from "@/data/pricingweb.json";
import { PricingDataValues } from "@/interface/pricing";
import PricingModule from "@/modules/pricing/PricingModule";
import { capitalizeEachWord } from "@/helpers/globalHelper";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;

  const capitalSlug = capitalizeEachWord(slug);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/pricing/${slug}`;

  return {
    title: `Dytama - ${capitalSlug} Pricing`,
    description: `Pricing untuk ${capitalSlug} berasama dytama`,
    alternates: {
      canonical: url,
    },
    keywords: [
      "jasa web Depok",
      "jasa web jakarta",
      "Harga buat website",
      "Bikin Website ",
      "Harga Buat UI",
      "Jasa UI",
    ],
    openGraph: {
      title: `Dytama - ${capitalSlug} Pricing`,
      description: `Pricing untuk ${capitalSlug} berasama dytama`,
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

export default async function Page({ params }: any) {
  const { slug } = await params;
  let price: PricingDataValues[] = [];

  if (slug === "ui") {
    price = pricingUi;
  } else if (slug === "webdevelopment") {
    price = pricingWeb;
  }

  return <PricingModule title={slug} data={price} />;
}
