import Image from "next/image";
import { FiStar } from "react-icons/fi";
// import { SocialMediaIcon } from "./SocialMediaIcon";

type CardProps = {
  image: string;
  name: string;
  handle: string;
  date: string;
  platform: "tiktok" | "instagram" | "facebook" | "gmail";
  message: string;
  rate: number;
};

export const SocialMediaCard = ({
  image,
  name,
  handle,
  date,
  platform,
  message,
  rate,
}: CardProps) => {
  return (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-100 shrink-0 bg-gray-50">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`text-sm ${
              index < rate ? "text-orange-400" : "text-gray-300"
            }`}
            fill={index < rate ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-sm py-4 text-gray-800">{message}</p>
      <div className="flex gap-3 items-center">
        <div className="relative size-11 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>

        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col">
            <p className="font-medium text-sm">{name}</p>
            <span className="text-xs text-slate-500">{handle}</span>
          </div>
          {/* <SocialMediaIcon platform={platform} size={14} /> */}
        </div>
      </div>
    </div>
  );
};
