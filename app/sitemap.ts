import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || "https://www.helfer-group.com";
  const pages = ["", "/about", "/products", "/services", "/infrastructure", "/testimonials", "/contact", "/helfer-enterprise", "/marjan-traders"];
  return [
    ...pages.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }))
  ];
}
