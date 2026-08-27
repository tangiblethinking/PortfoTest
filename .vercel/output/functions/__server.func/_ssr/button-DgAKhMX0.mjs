import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { s as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn } from "./router-CkEHzTKb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DgAKhMX0.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-1.5 font-medium select-none whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] transition-[scale,background-color,color,opacity] duration-150 ease-out", {
	variants: { variant: {
		primary: "bg-accent text-accent-fg hover:bg-accent-hover rounded-full px-5 min-h-11 text-sm",
		secondary: "bg-fill text-ink hover:bg-fill-hover rounded-full px-5 min-h-11 text-sm",
		ghost: "text-accent hover:opacity-70 min-h-11 px-1 text-sm bg-transparent",
		night: "bg-night-fg text-night hover:opacity-90 rounded-full px-5 min-h-11 text-sm"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Button as t };
