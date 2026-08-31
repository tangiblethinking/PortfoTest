import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { FilmCard, MediaCard } from "@/components/media-card";
import { profile, metrics, capabilities } from "@/data/profile";
import { featuredWork, methodologies } from "@/data/work";
import { useEmbed } from "@/components/embed-context";
import { getWork } from "@/data/work";

export const Route = createFileRoute("/")({ component: Home });

function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPos(x * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePos(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.stopPropagation();
    updatePos(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    e.stopPropagation();
    dragging.current = false;
  };

  const showBeforeLabel = pos >= 45;
  const showAfterLabel = pos <= 55;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After image (full base) */}
      <img
        src={afterSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* Before image — full size, clipped via clip-path (no ref measurement needed) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>
      {/* Labels — hide minority side past 55% */}
      {showBeforeLabel && (
        <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-ink/70 px-2 py-1 text-caption font-medium text-night-fg transition-opacity">
          {beforeLabel}
        </span>
      )}
      {showAfterLabel && (
        <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-ink/70 px-2 py-1 text-caption font-medium text-night-fg transition-opacity">
          {afterLabel}
        </span>
      )}
      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-white shadow"
        style={{ left: `${pos}%` }}
        onPointerDown={onPointerDown}
        onClick={(e) => e.stopPropagation()}
        role="slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before after slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ink/80 shadow">
          <span className="text-xs text-white">↔</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { openWork } = useEmbed();
  const featured = featuredWork();
  const heroWork = featured.slice(0, 4);
  const methods = methodologies();
  const designOps = getWork("design-ops");

  return (
    <main id="main-content">
      <section className="page-wrap-wide pb-8 pt-16 md:pb-12 md:pt-24">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
            The Portfolio of
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-4xl text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-lede leading-snug text-muted">
            {profile.title}.
            <br />
            I'm a solutions builder.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link to="/work">View work</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href={`mailto:${profile.email}`}>Get in touch</a>
          </Button>
        </Reveal>
      </section>

      <section className="page-wrap-wide pb-16">
        <Reveal delay={240}>
          <button
            type="button"
            onClick={() => designOps && openWork(designOps)}
            className="group relative block w-full overflow-hidden rounded-2xl bg-fill text-left shadow-[var(--shadow-card)]"
            aria-label="Open featured studio image"
          >
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <BeforeAfterSlider
                beforeSrc="/covers/hero.jpg"
                afterSrc="/covers/hero_2.jpg"
                beforeLabel="what you see me do"
                afterLabel="what i really do"
                alt="Quiet studio desk with a closed laptop in north light"
              />
            </div>
          </button>
        </Reveal>
        <p className="mt-3 px-1 text-caption text-subtle">
          {profile.location} · Based on a true story · Click/Tap to see more{" "}
          {profile.availability}
        </p>
      </section>

      <section className="border-y border-ink/8 bg-surface">
        <div className="page-wrap-wide grid grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`px-4 py-8 md:px-6 ${i < metrics.length - 1 ? "md:border-r md:border-ink/8" : ""} ${i % 2 === 0 ? "border-r border-ink/8 md:border-r" : ""} ${i < 2 ? "border-b border-ink/8 md:border-b-0" : ""}`}
            >
              <p className="text-3xl font-semibold tracking-tight text-ink tabular-nums">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-ink">{metric.label}</p>
              <p className="mt-1 text-caption text-subtle">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap-wide py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
              Experience
            </p>
            <h2 className="mt-2 text-title font-semibold tracking-[-0.03em] text-ink">
              The work
            </h2>
          </div>
          <Link
            to="/work"
            className="mb-1 text-sm font-medium text-accent transition-[opacity] duration-150 hover:opacity-70"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {heroWork.map((item, i) => (
            <MediaCard
              key={item.slug}
              item={item}
              large={item.span === "wide" || i === 0}
            />
          ))}
        </div>
      </section>

      <section className="bg-night py-20 text-night-fg md:py-28">
        <div className="page-wrap-wide">
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-night-muted">
            Methodology
          </p>
          <h2 className="mt-2 max-w-2xl text-title font-semibold tracking-[-0.03em]">
            From opportunity to release
          </h2>
          <p className="mt-4 max-w-lg text-body leading-relaxed text-night-muted">
            Live HTML studies, Figma boards, and deployed prototypes. Expand any
            card to open the artifact in place.
          </p>
        </div>
        <div className="mt-10 pl-[max(1rem,calc((100%-1280px)/2+1rem))]">
          <div className="filmstrip pr-6">
            {methods.map((item) => (
              <FilmCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap-wide py-20 md:py-28">
        <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
          My Vibe
        </p>
        <h2 className="mt-2 text-title font-semibold tracking-[-0.03em] text-ink">
          What gets done.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.verb}>
              <p className="text-3xl font-semibold tracking-tight text-ink">
                {cap.verb}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {cap.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cap.body}
              </p>
              <ul className="mt-5 space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-subtle">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/8 bg-surface">
        <div className="page-wrap-wide py-20 md:py-28">
          <h2 className="max-w-2xl text-title font-semibold tracking-[-0.03em] text-ink">
            I seek opportunities to align the work that ships.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </Button>
            <Button variant="secondary" asChild>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
