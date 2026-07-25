import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Gauge,
  GraduationCap,
  HandshakeIcon,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Package,
  Phone,
  Radiation,
  Rocket,
  Scan,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/hero-healthcare.jpg";
import vEquipment from "@/assets/vertical-equipment.jpg";
import vBiomedical from "@/assets/vertical-biomedical.jpg";
import vFurniture from "@/assets/vertical-furniture.png";
import { siteContact } from "@/lib/site-contact";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ---------- Reusable primitives ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());
  const [text, setText] = useState("0");

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => rounded.on("change", (v) => setText(v)), [rounded]);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`${alignCls} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* ---------- Navigation ---------- */

const NAV = [
  { href: "#about", label: "About" },
  { href: "#verticals", label: "Verticals" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/70 shadow-[0_4px_20px_-12px_rgba(0,86,166,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white shadow-lift">
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-[15px] font-extrabold tracking-tight ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              DHIRA
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                scrolled ? "text-primary" : "text-white/80"
              }`}
            >
              Medical Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                scrolled
                  ? "text-foreground/80 hover:bg-primary-soft hover:text-primary"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-[color:var(--brand-primary-strong)]"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className={`grid h-10 w-10 place-items-center rounded-xl border md:hidden ${
            scrolled
              ? "border-border bg-white text-foreground"
              : "border-white/30 bg-white/10 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

