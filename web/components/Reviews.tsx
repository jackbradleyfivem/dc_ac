import { reviews } from "@/lib/content";
import { Container } from "./Container";

export function Reviews() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-zinc-500">Sample copy</p>
          <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">From servers running DCAC</h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.server}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <blockquote className="text-sm leading-7 text-zinc-300">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-zinc-500">
                {review.role}, {review.server}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
