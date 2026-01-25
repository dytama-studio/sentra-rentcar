import Image from "next/image";

type SocialPlatform =
  | "tiktok"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "gmail";

type SocialMediaIconProps = {
  platform: SocialPlatform;
  size?: number;
  className?: string;
};

const ICON_MAP: Record<SocialPlatform, string> = {
  tiktok: "/assets/img/icon/social-media/tiktok.svg",
  instagram: "/assets/img/icon/social-media/instagram.svg",
  gmail: "/assets/img/icon/social-media/gmail.svg",
  facebook: "/assets/img/icon/social-media/facebook.svg",
  linkedin: "/assets/img/icon/social-media/linkedin.svg",
};

export const SocialMediaIcon = ({
  platform,
  size = 16,
  className,
}: SocialMediaIconProps) => {
  return (
    <div
      className={`relative shrink-0 ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={ICON_MAP[platform]}
        alt={platform}
        fill
        className="object-contain"
      />
    </div>
  );
};
