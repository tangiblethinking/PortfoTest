import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Embed, WorkItem } from "@/data/work";

export type EmbedSession = {
  title: string;
  subtitle?: string;
  embeds: Embed[];
  index: number;
};

type EmbedContextValue = {
  session: EmbedSession | null;
  openWork: (item: WorkItem, index?: number) => void;
  openEmbeds: (session: EmbedSession) => void;
  setIndex: (index: number) => void;
  close: () => void;
};

const EmbedContext = createContext<EmbedContextValue | null>(null);

export function EmbedProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<EmbedSession | null>(null);

  const openWork = useCallback((item: WorkItem, index = 0) => {
    setSession({
      title: item.title,
      subtitle: `${item.company} · ${item.year}`,
      embeds: item.embeds,
      index,
    });
  }, []);

  const openEmbeds = useCallback((next: EmbedSession) => {
    setSession(next);
  }, []);

  const setIndex = useCallback((index: number) => {
    setSession((current) => (current ? { ...current, index } : current));
  }, []);

  const close = useCallback(() => setSession(null), []);

  const value = useMemo(
    () => ({ session, openWork, openEmbeds, setIndex, close }),
    [session, openWork, openEmbeds, setIndex, close],
  );

  return (
    <EmbedContext.Provider value={value}>{children}</EmbedContext.Provider>
  );
}

export function useEmbed() {
  const ctx = useContext(EmbedContext);
  if (!ctx) {
    throw new Error("useEmbed must be used within EmbedProvider");
  }
  return ctx;
}
