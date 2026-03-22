// // import "remixicon/fonts/remixicon.css";
// // import { Link, NavLink } from "react-router-dom";
// // import { motion } from "motion/react";
// // import { ArrowUpRight, Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";
// // import { navigationLinks } from "../data";

// // const Footer = () => {
// //   const primaryLinks = navigationLinks.filter((link) =>
// //     ["/", "/about", "/projects", "/contact"].includes(link.href),
// //   );

// //   const growthLinks = navigationLinks.filter((link) =>
// //     ["/skills", "/achievements", "/certifications", "/resume"].includes(link.href),
// //   );

// //   const socialLinks = [
// //     { href: "https://github.com/rissss21", label: "GitHub", iconClass: "ri-github-fill" },
// //     { href: "https://www.instagram.com/farisedrikprayoga/", label: "Instagram", iconClass: "ri-instagram-fill" },
// //     { href: "https://www.youtube.com/@FarisEdrikPrayoga", label: "YouTube", iconClass: "ri-youtube-fill" },
// //   ];

// //   return (
// //     <motion.footer
// //       initial={{ opacity: 0, y: 36 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.15 }}
// //       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //       className="relative mt-16 w-full overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(7,13,28,0.98),rgba(4,7,18,1))]"
// //     >
// //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //         <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
// //         <div className="absolute left-[-6%] top-10 h-60 w-60 rounded-full bg-cyan-500/8 blur-3xl" />
// //         <div className="absolute right-[-4%] bottom-0 h-72 w-72 rounded-full bg-violet-500/8 blur-3xl" />
// //       </div>

// //       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
// //         <div className="mb-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
// //           <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl lg:p-8">
// //             <div className="mb-5 flex items-center gap-3">
// //               <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
// //                 <Sparkles size={20} />
// //               </div>
// //               <div>
// //                 <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Let&apos;s Connect</p>
// //                 <p className="text-sm text-zinc-400">Open for freelance, internships, and collaborations</p>
// //               </div>
// //             </div>

// //             <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
// //               A modern developer portfolio should end with clarity, not clutter.
// //             </h2>
// //             <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
// //               If you want to build a product, improve a frontend experience, or collaborate on a strong digital interface, I&apos;m happy to connect and discuss the work.
// //             </p>

// //             <div className="mt-6 flex flex-wrap gap-3">
// //               <NavLink
// //                 to="/contact"
// //                 className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/12 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
// //               >
// //                 Contact Me
// //                 <ArrowUpRight size={16} />
// //               </NavLink>
// //               <a
// //                 href="/assets/CV.pdf"
// //                 download="Udit_Goyal_CV.pdf"
// //                 className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
// //               >
// //                 <Download size={16} />
// //                 Download Resume
// //               </a>
// //             </div>
// //           </div>

// //           <div className="grid gap-4 sm:grid-cols-2">
// //             <div className="rounded-[30px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
// //               <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">Contact</p>
// //               <div className="space-y-4">
// //                 <div className="flex items-start gap-3 text-sm text-white">
// //                   <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
// //                   <span className="break-all">email_farisedrik21@gmail.com</span>
// //                 </div>
// //                 <div className="flex items-start gap-3 text-sm text-white">
// //                   <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
// //                   <span>Indonesia, open to remote work</span>
// //                 </div>
// //                 <div className="flex items-start gap-3 text-sm text-white">
// //                   <Phone className="mt-0.5 h-4 w-4 text-cyan-300" />
// //                   <span>Available through email and social platforms</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="rounded-[30px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
// //               <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">Social</p>
// //               <div className="flex flex-wrap gap-3">
// //                 {socialLinks.map((item, index) => (
// //                   <motion.a
// //                     key={item.label}
// //                     href={item.href}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     aria-label={item.label}
// //                     initial={{ opacity: 0, scale: 0.9 }}
// //                     whileInView={{ opacity: 1, scale: 1 }}
// //                     viewport={{ once: true }}
// //                     transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
// //                     whileHover={{ y: -4 }}
// //                     className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
// //                   >
// //                     <i className={`${item.iconClass} text-xl`} />
// //                   </motion.a>
// //                 ))}
// //               </div>
// //               <p className="mt-4 text-sm leading-7 text-zinc-400">
// //                 Follow my latest builds, experiments, and interface work across these platforms.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[0.9fr_1.1fr_1.1fr]">
// //           <div>
// //             <Link to="/" className="text-2xl font-semibold tracking-wide text-white">
// //               Udit Portfolio
// //             </Link>
// //             <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-500">
// //               Full stack developer focused on modern UI, clean frontend systems, and thoughtful digital product execution.
// //             </p>
// //           </div>

