import React from "react";
import { Metadata } from "next";
// import portofolioList from "@/data/portofolio.json";
import DetailPortofolio from "./detail";
import { api } from "@/libs/trpc/server";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "localhost:3000";

  const { slug } = await params;

  const { data: getDetail }: any = await api.landing.getDetailPortofolio({
    slug: slug,
  });

  return {
    title: `${getDetail?.metaTitle} | Dytama`,
    description:
      getDetail?.metaDescription || getDetail?.overviewDescription || "",
    alternates: {
      canonical: `${baseUrl}/portofolio/${slug}`,
    },
    openGraph: {
      title: getDetail?.title,
      description: getDetail?.metaDescription,
      url: `${baseUrl}/portofolio/${slug}`,
      siteName: "Dytama",
      images: [getDetail?.cover],
      type: "website",
    },
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const { data: getDetail }: any = await api.landing.getDetailPortofolio({
    slug: slug,
  });

  return <DetailPortofolio data={getDetail} />;
};

export default Page;
