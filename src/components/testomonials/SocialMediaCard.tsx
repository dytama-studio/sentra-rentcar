import Image from "next/image";
import { SocialMediaIcon } from "./SocialMediaIcon";

type CardProps = {
  image: string;
  name: string;
  handle: string;
  date: string;
  platform: "tiktok" | "instagram" | "facebook" | "gmail";
};

export const SocialMediaCard = ({
  image,
  name,
  handle,
  date,
  platform,
}: CardProps) => {
  return (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
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
          <SocialMediaIcon platform={platform} size={14} />
        </div>
      </div>

      <p className="text-sm py-4 text-gray-800">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
    </div>
  );
};