// //           <div>
// //             <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">Navigate</p>
// //             <div className="grid gap-3 sm:grid-cols-2">
// //               {primaryLinks.map((link) => (
// //                 <NavLink
// //                   key={link.href}
// //                   to={link.href}
// //                   className={({ isActive }) =>
// //                     `group inline-flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
// //                       isActive
// //                         ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
// //                         : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
// //                     }`
// //                   }
// //                 >
// //                   <span>{link.label}</span>
// //                   <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
// //                 </NavLink>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">Explore</p>
// //             <div className="grid gap-3 sm:grid-cols-2">
// //               {growthLinks.map((link) => (
// //                 <NavLink
// //                   key={link.href}
// //                   to={link.href}
// //                   className={({ isActive }) =>
// //                     `group inline-flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all ${
// //                       isActive
// //                         ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
// //                         : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
// //                     }`
// //                   }
// //                 >
// //                   <span>{link.label}</span>
// //                   <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
// //                 </NavLink>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.footer>
// //   );
// // };

// // export default Footer;


// import "remixicon/fonts/remixicon.css";
// import { Link, NavLink } from "react-router-dom";
// import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
// import { useRef } from "react";
// import { ArrowUpRight, Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";
// import { navigationLinks } from "../data";

// /* ─── Magnetic button hook ──────────────────────────────────────────── */
// function useMagnet(strength = 0.35) {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const sx = useSpring(x, { stiffness: 200, damping: 18 });
//   const sy = useSpring(y, { stiffness: 200, damping: 18 });

//   const onMove = (e) => {
//     const r = ref.current.getBoundingClientRect();
//     x.set((e.clientX - r.left - r.width / 2) * strength);
//     y.set((e.clientY - r.top - r.height / 2) * strength);
//   };
//   const onLeave = () => { x.set(0); y.set(0); };

//   return { ref, sx, sy, onMove, onLeave };
// }

// /* ─── Social icon button ─────────────────────────────────────────────── */
// function SocialBtn({ href, label, iconClass, delay }) {
//   const m = useMagnet();
//   return (
//     <motion.a
//       ref={m.ref}
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       aria-label={label}
//       style={{ x: m.sx, y: m.sy }}
//       onMouseMove={m.onMove}
//       onMouseLeave={m.onLeave}
//       initial={{ opacity: 0, scale: 0.7 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4, delay }}
//       whileHover={{ scale: 1.12 }}
//       className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-200"
//     >
//       {/* hover fill sweep */}
//       <span className="absolute inset-0 translate-y-full bg-cyan-400/10 transition-transform duration-300 ease-out group-hover:translate-y-0" />
//       <i className={`${iconClass} relative z-10 text-xl`} />
//     </motion.a>
//   );
// }

// /* ─── Nav pill link ──────────────────────────────────────────────────── */
// function NavPill({ to, label }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `group relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
//           isActive
//             ? "border-cyan-400/40 bg-cyan-400/12 text-cyan-200"
//             : "border-white/8 bg-white/[0.025] text-zinc-400 hover:border-white/20 hover:text-white"
//         }`
//       }
//     >
//       {({ isActive }) => (
//         <>
//           {!isActive && (
//             <span className="absolute inset-0 translate-x-[-100%] bg-white/[0.04] transition-transform duration-300 ease-out group-hover:translate-x-0" />
//           )}
//           <span className="relative z-10">{label}</span>
//           <ArrowUpRight className="relative z-10 h-3.5 w-3.5 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
//         </>
//       )}
//     </NavLink>
//   );
// }

