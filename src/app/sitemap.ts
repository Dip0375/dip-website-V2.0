import type { MetadataRoute } from "next";

const BASE = "https://www.dipnarayan.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/quote`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
