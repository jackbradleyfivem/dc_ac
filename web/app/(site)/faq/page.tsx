import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Install, performance, frameworks, updates, and DCAC plans.",
};

export default function FaqPage() {
  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl tracking-tight sm:text-5xl">FAQ</h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          Installation, performance, the cheats DCAC is built for, and how the plans differ.
        </p>
        <div className="mt-12">
          <FaqList items={faqs} />
        </div>
      </Container>
    </article>
  );
}
