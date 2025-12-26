import type { Metadata } from "next";
import "./globals.css";
import { ThemeWrapper } from "@/components/main/ThemeProvider";
import { inter, space } from "@/utils/font";
import { Toast } from "@/components/ui/modals/toast";


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
        <Toast className="border-blue-400 dark:border-blue-600" stacked/>
       <ThemeWrapper>
          {/* <div id="theme-transition">
           </div> */}
          {children}
       </ThemeWrapper>
      </body>
    </html>
  );
}
