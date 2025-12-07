import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
})

export const space = Space_Grotesk({
    weight: ["400", "500", "600"],
    variable: "--space-font"
})