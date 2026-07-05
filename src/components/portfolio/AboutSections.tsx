import { GraduationCap, Star, Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { STATUS_ROWS, EXPERIENCE } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" eyebrow="Dossier" title="About" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a <Em>Computer Science student</Em> at Alexandria University with a strong focus on{" "}
            <Em>defensive security</Em>. I like understanding how systems work, how they fail, and — most
            importantly — how to detect, contain, and recover from incidents.
          </p>
          <p>
            As <Em>Head of the Cybersecurity Blue Team</Em> at the HackerRank Campus Community and an{" "}
            <Em>Incident Response Analyst Intern</Em> at DEPI, I combine hands-on SOC experience with a
            proactive, detail-oriented mindset — and I'm looking to contribute to a dynamic security team.
          </p>
        </div>

        <div className="grid gap-2.5">
          {STATUS_ROWS.map((row) => (
            <div
              key={row.key}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-sm transition-all duration-200 hover:translate-x-1 hover:border-primary/40 hover:bg-surface-2"
            >
              <span className="w-20 shrink-0 text-muted-foreground">{row.key.toLowerCase()}</span>
              <span className="text-foreground">{row.val}</span>
              {row.live && <span className="pulse-dot ml-auto h-2 w-2 shrink-0 rounded-full bg-signal" />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  const onMove = useSpotlight();
  return (
    <Section id="education">
      <SectionHeader index="02" eyebrow="Credentials" title="Education" />
      <div
        onMouseMove={onMove}
        className="group card-lift spotlight rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="badge-pop grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary ring-1 ring-inset ring-primary/25 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_20px_-8px_oklch(0.66_0.145_245_/_0.7)]">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">Bachelor of Science — Computer Science</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="text-primary">Faculty of Science · Alexandria University</span>
              <span className="font-mono text-xs">Oct 2023 — Oct 2027</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-lg border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-sm text-amber">
            <Star className="h-3.5 w-3.5 fill-amber" /> GPA 3.2 / 4.0 · Very Good
          </span>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader index="03" eyebrow="Operations Log" title="Experience" />
      <div className="relative space-y-5 border-l border-border pl-6 sm:pl-8">
        {EXPERIENCE.map((exp) => (
          <TimelineItem key={exp.title} exp={exp} />
        ))}
      </div>
    </Section>
  );
}

function TimelineItem({ exp }: { exp: (typeof EXPERIENCE)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const onMove = useSpotlight();
  return (
    <div
      ref={ref}
      className="group relative transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
    >
      <span className="absolute -left-[calc(1.5rem+7px)] top-6 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-primary bg-background transition-all group-hover:scale-125 group-hover:shadow-[0_0_0_4px_oklch(0.66_0.145_245_/_0.2)] sm:-left-[calc(2rem+7px)]" />
      <div
        onMouseMove={onMove}
        className="card-lift spotlight rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="badge-pop grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-inset ring-primary/25 group-hover:-translate-y-0.5 group-hover:shadow-[0_6px_16px_-6px_oklch(0.66_0.145_245_/_0.7)]">
              <Briefcase className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="font-semibold leading-tight text-foreground">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-primary">{exp.org}</p>
            </div>
          </div>
          <span className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
            {exp.date}
          </span>
        </div>
        <ul className="mt-4 space-y-2.5">
          {exp.points.map((p) => (
            <li key={p.k} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="font-medium text-foreground">{p.k}</strong> {p.v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-foreground">{children}</strong>;
}
