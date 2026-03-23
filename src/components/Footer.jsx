
import "remixicon/fonts/remixicon.css";
import { Link, NavLink } from "react-router-dom";
import { motion as Motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { navigationLinks, socialLinks } from "../data";

/* ── Magnetic social button ─────────────────────────────────────── */
function useMagnet() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 20 });
  const sy = useSpring(y, { stiffness: 220, damping: 20 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { ref, sx, sy, onMove, onLeave };
}

function SocialBtn({ href, label, iconClass, color, borderColor, backgroundColor }) {
  const m = useMagnet();
  const isMail = href.startsWith("mailto:");

  return (
    <Motion.a
      ref={m.ref}
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      aria-label={label}
      style={{ x: m.sx, y: m.sy }}
      onMouseMove={m.onMove}
      whileHover={{ scale: 1.08 }}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-500 transition-all duration-300"
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = borderColor;
        event.currentTarget.style.background = backgroundColor;
        event.currentTarget.style.color = color;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        event.currentTarget.style.background = "rgba(255,255,255,0.04)";
        event.currentTarget.style.color = "#71717a";
        m.onLeave();
      }}
    >
      <i className={`${iconClass} text-lg`} />
    </Motion.a>
  );
}

/* ── Footer ─────────────────────────────────────────────────────── */
const Footer = () => {
  const primaryLinks = navigationLinks.filter((l) =>
    ["/", "/about", "/projects", "/contact"].includes(l.href),
  );
  const growthLinks = navigationLinks.filter((l) =>
    ["/skills", "/achievements", "/certifications", "/resume"].includes(l.href),
  );

  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7 }}
      className="relative w-full overflow-hidden bg-[#040712]"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[120px]" />
      </div>

      {/* top separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ═══════════════════════════════════════
          ZONE 1 — BIG CTA
      ═══════════════════════════════════════ */}
      <section className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* headline side */}
            <div className="max-w-3xl">
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-4 inline-flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
                  Available for work
                </span>
              </Motion.div>

              <Motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl text-4xl font-bold leading-[1] tracking-tight text-white md:text-5xl lg:text-[3.9rem]"
              >
                Have a project in{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  mind?
                </span>
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-400"
              >
                I&apos;m open to freelance projects, internships, and
                collaborations. If you have an idea worth building — let&apos;s
                make it happen together.
              </Motion.p>
            </div>

            {/* CTA side */}
            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap gap-3 lg:min-w-[320px] lg:justify-end"
            >
              <NavLink
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-zinc-900 transition-all duration-300 hover:bg-cyan-300"
              >
                Get in touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </NavLink>
              <a
                href="/assets/CV.pdf"
                download="Udit_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Download size={15} />
                Download CV
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ZONE 2 — NAV + INFO GRID
      ═══════════════════════════════════════ */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-screen-xl px-6 py-14 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand + contact */}
            <div className="col-span-2 lg:col-span-1">
              <Link
                to="/"
                className="inline-block text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-75"
              >
                Udit
                {/* <span className="text-cyan-400">.</span> */}
              </Link>
              <p className="mt-4 text-[13px] leading-6 text-zinc-500">
                Full-stack developer building modern UI and thoughtful digital
                experiences from India.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:email_farisedrik21@gmail.com"
                  className="flex items-start gap-2.5 text-[13px] text-zinc-500 transition-colors hover:text-cyan-300"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-cyan-500/60" />
                  email_uditgoyal0905.com
                </a>
                <p className="flex items-start gap-2.5 text-[13px] text-zinc-500">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-cyan-500/60" />
                  India — open to remote
                </p>
              </div>
            </div>

            {/* Navigate */}
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Navigate
              </p>
              <ul className="space-y-3.5">
                {primaryLinks.map((l) => (
                  <li key={l.href}>
                    <NavLink
                      to={l.href}
                      className={({ isActive }) =>
                        `group flex items-center gap-2 text-sm transition-colors duration-200 ${
                          isActive
                            ? "font-medium text-cyan-300"
                            : "text-zinc-500 hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`h-px flex-shrink-0 rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-4 bg-cyan-400"
                                : "w-0 bg-zinc-500 group-hover:w-3"
                            }`}
                          />
                          {l.label}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Explore
              </p>
              <ul className="space-y-3.5">
                {growthLinks.map((l) => (
                  <li key={l.href}>
                    <NavLink
                      to={l.href}
                      className={({ isActive }) =>
                        `group flex items-center gap-2 text-sm transition-colors duration-200 ${
                          isActive
                            ? "font-medium text-cyan-300"
                            : "text-zinc-500 hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`h-px flex-shrink-0 rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-4 bg-cyan-400"
                                : "w-0 bg-zinc-500 group-hover:w-3"
                            }`}
                          />
                          {l.label}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

 
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Follow
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((item) => (
                  <SocialBtn key={item.label} {...item} />
                ))}
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-zinc-600">
                Latest builds & experiments across these platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-6 py-5 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Udit Goyal. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
