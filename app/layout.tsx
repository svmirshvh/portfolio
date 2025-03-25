import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sameer Alam | Software Engineer",
  description:
    "Portfolio website of Sameer Alam, a Software Engineer specializing in Next.js, React, and full-stack development",
  // generator: "v0.dev",
  icons: "/pp.jpg",
  openGraph: {
    url: "https://svmirshvh.vercel.app/",
    images: [
      {
        url: "https://svmirshvh.vercel.app/weblancestudios.jpg",
        width: 800,
        height: 600,
        // alt: data.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