const STATS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Customers" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Customer Satisfaction" },
];

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <img
        src={heroImg}
        alt="Modern hospital corridor with advanced medical equipment"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,169,157,0.35),transparent_60%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-5 pb-16 sm:px-8 lg:pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Healthcare Technology Partner
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[76px]">
            DHIRA MEDICAL <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-[#c6f2ec] to-[#7de3d5] bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg font-medium text-white/85 sm:text-xl">
            Delivering Healthcare Excellence — advanced medical equipment,
            biomedical engineering and turnkey hospital solutions built on 20+
            years of trust.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#verticals"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-14 sm:mt-20">
            <div className="grid grid-cols-2 gap-3 rounded-3xl glass-panel p-4 sm:p-6 md:grid-cols-4 md:gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl px-3 py-3 text-center sm:text-left">
                  <div className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- About / Vision / Mission ---------- */

const MISSION = [
  "Deliver quality",
  "Build long-term partnerships",
  "Provide exceptional service",
  "Drive innovation",
  "Improve healthcare delivery",
];

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Stethoscope className="h-3.5 w-3.5" /> About Us
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              A trusted partner in{" "}
              <span className="gradient-text">healthcare technology</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Dhira Medical Services is a trusted provider of medical equipment,
              biomedical engineering services, hospital furniture, healthcare
              consumables and turnkey healthcare solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We deliver innovative, reliable and cost-effective healthcare
              technologies backed by strong technical expertise and responsive
              after-sales support.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["ISO Aligned", "PAN-India Delivery", "OEM Partnerships", "24×7 Support"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-foreground/80"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Rocket className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground">
                      To become India's most trusted healthcare solutions
                      provider by delivering world-class medical technologies.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-[color:var(--brand-secondary-strong)]">
                    <HeartHandshake className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {MISSION.map((m) => (
                        <li key={m} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Core Values ---------- */

const VALUES = [
  { icon: Award, title: "Quality", desc: "Uncompromising standards in every product and service." },
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent, ethical partnerships built to last." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern healthcare technologies for better outcomes." },
  { icon: Users, title: "Customer First", desc: "Solutions engineered around your clinical needs." },
  { icon: Gauge, title: "Reliability", desc: "Dependable equipment and predictable uptime." },
  { icon: Sparkles, title: "Service Excellence", desc: "Responsive expertise from install to lifetime support." },
];

function Values() {
  return (
    <section className="relative py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="Principles that shape every partnership"
          description="Six commitments that guide how we design, deliver and support healthcare technology."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group h-full rounded-3xl border border-border bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Business Verticals ---------- */

const VERTICALS = [
  {
    icon: Activity,
    title: "Medical Equipment",
    desc: "Imaging, diagnostics and critical-care equipment from global OEMs.",
    img: vEquipment,
  },
  {
    icon: Wrench,
    title: "Biomedical Services",
    desc: "Installation, calibration, AMC/CMC and lifecycle maintenance.",
    img: vBiomedical,
  },
  {
    icon: Building2,
    title: "Hospital Furniture",
    desc: "Beds, trolleys, OT tables and premium ward furniture.",
    img: vFurniture,
  },
  {
    icon: Radiation,
    title: "Radiation Oncology",
    desc: "Linear accelerators, planning systems and turnkey bunkers.",
    img: "/oncology.JPG",
  },
  {
    icon: Layers,
    title: "Medical Gas Pipeline",
    desc: "MGPS design, installation and NFPA/HTM-aligned commissioning.",
    img: "/gas_pipelines.JPG",
  },
  {
    icon: Package,
    title: "Medical Consumables",
    desc: "Reliable supply of everyday clinical and surgical consumables.",
    img: "/consumable.JPG",
  },
];

function Verticals() {
  return (
    <section id="verticals" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Business Verticals"
          title="Six practices. One integrated partner."
          description="From capital equipment to consumables, we cover the full continuum of hospital infrastructure."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-primary-strong)]/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-primary shadow-lift">
                    <v.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Healthcare Solutions ---------- */

const EQUIPMENT = [
  { icon: Scan, title: "CT Scanner" },
  { icon: Microscope, title: "MRI" },
  { icon: Zap, title: "Digital X-ray" },
  { icon: Activity, title: "Ultrasound" },
  { icon: HeartPulse, title: "Cath Lab" },
  { icon: Gauge, title: "Patient Monitor" },
  { icon: Cpu, title: "Ventilator" },
];

const BIOMED = [
  { icon: Wrench, title: "Installation" },
  { icon: ClipboardCheck, title: "AMC" },
  { icon: ShieldCheck, title: "CMC" },
  { icon: Gauge, title: "Calibration" },
  { icon: Cpu, title: "Repair" },
  { icon: Headphones, title: "Maintenance" },
];

function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Healthcare Solutions"
          title="Advanced equipment, backed by expert service"
          description="A curated portfolio of imaging and critical-care systems, supported end-to-end by our in-house biomedical team."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Medical Equipment
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {EQUIPMENT.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary text-white">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 truncate text-sm font-semibold text-foreground">
                      {e.title}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--brand-secondary-strong)]">
              Biomedical Services
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {BIOMED.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-[color:var(--brand-secondary-strong)]">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 truncate text-sm font-semibold text-foreground">
                      {e.title}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose Us ---------- */

const WHY = [
  { icon: Cpu, title: "Technical Expertise", desc: "In-house biomedical engineers with OEM certifications." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous QA on every unit before dispatch and install." },
  { icon: Gauge, title: "Competitive Pricing", desc: "Transparent commercials with lifetime value in mind." },
  { icon: Truck, title: "Fast Delivery", desc: "Pan-India logistics with tracked, timely deployment." },
  { icon: Headphones, title: "After Sales Support", desc: "Responsive AMC/CMC and 24×7 escalation channels." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "95%+ CSAT built on long-term partnerships." },
];

function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineered for hospitals that expect more"
          description="Six reasons leading healthcare providers standardize on Dhira Medical Services."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-soft opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-lift">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process / Workflow ---------- */

const PROCESS = [
  { icon: HandshakeIcon, title: "Consultation", desc: "Understand goals, site and clinical priorities." },
  { icon: ClipboardCheck, title: "Requirement Analysis", desc: "Scope, specs and configuration alignment." },
  { icon: Package, title: "Procurement", desc: "OEM sourcing with QA-checked delivery." },
  { icon: Wrench, title: "Installation", desc: "Certified install with commissioning tests." },
  { icon: GraduationCap, title: "Training", desc: "Hands-on clinical and technical training." },
  { icon: Headphones, title: "Support", desc: "AMC, CMC and lifetime service partnership." },
];

function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A workflow built for clinical certainty"
          description="Six deliberate steps that take you from first conversation to lifetime service."
        />

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(0,86,166,0.35) 10%, rgba(0,169,157,0.35) 90%, transparent)",
            }}
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-white shadow-lift">
                    <p.icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-secondary text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */

const INDUSTRIES = [
  { icon: Building2, title: "Hospitals" },
  { icon: Microscope, title: "Diagnostic Centres" },
  { icon: GraduationCap, title: "Medical Colleges" },
  { icon: Landmark, title: "Government Institutions" },
  { icon: HeartPulse, title: "Corporate Hospitals" },
  { icon: HandshakeIcon, title: "NGOs" },
];

function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Industries Served"
          title="Trusted across the care continuum"
          description="From tertiary hospitals to community NGOs — we equip the institutions that keep India healthy."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {INDUSTRIES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-[color:var(--brand-secondary-strong)]">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <div className="truncate font-display text-base font-bold text-foreground">
                    {s.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Nationwide deployments
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[36px] px-8 py-16 sm:px-14 sm:py-20 lg:px-20">
            <div className="absolute inset-0 -z-10 gradient-primary" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(0,169,157,0.55),transparent_60%)]" />
            <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  <Sparkles className="h-3.5 w-3.5" /> Ready when you are
                </span>
                <h2 className="mt-5 font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                  Partner With Dhira Medical Services
                </h2>
                <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
                  Talk to our specialists about your next project — from a
                  single scanner to a fully turnkey hospital build. We'll craft
                  a proposal within 48 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary shadow-lift transition hover:-translate-y-0.5"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> Call Specialist
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Mail className="h-3.5 w-3.5" /> Contact
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Let's build the future of care, together.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground sm:text-lg">
              Reach out for consultations, quotations or service inquiries.
              Our specialists respond within one business day.
            </p>

            <dl className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Building2, label: "Company", value: siteContact.company },
                { icon: Sparkles, label: "Website", value: siteContact.website },
                { icon: Mail, label: "Email", value: siteContact.email },
                { icon: Phone, label: "Phone", value: siteContact.phone },
                { icon: MapPin, label: "Location", value: siteContact.location },
                { icon: Syringe, label: "Support", value: siteContact.support },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="truncate text-sm font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:gap-6 sm:p-8">
              <div className="shrink-0 overflow-hidden rounded-2xl border border-border bg-white p-2">
                <img
                  src="/dms_qr.jpg"
                  alt="WhatsApp QR code for Dhira Medical Services"
                  width={160}
                  height={160}
                  className="h-32 w-32 object-contain sm:h-40 sm:w-40"
                />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg font-bold text-foreground sm:text-xl">
                  Scan to chat on WhatsApp
                </div>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  Quickly connect with our team — scan the QR code to message
                  Dhira Medical Services on WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: ["About", "Verticals", "Solutions", "Process", "Industries", "Contact"],
    },
    {
      title: "Products",
      links: ["CT Scanner", "MRI", "Digital X-ray", "Ultrasound", "Cath Lab", "Ventilator"],
    },
    {
      title: "Services",
      links: ["Installation", "AMC", "CMC", "Calibration", "Repair", "Maintenance"],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-primary-strong)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(0,169,157,0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <div className="font-display text-lg font-extrabold">DHIRA</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Medical Services
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Delivering healthcare excellence through medical equipment,
              biomedical services and turnkey hospital solutions across India.
            </p>

            <div className="mt-6 flex gap-2">
              {[
                {
                  label: "LinkedIn",
                  path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.25zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
                },
                {
                  label: "Twitter / X",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  label: "Facebook",
                  path: "M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/85">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} Dhira Medical Services. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Verticals />
        <Solutions />
        <WhyUs />
        <Process />
        <Industries />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
