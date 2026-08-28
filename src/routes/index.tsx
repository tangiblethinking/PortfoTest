import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { FilmCard, MediaCard } from "@/components/media-card";
import { profile, metrics, capabilities } from "@/data/profile";
import { featuredWork, methodologies } from "@/data/work";
import { useEmbed } from "@/components/embed-context";
import { getWork } from "@/data/work";

export const Route = createFileRoute("/")({ component: Home });

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
            Strategy, systems, and shipped product.
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
              <img
                src="/covers/hero.jpg"
                alt="Quiet studio desk with a closed laptop in north light"
                className="h-full w-full object-contain transition-[transform] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
              />
            </div>
          </button>
        </Reveal>
        <p className="mt-3 px-1 text-caption text-subtle">
          {profile.location} · Available for Director-level roles ·{" "}
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
              Selected
            </p>
            <h2 className="mt-2 text-title font-semibold tracking-[-0.03em] text-ink">
              The work.
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
            From opportunity to release.
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
          Practice
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
            Where there is opportunity, align the work that ships.
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