// /* ─── Stat counter card ──────────────────────────────────────────────── */
// function StatCard({ value, label, delay }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay }}
//       className="flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4 text-center"
//     >
//       <span className="bg-gradient-to-br from-cyan-300 to-violet-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
//         {value}
//       </span>
//       <span className="mt-0.5 text-xs text-zinc-500">{label}</span>
//     </motion.div>
//   );
// }

// /* ─── Main footer ────────────────────────────────────────────────────── */
// const Footer = () => {
//   const primaryLinks = navigationLinks.filter((l) =>
//     ["/", "/about", "/projects", "/contact"].includes(l.href),
//   );
//   const growthLinks = navigationLinks.filter((l) =>
//     ["/skills", "/achievements", "/certifications", "/resume"].includes(l.href),
//   );

//   const socialLinks = [
//     { href: "https://github.com/rissss21",             label: "GitHub",    iconClass: "ri-github-fill" },
//     { href: "https://www.instagram.com/farisedrikprayoga/", label: "Instagram", iconClass: "ri-instagram-fill" },
//     { href: "https://www.youtube.com/@FarisEdrikPrayoga",   label: "YouTube",   iconClass: "ri-youtube-fill" },
//   ];

//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.05 }}
//       transition={{ duration: 0.6 }}
//       className="relative mt-24 w-full overflow-hidden"
//     >
//       {/* ── top ambient glow band ── */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
//         <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/6 blur-[80px]" />
//         <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-violet-600/7 blur-[80px]" />
//         <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
//       </div>

//       {/* ── hero CTA banner ── */}
//       <div className="relative border-t border-white/[0.07] bg-[linear-gradient(180deg,rgba(7,13,28,0.95)_0%,rgba(4,7,18,1)_100%)]">
//         <div className="w-full px-4 sm:px-6 lg:px-8">

//           {/* CTA block */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 32 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-8 py-10 backdrop-blur-xl mt-12 lg:px-14 lg:py-14"
//           >
           
//             <div className="pointer-events-none absolute inset-0">
//               <div className="absolute left-0 top-0 h-px w-3/4 bg-gradient-to-r from-cyan-400/40 to-transparent" />
//               <div className="absolute bottom-0 right-0 h-px w-3/4 bg-gradient-to-l from-violet-400/30 to-transparent" />
//               <div className="absolute right-0 top-0 h-3/4 w-px bg-gradient-to-b from-violet-400/20 to-transparent" />
//             </div>

//             <div className="relative grid gap-10 lg:grid-cols-[1fr_auto]">
//               <div>
//                 <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-1.5">
//                   <Sparkles size={13} className="text-cyan-400" />
//                   <span className="text-xs font-medium tracking-[0.2em] text-cyan-300/90 uppercase">
//                     Open to opportunities
//                   </span>
//                 </div>

//                 <h2 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
//                   Let&apos;s build something{" "}
//                   <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
//                     remarkable
//                   </span>{" "}
//                   together.
//                 </h2>
//                 <p className="mt-5 max-w-xl text-[15px] leading-7 text-zinc-400">
//                   I&apos;m available for freelance projects, internships, and
//                   long-term collaborations. If you have an idea or need a sharp
//                   frontend developer — let&apos;s talk.
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <NavLink
//                     to="/contact"
//                     className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:bg-cyan-300"
//                   >
//                     <span className="relative z-10">Get in touch</span>
//                     <ArrowUpRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </NavLink>
//                   <a
//                     href="/assets/CV.pdf"
//                     download="Udit_Goyal_CV.pdf"
//                     className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.09]"
//                   >
//                     <Download size={15} />
//                     Download CV
//                   </a>
//                 </div>
//               </div>

            
//               <div className="grid grid-cols-2 gap-3 self-center lg:grid-cols-1 lg:min-w-[140px]">
//                 <StatCard value="3+" label="Years coding"    delay={0.1} />
//                 <StatCard value="20+" label="Projects built" delay={0.15} />
//                 <StatCard value="5★" label="Avg. feedback"  delay={0.2} />
//                 <StatCard value="∞" label="Coffee cups"     delay={0.25} />
//               </div>
//             </div>
//           </motion.div> */}

