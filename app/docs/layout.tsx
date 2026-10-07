import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { DocsNav } from "@/components/DocsNav";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 hidden text-xs text-zinc-500 lg:block">Docs</p>
          <DocsNav />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}
