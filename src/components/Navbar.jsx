import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, FileText, Award, Trophy, Download } from "lucide-react";
import { navigationLinks } from "../data";

const extraLinks = [
  { href: "/certifications", label: "Certification"},
  { href: "/achievements", label: "Achievement"},
  { href: "/resume", label: "Resume" },
];

/* ── Particle burst on logo click ── */
const ParticleCanvas = ({ trigger }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const cx = W / 2, cy = H / 2;
    let particles = Array.from({ length: 28 }, (_, i) => {
      const angle = (i / 28) * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2.5;
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.025 + Math.random() * 0.025,
        size: 2 + Math.random() * 2,
        hue: 175 + Math.random() * 30,
      };
    });
    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.life -= p.decay;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = `hsl(${p.hue},90%,70%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      });
      if (particles.length > 0) raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [trigger]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        borderRadius: "16px", pointerEvents: "none",
      }}
    />
  );
};

/* ── Magnetic NavLink ── */
const MagneticLink = ({ link, isExtra }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setOffset({ x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.25 });
  }, []);
  const onLeave = useCallback(() => { setOffset({ x: 0, y: 0 }); setHov(false); }, []);
  const Icon = isExtra?.icon;

  return (
    <NavLink
      ref={ref}
      to={link.href}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: hov
          ? "transform 0.15s cubic-bezier(0.23,1,0.32,1)"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        display: "inline-flex", position: "relative",
      }}
      className={({ isActive }) =>
        `group relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium select-none xl:px-4 xl:py-2 ${
          isActive ? "text-cyan-200" : "text-zinc-400"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            style={{
              position: "absolute", inset: 0, borderRadius: "999px",
              background: isActive ? "rgba(34,211,238,0.12)" : hov ? "rgba(255,255,255,0.06)" : "transparent",
              boxShadow: isActive ? "0 0 24px rgba(34,211,238,0.14), inset 0 0 0 1px rgba(34,211,238,0.22)" : "none",
              transition: "background 0.2s, box-shadow 0.3s",
            }}
          />
          {isActive && (
            <span
              style={{
                position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)",
                width: "16px", height: "2px", borderRadius: "99px",
                background: "rgba(34,211,238,0.85)",
                boxShadow: "0 0 8px rgba(34,211,238,0.9)",
                animation: "expand-dot 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
              }}
            />
          )}
          {Icon && <Icon size={13} className="relative z-10 transition-transform duration-200 group-hover:scale-110" strokeWidth={2} />}
          <span className="relative z-10">{link.label}</span>
        </>
      )}
    </NavLink>
  );
};

/* ── Cursor glow tracker ── */
const CursorGlow = ({ navRef }) => {
  const glowRef = useRef(null);
  useEffect(() => {
    const nav = navRef.current, glow = glowRef.current;
    if (!nav || !glow) return;
    const onMove = (e) => {
      const r = nav.getBoundingClientRect();
      glow.style.transform = `translate(${e.clientX - r.left - 150}px, ${e.clientY - r.top - 150}px)`;
      glow.style.opacity = "1";
    };
    const onLeave = () => { glow.style.opacity = "0"; };
    nav.addEventListener("mousemove", onMove);
    nav.addEventListener("mouseleave", onLeave);
    return () => { nav.removeEventListener("mousemove", onMove); nav.removeEventListener("mouseleave", onLeave); };
  }, [navRef]);
  return (
    <div
      ref={glowRef}
      style={{
        position: "absolute", top: 0, left: 0, width: "300px", height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
        pointerEvents: "none", opacity: 0, transition: "opacity 0.4s", zIndex: 0,
      }}
    />
  );
};

