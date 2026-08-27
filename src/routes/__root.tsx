import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { EmbedProvider } from "@/components/embed-context";
import { EmbedSheet } from "@/components/embed-sheet";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import appCss from "../styles.css?url";

const APP_NAME = "Christopher Kenreigh";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Portfolio of Christopher Kenreigh, Director of UX & Product Design. Case studies, deployments, and design methodology.",
      },
      { name: "theme-color", content: "#f5f5f7" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <EmbedProvider>
            <Nav />
            <Outlet />
            <Footer />
            <EmbedSheet />
          </EmbedProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
