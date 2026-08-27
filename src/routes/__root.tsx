import { createRootRoute, Outlet } from "@tanstack/react-router";
import { EmbedProvider } from "@/components/embed-context";
import { EmbedSheet } from "@/components/embed-sheet";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <EmbedProvider>
      <Nav />
      <Outlet />
      <Footer />
      <EmbedSheet />
    </EmbedProvider>
  );
}
