import type { ReactNode } from "react";
import { DashboardShell } from "@/components/dashboard/Shell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
