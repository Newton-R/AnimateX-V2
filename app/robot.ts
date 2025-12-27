import { MetadataRoute } from "next";

export default async function robot(): Promise<MetadataRoute.Robots> {
    return {
        rules: [
            {
                userAgent: "*",
                allow: [
                    "/",
                    "/components",
                    "/components/docs"
                ],
                disallow: [
                    "/api"
                ]
            }
        ],

        sitemap: "https://animatex-pro.newtonraul.me/sitemap.xml"
        
    }
}