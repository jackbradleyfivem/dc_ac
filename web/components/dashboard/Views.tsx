"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  bans as seedBans,
  players,
  replays,
  staff,
  type DashboardSection,
} from "@/lib/dashboard";

function PageTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl tracking-tight">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
    </div>
  );
}

function HomeView() {
  const online = players.filter((player) => player.status !== "Banned").length;
  return (
    <div>
      <PageTitle
        title="Home"
        text="Who is on the server, what was banned, and which staff are in."
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["Online", String(online)],
          ["Bans", String(seedBans.length)],
          ["Staff in", String(staff.filter((member) => member.online).length)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 p-5">
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="mt-3 text-3xl tracking-tight">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10">
        <p className="border-b border-white/10 px-5 py-3 text-sm text-zinc-400">Latest bans</p>
        <ul>
          {seedBans.slice(0, 3).map((ban) => (
            <li key={ban.id} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
              <span>
                {ban.player}
                <span className="text-zinc-500"> · {ban.reason}</span>
              </span>
              <span className="text-zinc-500">{ban.when}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PlayersView() {
  const [query, setQuery] = useState("");
  const rows = players.filter((player) => {
    const haystack = `${player.name} ${player.id} ${player.area}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  return (
    <div>
      <PageTitle title="Players" text="Everyone in the session right now." />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search name, id, or area"
        className="mt-8 w-full max-w-md rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-zinc-600"
      />
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-xs text-zinc-500">
            <tr className="border-b border-white/10">
              <th className="px-4 py-3 font-normal">Name</th>
              <th className="px-4 py-3 font-normal">ID</th>
              <th className="px-4 py-3 font-normal">Area</th>
              <th className="px-4 py-3 font-normal">Ping</th>
              <th className="px-4 py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((player) => (
              <tr key={player.id} className="border-b border-white/10 last:border-0">
                <td className="px-4 py-3">{player.name}</td>
                <td className="px-4 py-3 text-zinc-400">{player.id}</td>
                <td className="px-4 py-3 text-zinc-400">{player.area}</td>
                <td className="px-4 py-3 text-zinc-400">{player.ping}</td>
                <td className="px-4 py-3">{player.status}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-zinc-500">
                  No players match that search.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BansView() {
  const [rows, setRows] = useState(seedBans);

  return (
    <div>
      <PageTitle title="Bans" text="Lift a ban here. This list resets when you leave the page." />
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
        {rows.map((ban) => (
          <li key={ban.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm">
                {ban.player} <span className="text-zinc-500">#{ban.playerId}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                {ban.reason} · {ban.when}
              </p>
            </div>
            <button
              type="button"
              className="w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5"
              onClick={() => setRows((current) => current.filter((item) => item.id !== ban.id))}
            >
              Revoke
            </button>
          </li>
        ))}
        {rows.length === 0 ? <li className="px-5 py-6 text-sm text-zinc-500">No active bans.</li> : null}
      </ul>
    </div>
  );
}

function LookupView() {
  const [query, setQuery] = useState("");
  const match = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return undefined;
    return players.find(
      (player) =>
        player.name.toLowerCase().includes(needle) || player.id.includes(needle),
    );
  }, [query]);

  const history = match ? seedBans.filter((ban) => ban.playerId === match.id) : [];

  return (
    <div>
      <PageTitle title="Lookup" text="Search a player who has joined this sample server." />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Name or id"
        className="mt-8 w-full max-w-md rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-zinc-600"
      />
      {query.trim() && !match ? (
        <p className="mt-6 text-sm text-zinc-500">No record for that search.</p>
      ) : null}
      {match ? (
        <div className="mt-6 max-w-lg rounded-2xl border border-white/10 p-5">
          <p className="text-lg">{match.name}</p>
          <p className="mt-1 text-xs text-zinc-500">Sample record · #{match.id}</p>
          <dl className="mt-5 grid gap-3 text-sm text-zinc-400">
            <div className="flex justify-between gap-4">
              <dt>Area</dt>
              <dd className="text-zinc-200">{match.area}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Status</dt>
              <dd className="text-zinc-200">{match.status}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Bans</dt>
              <dd className="text-zinc-200">{history.length}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}

function MapView() {
  const [selected, setSelected] = useState(players[0].id);
  const player = players.find((item) => item.id === selected) ?? players[0];

  return (
    <div>
      <PageTitle title="Map" text="Live positions for the sample session." />
      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]">
          {players.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.name}
              onClick={() => setSelected(item.id)}
              className={`absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                item.id === player.id ? "bg-white" : "bg-zinc-500"
              }`}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            />
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 p-4">
          <p className="text-sm">{player.name}</p>
          <p className="mt-1 text-xs text-zinc-500">#{player.id}</p>
          <p className="mt-4 text-sm text-zinc-400">{player.area}</p>
          <p className="mt-1 text-sm text-zinc-400">{player.status}</p>
        </div>
      </div>
    </div>
  );
}

function MonitoringView() {
  const [focus, setFocus] = useState(players[0].id);
  const shown = players.slice(0, 4);

  return (
    <div>
      <PageTitle title="Monitoring" text="Four screens from the sample session." />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {shown.map((player) => {
          const active = player.id === focus;
          return (
            <button
              key={player.id}
              type="button"
              onClick={() => setFocus(player.id)}
              className={`relative min-h-44 rounded-2xl border p-4 text-left ${
                active ? "border-white" : "border-white/10"
              }`}
            >
              <span className="text-[11px] tracking-wide text-zinc-300">LIVE</span>
              <span className="absolute bottom-4 left-4 text-sm text-zinc-400">{player.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ReplayView() {
  const options = replays.map((replay) => players.find((player) => player.id === replay.playerId)!);
  const [playerId, setPlayerId] = useState(options[0].id);
  const events = replays.find((replay) => replay.playerId === playerId)?.events ?? [];

  return (
    <div>
      <PageTitle title="Replay" text="The minutes before a ban, in order." />
      <div className="mt-8 flex flex-wrap gap-2">
        {options.map((player) => (
          <button
            key={player.id}
            type="button"
            onClick={() => setPlayerId(player.id)}
            className={`rounded-full px-4 py-2 text-sm ${
              player.id === playerId ? "bg-white text-black" : "border border-white/15 text-zinc-300"
            }`}
          >
            {player.name}
          </button>
        ))}
      </div>
      <ol className="mt-8 max-w-lg divide-y divide-white/10 rounded-2xl border border-white/10">
        {events.map((event) => (
          <li key={event.time} className="flex gap-4 px-5 py-3 text-sm">
            <span className="w-12 text-zinc-500">{event.time}</span>
            <span>{event.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StaffView() {
  return (
    <div>
      <PageTitle title="Staff" text="Roles for this sample server." />
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
        {staff.map((member) => (
          <li key={member.name} className="flex items-center justify-between px-5 py-4 text-sm">
            <span>{member.name}</span>
            <span className="text-zinc-400">
              {member.role}
              {member.online ? " · in" : " · out"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const settingRows = [
  { id: "joins", label: "Log joins and leaves", on: true },
  { id: "bans", label: "Keep a ban log in the panel", on: true },
  { id: "watch", label: "Show watched players on the map", on: true },
  { id: "replay", label: "Keep session replay for bans", on: false },
];

function SettingsView() {
  const [values, setValues] = useState<Record<string, boolean>>(
    Object.fromEntries(settingRows.map((row) => [row.id, row.on])),
  );

  return (
    <div>
      <PageTitle
        title="Settings"
        text="Switches for this sample server. They reset when you leave the page."
      />
      <ul className="mt-8 max-w-xl divide-y divide-white/10 rounded-2xl border border-white/10">
        {settingRows.map((row) => (
          <li key={row.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <span className="text-sm">{row.label}</span>
            <button
              type="button"
              role="switch"
              aria-checked={values[row.id]}
              onClick={() => setValues((current) => ({ ...current, [row.id]: !current[row.id] }))}
              className={`h-6 w-11 rounded-full p-0.5 ${values[row.id] ? "bg-white" : "bg-white/15"}`}
            >
              <span
                className={`block size-5 rounded-full transition ${
                values[row.id] ? "translate-x-5 bg-black" : "bg-white"
              }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const views: Record<DashboardSection, () => ReactNode> = {
  home: HomeView,
  players: PlayersView,
  bans: BansView,
  lookup: LookupView,
  map: MapView,
  monitoring: MonitoringView,
  replay: ReplayView,
  staff: StaffView,
  settings: SettingsView,
};

export function DashboardView({ section }: { section: DashboardSection }) {
  const View = views[section];
  return <View />;
}
