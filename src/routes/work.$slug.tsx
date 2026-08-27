import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEmbed } from "@/components/embed-context";
import { getWork, work } from "@/data/work";
import { isImageUrl, toEmbedUrl } from "@/lib/embed";
import { cn } from "@/lib/utils";
import { MediaCard } from "@/components/media-card";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
});

function WorkDetail() {
  const { slug } = Route.useParams();
  const item = getWork(slug);
  const { openWork } = useEmbed();
  const [active, setActive] = useState(0);

  if (!item) {
    return (
      <main id="main-content" className="page-wrap py-24">
        <h1 className="text-title font-semibold text-ink">Not found</h1>
        <p className="mt-3 text-muted">That study is not in this archive.</p>
        <Link to="/work" className="mt-6 inline-block text-accent">
          Back to work
        </Link>
      </main>
    );
  }

  const embed = item.embeds[active];
  const related = work.filter((w) => w.slug !== item.slug).slice(0, 2);

  return (
    <main id="main-content">
      <header className="page-wrap-wide pt-10 md:pt-14">
        <Link
          to="/work"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-[color] duration-150 hover:text-ink"
        >
          <ArrowLeft className="size-4" />
          Work
        </Link>
        <p className="mt-8 text-caption text-subtle">
          {item.company} · {item.year}
        </p>
        <h1 className="mt-3 max-w-3xl text-title font-semibold tracking-[-0.03em] text-ink">
          {item.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lede leading-snug text-muted">
          {item.outcome}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-fill px-3 py-1 text-caption text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" onClick={() => openWork(item, active)}>
            Expand
          </Button>
          {embed ? (
            <Button variant="secondary" asChild>
              <a href={embed.url} target="_blank" rel="noopener noreferrer">
                Open in new tab
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </header>

      <section className="page-wrap-wide py-10 md:py-14">
        <div className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap gap-1 border-b border-ink/8 bg-paper px-3 py-2">
            {item.embeds.map((entry, index) => (
              <button
                key={`${entry.url}-${entry.label}`}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-full px-3 py-2 text-caption font-medium transition-[background-color,color] duration-150",
                  index === active
                    ? "bg-ink text-night-fg"
                    : "text-muted hover:text-ink",
                )}
              >
                {entry.label}
              </button>
            ))}
          </div>
          <div className="h-[70vh] min-h-[420px] bg-paper">
            {embed && (isImageUrl(embed.url) || embed.kind === "image") ? (
              <div className="flex h-full items-center justify-center p-6">
                <img
                  src={embed.url}
                  alt={embed.label}
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              </div>
            ) : embed ? (
              <iframe
                key={embed.url}
                src={toEmbedUrl(embed.url)}
                title={embed.label}
                className="h-full w-full border-0"
                allow="fullscreen"
                allowFullScreen
              />
            ) : null}
          </div>
        </div>
      </section>

      {item.gallery.length > 0 ? (
        <section className="page-wrap-wide grid grid-cols-1 gap-4 pb-16 md:grid-cols-2">
          {item.gallery.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => openWork(item)}
              className="overflow-hidden rounded-xl bg-fill"
            >
              <img src={src} alt="" className="img-cover aspect-[16/10]" />
            </button>
          ))}
        </section>
      ) : null}

      <section className="page-wrap-wide pb-24">
        <h2 className="text-lg font-semibold text-ink">More work</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {related.map((entry) => (
            <MediaCard key={entry.slug} item={entry} />
          ))}
        </div>
      </section>
    </main>
  );
}
