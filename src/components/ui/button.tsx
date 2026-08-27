import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium select-none whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] transition-[scale,background-color,color,opacity] duration-150 ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg hover:bg-accent-hover rounded-full px-5 min-h-11 text-sm",
        secondary:
          "bg-fill text-ink hover:bg-fill-hover rounded-full px-5 min-h-11 text-sm",
        ghost:
          "text-accent hover:opacity-70 min-h-11 px-1 text-sm bg-transparent",
        night:
          "bg-night-fg text-night hover:opacity-90 rounded-full px-5 min-h-11 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

export { buttonVariants };
