"use client";

import { useState } from "react";
import { capabilities, formatPrice, plans, type PlanId } from "@/lib/content";
import { Container } from "./Container";
import { CheckIcon } from "./Icons";

export function Pricing() {
  const [active, setActive] = useState<PlanId>("quarterly");

  return (
    <section id="pricing" className="scroll-mt-20 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl">Choose your plan</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            One server license. The same tools on every plan. Lifetime is the full license, paid once.
          </p>
          <div
            className="mt-8 inline-flex rounded-full border border-white/10 p-1"
            role="radiogroup"
            aria-label="Billing period"
          >
            {plans.map((plan) => {
              const selected = plan.id === active;
              return (
                <button
                  key={plan.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setActive(plan.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    selected ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {plan.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const selected = plan.id === active;
            return (
              <article
                key={plan.id}
                className={`flex flex-col rounded-2xl border p-6 transition duration-200 ${
                  selected
                    ? "border-white bg-white/[0.04]"
                    : "border-white/10 bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/20"
                }`}
              >
                <h3 className="text-sm text-zinc-400">{plan.name}</h3>
                <p className={`mt-4 tracking-tight ${selected ? "text-5xl" : "text-4xl text-zinc-300"}`}>
                  {formatPrice(plan.price)}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{plan.cadence}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{plan.detail}</p>
                <ul className="mt-8 flex flex-col gap-3 text-sm text-zinc-300">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-8 rounded-full px-5 py-2.5 text-sm font-medium ${
                    selected
                      ? "bg-white text-black"
                      : "border border-white/15 text-zinc-200"
                  }`}
                >
                  Get DCAC
                </button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
