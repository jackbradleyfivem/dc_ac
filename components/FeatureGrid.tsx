import Link from "next/link";
import { features } from "@/lib/content";
import { Container } from "./Container";
import { FeatureIcon } from "./Icons";

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-20 py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl tracking-tight sm:text-4xl">Everything staff need in one place</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            The panel, the map, and the in-game menu share one license. Open the tool that fits the moment.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/20"
            >
              <span className="text-zinc-300">
                <FeatureIcon name={feature.mock} />
              </span>
              <h3 className="mt-5 text-lg tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.summary}</p>
              <p className="mt-6 text-sm text-zinc-500 transition group-hover:text-white">Open</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
