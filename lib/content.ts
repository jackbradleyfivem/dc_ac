export const site = {
  name: "DCAC",
  title: "DCAC — FiveM anticheat",
  description:
    "DCAC is a FiveM anticheat that keeps cheaters off your server. Manage bans, players, and staff from the web panel and in game.",
  discordUrl: "https://discord.gg/dcac",
  promise: "A FiveM anticheat that keeps cheaters off your server.",
};

export const capabilities = [
  "Web panel",
  "In-game menu",
  "Framework integration",
  "Player lookup",
  "In-game map",
  "Monitoring",
  "Session replay",
  "Support",
] as const;

export type MockKind =
  | "panel"
  | "lookup"
  | "map"
  | "monitor"
  | "menu"
  | "replay";

export type Feature = {
  slug: string;
  title: string;
  summary: string;
  lead: string;
  paragraphs: [string, string];
  mock: MockKind;
};

export const features: Feature[] = [
  {
    slug: "web-panel",
    title: "Web panel",
    summary: "Bans, staff, and settings from one browser dashboard.",
    lead: "The control room for the server you run.",
    paragraphs: [
      "Open a browser and you are in. Online players, bans, and server settings sit on one screen, so a whitelist change does not mean opening files on the host.",
      "Permissions live with the tools. A moderator can review players. Owner settings stay with the owner.",
    ],
    mock: "panel",
  },
  {
    slug: "player-lookup",
    title: "Player lookup",
    summary: "Read a player's history before you whitelist, hire, or unban them.",
    lead: "Check the record before you trust the name.",
    paragraphs: [
      "Search someone who has joined a DCAC server and see the history attached to them before you whitelist, hire, or lift a ban.",
      "The record shows bans, identifiers, and the servers they touched. You decide what to do with it.",
    ],
    mock: "lookup",
  },
  {
    slug: "ingame-map",
    title: "In-game map",
    summary: "Live player positions and activity on your server.",
    lead: "See where everyone is, while they are there.",
    paragraphs: [
      "Live positions for the players on your server, drawn on a map you can move around.",
      "Spot someone who should not be in an area, then open their record or the in-game tools.",
    ],
    mock: "map",
  },
  {
    slug: "monitoring",
    title: "Live monitoring",
    summary: "Watch player screens while they are in the session.",
    lead: "See the client, not only the log line.",
    paragraphs: [
      "Watch several player screens at once while they are still in the session.",
      "Use it when a report comes in and you need the picture in front of you before you ban.",
    ],
    mock: "monitor",
  },
  {
    slug: "ingame-menu",
    title: "In-game menu",
    summary: "Spectate, manage bans, and act without leaving the game.",
    lead: "Staff tools that stay in the session.",
    paragraphs: [
      "The same staff actions, from inside the game. Spectate, handle a ban, and deal with a vehicle without leaving to the panel.",
      "The menu follows the permissions you set on the web, so a trial moderator does not inherit owner tools.",
    ],
    mock: "menu",
  },
  {
    slug: "session-replay",
    title: "Session replay",
    summary: "Play a session back and see what led to a ban.",
    lead: "The minutes before the ban, in order.",
    paragraphs: [
      "When a ban lands, replay the session and see the moments that led there.",
      "Move through the timeline, read the events, and keep or reverse the ban with that context in front of you.",
    ],
    mock: "replay",
  },
];

export type PlanId = "monthly" | "quarterly" | "lifetime";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  cadence: string;
  detail: string;
};

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 29,
    cadence: "per month",
    detail: "Billed every month. Stop when you want.",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 75,
    cadence: "every 3 months",
    detail: "Billed every three months.",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 249,
    cadence: "one time",
    detail: "The full license. Pay once and keep it.",
  },
];

