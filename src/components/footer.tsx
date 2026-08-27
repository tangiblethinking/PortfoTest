import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper">
      <div className="page-wrap-wide flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
          <p className="mt-1 text-sm text-subtle">
            {profile.location} · {profile.availability}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent transition-[opacity] duration-150 hover:opacity-70"
          >
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="text-muted transition-[color] duration-150 hover:text-ink"
          >
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-[color] duration-150 hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm text-muted">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <Link to="/work" className="hover:text-ink">
            Work
          </Link>
          <Link to="/about" className="hover:text-ink">
            About
          </Link>
          <Link to="/interests" className="hover:text-ink">
            Interests
          </Link>
        </nav>
      </div>
    </footer>
  );
}
