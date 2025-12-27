import { MetadataRoute } from "next";

const BASE_URL = "https://animatex-pro.newtonraul.me/"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const components = [
        "toast",
        "bug",
        "canvas",
        "inifinitecarousel",
        "swoop",
        "dailog",
        "arrow",
        "aerobutton",
        "themetoggler",
        "copy",
        "loadingbutton",
        "dropdown",
        "vercel",
        "flower",
        "staggercards",
        "highlight",
        "swift",
        "piccycle",
        "flip",
        "lightcard"
    ]

    const componenturls = components.map((component) => 
            ({
                url: `${BASE_URL}components/${component}`,
                lastModified: new Date()
            })
    
    )


    return [
        {
            url: BASE_URL,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}components`,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}components/docs`,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}components/usetoast`,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}components/cli`,
            lastModified: new Date()
        },
        ...componenturls
    ]
    
}