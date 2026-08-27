import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ArrowLeft, r as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as cn, d as useEmbed, l as isImageUrl, n as Route, u as toEmbedUrl } from "./router-CkEHzTKb.mjs";
import { t as Button } from "./button-DgAKhMX0.mjs";
import { i as getWork, n as MediaCard, o as work } from "./work-CSZegCPE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-Xk5HQt8y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkDetail() {
	const { slug } = Route.useParams();
	const item = getWork(slug);
	const { openWork } = useEmbed();
	const [active, setActive] = (0, import_react.useState)(0);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		className: "page-wrap py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-title font-semibold text-ink",
				children: "Not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That study is not in this archive."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/work",
				className: "mt-6 inline-block text-accent",
				children: "Back to work"
			})
		]
	});
	const embed = item.embeds[active];
	const related = work.filter((w) => w.slug !== item.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "page-wrap-wide pt-10 md:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work",
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-[color] duration-150 hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Work"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-caption text-subtle",
						children: [
							item.company,
							" · ",
							item.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl text-title font-semibold tracking-[-0.03em] text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lede leading-snug text-muted",
						children: item.outcome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-fill px-3 py-1 text-caption text-muted",
							children: tag
						}, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => openWork(item, active),
							children: "Expand"
						}), embed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: embed.url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Open in new tab", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						}) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-wrap-wide py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1 border-b border-ink/8 bg-paper px-3 py-2",
						children: item.embeds.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(index),
							className: cn("rounded-full px-3 py-2 text-caption font-medium transition-[background-color,color] duration-150", index === active ? "bg-ink text-night-fg" : "text-muted hover:text-ink"),
							children: entry.label
						}, `${entry.url}-${entry.label}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[70vh] min-h-[420px] bg-paper",
						children: embed && (isImageUrl(embed.url) || embed.kind === "image") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-full items-center justify-center p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: embed.url,
								alt: embed.label,
								className: "max-h-full max-w-full rounded-lg object-contain"
							})
						}) : embed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: toEmbedUrl(embed.url),
							title: embed.label,
							className: "h-full w-full border-0",
							allow: "fullscreen",
							allowFullScreen: true
						}, embed.url) : null
					})]
				})
			}),
			item.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-wrap-wide grid grid-cols-1 gap-4 pb-16 md:grid-cols-2",
				children: item.gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openWork(item),
					className: "overflow-hidden rounded-xl bg-fill",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "img-cover aspect-[16/10]"
					})
				}, src))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold text-ink",
					children: "More work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-8 md:grid-cols-2",
					children: related.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, { item: entry }, entry.slug))
				})]
			})
		]
	});
}
//#endregion
export { WorkDetail as component };
