import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "header" | "li" | "p" | "h1" | "h2";
}) {
  const style = {
    animationDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag className={cn("reveal", className)} style={style}>
      {children}
    </Tag>
  );
}
