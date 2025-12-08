import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter, space } from "@/utils/font";


export const metadata: Metadata = {
  title: "AnimateX Pro",
  description: "Pre built motion components built with motion",
  openGraph: {
    type: "website",
    url: "https://animatex-pro.newtonraul.me/",
    title: "Animatex-pro",
    description: "Pre built motion components built with Motion",
    siteName: "Animatex-pro",
    images: [{
      url: "/og.png",
      width: 1200,
      height: 630,
    }]
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
       <ThemeWrapper>
          {/* <div id="theme-transition">
           </div> */}
          {children}
       </ThemeWrapper>
      </body>
    </html>
  );
}
