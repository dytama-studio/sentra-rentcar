import type { MetadataRoute } from "next";
import { api } from "@/libs/trpc/server";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000";

  // Halaman statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about/aditya-septama`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/portofolio`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Halaman dinamis dari DB
  const portofolioData = await api.landing.getAllSlugs();
  const dynamicRoutes: MetadataRoute.Sitemap = portofolioData.map((item) => ({
    url: `${SITE_URL}/portofolio/${item.slug.join("/")}`,
    lastModified: item.updatedAt
      ? new Date(item.updatedAt).toISOString()
      : new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
