"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { dashboardServer, navItems } from "@/lib/dashboard";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = normalize(usePathname());
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen md:grid md:grid-cols-[220px_minmax(0,1fr)]">
      <aside
        className={`${open ? "block" : "hidden"} border-b border-white/10 bg-[#0a0a0a] md:block md:border-r md:border-b-0`}
      >
        <div className="flex h-16 items-center justify-between px-5 md:justify-start">
          <Link href="/" className="text-sm font-medium tracking-tight">
            DCAC
          </Link>
          <button
            type="button"
            className="text-sm text-zinc-400 md:hidden"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="px-5 pb-4">
          <p className="text-sm">{dashboardServer.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{dashboardServer.note}</p>
        </div>
        <nav className="flex flex-col gap-1 px-3 pb-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  active ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 md:hidden">
          <p className="text-sm">{dashboardServer.name}</p>
          <button
            type="button"
            className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-zinc-300"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
        <div className="px-5 py-8 sm:px-8">{children}</div>
      </div>
    </div>
  );
}
