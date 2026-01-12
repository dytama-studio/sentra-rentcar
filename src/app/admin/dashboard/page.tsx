import NavigatePost from "@/modules/admin/dashboard/NavigatePost";
import React from "react";
import { getServerSession } from "@/server/auth";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/singin", RedirectType.push);
  }

  return (
    <div className="relative w-full space-y-4">
      <h2 className="text-xl lg:text-2xl font-semibold text-black dark:text-white ">
        Welcome Back, {session.user.name}
      </h2>
      <NavigatePost />
      <div className="flex w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center bg-secondary p-4 lg:py-4 lg:px-5 rounded-md w-full">
          <div className="flex flex-col space-y-2">
            <h2 className="text-black text-2xl font-semibold">
              Selalu update setiap karya kreatif mu
            </h2>
            <p className="text-gray-700 text-sm font-base">
              Konten portoliomu akan selalu update-date apabila menggunakan
              feature ini, selalu abadikan dan ceritakan setiap karya barumu
            </p>
            <div className="pt-4">
              <Link
                href={"/admin/portofolio"}
                className="py-3 px-4 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-black text-white hover:bg-lime-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Buat Portofolio
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-start lg:justify-end">
            <Image
              width={500}
              height={500}
              src={"/assets/img/illustration/creative-portofolio.png"}
              alt="feature-dytama"
              className="w-[100px] h-auto lg:w-[220px] lg:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
