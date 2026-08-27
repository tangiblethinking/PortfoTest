import { Link } from "@tanstack/react-router";
import { useEmbed } from "@/components/embed-context";
import type { WorkItem } from "@/data/work";
import { cn } from "@/lib/utils";

export function MediaCard({
  item,
  large = false,
  className,
}: {
  item: WorkItem;
  large?: boolean;
  className?: string;
}) {
  const { openWork } = useEmbed();

  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <button
        type="button"
        onClick={() => openWork(item)}
        aria-label={`Open ${item.title}`}
        className="relative overflow-hidden rounded-xl bg-fill text-left shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 ease-[var(--ease-out)] hover:shadow-[var(--shadow-lift)]"
      >
        <div
          className={cn(
            "overflow-hidden",
            large ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <img
            src={item.cover}
            alt=""
            className="img-cover transition-[transform] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]"
          />
        </div>
        <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-night/35 via-transparent to-transparent opacity-0 transition-[opacity] duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-4 left-4 text-caption font-medium text-night-fg opacity-0 transition-[opacity] duration-300 group-hover:opacity-100">
          View
        </span>
      </button>
      <div className="flex flex-1 flex-col px-1 pt-3">
        <p className="text-caption text-subtle">
          {item.company} · {item.year}
        </p>
        <h3 className="mt-1 text-[17px] font-semibold tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
          {item.subtitle}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <button
            type="button"
            onClick={() => openWork(item)}
            className="text-sm font-medium text-accent transition-[opacity] duration-150 hover:opacity-70"
          >
            Expand
          </button>
          <Link
            to="/work/$slug"
            params={{ slug: item.slug }}
            className="text-sm font-medium text-muted transition-[color] duration-150 hover:text-ink"
          >
            Open page
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FilmCard({ item }: { item: WorkItem }) {
  const { openWork } = useEmbed();
  return (
    <button
      type="button"
      onClick={() => openWork(item)}
      className="w-[78vw] max-w-sm overflow-hidden rounded-xl bg-surface text-left shadow-[var(--shadow-card)] md:w-[360px]"
      aria-label={`Open ${item.title}`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-fill">
        <img src={item.cover} alt="" className="img-cover" />
      </div>
      <div className="px-4 py-3">
        <p className="text-caption text-subtle">{item.company}</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{item.title}</p>
      </div>
    </button>
  );
}
