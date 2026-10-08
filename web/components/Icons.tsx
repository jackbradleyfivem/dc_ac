import type { MockKind } from "@/lib/content";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FeatureIcon({ name }: { name: MockKind }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" {...stroke}>
      {name === "panel" ? (
        <>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 20h8M12 18v2" />
        </>
      ) : null}
      {name === "lookup" ? (
        <>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-3.5-3.5" />
        </>
      ) : null}
      {name === "map" ? (
        <>
          <path d="M9 4 4 6.5v13L9 17l6 2.5 5-2.5v-13L15 6.5 9 4Z" />
          <path d="M9 4v13M15 6.5v13" />
        </>
      ) : null}
      {name === "monitor" ? (
        <>
          <rect x="3" y="4" width="7" height="6" rx="1" />
          <rect x="14" y="4" width="7" height="6" rx="1" />
          <rect x="3" y="13" width="7" height="6" rx="1" />
          <rect x="14" y="13" width="7" height="6" rx="1" />
        </>
      ) : null}
      {name === "menu" ? (
        <>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </>
      ) : null}
      {name === "replay" ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M10 9.5v5l4-2.5-4-2.5Z" />
        </>
      ) : null}
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true" {...stroke}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
