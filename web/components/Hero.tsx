import Link from "next/link";
import { site } from "@/lib/content";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container className="text-center">
        <p className="text-sm text-zinc-500">FiveM anticheat</p>
        <h1 className="mt-4 text-6xl font-medium tracking-tight sm:text-7xl">DCAC</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">{site.promise}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#pricing"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View plans
          </Link>
          <Link
            href="/docs"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/5"
          >
            Read docs
          </Link>
        </div>
      </Container>
    </section>
  );
}
