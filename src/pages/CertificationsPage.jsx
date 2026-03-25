


import { useState, useRef, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {PageHeading} from "../components/PageHeading";

const DATA = [
  {
    id: 1,
    title: "Internship Completion Certificate",
    company: "Green Mandi Deals Private Limited",
    period: "Jun 2025 - Aug 2025",
    icon: "GM",
    color: "#22c55e",
    tags: ["Full Stack", "Remote Internship", "Web Development"],
    cred: "Issued: 2025-08-05",
    desc: "Awarded for successfully completing a remote internship as a Full Stack Intern and contributing with dedication, professionalism, and project delivery during the internship period.",
    img: "/assets/certificates/green-mandi-internship.png",
    link: "https://drive.google.com/file/d/17s7EUo1H2Lx6CcqiRzC9PckPIgY02p_Z/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Certificate of Recognition",
    company: "Student Organization ECHO, Lovely Professional University",
    period: "Feb 2024",
    icon: "EC",
    color: "#10b981",
    tags: ["Coordinator", "Hackathon", "Leadership"],
    cred: "Certificate No. 314222",
    desc: "Recognized for contributing as a Coordinator in the event HackWithVertices 1.0, a 24-hour hackathon organized under the Department of Student Organizations at Lovely Professional University.",
    img: "/assets/certificates/echo-recognition-certificate.png",
    link: "https://drive.google.com/file/d/1arsGaX29o_mMx8qakXNkcmsXZW-O3nly/view?usp=sharing",
  },
  {
    id: 3,
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    company: "Infosys Springboard",
    period: "Aug 2025",
    icon: "AI",
    color: "#38bdf8",
    tags: ["Prompt Engineering", "Generative AI", "LLM"],
    cred: "Completed on August 12, 2025",
    desc: "Course completion certificate for learning prompt engineering concepts with ChatGPT, Generative AI workflows, and large language model fundamentals through Infosys Springboard.",
    img: "/assets/certificates/infosys-prompt-engineering-certificate.png",
    link: "https://drive.google.com/file/d/16ZLIWgs5TQt7WhY_3bhJpQM0eKAy0Axg/view?usp=sharing",
  },
  {
    id: 4,
    title: "Privacy and Security in Online Social Media",
    company: "NPTEL / IIIT Hyderabad",
    period: "Jan 2025 - Apr 2025",
    icon: "PS",
    color: "#f59e0b",
    tags: ["Privacy", "Security", "Social Media"],
    cred: "Roll No. NPTEL25CS79S147500628",
    desc: "Elite NPTEL certification earned for successfully completing the 12-week course on privacy and security in online social media with a consolidated score of 62 percent.",
    img: "/assets/certificates/nptel-privacy-security-certificate.png",
    link: "https://drive.google.com/file/d/1laQ6f9TvJdOIBFC7YFOpXuO9LcbaRcsz/view?usp=sharing",
  },
  {
    id: 5,
    title: "Full Stack Development",
    company: "Board Infinity",
    period: "Feb 2024",
    icon: "BI",
    color: "#3b82f6",
    tags: ["Full Stack", "Web Development", "Microlearning"],
    cred: "Certificate No. BI-20240203-5465856",
    desc: "Certificate of completion awarded for successfully completing microlearning in Full Stack Development through Board Infinity.",
    img: "/assets/certificates/board-infinity-full-stack-certificate.png",
    link: "https://drive.google.com/file/d/1ZLeIwx5Y18Gut0qY6IGLobdFY1ADs_rG/view?usp=sharing",
  },
  {
    id: 6,
    title: "AWS SimuLearn: Cloud Computing Essentials",
    company: "AWS Training & Certification",
    period: "Mar 2026",
    icon: "AWS",
    color: "#f97316",
    tags: ["AWS", "Cloud Computing", "Essentials"],
    cred: "Completed: March 06, 2026",
    desc: "AWS completion certificate covering foundational cloud computing concepts, AWS ecosystem basics, and essential platform understanding through SimuLearn.",
    img: "/assets/certificates/aws-cloud-computing-essentials-certificate.png",
    link: "https://drive.google.com/file/d/12a3ZsfsvfXd_UJJ_VILoLl5TjEwDxCJ9/view?usp=sharing",
  },
  {
    id: 7,
    title: "Digital Skills: Social Media",
    company: "Accenture / FutureLearn",
    period: "Self-paced Certification",
    icon: "SM",
    color: "#c026d3",
    tags: ["Social Media", "Digital Skills", "Brand Strategy"],
    cred: "Certificate of Achievement",
    desc: "Certificate awarded for completing the Digital Skills: Social Media course, covering how to use social media for business, brand promotion, audience targeting, and channel selection.",
    img: "/assets/certificates/accenture-digital-skills-social-media-certificate.png",
    link: "https://drive.google.com/file/d/1MKcKnsndH6HKtkZSUBWJDFwmDw4vZ0QB/view?usp=sharing",
  },
];

const getViewport = (width) => {
  if (width < 640) {
    return {
      mobile: true,
      tablet: false,
      stageHeight: 420,
      cardWidth: Math.min(290, Math.max(220, width - 56)),
      cardOffsetY: 155,
      sideX1: Math.max(118, width * 0.28),
      sideX2: Math.max(170, width * 0.4),
      scale1: 0.86,
      scale2: 0.66,
      blur1: 1,
      blur2: 4,
      opacity1: 0.32,
      opacity2: 0.0,
      showFar: false,
      headerPadTop: 28,
      navPadX: 14,
      modalPad: 14,
      modalRadius: 18,
    }
  }
  if (width < 1024) {
    return {
      mobile: false,
      tablet: true,
      stageHeight: 500,
      cardWidth: Math.min(320, Math.max(250, width * 0.36)),
      cardOffsetY: 180,
      sideX1: Math.min(250, width * 0.26),
      sideX2: Math.min(390, width * 0.4),
      scale1: 0.78,
      scale2: 0.58,
      blur1: 2,
      blur2: 5,
      opacity1: 0.58,
      opacity2: 0.24,
      showFar: false,
      headerPadTop: 36,
      navPadX: 18,
      modalPad: 18,
      modalRadius: 20,
    }
  }
  return {
    mobile: false,
    tablet: false,
    stageHeight: 520,
    cardWidth: 280,
    cardOffsetY: 205,
    sideX1: 330,
    sideX2: 530,
    scale1: 0.72,
    scale2: 0.52,
    blur1: 3,
    blur2: 7,
    opacity1: 0.75,
    opacity2: 0.42,
    showFar: true,
    headerPadTop: 44,
    navPadX: 22,
    modalPad: 24,
    modalRadius: 22,
  }
}

const getConfig = (offset, viewport) => {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);
  if (abs === 0) return { x: 0, rotY: 0, scale: 1, blur: 0, opacity: 1, z: 10 };
  if (abs === 1) return { x: sign * viewport.sideX1, rotY: sign * -42, scale: viewport.scale1, blur: viewport.blur1, opacity: viewport.opacity1, z: 7 };
  if (abs === 2) return { x: sign * viewport.sideX2, rotY: sign * -58, scale: viewport.scale2, blur: viewport.blur2, opacity: viewport.opacity2, z: 4 };
  if (!viewport.showFar) return { x: sign * viewport.sideX2, rotY: sign * -62, scale: 0.52, blur: 6, opacity: 0, z: 1 };
  return { x: sign * (viewport.sideX2 + 120 * (abs - 2)), rotY: sign * -75, scale: 0.36, blur: 12, opacity: 0.18, z: 1 };
};

