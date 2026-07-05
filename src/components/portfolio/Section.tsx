import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={`reveal scroll-mt-24 py-16 sm:py-24 ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <div className="label-mono flex items-center gap-3 text-primary">
        <span className="tabular-nums">{index}</span>
        <span className="h-px w-8 bg-border-strong" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
