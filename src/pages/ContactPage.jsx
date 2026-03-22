// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b2dthme";
// const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_4en6qr4";
// const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jLZSPQeHeSpYyBxF5";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     from_name: "",
//     from_email: "",
//     message: "",
//   });
//   const [formStatus, setFormStatus] = useState({ type: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleFieldChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((currentData) => ({
//       ...currentData,
//       [name]: value,
//     }));

//     if (formStatus.message) {
//       setFormStatus({ type: "", message: "" });
//     }
//   };

//   const handleContactSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         {
//           from_name: formData.from_name,
//           from_email: formData.from_email,
//           reply_to: formData.from_email,
//           message: formData.message,
//         },
//         {
//           publicKey: EMAILJS_PUBLIC_KEY,
//         }
//       );

//       setFormData({
//         from_name: "",
//         from_email: "",
//         message: "",
//       });
//       setFormStatus({
//         type: "success",
//         message: "Your message has been sent successfully.",
//       });
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       setFormStatus({
//         type: "error",
//         message: "Unable to send your message right now. Please try again in a moment.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-10">
//       <p className="mb-4 text-sm uppercase tracking-[0.45em] text-cyan-300">Get In Touch</p>
//       <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">Contact Me</h1>
//       <p className="mb-12 max-w-3xl text-base leading-8 text-zinc-400">
//         Send me an email directly and I will get back to you as soon as possible.
//       </p>

//       <div className="grid gap-8 lg:grid-cols-2">
//         <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
//           <h2 className="mb-4 text-2xl font-bold text-white">Let&apos;s build something great</h2>
//           <p className="mb-6 leading-7 text-zinc-300">
//             Whether you want to discuss a project, freelance work, collaboration, or just say hello, this form will send your message straight to my inbox using EmailJS.
//           </p>
//           <div className="space-y-4 text-sm text-zinc-300">
//             <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
//               <p className="mb-1 text-zinc-400">Email</p>
//               <p className="break-all font-semibold">uditgoyal0905@gmail.com</p>
//             </div>
//             <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
//               <p className="mb-1 text-zinc-400">Response Time</p>
//               <p className="font-semibold">Usually within 24-48 hours</p>
//             </div>
//             <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
//               <p className="mb-1 text-zinc-400">Best For</p>
//               <p className="font-semibold">Web apps, portfolio projects, UI work, and collaborations</p>
//             </div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleContactSubmit}
//           className="rounded-[32px] border border-white/10 bg-zinc-800/90 p-8 backdrop-blur-xl"
//           autoComplete="off"
//         >
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="from_name" className="font-semibold">Full Name</label>
//               <input
//                 id="from_name"
//                 type="text"
//                 name="from_name"
//                 value={formData.from_name}
//                 onChange={handleFieldChange}
//                 placeholder="Input Name..."
//                 className="rounded-xl border border-zinc-500 bg-transparent p-3"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="from_email" className="font-semibold">Email</label>
//               <input
//                 id="from_email"
//                 type="email"
//                 name="from_email"
//                 value={formData.from_email}
//                 onChange={handleFieldChange}
//                 placeholder="Input Email..."
//                 className="rounded-xl border border-zinc-500 bg-transparent p-3"
//                 required
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="message" className="font-semibold">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="7"
//                 value={formData.message}
//                 onChange={handleFieldChange}
//                 placeholder="Message..."
//                 className="rounded-xl border border-zinc-500 bg-transparent p-3"
//                 required
//               />
//             </div>
//             {formStatus.message && (
//               <p className={formStatus.type === "success" ? "text-green-400" : "text-red-400"}>
//                 {formStatus.message}
//               </p>
//             )}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="rounded-full border border-gray-700 bg-[#1a1a1a] px-6 py-4 font-semibold transition-colors hover:bg-[#222] disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;


import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {PageHeading} from "../components/PageHeading";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b2dthme";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_4en6qr4";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jLZSPQeHeSpYyBxF5";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "7015980564";
const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE || "Hello, I found your portfolio and would like to connect.";

const buildWhatsAppLink = () => {
  if (!WHATSAPP_NUMBER) {
    return `${import.meta.env.BASE_URL}contact`;
  }

  const cleanedNumber = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
};

/* ─── Floating particle component ─── */
const Particle = ({ style }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,229,160,0.6), transparent)",
      pointerEvents: "none",
      ...style,
    }}
  />
);

/* ─── Animated counter for the stat cards ─── */
const useInView = (ref) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
};

