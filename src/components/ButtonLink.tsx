import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  download,
  className,
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition";
  const variants = {
    primary:
      "bg-redSoft text-white shadow-glow hover:bg-white hover:text-slate-950 hover:shadow-[0_18px_70px_rgba(225,29,72,0.28)]",
    secondary:
      "border border-line bg-white/[0.06] text-slate-100 hover:border-redSoft/50 hover:bg-white/[0.1]",
    ghost: "text-slate-300 hover:text-white",
  };

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} download={download} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
