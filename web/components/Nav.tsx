"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="grid size-7 place-items-center rounded-md border border-white/15 text-[11px]">
            DC
          </span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <a
            href={site.discordUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </nav>

        <Link
          href="/dashboard"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200 md:inline-flex"
        >
          Dashboard
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-zinc-300 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href={site.discordUrl} target="_blank" rel="noreferrer">
              Discord
            </a>
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
            >
              Dashboard
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
