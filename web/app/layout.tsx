import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { DashboardShell } from "@/components/dashboard/Shell";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s · DCAC",
  },
  description: "DCAC staff dashboard for bans, players, and the live server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} bg-canvas font-sans antialiased`}>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
