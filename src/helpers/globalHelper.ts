import { TMetaItem, TMetaResponse } from "@/entities/meta";
import crypto from "crypto";

export const handleToContact = () => {
  window.open(
    "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda",
    "_blank"
  );
};

export const formatCurrency = (value: number | unknown): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));

export const metaResponsePrefix = <T>({
  data,
  meta,
}: {
  data: T;
  meta: TMetaItem;
}): TMetaResponse<T> => {
  return {
    data,
    meta,
  };
};

export function calculateTotalPages(
  totalItems: number,
  itemsPerPage: number
): number {
  return Math.ceil(totalItems / itemsPerPage);
}

export function getSupabasePath(url: string, bucket: string): string {
  return url.replace(
    new RegExp(`^https?://[^/]+/storage/v1/object/public/${bucket}/`),
    ""
  );
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function deslugify(slug: string) {
  return slug
    .split("-") // pisah dengan dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // kapital
    .join(" "); // gabung spasi
}

export function capitalizeEachWord(text: string): string {
  if (!text) return "";
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 32, "sha256")
    .toString("hex");

  return `${hash}:${salt}`;
}
