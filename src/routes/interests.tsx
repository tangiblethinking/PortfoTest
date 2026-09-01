import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { useEmbed } from "@/components/embed-context";
import { interests } from "@/data/interests";
import { getWork } from "@/data/work";
import { MediaCard } from "@/components/media-card";

export const Route = createFileRoute("/interests")({ component: Interests });

function Interests() {
  const { openWork } = useEmbed();

  return (
    <main id="main-content">
      <header className="page-wrap-wide pb-10 pt-16 md:pb-14 md:pt-24">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
            I have...
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-3xl text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            Insatiable Curiosity
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-lede leading-snug text-muted">
            It's not a choice. I ask questions. It drives me to think with precision.
            No matter what I do, I build solutions that are purposed with function through design.
          </p>
        </Reveal>
      </header>

      <div className="page-wrap-wide pb-24">
        {interests.map((interest, i) => {
          const related = interest.relatedSlugs
            .map((slug) => getWork(slug))
            .filter((item) => item !== undefined);
          const primary = related[0];

          return (
            <article
              key={interest.slug}
              className={`grid items-start gap-8 py-12 md:grid-cols-2 md:gap-14 ${i > 0 ? "border-t border-ink/8" : ""}`}
            >
              <button
                type="button"
                onClick={() => primary && openWork(primary)}
                className="overflow-hidden rounded-2xl bg-fill text-left shadow-[var(--shadow-card)]"
                aria-label={`Open work related to ${interest.title}`}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={interest.cover}
                    alt=""
                    className="img-cover"
                  />
                </div>
              </button>
              <div>
                <h2 className="text-title font-semibold tracking-[-0.03em] text-ink">
                  {interest.title}
                </h2>
                <p className="mt-3 text-lede leading-snug text-muted">
                  {interest.lede}
                </p>
                <p className="mt-4 text-body leading-relaxed text-muted">
                  {interest.body}
                </p>
                {primary ? (
                  <button
                    type="button"
                    onClick={() => openWork(primary)}
                    className="mt-6 text-sm font-medium text-accent transition-[opacity] duration-150 hover:opacity-70"
                  >
                    Expand study
                  </button>
                ) : null}
                {related.length > 1 ? (
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {related.slice(1).map((item) => (
                      <MediaCard key={item.slug} item={item} />
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
