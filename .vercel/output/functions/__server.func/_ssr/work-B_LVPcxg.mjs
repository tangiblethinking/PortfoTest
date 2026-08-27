import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cn } from "./router-CkEHzTKb.mjs";
import { t as Reveal } from "./reveal-BlgcoUS2.mjs";
import { n as MediaCard, o as work } from "./work-CSZegCPE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-B_LVPcxg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "case-study",
		label: "Case studies"
	},
	{
		id: "methodology",
		label: "Methodology"
	}
];
function WorkPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => filter === "all" ? work : work.filter((item) => item.kind === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "page-wrap-wide pb-8 pt-16 md:pb-12 md:pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
					children: "Work"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink",
						children: [
							"Case studies",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"and artifacts."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lede leading-snug text-muted",
						children: "Expand any card to open the HTML study, live deployment, Figma board, or prototype in place."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 inline-flex rounded-full bg-fill p-1",
					role: "tablist",
					"aria-label": "Filter work",
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === item.id,
						onClick: () => setFilter(item.id),
						className: cn("rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color] duration-150", filter === item.id ? "bg-surface text-ink shadow-[var(--shadow-card)]" : "text-muted hover:text-ink"),
						children: item.label
					}, item.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-wrap-wide grid grid-cols-1 gap-x-6 gap-y-12 pb-24 md:grid-cols-2",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, {
				item,
				large: item.featured && i % 3 === 0
			}, item.slug))
		})]
	});
}
//#endregion
export { WorkPage as component };