/* ─── Magnetic button hook ─── */
const useMagnetic = () => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const magnetic = useMagnetic();
  const whatsAppHref = buildWhatsAppLink();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
    if (formStatus.message) setFormStatus({ type: "", message: "" });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: formData.from_name, from_email: formData.from_email, reply_to: formData.from_email, message: formData.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setFormData({ from_name: "", from_email: "", message: "" });
      setFormStatus({ type: "success", message: "Message sent! I'll get back to you within 24–48 hours." });
    } catch (err) {
      console.error(err);
      setFormStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const particles = [
    { width: 6, height: 6, top: "15%", left: "8%", animation: "float1 6s ease-in-out infinite" },
    { width: 4, height: 4, top: "70%", left: "5%", animation: "float2 8s ease-in-out infinite 1s" },
    { width: 8, height: 8, top: "40%", right: "6%", animation: "float1 7s ease-in-out infinite 2s" },
    { width: 5, height: 5, top: "85%", right: "12%", animation: "float3 5s ease-in-out infinite 0.5s" },
    { width: 3, height: 3, top: "25%", right: "25%", animation: "float2 9s ease-in-out infinite 3s" },
  ];

  const infoItems = [
    {
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      value: "uditgoyal0905@gmail.com",
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: "Response Time",
      value: "Within 24–48 hours",
    },
    {
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      label: "Best For",
      value: "Web apps, UI/UX & collaborations",
    },
  ];

  const inputBase = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "14px 18px",
    color: "#e8f4f0",
    fontFamily: "'Outfit', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
  };

  const inputFocused = {
    borderColor: "rgba(0,229,160,0.5)",
    boxShadow: "0 0 0 3px rgba(0,229,160,0.08), inset 0 0 20px rgba(0,229,160,0.03)",
    background: "rgba(0,229,160,0.03)",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

        @keyframes float1 {
          0%,100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-18px) scale(1.2); opacity: 0.8; }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          33% { transform: translateY(-12px) translateX(8px); opacity: 0.7; }
          66% { transform: translateY(6px) translateX(-5px); opacity: 0.5; }
        }
        @keyframes float3 {
          0%,100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.8); opacity: 0.2; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0,229,160,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0,229,160,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0,229,160,0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes successPop {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }

        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-input:focus { caret-color: #00e5a0; }

        .info-card-hover {
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .info-card-hover:hover {
          transform: translateX(6px);
          border-color: rgba(0,229,160,0.3) !important;
          background: rgba(0,229,160,0.04) !important;
          box-shadow: -3px 0 0 0 #00e5a0;
        }

        .send-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .send-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,229,160,0.35);
        }
        .send-btn:active:not(:disabled) { transform: translateY(0); }
        .send-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .send-btn:hover::before { transform: translateX(100%); }

        .tag-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(0,229,160,0.08);
          border: 1px solid rgba(0,229,160,0.2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #00e5a0;
          letter-spacing: 0.06em;
          margin-right: 8px;
          margin-bottom: 8px;
        }
        .tag-chip::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00e5a0;
          animation: pulse-ring 2s ease-in-out infinite;
          flex-shrink: 0;
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          position: "relative",
          padding: "60px 0 80px",
          fontFamily: "'Outfit', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* Ambient glow blobs */}
        <div style={{
          position: "absolute", top: "-100px", left: "-150px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)",
          pointerEvents: "none", borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", right: "-120px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(0,180,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none", borderRadius: "50%",
        }} />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left, right: p.right, animation: p.animation }} />
        ))}

        {/* ── PAGE HEADER ── */}
        <div style={{
          marginBottom: "56px",
          animation: inView ? "slideUp 0.7s ease both" : "none",
          opacity: inView ? 1 : 0,
        }}>
          <PageHeading
            title="Contact Me"
            description="Send me an email directly and I will get back to you as soon as possible."
          />
        </div>

        {/* ── MAIN GRID ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.45fr",
          gap: "20px",
        }}>

          {/* ── LEFT: INFO PANEL ── */}
          <div style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(20px)",
            animation: inView ? "slideInLeft 0.8s 0.1s ease both" : "none",
            opacity: inView ? 1 : 0,
          }}>
            {/* Top shimmer line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,229,160,0.6), rgba(0,180,255,0.4), transparent)",
              animation: "borderGlow 3s ease-in-out infinite",
            }} />

            {/* Subtle corner accent */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "100px", height: "100px",
              background: "radial-gradient(circle at top right, rgba(0,229,160,0.07), transparent 70%)",
              borderRadius: "0 24px 0 0",
            }} />

            <div>
              <h2 style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "12px" }}>
                Let's build{" "}
                <span style={{
                  background: "linear-gradient(90deg, #00e5a0, #00b4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  something great
                </span>
              </h2>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.85,
              }}>
                Whether you want to discuss a project, freelance work, collaboration, or just say hello — this form sends your message straight to my inbox using EmailJS.
              </p>
            </div>

            {/* Tags */}
            <div>
              {["React", "UI/UX", "Next.js", "Tailwind", "Node.js"].map((tag) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className="info-card-hover"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: "34px", height: "34px",
                    borderRadius: "10px",
                    background: "rgba(0,229,160,0.08)",
                    border: "1px solid rgba(0,229,160,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#00e5a0", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                      marginBottom: "3px",
                    }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8f4f0" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "12px 16px",
              background: "rgba(0,229,160,0.05)",
              border: "1px solid rgba(0,229,160,0.15)",
              borderRadius: "12px",
            }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#00e5a0",
                animation: "pulse-ring 2s ease-in-out infinite",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
                Available for freelance & collaborations
              </span>
            </div>
          </div>

          {/* ── RIGHT: FORM PANEL ── */}
          <div style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "36px",
            backdropFilter: "blur(20px)",
            position: "relative",
            overflow: "hidden",
            animation: inView ? "slideInRight 0.8s 0.2s ease both" : "none",
            opacity: inView ? 1 : 0,
          }}>
            {/* Top shimmer line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,180,255,0.5), rgba(0,229,160,0.5), transparent)",
              animation: "borderGlow 4s ease-in-out infinite 1s",
            }} />

            <form onSubmit={handleContactSubmit} autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>

              {/* Name & Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="from_name" style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}>
                    Full Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleFieldChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name..."
                    className="contact-input"
                    style={{
                      ...inputBase,
                      ...(focused === "name" ? inputFocused : {}),
                    }}
                    required
                  />
                </div>

                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="from_email" style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}>
                    Email
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleFieldChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="your@email.com"
                    className="contact-input"
                    style={{
                      ...inputBase,
                      ...(focused === "email" ? inputFocused : {}),
                    }}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label htmlFor="message" style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                  }}>
                    Message
                  </label>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: formData.message.length > 800 ? "#ff6b6b" : "rgba(255,255,255,0.2)",
                    transition: "color 0.3s",
                  }}>
                    {formData.message.length} / 1000
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleFieldChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className="contact-input"
                  maxLength={1000}
                  style={{
                    ...inputBase,
                    resize: "none",
                    lineHeight: 1.7,
                    ...(focused === "message" ? inputFocused : {}),
                  }}
                  required
                />
              </div>

              {/* Status message */}
              {formStatus.message && (
                <div style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: formStatus.type === "success"
                    ? "rgba(0,229,160,0.08)"
                    : "rgba(255,100,100,0.08)",
                  border: `1px solid ${formStatus.type === "success" ? "rgba(0,229,160,0.25)" : "rgba(255,100,100,0.25)"}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  animation: "successPop 0.4s ease both",
                }}>
                  {formStatus.type === "success" ? (
                    <svg width="16" height="16" fill="none" stroke="#00e5a0" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="none" stroke="#ff6b6b" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  )}
                  <span style={{
                    fontSize: "13px",
                    color: formStatus.type === "success" ? "#00e5a0" : "#ff6b6b",
                    fontWeight: 500,
                  }}>
                    {formStatus.message}
                  </span>
                </div>
              )}

              {/* Submit button */}
              <div {...magnetic}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="send-btn"
                  style={{
                    width: "100%",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    border: "none",
                    background: isSubmitting
                      ? "rgba(0,229,160,0.3)"
                      : "linear-gradient(135deg, #00e5a0 0%, #00c4a0 50%, #00a0d4 100%)",
                    color: isSubmitting ? "rgba(255,255,255,0.5)" : "#0a1a14",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    backgroundSize: "200% 200%",
                    animation: isSubmitting ? "shimmer 1.5s linear infinite" : "none",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "float1 1s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <a
                href={whatsAppHref}
                target={whatsAppHref.startsWith("https://wa.me/") ? "_blank" : undefined}
                rel={whatsAppHref.startsWith("https://wa.me/") ? "noreferrer" : undefined}
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "14px",
                  border: "1px solid rgba(37,211,102,0.35)",
                  background: "rgba(37,211,102,0.08)",
                  color: "#25D366",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  textTransform: "uppercase",
                  transition: "transform 0.25s ease, background 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-2px)";
                  event.currentTarget.style.background = "rgba(37,211,102,0.14)";
                  event.currentTarget.style.borderColor = "rgba(37,211,102,0.55)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.background = "rgba(37,211,102,0.08)";
                  event.currentTarget.style.borderColor = "rgba(37,211,102,0.35)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.56 0 .27 5.28.27 11.78c0 2.07.54 4.09 1.57 5.87L0 24l6.51-1.7a11.76 11.76 0 0 0 5.53 1.41h.01c6.48 0 11.77-5.28 11.77-11.78 0-3.15-1.22-6.1-3.3-8.45Zm-8.48 18.2h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.86 1.01 1.03-3.76-.23-.39a9.75 9.75 0 0 1-1.5-5.18c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.09 1.02 6.95 2.88a9.73 9.73 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.82 9.8Zm5.37-7.35c-.29-.15-1.7-.84-1.97-.94-.27-.1-.46-.15-.65.15-.19.29-.75.94-.91 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.89-2.15-.23-.55-.47-.48-.65-.49h-.55c-.2 0-.51.08-.78.37-.27.29-1.03 1-.03 2.44 1 1.44 2.27 2.83 5.18 3.97.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.35Z" />
                </svg>
                Chat On WhatsApp
              </a>

              <p style={{
                textAlign: "center",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.05em",
              }}>
                Powered by EmailJS · No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
