//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-D0DBD3uf.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/about",
			"/interests",
			"/work"
		],
		preloads: ["/assets/index-OOk6VT5G.js", "/assets/utils-BFmSEvC8.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-OOk6VT5G.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-DHafFdBe.js",
			"/assets/reveal-CRwY7g7A.js",
			"/assets/button-CCJA79Mr.js",
			"/assets/work-Cr6ixccs.js"
		]
	},
	"/about": {
		filePath: "/workspace/src/routes/about.tsx",
		children: void 0,
		preloads: [
			"/assets/about-BEWNqncf.js",
			"/assets/reveal-CRwY7g7A.js",
			"/assets/button-CCJA79Mr.js"
		]
	},
	"/interests": {
		filePath: "/workspace/src/routes/interests.tsx",
		children: void 0,
		preloads: [
			"/assets/interests-dmvsgNhm.js",
			"/assets/reveal-CRwY7g7A.js",
			"/assets/work-Cr6ixccs.js"
		]
	},
	"/work": {
		filePath: "/workspace/src/routes/work.tsx",
		children: ["/work/$slug"],
		preloads: [
			"/assets/work-Cz4do5Xr.js",
			"/assets/reveal-CRwY7g7A.js",
			"/assets/work-Cr6ixccs.js"
		]
	},
	"/work/$slug": {
		filePath: "/workspace/src/routes/work.$slug.tsx",
		children: void 0,
		preloads: ["/assets/work._slug-CqjVJSOL.js", "/assets/button-CCJA79Mr.js"]
	}
} });
//#endregion
export { tsrStartManifest };
