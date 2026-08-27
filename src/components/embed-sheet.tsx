import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useEmbed } from "@/components/embed-context";
import { isImageUrl, toEmbedUrl } from "@/lib/embed";
import { cn } from "@/lib/utils";

export function EmbedSheet() {
  const { session, setIndex, close } = useEmbed();
  const open = session !== null;
  const active = session?.embeds[session.index];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [active?.url]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (!session) return;
      if (event.key === "ArrowRight") {
        setIndex((session.index + 1) % session.embeds.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex(
          (session.index - 1 + session.embeds.length) % session.embeds.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, session, setIndex]);

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay data-[state=open]:animate-[rise_200ms_var(--ease-out)]" />
        <Dialog.Content
          className="fixed inset-3 z-50 flex flex-col overflow-hidden rounded-xl bg-surface shadow-sheet outline-none md:inset-6 md:rounded-2xl"
          aria-describedby={undefined}
        >
          <div className="flex h-12 shrink-0 items-center gap-3 border-b border-ink/8 px-3 md:h-14 md:px-4">
            <Dialog.Title className="min-w-0 flex-1 truncate text-sm font-semibold text-ink">
              {session?.title}
              {session?.subtitle ? (
                <span className="ml-2 font-normal text-muted">
                  {session.subtitle}
                </span>
              ) : null}
            </Dialog.Title>

            {session && session.embeds.length > 1 ? (
              <div className="hidden items-center rounded-full bg-fill p-0.5 sm:flex">
                {session.embeds.map((embed, index) => (
                  <button
                    key={`${embed.url}-${embed.label}`}
                    type="button"
                    onClick={() => setIndex(index)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-caption font-medium transition-[background-color,color] duration-150",
                      index === session.index
                        ? "bg-surface text-ink shadow-card"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {embed.label}
                  </button>
                ))}
              </div>
            ) : null}

            {active ? (
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-[background-color,color] duration-150 hover:bg-fill hover:text-ink"
                aria-label="Open in new tab"
              >
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}

            <Dialog.Close
              className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-[background-color,color] duration-150 hover:bg-fill hover:text-ink"
              aria-label="Close"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          {session && session.embeds.length > 1 ? (
            <div className="flex gap-2 overflow-x-auto px-3 py-2 sm:hidden">
              {session.embeds.map((embed, index) => (
                <button
                  key={`m-${embed.url}-${embed.label}`}
                  type="button"
                  onClick={() => setIndex(index)}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-2 text-caption font-medium",
                    index === session.index
                      ? "bg-ink text-night-fg"
                      : "bg-fill text-muted",
                  )}
                >
                  {embed.label}
                </button>
              ))}
            </div>
          ) : null}

          <div className="relative min-h-0 flex-1 bg-paper">
            {active ? (
              isImageUrl(active.url) || active.kind === "image" ? (
                <div className="flex h-full items-center justify-center overflow-auto p-4">
                  <img
                    src={active.url}
                    alt={active.label}
                    className="max-h-full max-w-full rounded-lg object-contain"
                  />
                </div>
              ) : (
                <>
                  {!loaded ? (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-subtle">
                      Loading
                    </div>
                  ) : null}
                  <iframe
                    key={active.url}
                    src={toEmbedUrl(active.url)}
                    title={active.label}
                    className={cn(
                      "h-full w-full border-0 bg-surface transition-[opacity] duration-300",
                      loaded ? "opacity-100" : "opacity-0",
                    )}
                    allow="fullscreen"
                    allowFullScreen
                    onLoad={() => setLoaded(true)}
                  />
                </>
              )
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