/* ── Main Navbar ── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particleTrigger, setParticleTrigger] = useState(0);
  const [logoHov, setLogoHov] = useState(false);
  const [dlHov, setDlHov] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const orderedBasePaths = ["/", "/projects", "/skills"];
  const baseLinks = orderedBasePaths.map((h) => navigationLinks.find((l) => l.href === h)).filter(Boolean);
  const contactLink = navigationLinks.find((l) => l.href === "/contact");
  const links = [...baseLinks, ...extraLinks, ...(contactLink ? [contactLink] : [])];

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <style>{`
        @keyframes nav-in {
          from { opacity:0; transform:translateY(-100%) }
          to   { opacity:1; transform:translateY(0) }
        }
        @keyframes expand-dot {
          from { width:0; opacity:0 }
          to   { width:16px; opacity:1 }
        }
        @keyframes menu-in {
          from { opacity:0; transform:translateY(-10px) scaleY(0.95) }
          to   { opacity:1; transform:translateY(0) scaleY(1) }
        }
        @keyframes item-in {
          from { opacity:0; transform:translateX(-14px) }
          to   { opacity:1; transform:translateX(0) }
        }
        @keyframes logo-spin {
          from { transform:rotate(0deg) }
          to   { transform:rotate(360deg) }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(1);   opacity:.6 }
          100% { transform:scale(1.55); opacity:0 }
        }
        @keyframes shimmer-slide {
          from { background-position:-200% center }
          to   { background-position:200% center }
        }
        @keyframes menu-icon-flip {
          from { transform:rotate(-90deg) scale(0.7); opacity:0 }
          to   { transform:rotate(0deg)   scale(1);   opacity:1 }
        }
        @keyframes float-dot {
          0%,100% { transform:translateY(0) }
          50%     { transform:translateY(-2px) }
        }
        @keyframes scanlines {
          from { background-position:0 0 }
          to   { background-position:0 80px }
        }
        .dl-btn { position:relative; overflow:hidden; transition:all .28s cubic-bezier(.23,1,.32,1) }
        .dl-btn::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(100deg,transparent 20%,rgba(34,211,238,.18) 50%,transparent 80%);
          background-size:200% 100%; opacity:0; transition:opacity .3s;
        }
        .dl-btn:hover::after { opacity:1; animation:shimmer-slide 1.4s ease infinite }
        .dl-btn:hover { border-color:rgba(34,211,238,.55)!important; box-shadow:0 0 30px rgba(34,211,238,.18),inset 0 1px 0 rgba(34,211,238,.2)!important; transform:translateY(-2px)!important }
        .dl-btn:active { transform:translateY(0)!important }
        .ham { transition:all .22s cubic-bezier(.34,1.56,.64,1) }
        .ham:hover { border-color:rgba(34,211,238,.35)!important; background:rgba(34,211,238,.06)!important; transform:scale(1.07) }
        .ham:active { transform:scale(.93) }
        .mob-row { transition:all .2s cubic-bezier(.23,1,.32,1) }
        .mob-row:hover { transform:translateX(4px) }
        .mob-row:active { transform:translateX(2px) scale(.98) }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, overflow: "hidden",
          animation: mounted ? "nav-in 0.6s cubic-bezier(0.16,1,0.3,1) both" : "none",
          backgroundColor: scrolled ? "rgba(4,6,18,0.95)" : "rgba(5,8,22,0.5)",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          borderBottom: scrolled ? "1px solid rgba(34,211,238,0.14)" : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.5), 0 0 80px rgba(34,211,238,0.03)" : "none",
          transition: "background-color 0.5s, border-color 0.5s, box-shadow 0.5s",
        }}
      >
        {/* Scanlines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(34,211,238,0.009) 3px,rgba(34,211,238,0.009) 4px)",
          animation: "scanlines 10s linear infinite",
        }} />

        {/* Top glow line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg,transparent 0%,rgba(34,211,238,.5) 30%,rgba(34,211,238,.8) 50%,rgba(34,211,238,.5) 70%,transparent 100%)",
          opacity: scrolled ? 1 : 0, transition: "opacity 0.5s", zIndex: 1,
        }} />

        <CursorGlow navRef={navRef} />

        <div className="mx-auto flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8" style={{ position: "relative", zIndex: 2 }}>

          {/* Logo */}
          <Link
            to="/"
            onMouseEnter={() => setLogoHov(true)}
            onMouseLeave={() => setLogoHov(false)}
            onClick={() => setParticleTrigger((t) => t + 1)}
            style={{
              display: "flex", alignItems: "center", gap: "12px", textDecoration: "none",
              transform: logoHov ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0 }}>
              {/* Pulse ring */}
              {logoHov && (
                <div style={{
                  position: "absolute", inset: "-5px", borderRadius: "19px",
                  border: "1px solid rgba(34,211,238,0.5)",
                  animation: "pulse-ring 0.75s ease-out forwards",
                }} />
              )}
              {/* Spinning dashed ring */}
              <svg style={{ position: "absolute", inset: 0, width: "40px", height: "40px", animation: "logo-spin 7s linear infinite" }} viewBox="0 0 44 44">
                <rect x="1" y="1" width="42" height="42" rx="12" fill="none" stroke="rgba(34,211,238,0.45)" strokeWidth="1" strokeDasharray="28 140" />
              </svg>
              {/* Core */}
              <div style={{
                position: "absolute", inset: "3px", borderRadius: "10px",
                background: "rgba(34,211,238,0.07)", border: "0.5px solid rgba(34,211,238,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "inset 0 0 20px rgba(34,211,238,0.08)",
              }}>
                <span style={{
                  fontSize: "15px", fontWeight: 700, color: "#a5f3fc",
                  textShadow: logoHov ? "0 0 24px rgba(34,211,238,1),0 0 50px rgba(34,211,238,0.5)" : "0 0 12px rgba(34,211,238,0.55)",
                  transition: "text-shadow 0.3s",
                }}>U</span>
              </div>
              <ParticleCanvas trigger={particleTrigger} />
            </div>

            <div>
              <p style={{
                fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", margin: 0,
                background: logoHov ? "linear-gradient(90deg,#fff,#a5f3fc,#fff)" : "none",
                backgroundClip: logoHov ? "text" : undefined,
                WebkitBackgroundClip: logoHov ? "text" : undefined,
                WebkitTextFillColor: logoHov ? "transparent" : "#fff",
                backgroundSize: "200% 100%",
                animation: logoHov ? "shimmer-slide 1.5s ease infinite" : "none",
                transition: "all 0.3s",
              }}>Udit Portfolio</p>
              <p style={{
                fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.24em", margin: 0,
                color: logoHov ? "rgba(34,211,238,0.8)" : "rgba(34,211,238,0.45)",
                transition: "color 0.3s",
              }}>Web Developer</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <div style={{
              display: "flex", alignItems: "center", gap: "2px",
              background: "rgba(255,255,255,0.025)",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "999px", padding: "4px",
            }}>
              {links.map((link) => (
                <MagneticLink key={link.href} link={link} isExtra={extraLinks.find((e) => e.href === link.href)} />
              ))}
            </div>
          </div>

          <div className="ml-auto hidden items-center justify-end lg:flex">
            <a
              href="/assets/CV.pdf"
              download="Udit_CV.pdf"
              onMouseEnter={() => setDlHov(true)}
              onMouseLeave={() => setDlHov(false)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "9px 16px", borderRadius: "999px",
                border: "1px solid rgba(34,211,238,0.25)",
                background: "rgba(34,211,238,0.06)",
                color: "#a5f3fc", fontSize: "12px", fontWeight: 600,
                textDecoration: "none", whiteSpace: "nowrap",
              }}
              className="dl-btn"
            >
              <Download size={12} strokeWidth={2.5} style={{ transition: "transform .3s cubic-bezier(.34,1.56,.64,1)", transform: dlHov ? "translateY(-2px)" : "none" }} />
              <span>Download CV</span>
              <span style={{
                padding: "2px 6px", borderRadius: "6px",
                background: "rgba(34,211,238,0.15)", color: "rgba(34,211,238,0.9)",
                fontSize: "9px", fontWeight: 700,
                animation: "float-dot 2s ease-in-out infinite",
              }}>PDF</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="ham ml-3 inline-flex items-center justify-center lg:hidden"
            aria-label="Toggle navigation"
            style={{
              width: "40px", height: "40px", flexShrink: 0, cursor: "pointer",
              borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)", color: "#fff",
            }}
          >
            <span key={String(menuOpen)} style={{ animation: "menu-icon-flip 0.2s ease both", display: "block" }}>
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            animation: "menu-in 0.28s cubic-bezier(0.16,1,0.3,1) both",
            transformOrigin: "top center",
            borderTop: "1px solid rgba(34,211,238,0.08)",
            background: "linear-gradient(180deg,rgba(4,8,24,0.98),rgba(3,5,16,0.99))",
            padding: "12px 16px 20px", position: "relative", zIndex: 2,
          }}>
            <div style={{ height: "1px", borderRadius: "99px", marginBottom: "12px", background: "linear-gradient(90deg,transparent,rgba(34,211,238,.35),transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((link, i) => {
                const Icon = extraLinks.find((item) => item.href === link.href)?.icon;
                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="mob-row"
                    style={{ animation: `item-in 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 0.04 + 0.02}s both`, textDecoration: "none" }}
                  >
                    {({ isActive }) => (
                      <div style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        padding: "11px 14px", borderRadius: "14px",
                        background: isActive ? "rgba(34,211,238,0.09)" : "transparent",
                        border: isActive ? "1px solid rgba(34,211,238,0.18)" : "1px solid transparent",
                        color: isActive ? "#a5f3fc" : "#a1a1aa",
                        fontSize: "14px", fontWeight: 500,
                      }}>
                        <div style={{
                          width: "30px", height: "30px", flexShrink: 0, borderRadius: "10px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: isActive ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.05)",
                          border: isActive ? "1px solid rgba(34,211,238,0.22)" : "1px solid rgba(255,255,255,0.06)",
                          color: isActive ? "#67e8f9" : "#71717a",
                          transition: "all 0.2s",
                        }}>
                          {Icon ? <Icon size={14} strokeWidth={2} /> : <span style={{ fontSize: "12px", fontWeight: 700 }}>{link.label[0]}</span>}
                        </div>
                        <span style={{ flex: 1 }}>{link.label}</span>
                        {isActive && (
                          <span style={{
                            width: "6px", height: "6px", borderRadius: "50%",
                            background: "#22d3ee", boxShadow: "0 0 8px rgba(34,211,238,0.9)",
                            animation: "float-dot 2s ease-in-out infinite",
                          }} />
                        )}
                      </div>
                    )}
                  </NavLink>
                );
              })}
              <a
                href="/assets/CV.pdf"
                download="Udit_CV.pdf"
                style={{
                  animation: `item-in 0.3s cubic-bezier(0.16,1,0.3,1) ${links.length * 0.04 + 0.06}s both`,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  marginTop: "8px", padding: "12px", borderRadius: "14px",
                  background: "linear-gradient(135deg,rgba(34,211,238,.11),rgba(34,211,238,.05))",
                  border: "1px solid rgba(34,211,238,.22)",
                  color: "#a5f3fc", fontSize: "14px", fontWeight: 600, textDecoration: "none",
                }}
              >
                <Download size={14} strokeWidth={2.5} />
                Download CV
                <span style={{ padding: "2px 7px", borderRadius: "6px", background: "rgba(34,211,238,.15)", color: "rgba(34,211,238,.9)", fontSize: "10px", fontWeight: 700 }}>PDF</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