const CertificateVisual = ({ item, variant = "card" }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(item.img) && !imageFailed;

  if (hasImage) {
    return (
      <img
        src={item.img}
        alt={item.title}
        onError={() => setImageFailed(true)}
        style={
          variant === "modal"
            ? { width: "100%", height: "100%", borderRadius: 13, display: "block", objectFit: "contain", background: "#030712" }
            : { width: "100%", height: "100%", objectFit: "cover", display: "block" }
        }
      />
    );
  }

  return (
    <div
      style={
        variant === "modal"
          ? { width: "100%", aspectRatio: "16/9", borderRadius: 13, background: `linear-gradient(135deg,${item.color}12,#060e18)`, border: `1px dashed ${item.color}30`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, position: "relative", overflow: "hidden" }
          : { width: "100%", height: "100%", background: `linear-gradient(150deg,${item.color}20,#060e18)`, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }
      }
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(45deg,${item.color}08 0,${item.color}08 1px,transparent 1px,transparent 12px)` }} />
      <div style={{ position: "relative", width: variant === "modal" ? 72 : 56, height: variant === "modal" ? 72 : 56, borderRadius: variant === "modal" ? 18 : 14, border: `1px solid ${item.color}40`, background: `${item.color}16`, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: variant === "modal" ? 18 : 14, fontWeight: 700, letterSpacing: ".08em" }}>
        {item.icon}
      </div>
      <div style={{ position: "relative", textAlign: "center", border: `1px solid ${item.color}28`, borderRadius: 12, padding: variant === "modal" ? "14px 30px" : "10px 18px", background: `${item.color}0a`, maxWidth: variant === "modal" ? 420 : 220 }}>
        <p style={{ fontSize: variant === "modal" ? 15 : 12, fontWeight: 700, color: "#dde6f0", margin: "0 0 5px" }}>{item.title}</p>
        <p style={{ fontSize: 11, color: item.color, margin: 0 }}>{item.company}</p>
      </div>
      <p style={{ fontSize: 10, color: "#35506d", letterSpacing: ".08em", position: "relative", margin: 0, textAlign: "center", padding: "0 12px" }}>
        Add the image file at {item.img}
      </p>
    </div>
  );
};

function Modal({ item, onClose, viewport }) {
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(4,8,14,.94)", backdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "center", padding: viewport.modalPad }}>
      <motion.div initial={{ scale: 0.82, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(e) => e.stopPropagation()} style={{ background: "#090f1a", border: `1.5px solid ${item.color}`, borderRadius: viewport.modalRadius, maxWidth: viewport.mobile ? "100%" : viewport.tablet ? 680 : 760, width: "100%", maxHeight: `calc(100vh - ${viewport.modalPad * 2}px)`, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${item.color},transparent)` }} />
        <div style={{ padding: viewport.mobile ? "14px 16px" : "18px 22px", borderBottom: `1px solid ${item.color}20`, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: item.color, letterSpacing: ".08em", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#dde6f0", margin: 0 }}>{item.title}</p>
              <p style={{ fontSize: 12, color: item.color, margin: 0 }}>{item.company}</p>
            </div>
          </div>
          <motion.button whileHover={{ rotate: 90, scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, background: "#0d1a28", border: `1px solid ${item.color}35`, color: "#94a3b8", fontSize: 14, cursor: "pointer", flexShrink: 0 }}>X</motion.button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
          <div style={{ padding: viewport.mobile ? "14px 16px 0" : "18px 22px 0" }}>
            <div style={{ width: "100%", maxHeight: viewport.mobile ? "32vh" : viewport.tablet ? "38vh" : "44vh", overflow: "hidden", borderRadius: 13, background: "#030712" }}>
              <CertificateVisual item={item} variant="modal" />
            </div>
          </div>
          <div style={{ padding: viewport.mobile ? "14px 16px 16px" : "16px 22px 22px" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            {[{ label: "CREDENTIAL", value: item.cred, valueColor: item.color }, { label: "ABOUT", value: item.desc, valueColor: "#8a9ab0" }].map(({ label, value, valueColor }) => (
              <div key={label} style={{ flex: 1, background: "#0d1a28", borderRadius: 10, padding: "11px 14px", minWidth: viewport.mobile ? "100%" : 160, border: "1px solid #12223a" }}>
                <p style={{ fontSize: 8, color: "#2a4060", letterSpacing: ".12em", margin: "0 0 4px" }}>{label}</p>
                <p style={{ fontSize: 10, color: valueColor, lineHeight: 1.65, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            {item.img ? <a href={item.img} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", borderRadius: 10, border: `1px solid ${item.color}`, background: `${item.color}14`, color: item.color, textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: ".06em" }}>OPEN IMAGE</a> : null}
            {item.link ? <a href={item.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", borderRadius: 10, border: `1px solid ${item.color}`, background: "transparent", color: item.color, textDecoration: "none", fontSize: 11, fontWeight: 600, letterSpacing: ".06em" }}>OPEN LINK</a> : <div style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: 10, border: "1px dashed #23364f", color: "#5f7893", fontSize: 11 }}>Add certificate URL in the link field</div>}
          </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {item.tags.map((tag) => <span key={tag} style={{ fontSize: 10, padding: "5px 13px", border: `1px solid ${item.color}38`, borderRadius: 20, color: item.color, background: `${item.color}0f` }}>{tag}</span>)}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Card({ item, offset, onView, viewport }) {
  const [hovered, setHovered] = useState(false);
  const cfg = getConfig(offset, viewport);
  const isCenter = offset === 0;
  const previewHeight = viewport.mobile ? 150 : viewport.tablet ? 165 : 180;
  const bodyPadding = viewport.mobile ? "14px" : "16px 18px 18px";

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ position: "absolute", top: "50%", left: "50%", marginLeft: -(viewport.cardWidth / 2), marginTop: -viewport.cardOffsetY, zIndex: cfg.z, transform: `translateX(${cfg.x}px) rotateY(${cfg.rotY}deg) scale(${isCenter && hovered && !viewport.mobile ? cfg.scale * 1.04 : cfg.scale})`, filter: `blur(${cfg.blur}px)`, opacity: cfg.opacity, transition: "transform .5s cubic-bezier(.4,0,.2,1), filter .4s, opacity .4s", cursor: isCenter ? "pointer" : "default", transformStyle: "preserve-3d" }}>
      <div style={{ width: viewport.cardWidth, background: "#0b1622", border: `1.5px solid ${isCenter ? item.color : item.color + "50"}`, borderRadius: viewport.mobile ? 18 : 20, overflow: "hidden", boxShadow: isCenter ? `0 0 0 1.5px ${item.color}, 0 0 50px ${item.color}28` : `0 0 0 1px ${item.color}35`, transition: "box-shadow .3s, border-color .3s" }}>
        <div style={{ width: "100%", height: previewHeight, position: "relative", overflow: "hidden" }}>
          <CertificateVisual item={item} variant="card" />
        </div>
        <div style={{ padding: bodyPadding }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: viewport.mobile ? 40 : 46, height: viewport.mobile ? 40 : 46, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: viewport.mobile ? 10 : 12, fontWeight: 700, color: item.color, letterSpacing: ".08em", flexShrink: 0 }}>
              {item.icon}
            </div>
            <span style={{ fontSize: viewport.mobile ? 10 : 11, color: item.color, letterSpacing: ".04em", lineHeight: 1.4 }}>{item.period}</span>
          </div>
          <h3 style={{ fontSize: viewport.mobile ? 13 : 15, fontWeight: 700, color: "#dde6f0", lineHeight: 1.35, margin: "0 0 8px" }}>{item.title}</h3>
          <p style={{ fontSize: viewport.mobile ? 12 : 13, fontWeight: 600, color: "#f59e0b", margin: "0 0 12px" }}>{item.company}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
            {item.tags.map((tag) => <span key={tag} style={{ fontSize: 9, padding: "4px 10px", borderRadius: 20, color: "#94a3b8", border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)" }}>{tag}</span>)}
          </div>
          <AnimatePresence>
            {isCenter && (hovered || viewport.mobile || viewport.tablet) && (
              <motion.button initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }} onClick={(e) => { e.stopPropagation(); onView(item); }} whileHover={{ scale: viewport.mobile ? 1 : 1.03 }} whileTap={{ scale: 0.96 }} style={{ width: "100%", padding: viewport.mobile ? "9px 0" : "10px 0", background: `${item.color}1a`, border: `1.5px solid ${item.color}`, borderRadius: 10, color: item.color, fontSize: 11, fontWeight: 600, cursor: "pointer", letterSpacing: ".06em" }}>VIEW CERTIFICATE</motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const CertificationsPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window === "undefined" ? 1280 : window.innerWidth));
  const accumRef = useRef(0);
  const dragRef = useRef(false);
  const lxRef = useRef(0);
  const total = DATA.length;
  const viewport = getViewport(viewportWidth);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = useCallback((idx) => {
    setActiveIdx(((idx % total) + total) % total);
  }, [total]);

  useEffect(() => {
    const fn = (e) => {
      e.preventDefault();
      accumRef.current += e.deltaY;
      if (Math.abs(accumRef.current) > (viewport.mobile ? 55 : 80)) {
        goTo(activeIdx + (accumRef.current > 0 ? 1 : -1));
        accumRef.current = 0;
      }
    };
    window.addEventListener("wheel", fn, { passive: false });
    return () => window.removeEventListener("wheel", fn);
  }, [activeIdx, goTo, viewport.mobile]);

  const onMouseDown = (e) => { dragRef.current = true; lxRef.current = e.clientX; accumRef.current = 0; };
  const onMouseMove = useCallback((e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - lxRef.current;
    lxRef.current = e.clientX;
    accumRef.current -= dx;
    if (Math.abs(accumRef.current) > (viewport.mobile ? 60 : 90)) {
      goTo(activeIdx + (accumRef.current > 0 ? 1 : -1));
      accumRef.current = 0;
    }
  }, [activeIdx, goTo, viewport.mobile]);
  const onMouseUp = () => { dragRef.current = false; accumRef.current = 0; };
  const onTouchStart = (e) => { lxRef.current = e.touches[0].clientX; accumRef.current = 0; };
  const onTouchMove = useCallback((e) => {
    const dx = e.touches[0].clientX - lxRef.current;
    lxRef.current = e.touches[0].clientX;
    accumRef.current -= dx;
    if (Math.abs(accumRef.current) > (viewport.mobile ? 45 : 80)) {
      goTo(activeIdx + (accumRef.current > 0 ? 1 : -1));
      accumRef.current = 0;
    }
  }, [activeIdx, goTo, viewport.mobile]);

  return (
    <section style={{ minHeight: "100vh", overflow: "hidden", position: "relative", paddingBottom: viewport.mobile ? 28 : 36 }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(#ffffff 1px,transparent 1px),radial-gradient(#ffffff 1px,transparent 1px)", backgroundSize: viewport.mobile ? "120px 120px,180px 180px" : "180px 180px,260px 260px", backgroundPosition: "0 0,90px 90px", opacity: 0.022 }} />
      <div style={{ textAlign: "center", paddingTop: viewport.headerPadTop, paddingBottom: viewport.mobile ? 18 : 22, position: "relative", zIndex: 10, paddingInline: 16 }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <PageHeading
            title="Certifications"
            description="Drag, scroll, or use arrows to explore the certificates."
            className="mb-0"
          />
        </motion.div>
      </div>
      <div onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onMouseUp} style={{ position: "relative", width: "100%", height: viewport.stageHeight, cursor: "grab", userSelect: "none", zIndex: 5, perspective: viewport.mobile ? 800 : 1200 }}>
        {DATA.map((item, i) => {
          let offset = i - activeIdx;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          return <Card key={item.id} item={item} offset={offset} onView={setModalItem} viewport={viewport} />;
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: viewport.mobile ? 10 : 18, marginTop: viewport.mobile ? 0 : 10, position: "relative", zIndex: 10, paddingInline: 12, flexWrap: "wrap" }}>
        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.94 }} onClick={() => goTo(activeIdx - 1)} style={{ background: "transparent", border: "1px solid #1a3050", borderRadius: 9, padding: viewport.mobile ? "8px 16px" : "8px 22px", color: "#4da6ff", fontSize: viewport.mobile ? 12 : 13, cursor: "pointer" }}>prev</motion.button>
        <div style={{ display: "flex", gap: 8, alignItems: "center", order: viewport.mobile ? 3 : 0, width: viewport.mobile ? "100%" : "auto", justifyContent: "center" }}>
          {DATA.map((item, i) => <motion.div key={item.id} onClick={() => goTo(i)} animate={{ scale: i === activeIdx ? 1.5 : 1, background: i === activeIdx ? item.color : "#1e3050" }} style={{ width: 7, height: 7, borderRadius: "50%", cursor: "pointer" }} />)}
        </div>
        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.94 }} onClick={() => goTo(activeIdx + 1)} style={{ background: "transparent", border: "1px solid #1a3050", borderRadius: 9, padding: viewport.mobile ? "8px 16px" : "8px 22px", color: "#4da6ff", fontSize: viewport.mobile ? 12 : 13, cursor: "pointer" }}>next</motion.button>
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ textAlign: "center", marginTop: 14, fontSize: 10, color: "#1a2a40", letterSpacing: ".12em", paddingInline: 16 }}>{DATA.length} certificates</motion.p>
      <AnimatePresence>{modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} viewport={viewport} />}</AnimatePresence>
    </section>
  );
};

export default CertificationsPage;
