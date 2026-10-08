export const dashboardServer = {
  name: "Northline RP",
  note: "Sample data",
};

export type Player = {
  id: string;
  name: string;
  ping: number;
  area: string;
  status: "Clear" | "Watched" | "Banned";
  x: number;
  y: number;
};

export const players: Player[] = [
  { id: "1042", name: "player_1042", ping: 42, area: "Legion Square", status: "Watched", x: 22, y: 38 },
  { id: "1108", name: "mira.vale", ping: 28, area: "Pillbox", status: "Clear", x: 48, y: 24 },
  { id: "1204", name: "dock.hand", ping: 61, area: "Terminal", status: "Clear", x: 70, y: 62 },
  { id: "1311", name: "north.admin", ping: 19, area: "Mission Row", status: "Clear", x: 36, y: 48 },
  { id: "1440", name: "vesper.k", ping: 88, area: "Vinewood", status: "Watched", x: 58, y: 18 },
  { id: "1502", name: "harbor.jay", ping: 35, area: "Del Perro", status: "Clear", x: 18, y: 58 },
];

export type Ban = {
  id: string;
  player: string;
  playerId: string;
  reason: string;
  when: string;
};

export const bans: Ban[] = [
  { id: "b-2041", player: "player_1042", playerId: "1042", reason: "Weapon spawn", when: "2m ago" },
  { id: "b-2038", player: "ghostline", playerId: "0991", reason: "Health abuse", when: "14m ago" },
  { id: "b-2031", player: "menu.west", playerId: "0874", reason: "Event spam", when: "1h ago" },
  { id: "b-2014", player: "spawn.kit", playerId: "0760", reason: "Vehicle spawn", when: "3h ago" },
];

export type StaffMember = {
  name: string;
  role: "Owner" | "Admin" | "Moderator";
  online: boolean;
};

export const staff: StaffMember[] = [
  { name: "north.admin", role: "Owner", online: true },
  { name: "mira.vale", role: "Admin", online: true },
  { name: "ticket.lee", role: "Moderator", online: false },
  { name: "harbor.jay", role: "Moderator", online: true },
];

export type ReplayEvent = {
  time: string;
  label: string;
};

export const replays: { playerId: string; events: ReplayEvent[] }[] = [
  {
    playerId: "1042",
    events: [
      { time: "00:12", label: "Joined the server" },
      { time: "02:05", label: "Entered Legion Square" },
      { time: "04:40", label: "Weapon spawn" },
      { time: "04:44", label: "Ban issued" },
    ],
  },
  {
    playerId: "1440",
    events: [
      { time: "00:03", label: "Joined the server" },
      { time: "06:18", label: "Entered Vinewood" },
      { time: "11:02", label: "Marked as watched" },
    ],
  },
];

export const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/players", label: "Players", key: "players" },
  { href: "/bans", label: "Bans", key: "bans" },
  { href: "/lookup", label: "Lookup", key: "lookup" },
  { href: "/map", label: "Map", key: "map" },
  { href: "/monitoring", label: "Monitoring", key: "monitoring" },
  { href: "/replay", label: "Replay", key: "replay" },
  { href: "/staff", label: "Staff", key: "staff" },
  { href: "/settings", label: "Settings", key: "settings" },
] as const;

export type DashboardSection = (typeof navItems)[number]["key"];

export const dashboardSections: DashboardSection[] = navItems.map((item) => item.key);