//           {/* ── contact + social row ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-10 grid gap-4 sm:grid-cols-2"
//           >
//             {/* contact card */}
//             <div className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
//                 Contact
//               </p>
//               <div className="space-y-4">
//                 {[
//                   { Icon: Mail,   text: "email_farisedrik21@gmail.com" },
//                   { Icon: MapPin, text: "Indonesia — open to remote" },
//                   { Icon: Phone,  text: "Reachable via email & socials" },
//                 ].map(({ Icon, text }) => (
//                   <div key={text} className="flex items-center gap-3">
//                     <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/8">
//                       <Icon size={13} className="text-cyan-400" />
//                     </div>
//                     <span className="text-sm text-zinc-300">{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* social card */}
//             <div className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
//               <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
//                 Follow
//               </p>
//               <div className="flex gap-3">
//                 {socialLinks.map((item, i) => (
//                   <SocialBtn key={item.label} {...item} delay={0.1 + i * 0.06} />
//                 ))}
//               </div>
//               <p className="mt-5 text-[13px] leading-relaxed text-zinc-500">
//                 Catch my latest builds, experiments, and interface work on these platforms.
//               </p>
//             </div>
//           </motion.div>

//           {/* ── bottom nav + brand row ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.15 }}
//             className="mt-4 grid gap-4 pb-10 md:grid-cols-[1fr_1fr_1fr]"
//           >
//             {/* brand */}
//             <div className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
//               <Link
//                 to="/"
//                 className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
//               >
//                 Udit<span className="text-cyan-400">.</span>
//               </Link>
//               <p className="mt-3 text-[13px] leading-6 text-zinc-500">
//                 Full-stack developer focused on modern UI, clean frontend systems,
//                 and thoughtful digital products.
//               </p>
//               {/* availability dot */}
//               <div className="mt-5 flex items-center gap-2">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
//                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
//                 </span>
//                 <span className="text-xs text-emerald-400/90">Available for work</span>
//               </div>
//             </div>

//             {/* navigate */}
//             <div className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
//               <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
//                 Navigate
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {primaryLinks.map((l) => (
//                   <NavPill key={l.href} to={l.href} label={l.label} />
//                 ))}
//               </div>
//             </div>

//             {/* explore */}
//             <div className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl">
//               <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
//                 Explore
//               </p>
//               <div className="grid grid-cols-2 gap-2">
//                 {growthLinks.map((l) => (
//                   <NavPill key={l.href} to={l.href} label={l.label} />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* ── copyright bar ── */}
//           <div className="border-t border-white/[0.06] py-6 flex flex-col items-center justify-between gap-2 text-center sm:flex-row">
//             <p className="text-xs text-zinc-600">
//               © {new Date().getFullYear()} Udit Goyal. Crafted with care.
//             </p>
//             <p className="text-xs text-zinc-700">
//               Built with React · Tailwind · Framer Motion
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;



import "remixicon/fonts/remixicon.css";
import { Link, NavLink } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
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
    <motion.a
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
    </motion.a>
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
    <motion.footer
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
        <div className="mx-auto max-w-screen-xl px-6 py-20 md:px-12 lg:px-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

            {/* headline side */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-6 inline-flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
                  Available for work
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4.5rem]"
              >
                Have a project
                <br />
                in{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  mind?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-6 max-w-lg text-[15px] leading-7 text-zinc-400"
              >
                I&apos;m open to freelance projects, internships, and
                collaborations. If you have an idea worth building — let&apos;s
                make it happen together.
              </motion.p>
            </div>

            {/* CTA side */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap gap-3"
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
            </motion.div>
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
                Udit<span className="text-cyan-400">.</span>
              </Link>
              <p className="mt-4 text-[13px] leading-6 text-zinc-500">
                Full-stack developer building modern UI and thoughtful digital
                experiences from Indonesia.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:email_farisedrik21@gmail.com"
                  className="flex items-start gap-2.5 text-[13px] text-zinc-500 transition-colors hover:text-cyan-300"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-cyan-500/60" />
                  email_farisedrik21@gmail.com
                </a>
                <p className="flex items-start gap-2.5 text-[13px] text-zinc-500">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-cyan-500/60" />
                  Indonesia — open to remote
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
    </motion.footer>
  );
};

export default Footer;
