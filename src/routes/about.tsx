import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile, philosophy, timeline } from "@/data/profile";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <main id="main-content">
      <header className="page-wrap-wide pb-12 pt-16 md:pb-16 md:pt-24">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
            About
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 text-display font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            {profile.name.split(" ")[0]}
            <br />
            {profile.name.split(" ")[1]}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-lede leading-snug text-muted">
            {profile.title}
          </p>
        </Reveal>
      </header>

      <section className="page-wrap-wide pb-16">
        <div className="overflow-hidden rounded-2xl bg-fill">
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src="/covers/desert.jpg"
              alt="Pale concrete pavilion in desert light"
              className="img-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-wrap-wide grid gap-10 pb-20 md:grid-cols-[0.8fr_1.2fr] md:pb-28">
        <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
          Craft and Candor
        </p>
        <div>
          <p className="text-body leading-relaxed text-ink">{profile.lede}</p>
          <p className="mt-5 text-body leading-relaxed text-muted">
            {profile.summary}
          </p>
          <p className="mt-5 text-sm text-subtle">
            {profile.location} · {profile.availability}
          </p>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-surface">
        <div className="page-wrap-wide py-20 md:py-28">
          <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
            Diligence and Execution
          </p>
          <h2 className="mt-2 max-w-xl text-title font-semibold tracking-[-0.03em] text-ink">
           A fundamental mindset for directness
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-ink/8 md:grid-cols-2">
            {philosophy.map((item) => (
              <div key={item.n} className="bg-surface p-8">
                <p className="text-caption text-subtle">{item.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap-wide py-20 md:py-28">
        <h2 className="text-title font-semibold tracking-[-0.03em] text-ink">
          13+ years with Business Models, Targeted Markets, and Delivery plaforms.
        </h2>
        <ol className="mt-12">
          {timeline.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-4 border-t border-ink/8 py-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-ink">{job.period}</p>
                <p className="mt-1 text-caption text-subtle">{job.location}</p>
              </div>
              <div>
                <p className="text-caption text-subtle">{job.company}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2">
                  {job.wins.map((win) => (
                    <li
                      key={win}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {win}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-ink/8 bg-surface">
        <div className="page-wrap-wide grid gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
              Education
            </p>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              {profile.education.degree}
            </h3>
            <p className="mt-1 text-muted">{profile.education.school}</p>
            <p className="mt-1 text-sm text-subtle">
              {profile.education.years} · {profile.education.place}
            </p>
          </div>
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.16em] text-subtle">
              Contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block text-xl font-semibold text-ink transition-[color] duration-150 hover:text-accent"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-muted">
              {profile.phone} · {profile.location}
            </p>
            <div className="mt-5">
              <Button asChild variant="secondary">
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
        </div>
      </section>
    </main>
  );
}
