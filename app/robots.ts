import type { MetadataRoute } from "next"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ziyanalim.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api-test"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
