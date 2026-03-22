import { useEffect, useRef, useState } from "react";
import { resumeSections } from "../data";
import {PageHeading} from "../components/PageHeading";

/* ─── tiny motion helpers (no external lib needed) ─────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Animated counter ──────────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); }
      else setVal(start);
    }, 30);
    return () => clearInterval(id);
  }, [visible, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Glowing animated card ─────────────────────────────────────────────────── */
function ResumeCard({ item, delay = 0 }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      className="relative overflow-hidden rounded-2xl border border-white/8 bg-black/30 p-5 backdrop-blur-md group cursor-default"
    >
      {/* hover glow */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"
      />
      {/* animated top border */}
      <div
        style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.4s ease" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left"
      />

      <div className="relative z-10">
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-base font-semibold text-white leading-snug">{item.heading}</h3>
          <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-0.5 text-xs font-medium text-cyan-300 tracking-wide">
            {item.meta}
          </span>
        </div>
        <p className="text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}

/* ─── Section block ─────────────────────────────────────────────────────────── */
function ResumeSection({ section, sectionIndex }) {
  const [ref, visible] = useInView(0.1);
  const icons = { Education: "🎓", Experience: "💼", Skills: "⚡", Projects: "🚀", Certifications: "🏅" };
  const icon = icons[section.title] || "📌";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${sectionIndex * 120}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${sectionIndex * 120}ms`,
      }}
      className="relative"
    >
      {/* section card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
        {/* subtle gradient bg */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-violet-600/[0.04]" />

        <div className="relative z-10">
          {/* section header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
              {icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{section.title}</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{section.items.length} entries</p>
            </div>
            {/* decorative line */}
            <div
              style={{ transform: visible ? "scaleX(1)" : "scaleX(0)", transition: `transform 0.9s ease ${sectionIndex * 120 + 300}ms` }}
              className="ml-4 hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent origin-left sm:block"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {section.items.map((item, i) => (
              <ResumeCard key={item.heading} item={item} delay={sectionIndex * 80 + i * 80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Stat pill ─────────────────────────────────────────────────────────────── */
function StatPill({ value, suffix, label, delay }) {
  const [ref, visible] = useInView(0.5);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
      className="flex flex-col items-center gap-1 rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-4 backdrop-blur-sm"
    >
      <span className="text-3xl font-bold text-white tabular-nums">
        <Counter to={value} suffix={suffix} />
      </span>
      <span className="text-xs text-zinc-500 tracking-widest uppercase">{label}</span>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────────────────────────── */
const ResumePage = () => {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section className="relative py-10 min-h-screen">

      {/* ── ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-[100px] animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-indigo-700/8 blur-[80px] animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }} />
      </div>

      {/* ── header ── */}
      <div ref={headerRef} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0ms, transform 0.6s ease 0ms",
          }}
        >
          <PageHeading
            title="Resume"
            description="Explore the main highlights of my experience and download the complete CV for a detailed view."
            className="mb-0 lg:mx-0 lg:items-start lg:text-left"
          />
        </div>

        {/* CTA buttons */}
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.6s ease 300ms, transform 0.6s ease 300ms",
          }}
          className="flex gap-3"
        >
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Preview PDF
            </span>
          </a>
          <a
            href="/assets/CV.pdf"
            download="Udit_CV.pdf"
            className="group relative overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download CV
            </span>
            {/* shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
      </div>

      {/* ── stats row ── */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatPill value={3} suffix="+" label="Years Exp." delay={400} />
        <StatPill value={20} suffix="+" label="Projects" delay={500} />
        <StatPill value={15} suffix="+" label="Technologies" delay={600} />
        <StatPill value={5} suffix="★" label="Avg. Rating" delay={700} />
      </div>

      {/* ── divider ── */}
      <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── resume sections ── */}
      <div className="flex flex-col gap-6">
        {resumeSections.map((section, i) => (
          <ResumeSection key={section.title} section={section} sectionIndex={i} />
        ))}
      </div>

      {/* ── footer note ── */}
      <p className="mt-12 text-center text-xs text-zinc-600 tracking-wider">
        Last updated · {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </p>
    </section>
  );
};

export default ResumePage;
