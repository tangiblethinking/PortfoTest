import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MediaCard } from "@/components/media-card";
import { Reveal } from "@/components/reveal";
import { work, type WorkKind } from "@/data/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({ component: WorkPage });

const filters: { id: "all" | WorkKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "case-study", label: "Case studies" },
  { id: "methodology", label: "Methodology" },
];

function WorkPage() {
  const [filter, setFilter] = useState<"all" | WorkKind>("all");
  const items = useMemo(
    () =>
      filter === "all" ? work : work.filter((item) => item.kind === filter),
    [filter],
  );

  return (
    <main id="main-content">
      <header className="page-wrap-wide pb-8 pt-16 md:pb-12 md:pt-24">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
            Work
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            Case studies
            <br />
            and artifacts.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-lede leading-snug text-muted">
            Expand any card to open the HTML study, live deployment, Figma
            board, or prototype in place.
          </p>
        </Reveal>
        <div
          className="mt-8 inline-flex rounded-full bg-fill p-1"
          role="tablist"
          aria-label="Filter work"
        >
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color] duration-150",
                filter === item.id
                  ? "bg-surface text-ink shadow-[var(--shadow-card)]"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <section className="page-wrap-wide grid grid-cols-1 gap-x-6 gap-y-12 pb-24 md:grid-cols-2">
        {items.map((item, i) => (
          <MediaCard
            key={item.slug}
            item={item}
            large={item.featured && i % 3 === 0}
          />
        ))}
      </section>
    </main>
  );
}
