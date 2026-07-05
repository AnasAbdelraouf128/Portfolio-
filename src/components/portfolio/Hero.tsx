import { useEffect, useState } from "react";
import { MapPin, Mail, ArrowUpRight, Github, Linkedin, ShieldCheck } from "lucide-react";
import { CONTACT, ROLES, METRICS } from "@/lib/portfolio-data";
import { useSpotlight } from "@/hooks/use-spotlight";
import profilePhoto from "@/assets/profile.jpg";

function useTypedRole() {
  const [text, setText] = useState("");
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const role = ROLES[roleIndex];
      charIndex += deleting ? -1 : 1;
      setText(role.slice(0, charIndex));
      if (!deleting && charIndex === role.length) {
        deleting = true;
        timer = setTimeout(tick, 1800);
        return;
      }
      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
      }
      timer = setTimeout(tick, deleting ? 40 : 85);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

export function Hero() {
  const role = useTypedRole();
  const onMove = useSpotlight();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative scroll-mt-24 pb-16 pt-32 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: identity */}
        <div className="reveal reveal-visible">
          <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal-soft px-3 py-1 transition-transform hover:scale-105">
            <span className="pulse-dot h-2 w-2 rounded-full bg-signal" />
            <span className="label-mono text-signal">Available for opportunities</span>
          </div>

          <h1 className="text-gradient mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {CONTACT.name}
          </h1>

          <p className="mt-4 flex items-center gap-2 font-mono text-base text-primary sm:text-lg">
            <ShieldCheck className="h-5 w-5" />
            <span>{role}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-primary" aria-hidden="true" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {CONTACT.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="glow-primary inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              View projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2"
            >
              Contact me
            </button>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={CONTACT.github} label="GitHub">
                <Github className="h-4.5 w-4.5" />
              </IconLink>
              <IconLink href={CONTACT.linkedin} label="LinkedIn">
                <Linkedin className="h-4.5 w-4.5" />
              </IconLink>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {CONTACT.location}
            </span>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Right: photo + status console card */}
        <div className="relative space-y-4 float-soft">
          <div className="group card-lift relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[var(--shadow-lift)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-signal" />
                <span className="label-mono text-muted-foreground">operator.id</span>
              </div>
              <span className="label-mono text-muted-foreground">{CONTACT.name}</span>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-background/60">
              <img
                src={profilePhoto}
                alt={`Portrait of ${CONTACT.name}`}
                width={640}
                height={640}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(60% 60% at 50% 0%, oklch(0.66 0.145 245 / 0.18), transparent 70%)" }} />
            </div>
          </div>

          <div className="card-lift rounded-2xl border border-border bg-surface/80 p-1.5 shadow-[var(--shadow-lift)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
              </div>
              <span className="label-mono text-muted-foreground">analyst.status</span>
            </div>
            <div className="space-y-3 p-5">
              <ConsoleRow k="role" v="IR Analyst Intern @ DEPI" />
              <ConsoleRow k="team" v="Blue Team Lead @ HackerRank" />
              <ConsoleRow k="focus" v="SIEM · Threat Hunting · IR" />
              <ConsoleRow k="clearance" v="Alexandria University · CS" />
              <ConsoleRow k="languages" v="Arabic (native) · English B2" />

              <div className="grid grid-cols-2 gap-2 pt-2">
                {METRICS.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-background/60 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft">
                    <div className="font-display text-xl font-semibold text-foreground">{m.value}</div>
                    <div className="label-mono mt-0.5 text-[0.62rem] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsoleRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 font-mono text-sm">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-right text-foreground">{v}</span>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2 hover:text-primary"
    >
      {children}
    </a>
  );
}
