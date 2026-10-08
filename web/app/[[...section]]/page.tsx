import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DashboardView } from "@/components/dashboard/Views";
import { dashboardSections, type DashboardSection } from "@/lib/dashboard";

type Props = {
  params: Promise<{ section?: string[] }>;
};

export function generateStaticParams() {
  return [
    { section: [] as string[] },
    ...dashboardSections
      .filter((section) => section !== "home")
      .map((section) => ({ section: [section] })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  const key = sectionTitle(section?.[0]);
  return { title: key === "Home" ? "Dashboard" : key };
}

function sectionTitle(slug?: string) {
  if (!slug) return "Home";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export default async function DashboardPage({ params }: Props) {
  const { section } = await params;
  if (section && section.length > 1) notFound();

  const key = (section?.[0] ?? "home") as DashboardSection;
  if (!dashboardSections.includes(key)) notFound();

  return <DashboardView section={key} />;
}
