import Link from "next/link";
import { site } from "@/lib/content";
import { Container } from "./Container";

export function Help() {
  return (
    <section className="pt-8 pb-24">
      <Container>
        <div className="rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12">
          <h2 className="text-3xl tracking-tight sm:text-4xl">Need help?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-400">
            Questions about the product or a server you run. Read the docs before you write in.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Docs
            </Link>
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/5"
            >
              Discord
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
