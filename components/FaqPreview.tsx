import Link from "next/link";
import { faqs, previewFaqCount } from "@/lib/content";
import { Container } from "./Container";
import { FaqList } from "./FaqList";

export function FaqPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl tracking-tight sm:text-4xl">Questions</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Install, performance, frameworks, and how the license works.
            </p>
          </div>
          <Link href="/faq" className="text-sm text-zinc-400 hover:text-white">
            Full FAQ
          </Link>
        </div>
        <div className="mt-10">
          <FaqList items={faqs.slice(0, previewFaqCount)} />
        </div>
      </Container>
    </section>
  );
}
