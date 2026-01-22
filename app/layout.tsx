import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter, space } from "@/utils/font";
import { Toast } from "@/components/ui/modals/toast";
import { url } from "inspector";
import { Navbar } from "@/components/main/Navbar";


export const metadata: Metadata = {
  title: "AnimateX Pro",
  description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro",
  keywords: [
    "Motion",
    "Framer Motion",
    "Animatex",
    "Animatex-pro",
    "Animated",
    "UI",
    "Newton-Raul",
    "Animated Blocks"
  ],
  creator:"Ngwa Newton-Raul",
  openGraph: {
    title: "Animatex Pro",
    description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro, Built with ❤ NGWA NEWTON-RAUL.",
    url: "https://animatex-pro.newtonraul.me/",
    images: [
      {
          url: "/og.jpeg",
          width: 1200,
          height: 630,
      }
  ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Animatex Pro",
    description: "Animated UI components for React and Next.js. Build fast, modern, and beauiful web interfaces with Animatex Pro, Built with ❤ NGWA NEWTON-RAUL.",
    images: ["/og.jpeg"],
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
        <Toast 
        className="border border-col bg-(--secondary) rounded-2xl p-4 text-black dark:text-white" 
        dangerstyle="bg-red-600 text-white border border-red-600 dark:bg-red-500"
        successStyle="bg-green-500 text-white dark:bg-green-600 border border-green-600"/>
       <ThemeWrapper>
          {/* <div id="theme-transition">
           </div> */}
           <Navbar/>
          {children}
       </ThemeWrapper>
      </body>
    </html>
  );
}
