import { useEffect, useRef, useState } from "react";
import BlurText from "../components/BlurText/BlurText";
import Lanyard from "../components/Lanyard/Lanyard";
import { featuredStats } from "../data";
import LiquidEther from "../components/LiquidEther";

/* ─────────────────────────────────────────────
   Tiny hook: fires once when element enters viewport
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   Animated stat card
───────────────────────────────────────────── */
function StatCard({ stat, index, active }) {
  const [count, setCount] = useState(0);
  const numericVal = parseFloat(stat.value);

  useEffect(() => {
    if (!active) return;
    const duration = 1200;
    const steps = 60;
    const increment = numericVal / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericVal) { setCount(numericVal); clearInterval(timer); }
      else setCount(Math.floor(current * 10) / 10);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, numericVal]);

  const display = Number.isInteger(numericVal) ? Math.round(count) : count.toFixed(1);

  return (
    <div
      className="stat-card"
      style={{ "--delay": `${index * 120}ms`, opacity: active ? 1 : 0 }}
    >
      {/* top accent line */}
      <div className="stat-accent" />
      <p className="stat-value">
        {active ? display : 0}
        <span className="stat-suffix">{stat.suffix}</span>
      </p>
      <p className="stat-label">{stat.label}</p>
      {/* hover glow */}
      <div className="stat-glow" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
const AboutPage = () => {
  const [sectionRef, sectionVisible] = useInView(0.18);
  const [statsRef, statsVisible] = useInView(0.3);

  return (
    <>
      <style>{`
        /* ── Page ── */
        .about-section {
          padding: 5rem 0 6rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* ── Headline ── */
        .about-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          overflow: hidden;
        }
        .eyebrow-line {
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #67e8f9aa);
        }
        .eyebrow-line.right {
          background: linear-gradient(90deg, #67e8f9aa, transparent);
        }
        .about-title {
          font-family: 'Orbitron', 'Share Tech Mono', monospace;
          font-size: clamp(2rem, 3vw, 1.4rem);
          letter-spacing: 0.55em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #67e8f9, #a78bfa, #f0abfc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Grid ── */
        .about-grid {
          display: grid;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 0.9fr 1.1fr; }
        }

        /* ── 3-D card panel ── */
        .panel-3d {
          position: relative;
          isolation: isolate;
          min-height: 420px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(139,92,246,0.28);
          background: rgba(0,0,0,0.3);
          padding: 1rem;
          transition: box-shadow 0.4s ease;
        }
        @media (min-width: 768px) { .panel-3d { min-height: 520px; } }
        .panel-3d:hover {
          box-shadow: 0 0 80px -10px rgba(139,92,246,0.35), 0 0 30px -5px rgba(103,232,249,0.15);
        }
        .panel-liquid {
          position: absolute;
          inset: 0;
          opacity: 0.92;
        }
        .panel-inner {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* subtle scanlines overlay */
        .panel-3d::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          border-radius: 28px;
        }

        /* ── Copy side ── */
        .copy-side {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        /* ── Animated heading ── */
        .hero-heading {
          font-family: 'Syne', 'Clash Display', sans-serif;
          font-weight: 800;
          line-height: 0.9;
          color: #fff;
          font-size: clamp(1rem, 3.5vw, 4rem);
          overflow: hidden;
        }
        .hero-heading .line {
          display: block;
          transform: translateY(110%);
          opacity: 0;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.6s ease;
        }
        .hero-heading.visible .line:nth-child(1) { transform: translateY(0); opacity: 1; transition-delay: 0s; }
        .hero-heading.visible .line:nth-child(2) { transform: translateY(0); opacity: 1; transition-delay: 0.12s; }
        .hero-heading.visible .line:nth-child(3) { transform: translateY(0); opacity: 1; transition-delay: 0.24s; }
        .hero-heading .accent-word {
          background: linear-gradient(90deg, #a78bfa, #f0abfc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Divider ── */
        .divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(139,92,246,0.5), transparent);
        }
        .divider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 10px 3px rgba(167,139,250,0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        /* ── Tag pills ── */
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          font-size: 0.72rem;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.08em;
          padding: 0.28rem 0.75rem;
          border-radius: 999px;
          border: 1px solid rgba(167,139,250,0.35);
          background: rgba(167,139,250,0.07);
          color: #c4b5fd;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .tag:hover {
          background: rgba(167,139,250,0.18);
          border-color: rgba(167,139,250,0.65);
          color: #ede9fe;
        }

        /* ── Stats grid ── */
        .stats-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }

        .stat-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          padding: 1.75rem 1.5rem;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s, opacity 0.6s ease var(--delay),
                      box-shadow 0.35s;
          transform: translateY(var(--ty, 24px));
        }
        .stat-card[style*="opacity: 1"] { --ty: 0px; }

        .stat-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(167,139,250,0.4);
          box-shadow: 0 20px 60px -10px rgba(139,92,246,0.25);
        }

        .stat-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a78bfa, #f0abfc);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 24px 24px 0 0;
        }
        .stat-card:hover .stat-accent { opacity: 1; }

        .stat-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .stat-card:hover .stat-glow { opacity: 1; }

        .stat-value {
          font-family: 'Orbitron', monospace;
          font-size: clamp(2rem, 4vw, 2.6rem);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-suffix {
          font-size: 0.65em;
          color: #c4b5fd;
          margin-left: 2px;
        }
        .stat-label {
          font-size: 0.82rem;
          color: #71717a;
          letter-spacing: 0.04em;
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=Syne:wght@700;800&family=Space+Mono:wght@400&display=swap"
        rel="stylesheet"
      />

      <section ref={sectionRef} className="about-section">

        {/* ── Eyebrow ── */}
        <div className="about-eyebrow">
          <div className="eyebrow-line" />
          <span className="about-title">About Me</span>
          <div className="eyebrow-line right" />
        </div>

        {/* ── Main grid ── */}
        <div className="about-grid">

          {/* Left: 3-D liquid panel */}
          <div className="panel-3d">
            <div className="panel-liquid">
              <LiquidEther
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#5227FF"
                color1="#FF9FFC"
                color2="#B19EEF"
              />
            </div>
            <div className="panel-inner">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

          {/* Right: copy */}
          <div className="copy-side">
            <h1
              className={`hero-heading ${sectionVisible ? "visible" : ""}`}
            >
              <span className="line">Crafting digital</span>
              <span className="line"><span className="accent-word">products</span> with</span>
              <span className="line">curiosity & precision.</span>
            </h1>

            <div className="divider">
              <div className="divider-dot" />
              <div className="divider-line" />
            </div>

            {sectionVisible ? (
              <BlurText
                text="I'm Udit, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions."
                delay={120}
                animateBy="words"
                direction="top"
                className="max-w-2xl text-base leading-8 text-zinc-300 md:text-lg xl:text-[1.06rem]"
              />
            ) : (
              <p className="max-w-2xl text-base leading-8 text-zinc-300/0 md:text-lg xl:text-[1.06rem]">
                I&apos;m Udit, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience.
              </p>
            )}

            {/* Tag pills */}
            <div className="tag-row">
              {["Full-Stack", "AI / ML", "Cloud", "React", "Node.js", "UX-Focused"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="stats-grid">
          {featuredStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={statsVisible} />
          ))}
        </div>

      </section>
    </>
  );
};

export default AboutPage;
