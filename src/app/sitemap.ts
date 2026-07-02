import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";

const baseUrl = "https://www.theflipzone.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/locations",
    "/plainfield",
    "/bradenton",
    "/programs",
    "/camps",
    "/birthday-parties",
    "/private-lessons",
    "/open-gym",
    "/staff",
    "/contact",
  ];

  const programPages = programs.map((p) => `/programs/${p.slug}`);

  return [...staticPages, ...programPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/programs/") ? 0.8 : 0.9,
  }));
}
