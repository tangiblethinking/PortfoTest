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
    title: "Using Tech Wisely",
    lede: "New technology isn't always the best solution because it's 'new'.",
    body: "Today is the sum of the last 10000 years of technology. But is it really creativity to resolve a real need or have needs merely become wants? The mind is truly the tech we all must use wisely.",
    cover: "/covers/glass.jpg",
    relatedSlugs: ["ai-discovery", "persona-revenue"],
  },
  {
    slug: "visual-ergonomics",
    title: "Craft and Suitability",
    lede: "Function is a requirement of aesthetics.",
    body: "The hammer. The capacitor. Designs that will withstand  all history because they are inherently validated by reality. And there's only need to improve on their features.",
    cover: "/covers/movement.jpg",
    relatedSlugs: ["terms-consent", "information-architecture"],
  },
  {
    slug: "design-operations",
    title: "Ordering of Tasks as a foudation",
    lede: "Everything has a procedure, an order or operations, a means to create consistent results.",
    body: "Rules don't exist to be strictly followed. Well some do. But, knowing how to push the limits on the rules is where I stress test my knowledge, application, and effectiveness.",
    cover: "/covers/model.jpg",
    relatedSlugs: ["design-ops", "shipping-outcomes"],
  },
  {
    slug: "information-architecture",
    title: "Behaviors and Thoughts Follow Each Other",
    lede: "Open mindedness is necessary to really find a solution worth a purposed effort.",
    body: "Though I am rigid with my mental models to ground my actions in reality, like the hammer, it gets feature updates every once in a while.",
    cover: "/work/ia.png",
    relatedSlugs: ["information-architecture", "org-visibility", "opportunity-mapping"],
  },
  {
    slug: "industrial-systems",
    title: "Structural Sensibility",
    lede: "Thnking in Systems and the Big Picture",
    body: "A bridge is needed between procedural order, a willingness to bend rules strategically, and building something feasible. Systematic models are a steering mechanism to navigate ambiguity and engineer predictable results to then cross that bridge with confidence.",
    cover: "/covers/minerals.jpg",
    relatedSlugs: ["mine-accounting", "total-rewards", "order-management"],
  },
  {
    slug: "learning-environments",
    title: "Environments for Experimentation",
    lede: "Getting it Out of the Lab and in to Reality",
    body: "I don't wait for perfection as perfection is a moving target. Instead, I build the environment, push the code, harvest the feedback, and let reality shape the next phase of adjustments.",
    cover: "/covers/labs.jpg",
    relatedSlugs: ["virtual-labs"],
  },
];

export function getInterest(slug: string): Interest | undefined {
  return interests.find((item) => item.slug === slug);
}
