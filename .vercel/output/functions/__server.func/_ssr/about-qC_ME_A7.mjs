import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as philosophy, o as profile, s as timeline } from "./router-CkEHzTKb.mjs";
import { t as Reveal } from "./reveal-BlgcoUS2.mjs";
import { t as Button } from "./button-DgAKhMX0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-qC_ME_A7.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "page-wrap-wide pb-12 pt-16 md:pb-16 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
						children: "About"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink",
							children: [
								profile.name.split(" ")[0],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								profile.name.split(" ")[1]
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl text-lede leading-snug text-muted",
							children: [profile.title, ". Aligning design outcomes with executive goals, running complex discovery, and shaping long-term product roadmaps."]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-wrap-wide pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-fill",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/9] md:aspect-[21/9]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/covers/desert.jpg",
							alt: "Pale concrete pavilion in desert light",
							className: "img-cover"
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide grid gap-10 pb-20 md:grid-cols-[0.8fr_1.2fr] md:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
					children: "Profile"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-body leading-relaxed text-ink",
						children: profile.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-body leading-relaxed text-muted",
						children: profile.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm text-subtle",
						children: [
							profile.location,
							" · ",
							profile.availability
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink/8 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap-wide py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
							children: "Philosophy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-xl text-title font-semibold tracking-[-0.03em] text-ink",
							children: "Visual ergonomics. Function is a requirement of aesthetics."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-px overflow-hidden rounded-xl bg-ink/8 md:grid-cols-2",
							children: philosophy.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-caption text-subtle",
										children: item.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-semibold text-ink",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: item.body
									})
								]
							}, item.n))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-wrap-wide py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-title font-semibold tracking-[-0.03em] text-ink",
					children: "11+ years across e-commerce, enterprise, and industrial."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12",
					children: timeline.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 border-t border-ink/8 py-8 md:grid-cols-[220px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-ink",
							children: job.period
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-caption text-subtle",
							children: job.location
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-caption text-subtle",
								children: job.company
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg font-semibold text-ink",
								children: job.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: job.wins.map((win) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm leading-relaxed text-muted",
									children: win
								}, win))
							})
						] })]
					}, `${job.company}-${job.period}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink/8 bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-wrap-wide grid gap-10 py-16 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
							children: "Education"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-semibold text-ink",
							children: profile.education.degree
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: profile.education.school
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-subtle",
							children: [
								profile.education.years,
								" · ",
								profile.education.place
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-caption font-medium uppercase tracking-[0.16em] text-subtle",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "mt-3 block text-xl font-semibold text-ink transition-[color] duration-150 hover:text-accent",
							children: profile.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								profile.phone,
								" · ",
								profile.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.linkedin,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "LinkedIn"
								})
							})
						})
					] })]
				})
			})
		]
	});
}
//#endregion
export { About as component };
