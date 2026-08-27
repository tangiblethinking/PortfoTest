import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as useEmbed } from "./router-CkEHzTKb.mjs";
import { t as Reveal } from "./reveal-BlgcoUS2.mjs";
import { i as getWork, n as MediaCard } from "./work-CSZegCPE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/interests-BZVhL6SS.js
var import_jsx_runtime = require_jsx_runtime();
var interests = [
	{
		slug: "ai-native-discovery",
		title: "AI-native discovery",
		lede: "How products are found when the interface is a language model.",
		body: "Search is no longer a box and ten blue links. People ask models. The work is making products, companies, and experiences legible to that new layer of discovery — without abandoning the craft of the thing itself.",
		cover: "/covers/glass.jpg",
		relatedSlugs: ["ai-discovery", "persona-revenue"]
	},
	{
		slug: "visual-ergonomics",
		title: "Visual ergonomics",
		lede: "Function is a requirement of aesthetics.",
		body: "A surface that cannot be used is not beautiful. Hierarchy, fitts, miller, and the quiet work of reducing rage-clicks at the moment of consent or purchase — this is the craft underneath the pictures.",
		cover: "/covers/movement.jpg",
		relatedSlugs: ["terms-consent", "information-architecture"]
	},
	{
		slug: "design-operations",
		title: "Design as infrastructure",
		lede: "The most leveraged thing a leader can build is the system that makes great design repeatable.",
		body: "Critique culture, tokens, tool consolidation, and AI-augmented workflows. Screens do not compound. Operations do. This is the through-line from Plexus Design Ops back through industrial systems work.",
		cover: "/covers/model.jpg",
		relatedSlugs: ["design-ops", "shipping-outcomes"]
	},
	{
		slug: "information-architecture",
		title: "Information architecture",
		lede: "People already know how to find things. Design should not fight that.",
		body: "Ambassador incentives, research networks, persona generators — the interesting problem is rarely the screen. It is the hierarchy of discovery, and whether intuition still works when the dataset is live.",
		cover: "/work/ia.png",
		relatedSlugs: [
			"information-architecture",
			"org-visibility",
			"opportunity-mapping"
		]
	},
	{
		slug: "industrial-systems",
		title: "Industrial systems",
		lede: "Mines, warehouses, and the operators who keep them honest.",
		body: "Resource accounting, total rewards, stuck orders, 3PL mismatches. The work is making complex operational truth visible enough to act on — without pretending the factory floor is a consumer app.",
		cover: "/covers/minerals.jpg",
		relatedSlugs: [
			"mine-accounting",
			"total-rewards",
			"order-management"
		]
	},
	{
		slug: "learning-environments",
		title: "Learning environments",
		lede: "Translating the tactile classroom into something that can scale.",
		body: "Twenty virtual science labs for Odysseyware. Osmosis, circuits, the gap between a physical bench and an LMS. Early proof that zero-to-one product design can still feel like a room you can think in.",
		cover: "/covers/labs.jpg",
		relatedSlugs: ["virtual-labs"]
	}
];
function Interests() {
	const { openWork } = useEmbed();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "page-wrap-wide pb-10 pt-16 md:pb-14 md:pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
					children: "Interests"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink",
						children: "Areas of inquiry."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lede leading-snug text-muted",
						children: "Not hobbies invented for a page. These are the questions that keep showing up in the published work — AI discovery, visual ergonomics, operations, industrial systems, and learning environments."
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-wrap-wide pb-24",
			children: interests.map((interest, i) => {
				const related = interest.relatedSlugs.map((slug) => getWork(slug)).filter((item) => item !== void 0);
				const primary = related[0];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid items-start gap-8 py-12 md:grid-cols-2 md:gap-14 ${i > 0 ? "border-t border-ink/8" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => primary && openWork(primary),
						className: "overflow-hidden rounded-2xl bg-fill text-left shadow-[var(--shadow-card)]",
						"aria-label": `Open work related to ${interest.title}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: interest.cover,
								alt: "",
								className: "img-cover"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-title font-semibold tracking-[-0.03em] text-ink",
							children: interest.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lede leading-snug text-muted",
							children: interest.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-body leading-relaxed text-muted",
							children: interest.body
						}),
						primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => openWork(primary),
							className: "mt-6 text-sm font-medium text-accent transition-[opacity] duration-150 hover:opacity-70",
							children: "Expand study"
						}) : null,
						related.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-6 sm:grid-cols-2",
							children: related.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, { item }, item.slug))
						}) : null
					] })]
				}, interest.slug);
			})
		})]
	});
}
//#endregion
export { Interests as component };
