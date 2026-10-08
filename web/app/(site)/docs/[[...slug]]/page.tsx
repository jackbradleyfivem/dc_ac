import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docs, getDoc } from "@/lib/content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export function generateStaticParams() {
  return [
    { slug: [] as string[] },
    ...docs
      .filter((page) => page.slug !== "overview")
      .map((page) => ({ slug: [page.slug] })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getDoc(slug?.[0]);
  if (!page) {
    return { title: "Docs" };
  }
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;
  const page = getDoc(slug?.[0]);
  if (!page || (slug && slug.length > 1)) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-4xl tracking-tight">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">{page.description}</p>
      <div className="mt-12 space-y-10">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl tracking-tight">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-sm leading-7 text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.code ? (
              <pre className="mt-4 max-w-2xl overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
                <code>{section.code}</code>
              </pre>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
