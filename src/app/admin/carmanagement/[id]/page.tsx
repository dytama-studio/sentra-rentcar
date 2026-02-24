import { api } from "@/libs/trpc/server";
import ModuleEditCar from "@/modules/admin/carmanagement/edit/module";
import { notFound } from "next/navigation";
import React from "react";

const Page = async ({ params }: any) => {
  const { id } = await params;

  const getDetail: any = await api.car.getDetailCar({
    id: id,
  });

  if (!id) {
    return notFound();
  }

  if (!getDetail) {
    return notFound();
  }

  return <ModuleEditCar id={id} defaultValues={getDetail} />;
};

export default Page;
