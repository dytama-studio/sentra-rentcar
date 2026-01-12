import { api } from "@/libs/trpc/server";
import { notFound } from "next/navigation";
import React from "react";
import UpdatePortofolio from "./update";

const page = async ({ params }: any) => {
  const { id } = await params;

  const getDetail: any = await api.portofolios.getDetail({
    id: id,
  });

  if (!id) {
    return notFound();
  }

  if (!getDetail) {
    return notFound();
  }
  return <UpdatePortofolio id={id} detail={getDetail} />;
};

export default page;
