import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PanelMock } from "@/components/PanelMock";
import { features, getFeature } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) {
    return { title: "Feature" };
  }
  return {
    title: feature.title,
    description: feature.summary,
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) {
    notFound();
  }

  const others = features.filter((item) => item.slug !== feature.slug);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Link href="/#features" className="text-sm text-zinc-500 hover:text-white">
          All features
        </Link>
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl tracking-tight sm:text-5xl">{feature.title}</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-400">{feature.lead}</p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-zinc-400">
              <p>{feature.paragraphs[0]}</p>
              <p>{feature.paragraphs[1]}</p>
            </div>
          </div>
          <PanelMock kind={feature.mock} />
        </div>

        <div className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-sm text-zinc-500">More features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/features/${item.slug}`}
                className="rounded-2xl border border-white/10 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20"
              >
                <h3 className="text-base tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
