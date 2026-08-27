export type Interest = {
  slug: string;
  title: string;
  lede: string;
  body: string;
  cover: string;
  relatedSlugs: string[];
};

export const interests: Interest[] = [
  {
    slug: "ai-native-discovery",
    title: "AI-native discovery",
    lede: "How products are found when the interface is a language model.",
    body: "Search is no longer a box and ten blue links. People ask models. The work is making products, companies, and experiences legible to that new layer of discovery — without abandoning the craft of the thing itself.",
    cover: "/covers/glass.jpg",
    relatedSlugs: ["ai-discovery", "persona-revenue"],
  },
  {
    slug: "visual-ergonomics",
    title: "Visual ergonomics",
    lede: "Function is a requirement of aesthetics.",
    body: "A surface that cannot be used is not beautiful. Hierarchy, fitts, miller, and the quiet work of reducing rage-clicks at the moment of consent or purchase — this is the craft underneath the pictures.",
    cover: "/covers/movement.jpg",
    relatedSlugs: ["terms-consent", "information-architecture"],
  },
  {
    slug: "design-operations",
    title: "Design as infrastructure",
    lede: "The most leveraged thing a leader can build is the system that makes great design repeatable.",
    body: "Critique culture, tokens, tool consolidation, and AI-augmented workflows. Screens do not compound. Operations do. This is the through-line from Plexus Design Ops back through industrial systems work.",
    cover: "/covers/model.jpg",
    relatedSlugs: ["design-ops", "shipping-outcomes"],
  },
  {
    slug: "information-architecture",
    title: "Information architecture",
    lede: "People already know how to find things. Design should not fight that.",
    body: "Ambassador incentives, research networks, persona generators — the interesting problem is rarely the screen. It is the hierarchy of discovery, and whether intuition still works when the dataset is live.",
    cover: "/work/ia.png",
    relatedSlugs: ["information-architecture", "org-visibility", "opportunity-mapping"],
  },
  {
    slug: "industrial-systems",
    title: "Industrial systems",
    lede: "Mines, warehouses, and the operators who keep them honest.",
    body: "Resource accounting, total rewards, stuck orders, 3PL mismatches. The work is making complex operational truth visible enough to act on — without pretending the factory floor is a consumer app.",
    cover: "/covers/minerals.jpg",
    relatedSlugs: ["mine-accounting", "total-rewards", "order-management"],
  },
  {
    slug: "learning-environments",
    title: "Learning environments",
    lede: "Translating the tactile classroom into something that can scale.",
    body: "Twenty virtual science labs for Odysseyware. Osmosis, circuits, the gap between a physical bench and an LMS. Early proof that zero-to-one product design can still feel like a room you can think in.",
    cover: "/covers/labs.jpg",
    relatedSlugs: ["virtual-labs"],
  },
];

export function getInterest(slug: string): Interest | undefined {
  return interests.find((item) => item.slug === slug);
}
