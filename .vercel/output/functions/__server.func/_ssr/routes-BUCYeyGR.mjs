import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as useEmbed, i as metrics, o as profile, r as capabilities } from "./router-CkEHzTKb.mjs";
import { t as Reveal } from "./reveal-BlgcoUS2.mjs";
import { t as Button } from "./button-DgAKhMX0.mjs";
import { a as methodologies, i as getWork, n as MediaCard, r as featuredWork, t as FilmCard } from "./work-CSZegCPE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUCYeyGR.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { openWork } = useEmbed();
	const heroWork = featuredWork().slice(0, 4);
	const methods = methodologies();
	const designOps = getWork("design-ops");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide pb-8 pt-16 md:pb-12 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Portfolio"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-4xl text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink",
							children: profile.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-lede leading-snug text-muted",
							children: [
								profile.title,
								".",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Strategy, systems, and shipped product."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								children: "View work"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${profile.email}`,
								children: "Get in touch"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => designOps && openWork(designOps),
						className: "group relative block w-full overflow-hidden rounded-2xl bg-fill text-left shadow-[var(--shadow-card)]",
						"aria-label": "Open featured studio image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] md:aspect-[21/9]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/covers/hero.jpg",
								alt: "Quiet studio desk with a closed laptop in north light",
								className: "img-cover transition-[transform] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 px-1 text-caption text-subtle",
					children: [
						profile.location,
						" · Available for Director-level roles ·",
						" ",
						profile.availability
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink/8 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "page-wrap-wide grid grid-cols-2 md:grid-cols-4",
					children: metrics.map((metric, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `px-4 py-8 md:px-6 ${i < metrics.length - 1 ? "md:border-r md:border-ink/8" : ""} ${i % 2 === 0 ? "border-r border-ink/8 md:border-r" : ""} ${i < 2 ? "border-b border-ink/8 md:border-b-0" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-semibold tracking-tight text-ink tabular-nums",
								children: metric.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink",
								children: metric.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-caption text-subtle",
								children: metric.detail
							})
						]
					}, metric.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Selected"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-title font-semibold tracking-[-0.03em] text-ink",
						children: "The work."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "mb-1 text-sm font-medium text-accent transition-[opacity] duration-150 hover:opacity-70",
						children: "See all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-8 md:grid-cols-2",
					children: heroWork.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, {
						item,
						large: item.span === "wide" || i === 0
					}, item.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-night py-20 text-night-fg md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap-wide",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption font-medium uppercase tracking-[0.16em] text-night-muted",
							children: "Methodology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-2xl text-title font-semibold tracking-[-0.03em]",
							children: "From opportunity to release."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-body leading-relaxed text-night-muted",
							children: "Live HTML studies, Figma boards, and deployed prototypes. Expand any card to open the artifact in place."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 pl-[max(1rem,calc((100%-1280px)/2+1rem))]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "filmstrip pr-6",
						children: methods.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmCard, { item }, item.slug))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Practice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-title font-semibold tracking-[-0.03em] text-ink",
						children: "What gets done."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-10 md:grid-cols-3",
						children: capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-semibold tracking-tight text-ink",
								children: cap.verb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold text-ink",
								children: cap.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: cap.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: cap.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-subtle",
									children: item
								}, item))
							})
						] }, cap.verb))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink/8 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap-wide py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl text-title font-semibold tracking-[-0.03em] text-ink",
						children: "Where there is opportunity, align the work that ships."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${profile.email}`,
								children: profile.email
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: profile.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "LinkedIn"
							})
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
