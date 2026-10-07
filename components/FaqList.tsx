"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-white/10">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="border-b border-white/10">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="text-base tracking-tight">{item.question}</span>
              <span className="text-zinc-500" aria-hidden="true">
                {expanded ? "–" : "+"}
              </span>
            </button>
            {expanded ? (
              <p className="max-w-3xl pb-5 text-sm leading-7 text-zinc-400">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
