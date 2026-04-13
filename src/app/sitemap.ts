import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/community`, lastModified: new Date() },
    { url: `${base}/merch`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/business`, lastModified: new Date() },
    { url: `${base}/download`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/minors`, lastModified: new Date() },
  ];
}
