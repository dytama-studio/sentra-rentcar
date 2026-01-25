import { CarCardType } from "@/interface/landing";
import React from "react";
import Image from "next/image";
import { FaBriefcase, FaCar, FaUsers } from "react-icons/fa";

interface Props {
  data: CarCardType;
}

const CarCard = ({ data }: Props) => {
  return (
    <div className="w-full rounded-2xl bg-white overflow-hidden">
      <div className="relative p-3 bg-zinc-50 rounded-2xl">
        <span className="absolute top-3 left-3 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {data.category}
        </span>

        <Image
          src={data.url}
          alt={data.name}
          width={800}
          height={800}
          className="w-full h-32 sm:h-40 object-contain"
        />
      </div>

      <div className="py-4 px-1">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-900">
          {data.name}
        </h3>

        <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-2 text-[10px] sm:text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaCar /> <span>{data.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers /> <span>{data.capacity}</span> Orang
          </div>
          <div className="flex items-center gap-1">
            <FaBriefcase /> <span>{data.capacity}</span> Koper
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-500">Harga Sewa</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
            <p className="text-base sm:text-xl font-bold text-gray-900">
              {data.price}
              <span className="text-xs sm:text-sm font-normal">/Hari</span>
            </p>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-medium px-3 py-2 rounded-full transition">
              Sewa Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
