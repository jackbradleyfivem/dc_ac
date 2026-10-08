import type { ReactNode } from "react";
import type { MockKind } from "@/lib/content";

function Chrome({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="ml-3 text-xs text-zinc-500">{label}</span>
      </div>
      {children}
    </div>
  );
}

function PanelBody() {
  return (
    <div className="grid min-h-[320px] grid-cols-[112px_1fr] sm:grid-cols-[140px_1fr]">
      <aside className="border-r border-white/10 p-4 text-xs text-zinc-500">
        <p className="text-zinc-200">Home</p>
        <p className="mt-3">Players</p>
        <p className="mt-3">Bans</p>
        <p className="mt-3">Staff</p>
        <p className="mt-3">Settings</p>
      </aside>
      <div className="p-4">
        <p className="text-xs text-zinc-500">Server</p>
        <p className="mt-1 text-sm">Northline RP</p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["Online", "48"],
            ["Bans", "12"],
            ["Staff", "6"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 p-3">
              <p className="text-[11px] text-zinc-500">{label}</p>
              <p className="mt-2 text-lg">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-white/10 p-3 text-xs text-zinc-400">
          <p>Latest ban · weapon spawn · 2m ago</p>
          <p className="mt-2">Latest ban · health abuse · 14m ago</p>
        </div>
      </div>
    </div>
  );
}

function LookupBody() {
  return (
    <div className="min-h-[320px] p-5">
      <div className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-500">
        Search a name or identifier
      </div>
      <div className="mt-4 rounded-xl border border-white/10 p-4">
        <p className="text-sm">Player 1042</p>
        <p className="mt-1 text-xs text-zinc-500">Sample record</p>
        <dl className="mt-4 grid gap-3 text-xs text-zinc-400">
          <div className="flex justify-between gap-4">
            <dt>Bans</dt>
            <dd className="text-zinc-200">2</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Last server</dt>
            <dd className="text-zinc-200">Harbor Roleplay</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Identifiers</dt>
            <dd className="text-zinc-200">license · discord</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function MapBody() {
  return (
    <div className="relative min-h-[320px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]">
      {[
        ["18%", "30%"],
        ["46%", "22%"],
        ["62%", "48%"],
        ["34%", "64%"],
        ["72%", "70%"],
      ].map(([top, left]) => (
        <span
          key={`${top}-${left}`}
          className="absolute size-2.5 rounded-full bg-white"
          style={{ top, left }}
        />
      ))}
      <p className="absolute bottom-4 left-4 text-xs text-zinc-500">5 players · sample map</p>
    </div>
  );
}

function MonitorBody() {
  return (
    <div className="grid min-h-[320px] grid-cols-2 gap-2 p-3">
      {["Player 12", "Player 27", "Player 4", "Player 31"].map((name) => (
        <div key={name} className="relative rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <span className="text-[10px] tracking-wide text-zinc-300">LIVE</span>
          <p className="absolute bottom-3 left-3 text-xs text-zinc-500">{name}</p>
        </div>
      ))}
    </div>
  );
}

function MenuBody() {
  return (
    <div className="flex min-h-[320px] items-center justify-center bg-[#080808] p-6">
      <div className="w-56 rounded-xl border border-white/15 bg-black/80 p-3">
        <p className="px-2 py-1 text-[11px] text-zinc-500">DCAC</p>
        {["Spectate", "Ban player", "Vehicles", "Players nearby"].map((item, index) => (
          <p
            key={item}
            className={`mt-1 rounded-md px-2 py-2 text-sm ${index === 0 ? "bg-white text-black" : "text-zinc-300"}`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function ReplayBody() {
  return (
    <div className="min-h-[320px] p-5">
      <p className="text-sm">Session · Player 1042</p>
      <p className="mt-1 text-xs text-zinc-500">Sample timeline</p>
      <div className="mt-6 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-white" />
      </div>
      <ul className="mt-6 space-y-3 text-xs text-zinc-400">
        <li>00:12 · joined the server</li>
        <li>04:40 · weapon spawn</li>
        <li>04:44 · ban issued</li>
      </ul>
    </div>
  );
}

const bodies: Record<MockKind, { label: string; node: ReactNode }> = {
  panel: { label: "panel.dcac", node: <PanelBody /> },
  lookup: { label: "lookup.dcac", node: <LookupBody /> },
  map: { label: "map.dcac", node: <MapBody /> },
  monitor: { label: "monitor.dcac", node: <MonitorBody /> },
  menu: { label: "menu.dcac", node: <MenuBody /> },
  replay: { label: "replay.dcac", node: <ReplayBody /> },
};

export function PanelMock({ kind }: { kind: MockKind }) {
  const view = bodies[kind];
  return (
    <Chrome label={view.label}>
      {view.node}
    </Chrome>
  );
}
