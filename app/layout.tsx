import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter, space } from "@/utils/font";
import { Toast } from "@/components/ui/modals/toast";


export const metadata: Metadata = {
  title: "AnimateX Pro",
  description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro",
  openGraph: {
    title: "Animatex Pro",
    description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro, Built with ❤ NGWA NEWTON-RAUL.",
    url: "https://animatex-pro.newtonraul.me/",
    images: [
      {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
      }
  ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Animatex Pro",
    description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro, Built with ❤ NGWA NEWTON-RAUL.",
    images: ["/opengraph-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${space.variable} antialiased`}
      >
        <Toast className="border-blue-400 dark:border-blue-600" position="tr"/>
       <ThemeWrapper>
          {/* <div id="theme-transition">
           </div> */}
          {children}
       </ThemeWrapper>
      </body>
    </html>
  );
}
