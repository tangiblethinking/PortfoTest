import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TriangleAlert, r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CkEHzTKb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var EmbedContext = (0, import_react.createContext)(null);
function EmbedProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const openWork = (0, import_react.useCallback)((item, index = 0) => {
		setSession({
			title: item.title,
			subtitle: `${item.company} · ${item.year}`,
			embeds: item.embeds,
			index
		});
	}, []);
	const openEmbeds = (0, import_react.useCallback)((next) => {
		setSession(next);
	}, []);
	const setIndex = (0, import_react.useCallback)((index) => {
		setSession((current) => current ? {
			...current,
			index
		} : current);
	}, []);
	const close = (0, import_react.useCallback)(() => setSession(null), []);
	const value = (0, import_react.useMemo)(() => ({
		session,
		openWork,
		openEmbeds,
		setIndex,
		close
	}), [
		session,
		openWork,
		openEmbeds,
		setIndex,
		close
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmbedContext.Provider, {
		value,
		children
	});
}
function useEmbed() {
	const ctx = (0, import_react.useContext)(EmbedContext);
	if (!ctx) throw new Error("useEmbed must be used within EmbedProvider");
	return ctx;
}
function toEmbedUrl(url) {
	if (!url || typeof url !== "string") return url;
	if (url.includes("embed.figma.com") || url.includes("figma.com/embed")) return url;
	if (!url.includes("figma.com")) return url;
	try {
		const parsed = new URL(url);
		const match = parsed.pathname.match(/^\/(design|board|proto|file|slides|deck)\/([a-zA-Z0-9]+)/);
		if (match) {
			const type = match[1] === "file" ? "design" : match[1];
			const fileKey = match[2];
			const params = new URLSearchParams();
			params.set("embed-host", "share");
			const nodeId = parsed.searchParams.get("node-id");
			const start = parsed.searchParams.get("starting-point-node-id");
			const pageId = parsed.searchParams.get("page-id");
			if (nodeId) params.set("node-id", nodeId);
			if (start) params.set("starting-point-node-id", start);
			if (pageId) params.set("page-id", pageId);
			return `https://embed.figma.com/${type}/${fileKey}?${params.toString()}`;
		}
		return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
	} catch {
		return url;
	}
}
function isImageUrl(url) {
	return /\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(url);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function EmbedSheet() {
	const { session, setIndex, close } = useEmbed();
	const open = session !== null;
	const active = session?.embeds[session.index];
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
	}, [active?.url]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (!session) return;
			if (event.key === "ArrowRight") setIndex((session.index + 1) % session.embeds.length);
			if (event.key === "ArrowLeft") setIndex((session.index - 1 + session.embeds.length) % session.embeds.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		session,
		setIndex
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => !next && close(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-[rise_200ms_var(--ease-out)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-3 z-50 flex flex-col overflow-hidden rounded-xl bg-surface shadow-sheet outline-none md:inset-6 md:rounded-2xl",
			"aria-describedby": void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-12 shrink-0 items-center gap-3 border-b border-ink/8 px-3 md:h-14 md:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "min-w-0 flex-1 truncate text-sm font-semibold text-ink",
							children: [session?.title, session?.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-normal text-muted",
								children: session.subtitle
							}) : null]
						}),
						session && session.embeds.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center rounded-full bg-fill p-0.5 sm:flex",
							children: session.embeds.map((embed, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIndex(index),
								className: cn("rounded-full px-3 py-1.5 text-caption font-medium transition-[background-color,color] duration-150", index === session.index ? "bg-surface text-ink shadow-card" : "text-muted hover:text-ink"),
								children: embed.label
							}, `${embed.url}-${embed.label}`))
						}) : null,
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: active.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex size-11 items-center justify-center rounded-full text-muted transition-[background-color,color] duration-150 hover:bg-fill hover:text-ink",
							"aria-label": "Open in new tab",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "inline-flex size-11 items-center justify-center rounded-full text-muted transition-[background-color,color] duration-150 hover:bg-fill hover:text-ink",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}),
				session && session.embeds.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto px-3 py-2 sm:hidden",
					children: session.embeds.map((embed, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIndex(index),
						className: cn("shrink-0 rounded-full px-3 py-2 text-caption font-medium", index === session.index ? "bg-ink text-night-fg" : "bg-fill text-muted"),
						children: embed.label
					}, `m-${embed.url}-${embed.label}`))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-0 flex-1 bg-paper",
					children: active ? isImageUrl(active.url) || active.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center overflow-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active.url,
							alt: active.label,
							className: "max-h-full max-w-full rounded-lg object-contain"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center text-sm text-subtle",
						children: "Loading"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: toEmbedUrl(active.url),
						title: active.label,
						className: cn("h-full w-full border-0 bg-surface transition-[opacity] duration-300", loaded ? "opacity-100" : "opacity-0"),
						allow: "fullscreen",
						allowFullScreen: true,
						onLoad: () => setLoaded(true)
					}, active.url)] }) : null
				})
			]
		})] })
	});
}
var profile = {
	name: "Christopher Kenreigh",
	short: "CK",
	title: "Director of UX & Product Design",
	location: "Phoenix, AZ · USA",
	availability: "Remote, hybrid, or relocation",
	email: "c.kenreigh@gmail.com",
	phone: "480-206-2145",
	phoneHref: "tel:+14802062145",
	linkedin: "https://www.linkedin.com/in/kenreigh/",
	site: "https://uxapex.com/",
	lede: "I partner with founders, product leaders, and engineering teams to turn ambiguous problems into clear product direction — and then into shipped experiences that move the metrics that matter.",
	summary: "Design executive with 11+ years leading end-to-end digital product experiences across e-commerce, enterprise, and industrial environments. Builds and directs design organizations that translate complex strategy into measurable business outcomes — retention, conversion, and revenue.",
	education: {
		degree: "Bachelor of Arts",
		school: "The Art Institute of Phoenix",
		years: "2002 – 2005",
		place: "Phoenix, AZ"
	}
};
var metrics = [
	{
		value: "43%",
		label: "Checkout abandonment reduced",
		detail: "Plexus Worldwide"
	},
	{
		value: "60%",
		label: "Tool consolidation efficiency",
		detail: "Design Ops · 6 → 1"
	},
	{
		value: "35%",
		label: "Sprint velocity increase",
		detail: "AI-augmented workflows"
	},
	{
		value: "11+",
		label: "Years in product design",
		detail: "e-Com · Enterprise · Industrial"
	}
];
var philosophy = [
	{
		n: "01",
		title: "Design is a business function.",
		body: "Every design decision must be defensible in business terms. Work is measured in retention, conversion, and revenue — not pixels or deliverables."
	},
	{
		n: "02",
		title: "Systems before screens.",
		body: "The most leveraged thing a design leader can build is the infrastructure that makes great design repeatable. Systems, critique, and research compound. Screens do not."
	},
	{
		n: "03",
		title: "Lead by teaching.",
		body: "Feedback should build judgment, not just correct work. The goal is designers who graduate from needing approval to making the call themselves."
	},
	{
		n: "04",
		title: "Ambiguity is the job.",
		body: "Director-level work is converting strategic fog into a direction a team can execute. Requirements will be incomplete. The answer is structure, not certainty."
	}
];
var timeline = [
	{
		period: "2024 – Present",
		role: "Principal Product Designer",
		company: "Plexus Worldwide",
		location: "Phoenix, AZ · Office",
		wins: [
			"43% reduction in checkout abandonment",
			"Launched 3 international e-commerce regions",
			"Consolidated 6 tools into 1 unified design system",
			"35% sprint velocity increase via LLM tooling"
		]
	},
	{
		period: "2023 – 2024",
		role: "UX Consultant",
		company: "Independent Practice",
		location: "Remote",
		wins: ["UX strategy and design systems consulting", "Deepened AI-augmented design workflow practice"]
	},
	{
		period: "2022 – 2023",
		role: "Senior Product Designer",
		company: "Freeport-McMoRan",
		location: "Phoenix, AZ · Hybrid",
		wins: [
			"30% improvement in mining worker efficiency",
			"Scalable UI system across 3 platforms",
			"Five major releases through C-suite roadmaps"
		]
	},
	{
		period: "2021 – 2022",
		role: "Senior Product Designer",
		company: "OpenTech Alliance",
		location: "Phoenix, AZ · Hybrid",
		wins: ["75% increase in POS completion rates", "25% e-commerce fulfillment improvement"]
	},
	{
		period: "2020 – 2021",
		role: "UX Design Operator",
		company: "Siemens",
		location: "Phoenix, AZ · Remote",
		wins: ["50% reduction in internal data dissemination friction", "Unified design systems across 4 industrial projects"]
	},
	{
		period: "2014 – 2019",
		role: "Senior UX Designer",
		company: "Glynlyon Inc",
		location: "Phoenix, AZ · Office",
		wins: [
			"65% increase in product ease of use",
			"WCAG and ADA compliance across platforms",
			"Lead designer for Virtual Lab Environments"
		]
	}
];
var capabilities = [
	{
		verb: "Lead",
		headline: "Grow design organizations.",
		body: "Recruiting, mentoring, critique, and the culture where designers do their best work.",
		items: [
			"Team structure and hiring",
			"Design critique systems",
			"1:1 development",
			"Cross-functional alignment"
		]
	},
	{
		verb: "Build",
		headline: "Architect systems, not screens.",
		body: "Design systems, tooling, process, and research infrastructure that lets teams move without fragmenting.",
		items: [
			"Design systems architecture",
			"Design operations",
			"AI-augmented workflows",
			"Component governance"
		]
	},
	{
		verb: "Ship",
		headline: "Translate strategy into outcomes.",
		body: "From product vision to launched experience — research, alignment, testing, and the numbers that follow.",
		items: [
			"UX strategy and roadmapping",
			"e-Commerce optimization",
			"Usability and A/B testing",
			"Multi-region launches"
		]
	}
];
var links = [
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/interests",
		label: "Interests"
	}
];
function Nav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main-content",
			className: "absolute left-4 top-0 z-[100] -translate-y-full rounded-b-md bg-accent px-4 py-3 text-sm font-medium text-accent-fg focus:translate-y-0",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: cn("sticky top-0 z-40 h-12 nav-blur", scrolled && "shadow-[0_1px_0_rgb(0_0_0_/_0.08)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Primary",
				className: "page-wrap-wide flex h-full items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-[15px] font-semibold tracking-tight text-ink",
						"aria-label": `${profile.name} — Home`,
						children: profile.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-8 md:flex",
						children: [links.map((link) => {
							const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								"aria-current": active ? "page" : void 0,
								className: cn("text-[12px] font-normal tracking-wide transition-[opacity,color] duration-150", active ? "text-ink" : "text-muted hover:text-ink"),
								children: link.label
							}, link.to);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "text-[12px] font-medium text-accent transition-[opacity] duration-150 hover:opacity-70",
							children: "Contact"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex w-5 flex-col gap-1.5",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-ink transition-[transform,opacity] duration-200", open && "translate-y-[7px] rotate-45") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-ink transition-[opacity] duration-200", open && "opacity-0") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-ink transition-[transform,opacity] duration-200", open && "-translate-y-[7px] -rotate-45") })
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-0 z-30 flex flex-col justify-center bg-paper px-6 transition-[opacity] duration-300 md:hidden", open ? "opacity-100" : "pointer-events-none opacity-0"),
			"aria-hidden": !open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: "py-2 text-4xl font-semibold tracking-tight text-ink",
					children: link.label
				}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${profile.email}`,
					className: "py-2 text-4xl font-semibold tracking-tight text-muted",
					children: "Contact"
				})]
			})
		})
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-ink/8 bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap-wide flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-ink",
						children: profile.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: profile.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-subtle",
						children: [
							profile.location,
							" · ",
							profile.availability
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "text-accent transition-[opacity] duration-150 hover:opacity-70",
							children: profile.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.phoneHref,
							className: "text-muted transition-[color] duration-150 hover:text-ink",
							children: profile.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-muted transition-[color] duration-150 hover:text-ink",
							children: "LinkedIn"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					className: "flex gap-6 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-ink",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "hover:text-ink",
							children: "Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/interests",
							className: "hover:text-ink",
							children: "Interests"
						})
					]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-DkYAxRV3.css";
var APP_NAME = "Christopher Kenreigh";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Portfolio of Christopher Kenreigh, Director of UX & Product Design. Case studies, deployments, and design methodology."
			},
			{
				name: "theme-color",
				content: "#f5f5f7"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper text-ink antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmbedProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmbedSheet, {})
				] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-BUCYeyGR.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-qC_ME_A7.mjs");
var Route$3 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./interests-BZVhL6SS.mjs");
var Route$2 = createFileRoute("/interests")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./work-B_LVPcxg.mjs");
var Route$1 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./work._slug-Xk5HQt8y.mjs");
var Route = createFileRoute("/work/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var InterestsRoute = Route$2.update({
	id: "/interests",
	path: "/interests",
	getParentRoute: () => Route$5
});
var WorkRoute = Route$1.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$5
});
var WorkRouteChildren = { WorkSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => WorkRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	InterestsRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { philosophy as a, cn as c, useEmbed as d, metrics as i, isImageUrl as l, Route as n, profile as o, capabilities as r, timeline as s, router_exports as t, toEmbedUrl as u };
