import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
            FiveM anticheat for servers that want cheaters off the session.
          </p>
        </div>
        <div className="flex gap-10 text-sm text-zinc-400">
          <div className="flex flex-col gap-2">
            <Link href="/#features" className="hover:text-white">
              Features
            </Link>
            <Link href="/#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/docs" className="hover:text-white">
              Docs
            </Link>
            <a href={site.discordUrl} className="hover:text-white" target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 pb-8 text-xs text-zinc-600">
        © {new Date().getFullYear()} DCAC
      </div>
    </footer>
  );
}
