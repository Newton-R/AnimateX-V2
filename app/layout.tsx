import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter, space } from "@/utils/font";


export const metadata: Metadata = {
  title: "AnimateX Pro",
  description: "Pre built motion components built with motion, built for React and Nextjs",
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
