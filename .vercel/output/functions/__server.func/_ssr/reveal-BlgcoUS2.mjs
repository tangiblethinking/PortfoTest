import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cn } from "./router-CkEHzTKb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-BlgcoUS2.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const style = { animationDelay: `${delay}ms` };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: cn("reveal", className),
		style,
		children
	});
}
//#endregion
export { Reveal as t };
