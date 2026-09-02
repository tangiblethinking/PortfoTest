export type EmbedKind = "html" | "app" | "figma" | "image" | "prototype";

export type Embed = {
  label: string;
  url: string;
  kind: EmbedKind;
};

export type WorkKind = "case-study" | "methodology";

export type WorkItem = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  outcome: string;
  tags: string[];
  cover: string;
  gallery: string[];
  embeds: Embed[];
  kind: WorkKind;
  featured?: boolean;
  /** Controls card aspect: "wide" = 16/10, "full" (or omit) = 4/3 */
  span?: "full" | "wide";
};

export const work: WorkItem[] = [
  {
    slug: "ecommerce",
    index: "03",
    title: "E-Commerce Modernization",
    subtitle: "From friction to conversion",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "Redesigned the complete e-commerce experience across the US and three international regions — reducing checkout abandonment by 43% through data-driven UX and mobile-first design.",
    tags: ["e-Commerce", "UX Strategy", "Mobile-First", "A/B Testing"],
    cover: "/covers/retail.jpg",
    gallery: ["/work/persona.png", "/covers/retail.jpg"],
    embeds: [
      {
        label: "Deployment Protoype",
        url: "https://www.uxapex.com/cart",
        kind: "app",
      },
      { label: "Customer Aquisition Study", url: "https://www.uxapex.com/ecomm", kind: "html" },
    ],
    kind: "case-study",
    featured: true,
    span: "wide",
  },
  {
    slug: "design-ops",
    index: "08",
    title: "Design Operations from the Ground Up",
    subtitle: "Six tools, one system",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "Consolidated six fragmented tools into a unified design system, cutting team inefficiency by 60% and increasing sprint delivery velocity by 35%.",
    tags: ["Design Ops", "Systems Thinking", "Team Leadership", "AI Tooling"],
    cover: "/covers/model.jpg",
    gallery: ["/covers/craft.jpg", "/covers/model.jpg"],
    embeds: [
      {
        label: "case-study",
        url: "https://opdesignoprojo.vercel.app/",
        kind: "app",
      },
      { label: "Case study", url: "https://www.uxapex.com/designops", kind: "html" },
    ],
    kind: "case-study",
    featured: true,
    span: "full",
  },
  {
    slug: "persona-revenue",
    index: "05",
    title: "Scaling Revenue from Behavioral Metrics",
    subtitle: "Insight as an operating system",
    company: "Plexus Worldwide",
    year: "2025 – 2026",
    outcome:
      "Enabled the organization to operate as a coordinated, insight-driven engine to optimize brand discovery, member expansion, and subscription volumes.",
    tags: ["Systems Governance", "Cross-Functional Strategy", "Personas"],
    cover: "/work/persona.png",
    gallery: ["/work/persona.png"],
    embeds: [
      {
        label: "Persona generator",
        url: "https://persona-gen-prospectives.figma.site/",
        kind: "prototype",
      },
      { label: "Case study", url: "https://www.uxapex.com/persona", kind: "html" },
    ],
    kind: "case-study",
    featured: true,
    span: "full",
  },
  {
    slug: "virtual-labs",
    index: "01",
    title: "Zero to One Product Delivery",
    subtitle: "Virtual labs for online learning",
    company: "Glynlyon · Odysseyware",
    year: "2014 – 2016",
    outcome:
      "Led design and prototyping for a Virtual Labs environment that translated physical science classrooms into scalable digital experiences across twenty high-fidelity labs.",
    tags: ["Ed-Tech", "Product Design", "LMS"],
    cover: "/work/vlabs-page.png",
    gallery: ["/work/vlabs-page.png", "/covers/labs.jpg"],
    embeds: [
      { label: "Case study", url: "https://www.uxapex.com/vlabs", kind: "html" },
    ],
    kind: "case-study",
    featured: true,
    span: "wide",
  },
  {
    slug: "ai-discovery",
    index: "04",
    title: "Modernizing Brand Discovery",
    subtitle: "How discovery is evolving",
    company: "Industry",
    year: "2026",
    outcome:
      "Products and digital experiences are being left out of discovery as people search through LLMs. Those who adapt will hold a longer competitive gain than those who delay.",
    tags: ["AI Strategy", "Discovery", "LLM"],
    cover: "/covers/discovery.jpg",
    gallery: ["/covers/glass.jpg"],
    embeds: [
      { label: "Implementation Strategy", url: "https://www.uxapex.com/discovery", kind: "html" },
    ],
    kind: "case-study",
    featured: true,
    span: "wide",
  },
  {
    slug: "terms-consent",
    index: "02",
    title: "The Ts & Cs through UX",
    subtitle: "Shaping effortless consent",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "Increased compliance with new and existing members through easy opt-in experiences — surfacing consent instead of burying it in nested accordions at the moment of purchase.",
    tags: ["Legal", "Consent", "Cognitive Load"],
    cover: "/work/laws-page.png",
    gallery: ["/work/laws-page.png", "/covers/paper.jpg"],
    embeds: [
      { label: "Case study", url: "https://www.uxapex.com/laws", kind: "html" },
    ],
    kind: "case-study",
  },
  {
    slug: "shipping-outcomes",
    index: "06",
    title: "Scaling Company Efforts",
    subtitle: "Delivering and shipping faster",
    company: "Design Operations",
    year: "2025",
    outcome:
      "A unified source of truth that creates bilateral accountability, ensures product consistency, and improves communication between design, engineering, product, and business.",
    tags: ["Product Governance", "Onboarding", "Accountability"],
    cover: "/covers/craft.jpg",
    gallery: ["/covers/craft.jpg", "/covers/model.jpg"],
    embeds: [
      {
        label: "Case study",
        url: "https://www.uxapex.com/collaboration",
        kind: "html",
      },
    ],
    kind: "case-study",
  },
  {
    slug: "ux-transformation",
    index: "07",
    title: "Company-Wide UX Transformation",
    subtitle: "From service function to strategic driver",
    company: "Multi-company · 2021–2026",
    year: "2021 – 2026",
    outcome:
      "Elevated design from a service function to a strategic driver — securing C-suite buy-in and delivering measurable outcomes across e-commerce, mining, and self-storage.",
    tags: ["UX Strategy", "Executive Influence", "Workshops"],
    cover: "/covers/Study.jpg",
    gallery: ["/covers/desert.jpg"],
    embeds: [
      { label: "Behavioral UX", url: "https://www.uxapex.com/uxtrans", kind: "html" },
    ],
    kind: "case-study",
    span: "wide",
  },
  {
    slug: "information-architecture",
    index: "M1",
    title: "Information Architecture for Design",
    subtitle: "Hierarchy of discovery",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "Redesign is not simply an aesthetic venture. Function, with the needs of the audience, shaped how people use their own intuition for discovery.",
    tags: ["Information Architecture", "Behavioral Analysis"],
    cover: "/work/ia-page.png",
    gallery: ["/work/ia.png", "/work/ia-page.png"],
    embeds: [
      { label: "Information Architecture Strategy", url: "https://www.uxapex.com/ia", kind: "html" },
      {
        label: "IA Breakdown",
        url: "https://www.figma.com/board/xGM5BU3EYuIdFffxKi7VUz/IA-for-Ambassador-Incetives?node-id=1-56",
        kind: "figma",
      },
    ],
    kind: "methodology",
    featured: true,
    span: "wide",
  },
  {
    slug: "org-visibility",
    index: "M2",
    title: "Org Visibility for Research",
    subtitle: "Analysis, planning, shared knowledge",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "A customizable, easily shared, and trackable solution for organization-wide communication — so research is understood when analysis is easy to follow.",
    tags: ["Knowledge", "B2B", "Research Ops"],
    cover: "/work/org.png",
    gallery: ["/work/org.png"],
    embeds: [
      {
        label: "Template prototype",
        url: "https://ux-r-and-d-and-a.figma.site/",
        kind: "prototype",
      },
      {
        label: "Research Exemplar",
        url: "https://tinyurl.com/customerAnalysisNetwork",
        kind: "app",
      },
    ],
    kind: "methodology",
  },
  {
    slug: "opportunity-mapping",
    index: "M3",
    title: "Opportunity Mapping",
    subtitle: "Big data, qualitative output",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "A persona generator based on real-time live data and historic BI datasets — intelligent personas as a scaling strategy.",
    tags: ["Personas", "Scaling Strategy"],
    cover: "/work/persona.png",
    gallery: ["/work/persona.png"],
    embeds: [
      {
        label: "Persona generator",
        url: "https://persona-gen-prospectives.figma.site/",
        kind: "prototype",
      },
      {
        label: "Generated Persona",
        url: "https://tinyurl.com/ProspectivesVIP022026sarah02",
        kind: "prototype",
      },
    ],
    kind: "methodology",
  },
  {
    slug: "order-management",
    index: "M4",
    title: "Order Management Architecture",
    subtitle: "Workflow optimization · labor ROI",
    company: "Plexus Worldwide",
    year: "2026",
    outcome:
      "Revamp and overhaul to batch-process stuck customer orders and push them to fulfillment — gather, organize, submit, check.",
    tags: ["Operations", "Research", "Labor"],
    cover: "/work/oma-page.png",
    gallery: ["/work/oma-page.png", "/work/oma-ui.png"],
    embeds: [
      { label: "UX Design Strategy", url: "https://www.uxapex.com/oma", kind: "html" },
      {
        label: "Updated UI",
        url: "/work/oma-ui.png",
        kind: "image",
      },
    ],
    kind: "methodology",
    featured: true,
    span: "wide",
  },
  {
    slug: "total-rewards",
    index: "M5",
    title: "Employee Total Rewards",
    subtitle: "Talent acquisition and retention",
    company: "Freeport-McMoRan",
    year: "2023",
    outcome:
      "A human-resources tool deployed to explain benefits to existing employees and attract potential talent.",
    tags: ["HR", "Fin-Tech", "Cross-Department"],
    cover: "/work/rewards.png",
    gallery: ["/work/rewards.png"],
    embeds: [
      {
        label: "Information Architecture - UI",
        url: "https://www.figma.com/board/aJJIGQFHG8pfJylWCVZZA7/Freeport-HR-Total-Rewards?node-id=0-1",
        kind: "figma",
      },
      { label: "User Flow Prototype", url: "/work/rewards.png", kind: "image" },
    ],
    kind: "methodology",
    span: "wide",
  },
  {
    slug: "mine-accounting",
    index: "M6",
    title: "Mine Resource Accounting",
    subtitle: "Life of mine, source of truth",
    company: "Freeport-McMoRan",
    year: "2023",
    outcome:
      "A smart tool that dynamically calculates mine resources to project production targets, total life of a mine site, and a source of truth for site data.",
    tags: ["Fin-Tech", "Strategic Planning", "Industrial"],
    cover: "/work/mine.png",
    gallery: ["/work/mine.png", "/covers/minerals.jpg"],
    embeds: [
      {
        label: "User Journey Flow",
        url: "https://www.figma.com/board/LIPgSASEQNHDUXcZHBwrMz/Freeport-McMoRan-Resource-Mine-Accouting?node-id=0-1",
        kind: "figma",
      },
      {
        label: "User FLow Prototype",
        url: "https://www.figma.com/proto/qij6caj079zBLrmbKkzwE0/WIP-Wireframe-Concepts?node-id=3632-48153&scaling=scale-down-width&page-id=1228%3A12478&starting-point-node-id=3632%3A48153&hide-ui=1",
        kind: "prototype",
      },
    ],
    kind: "methodology",
    featured: true,
  },
];

export function getWork(slug: string): WorkItem | undefined {
  return work.find((item) => item.slug === slug);
}

export function featuredWork(): WorkItem[] {
  return work.filter((item) => item.featured);
}

export function caseStudies(): WorkItem[] {
  return work.filter((item) => item.kind === "case-study");
}

export function methodologies(): WorkItem[] {
  return work.filter((item) => item.kind === "methodology");
}
