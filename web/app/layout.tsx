import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: "%s · DCAC",
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} bg-canvas font-sans antialiased`}>{children}</body>
    </html>
  );
}
