import { Github, ArrowUpRight, Mail, Phone, Linkedin, Award, Activity, Network, ShieldAlert, Terminal, Languages } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { SKILLS, ACHIEVEMENTS, PROJECTS, CONTACT } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "Monitoring & SIEM": <Activity className="h-4.5 w-4.5" />,
  "Network Analysis": <Network className="h-4.5 w-4.5" />,
  "Offensive / Defensive": <ShieldAlert className="h-4.5 w-4.5" />,
  "Systems & OS": <Terminal className="h-4.5 w-4.5" />,
  "Soft Skills": <Award className="h-4.5 w-4.5" />,
  Languages: <Languages className="h-4.5 w-4.5" />,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader index="04" eyebrow="Technical Arsenal" title="Skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group }: { group: (typeof SKILLS)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const onMove = useSpotlight();
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group card-lift spotlight rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]"
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="badge-pop grid h-8 w-8 place-items-center rounded-lg bg-primary-soft text-primary ring-1 ring-inset ring-primary/25 group-hover:-translate-y-0.5 group-hover:shadow-[0_6px_16px_-6px_oklch(0.66_0.145_245_/_0.7)]">
          {SKILL_ICONS[group.title]}
        </span>
        <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
      </div>

      {group.type === "tags" ? (
        <div className="flex flex-wrap gap-2">
          {group.tags.map((tag) => (
            <span
              key={tag}
              className="cursor-default rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <div className="space-y-3.5">
          {group.bars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                <span className="text-foreground">{bar.label}</span>
                <span className="text-muted-foreground">{bar.value}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-background">
                <div
                  className="bar-sheen h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                  style={{ width: visible ? `${bar.width}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Achievements() {
  const onMove = useSpotlight();
  return (
    <Section id="achievements">
      <SectionHeader index="05" eyebrow="Certifications & Training" title="Achievements" />
      <div className="grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            onMouseMove={onMove}
            className="group card-lift spotlight rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold leading-snug text-foreground">{a.title}</h3>
                <p className="mt-1 font-mono text-xs text-primary">{a.by}</p>
              </div>
              <div className="badge-pop shrink-0 rounded-xl border border-amber/25 bg-amber/10 px-3 py-2 text-center group-hover:-translate-y-0.5 group-hover:border-amber/50">
                <div className="font-display text-xl font-semibold leading-none text-amber">{a.hours}</div>
                <div className="label-mono mt-1 text-[0.58rem] text-amber/80">{a.unit.trim()}</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {a.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>
                    {p.k && <strong className="font-medium text-foreground">{p.k} </strong>}
                    {p.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const onMove = useSpotlight();
  return (
    <Section id="projects">
      <SectionHeader index="06" eyebrow="Selected Work" title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <a
            key={p.num}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            onMouseMove={onMove}
            className="group card-lift spotlight flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between">
              <span className="label-mono text-primary">{p.tag}</span>
              <ArrowUpRight className="h-4.5 w-4.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              <Github className="h-4 w-4" /> View on GitHub
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <SectionHeader index="07" eyebrow="Secure Channel" title="Get in touch" />
      <div className="spotlight overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-card)] sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-gradient text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's strengthen your security posture
          </h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Open to SOC / incident-response roles, security assessments, and collaborative learning projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="glow-primary inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <IconLink href={CONTACT.github} label="GitHub">
              <Github className="h-4.5 w-4.5" />
            </IconLink>
            <IconLink href={CONTACT.linkedin} label="LinkedIn">
              <Linkedin className="h-4.5 w-4.5" />
            </IconLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-background/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2 hover:text-primary"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary-soft text-xs font-semibold text-primary ring-1 ring-inset ring-primary/30">
            {CONTACT.initials}
          </span>
          <span className="text-sm text-muted-foreground">{CONTACT.logo}</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · SOC Analyst Portfolio
        </p>
      </div>
    </footer>
  );
}
