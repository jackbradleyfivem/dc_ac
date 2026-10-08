"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docs } from "@/lib/content";

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-4 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
      {docs.map((page) => {
        const active = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            className={`whitespace-nowrap rounded-md px-2 py-1.5 text-sm ${
              active ? "bg-white text-black" : "text-zinc-400 hover:text-white"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {page.title}
          </Link>
        );
      })}
    </nav>
  );
}
