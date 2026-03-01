import { api } from "@/libs/trpc/server";
import ModuleProfile from "@/modules/admin/profile/module";
import { notFound } from "next/navigation";
import React from "react";

const page = async () => {
  const getProfile: any = await api.profile.getProfile();

  if (!getProfile) {
    return notFound();
  }

  const profile = getProfile.data;

  const defaultValues = {
    id: profile?.id ?? "",
    name: profile?.name ?? "",
    slug: profile?.slug ?? "rental-mobil",
    logoUrl: profile?.logoUrl ?? "",
    description: profile?.description ?? "",
    googleMapUrl: profile?.googleMapUrl ?? "",
    whatsappTemplate: profile?.whatsappTemplate ?? "",
    phone: profile?.phone ?? "",
    email: profile?.email ?? "",
    address: profile?.address ?? "",
  };

  return <ModuleProfile defaultValues={defaultValues} />;
};

export default page;