export const reviews = [
  {
    quote:
      "We stopped chasing the same menus every Friday. Staff handle reports from the panel and stay in game when it matters.",
    role: "Owner",
    server: "Northline RP",
  },
  {
    quote:
      "Lookup is what I open before a whitelist. If they have a history on another DCAC server, I see it before they spawn.",
    role: "Head admin",
    server: "Harbor Roleplay",
  },
  {
    quote:
      "Replay settled an argument in the ticket. We watched the minute before the ban and kept it. No more guessing from a screenshot.",
    role: "Owner",
    server: "Vesper Network",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How does installation work?",
    answer:
      "When you have a license, download the resource from the dashboard, place the DCAC folder in your server's resources directory, and add ensure DCAC to server.cfg. Restart the server. The docs walk through each step.",
  },
  {
    question: "Will DCAC affect server performance?",
    answer:
      "DCAC is built to stay light on the server tick. The panel and the heavier staff tools live in the browser, so they are not sitting inside your game loop.",
  },
  {
    question: "What kinds of cheats can DCAC catch?",
    answer:
      "DCAC is aimed at the menus and executors common on FiveM: movement and health abuse, spawned weapons and vehicles, event spam, and injected client resources. Detections move as new builds show up.",
  },
  {
    question: "Which frameworks does it support?",
    answer:
      "DCAC does not depend on a framework. It runs beside ESX, QBCore, and Qbox, and on servers that use none of them.",
  },
  {
    question: "How often is DCAC updated?",
    answer:
      "Builds ship as new cheats appear and as FiveM itself changes. You pick up the next resource from the dashboard when a build is ready.",
  },
  {
    question: "How do the plans work?",
    answer:
      "Monthly and quarterly licenses renew on that cycle. Lifetime is a one-time purchase for the full license. Every plan includes the same tools. Prices on this page are set in the site content until billing is connected.",
  },
  {
    question: "Is there a trial?",
    answer:
      "A public trial is not open on this site. Ask on Discord if you want to talk through a server before you buy.",
  },
  {
    question: "Where do I get help?",
    answer:
      "Read the docs first. If you are still stuck, the Discord is the support line for setup, billing questions, and product suggestions.",
  },
];

export const previewFaqCount = 5;

export type DocSection = {
  heading: string;
  paragraphs: string[];
  code?: string;
};

export type DocPage = {
  slug: string;
  href: string;
  title: string;
  description: string;
  sections: DocSection[];
};

export const docs: DocPage[] = [
  {
    slug: "overview",
    href: "/docs",
    title: "Overview",
    description: "What DCAC is, and where each part lives.",
    sections: [
      {
        heading: "What you install",
        paragraphs: [
          "DCAC is a FiveM resource plus a web panel. The resource runs on your server. The panel is where staff review players, bans, and settings.",
          "You do not edit detection files by hand for day-to-day work. Bans, staff roles, and the usual server options are handled in the panel.",
        ],
      },
      {
        heading: "What you need",
        paragraphs: [
          "A FiveM server you control, a license key from your DCAC account, and the latest resource from the dashboard. The dashboard download is not wired on this marketing site yet.",
          "DCAC sits beside your framework. It does not replace ESX, QBCore, Qbox, or a custom stack.",
        ],
      },
    ],
  },
  {
    slug: "installation",
    href: "/docs/installation",
    title: "Installation",
    description: "Put the resource on the server and start it.",
    sections: [
      {
        heading: "Download the resource",
        paragraphs: [
          "After a license is on your account, open the dashboard and download the latest DCAC build. This site does not host that file yet.",
        ],
      },
      {
        heading: "Install the resource",
        paragraphs: [
          "Extract the download and place the DCAC folder in your server's resources directory. The folder name should stay DCAC.",
        ],
      },
      {
        heading: "Add it to server.cfg",
        paragraphs: [
          "Start the resource with the rest of your server. Then restart so the change is picked up.",
        ],
        code: "ensure DCAC",
      },
    ],
  },
  {
    slug: "frameworks",
    href: "/docs/frameworks",
    title: "Frameworks",
    description: "How DCAC sits next to ESX, QBCore, and Qbox.",
    sections: [
      {
        heading: "No framework required",
        paragraphs: [
          "DCAC does not import your framework and does not need one to start. A server with no ESX, QBCore, or Qbox can still run it.",
        ],
      },
      {
        heading: "ESX, QBCore, and Qbox",
        paragraphs: [
          "If you run one of those frameworks, leave it as it is. DCAC does not replace job scripts, inventories, or your admin menu. Staff permissions for DCAC are set in the DCAC panel.",
          "Start DCAC after your framework in server.cfg if your host is sensitive to resource order. Most servers can leave it with the other ensure lines.",
        ],
      },
    ],
  },
  {
    slug: "configuration",
    href: "/docs/configuration",
    title: "Configuration",
    description: "Where bans, staff, and server options are changed.",
    sections: [
      {
        heading: "Use the panel",
        paragraphs: [
          "Day-to-day configuration lives in the web panel: bans, staff roles, whitelists, and the log of what the anticheat did.",
          "You should not need to open the resource files to add a moderator or to lift a ban.",
        ],
      },
      {
        heading: "In game",
        paragraphs: [
          "The in-game menu uses the same roles. If someone cannot see an action, change their role in the panel rather than editing a client file.",
        ],
      },
      {
        heading: "License",
        paragraphs: [
          "The resource expects the license key from your DCAC account. When the dashboard is connected, that key is shown there next to the download.",
        ],
      },
    ],
  },
];

export function getFeature(slug: string) {
  return features.find((feature) => feature.slug === slug);
}

export function getDoc(slug?: string) {
  if (!slug || slug === "overview") {
    return docs[0];
  }
  return docs.find((page) => page.slug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
