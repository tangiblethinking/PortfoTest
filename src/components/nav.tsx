import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/interests", label: "Talents" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-b-md bg-accent px-4 py-3 text-sm font-medium text-accent-fg focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 h-12 nav-blur",
          scrolled && "shadow-[0_1px_0_rgb(0_0_0_/_0.08)]",
        )}
      >
        <nav
          aria-label="Primary"
          className="page-wrap-wide flex h-full items-center justify-between"
        >
          <Link
            to="/"
            className="text-[15px] font-semibold tracking-tight text-ink"
            aria-label={`${profile.name} — Home`}
          >
            {profile.short}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active =
                pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[12px] font-normal tracking-wide transition-[opacity,color] duration-150",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${profile.email}`}
              className="text-[12px] font-medium text-accent transition-[opacity] duration-150 hover:opacity-70"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="flex size-11 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  "block h-px bg-ink transition-[transform,opacity] duration-200",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px bg-ink transition-[opacity] duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-px bg-ink transition-[transform,opacity] duration-200",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 flex flex-col justify-center bg-paper px-6 transition-[opacity] duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="py-2 text-4xl font-semibold tracking-tight text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="py-2 text-4xl font-semibold tracking-tight text-muted"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
