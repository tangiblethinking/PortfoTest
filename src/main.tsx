import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

const PASSWORD = "12345";

const router = createRouter({
  routeTree,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function PasswordGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false);
  const [input, setInput] = useState("");

  if (ok) return <>{children}</>;

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f7",
      fontFamily: "system-ui, sans-serif",
    }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input === PASSWORD) setOk(true);
        }}
        style={{ display: "flex", flexDirection: "column", gap: 12, width: 280 }}
      >
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{ padding: "10px 12px", fontSize: 16, border: "1px solid #ccc", borderRadius: 8 }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: 16, borderRadius: 8, cursor: "pointer" }}>
          Enter
        </button>
      </form>
    </div>
  );
}

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <PasswordGate>
      <RouterProvider router={router} />
    </PasswordGate>
  </StrictMode>,
);
