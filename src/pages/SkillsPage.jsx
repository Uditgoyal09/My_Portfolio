import { useState } from "react";
import { motion as Motion } from "motion/react";
import { Layers3, Palette, Server, Sparkles, TerminalSquare } from "lucide-react";
import { listTools } from "../data";
import ShinyText from "../components/ShinyText/ShinyText";
import { PageHeading } from "../components/PageHeading";

const categoryConfig = {
  Frontend: {
    icon: <Layers3 size={16} />,
    description: "Interface libraries, styling systems, and build tools for modern UI work.",
    accent: "from-cyan-300/80 to-sky-400/70",
    chip: "border-cyan-300/20 bg-cyan-400/10 text-cyan-200",
  },
  Backend: {
    icon: <Server size={16} />,
    description: "Server-side technologies, databases, and connected app foundations.",
    accent: "from-emerald-300/80 to-teal-400/70",
    chip: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
  },
  Languages: {
    icon: <TerminalSquare size={16} />,
    description: "Core programming languages used across frontend, backend, and application logic.",
    accent: "from-violet-300/80 to-fuchsia-400/70",
    chip: "border-violet-300/20 bg-violet-400/10 text-violet-200",
  },
  Design: {
    icon: <Palette size={16} />,
    description: "Design and visual tooling that supports cleaner product presentation and UI exploration.",
    accent: "from-amber-200/80 to-orange-400/70",
    chip: "border-amber-200/20 bg-amber-300/10 text-amber-100",
  },
  Tools: {
    icon: <Sparkles size={16} />,
    description: "Productivity, workflow, and collaboration tools that support day-to-day delivery.",
    accent: "from-slate-200/70 to-zinc-400/60",
    chip: "border-white/15 bg-white/[0.06] text-zinc-200",
  },
};

const getCategory = (tool) => tool.category || "Tools";

const groupedTools = Object.keys(categoryConfig).map((category) => ({
  category,
  ...categoryConfig[category],
  items: listTools.filter((tool) => getCategory(tool) === category),
}));

const filterOptions = ["All", ...Object.keys(categoryConfig)];

const containerVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const getFallbackLabel = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

// const SkillCard = ({ tool, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const badge = tool.gambar ? null : getFallbackLabel(tool.nama);

//   return (
//     <Motion.div
//       initial={{ opacity: 0, scale: 0.94, y: 14 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       transition={{
//         duration: 0.45,
//         delay: index * 0.04,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       whileHover={{ y: -8, scale: 1.03 }}
//       style={{ perspective: 1400 }}
//       className="group relative min-h-[148px]"
//     >
//       <Motion.div
//         animate={{ rotateY: isHovered ? 180 : 0 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         style={{ transformStyle: "preserve-3d" }}
//         className="relative min-h-[148px] w-full"
//       >
//         <div
//           style={{ backfaceVisibility: "hidden" }}
//           className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#26292f] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
//         >
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_42%)]" />
//           <div className="relative z-10 flex h-full items-center gap-4 px-5 py-5">
//             <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-cyan-300/10 bg-[#0d1a29] shadow-[inset_0_0_18px_rgba(34,211,238,0.08)]">
//               {tool.gambar ? (
//                 <img
//                   src={tool.gambar}
//                   alt={tool.nama}
//                   className="h-8 w-8 object-contain"
//                 />
//               ) : (
//                 <span className="text-xs font-semibold tracking-[0.16em] text-cyan-100">
//                   {badge}
//                 </span>
//                 )}
//             </div>

//             <div className="min-w-0 flex-1">
//               <ShinyText
//                 text={tool.nama}
//                 disabled={false}
//                 speed={4}
//                 className="block text-[1.05rem] font-semibold text-white"
//               />
//               <p className="mt-1 text-[0.95rem] leading-7 text-zinc-400">
//                 {tool.ket}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//           className="absolute inset-0 overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#26292f] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
//         >
//           <div className="pointer-events-none absolute inset-0 rounded-[28px]">
//             <div className="absolute inset-x-0 top-5 h-1.5 bg-white/10 blur-[2px]" />
//             <Motion.div
//               initial={false}
//               animate={{ height: `${tool.proficiency}%`, opacity: 0.96 }}
//               transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(91,229,255,0.25),rgba(44,204,237,0.78)_45%,rgba(38,174,206,0.95))]"
//             />
//             <Motion.div
//               initial={false}
//               animate={{ bottom: `calc(${tool.proficiency}% - 4px)`, opacity: 1 }}
//               transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute left-[-6%] h-3.5 w-[112%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(171,246,255,0.78)_35%,rgba(255,255,255,0)_72%)] blur-[1px]"
//             />
//             <Motion.div
//               animate={{ x: ["-10%", "8%", "-6%"] }}
//               transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute left-[-8%] h-6 w-[42%] rounded-full bg-white/20 blur-lg"
//               style={{ bottom: `calc(${tool.proficiency}% - 10px)` }}
//             />
//             <Motion.div
//               animate={{ x: ["10%", "-8%", "12%"] }}
//               transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute right-[-8%] h-6 w-[48%] rounded-full bg-cyan-100/16 blur-lg"
//               style={{ bottom: `calc(${tool.proficiency}% - 14px)` }}
//             />
//           </div>

//           <div className="relative z-10 flex h-full flex-col items-center px-5 pb-5 pt-0 text-center">
//             <div className="flex w-full justify-center">
//               <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-b-2xl rounded-t-xl border border-white/10 bg-[#243644]/95 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
//                 {tool.gambar ? (
//                   <img
//                     src={tool.gambar}
//                     alt={tool.nama}
//                     className="h-7 w-7 object-contain"
//                   />
//                 ) : (
//                   <span className="text-xs font-semibold tracking-[0.16em] text-cyan-100">
//                     {badge}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-1 flex-col items-center justify-center">
//               <p className="text-[3.4rem] font-bold leading-none tracking-[-0.06em] text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.18)]">
//                 {tool.proficiency}%
//               </p>

//               <div className="mt-3">
//                 <ShinyText
//                   text={tool.nama}
//                   disabled={false}
//                   speed={4}
//                   className="block text-base font-semibold text-white"
//                 />
//                 <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">
//                   Proficiency
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Motion.div>
//     </Motion.div>
//   );
// };

const SkillCard = ({ tool, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const badge = tool.gambar ? null : getFallbackLabel(tool.nama);

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.94, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.03 }}
      style={{ perspective: 1400 }}
      className="group relative min-h-[148px]"
    >
      <Motion.div
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative min-h-[148px] w-full"
      >
        {/* FRONT FACE — unchanged */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#26292f] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_42%)]" />
          <div className="relative z-10 flex h-full items-center gap-4 px-5 py-5">
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] border border-cyan-300/10 bg-[#0d1a29] shadow-[inset_0_0_18px_rgba(34,211,238,0.08)]">
              {tool.gambar ? (
                <img src={tool.gambar} alt={tool.nama} className="h-8 w-8 object-contain" />
              ) : (
                <span className="text-xs font-semibold tracking-[0.16em] text-cyan-100">{badge}</span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <ShinyText
                text={tool.nama}
                disabled={false}
                speed={4}
                className="block text-[1.05rem] font-semibold text-white"
              />
              <p className="mt-1 text-[0.95rem] leading-7 text-zinc-400">{tool.ket}</p>
            </div>
          </div>
        </div>

        {/* BACK FACE — water fill re-animates on each hover */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#26292f] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[28px]">
            <div className="absolute inset-x-0 top-5 h-1.5 bg-white/10 blur-[2px]" />

            {/* Water fill — animates from 0 → proficiency each time isHovered becomes true */}
            <Motion.div
              key={isHovered ? "fill-in" : "fill-out"}
              initial={{ height: "0%", opacity: 0.96 }}
              animate={{ height: isHovered ? `${tool.proficiency}%` : "0%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(91,229,255,0.25),rgba(44,204,237,0.78)_45%,rgba(38,174,206,0.95))]"
            />

            {/* Surface glow line — tracks the water surface */}
            {/* <Motion.div
              key={isHovered ? "surface-in" : "surface-out"}
              initial={{ bottom: "-4px", opacity: 0 }}
              animate={{
                bottom: isHovered ? `calc(${tool.proficiency}% - 4px)` : "-4px",
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="absolute left-[-6%] h-3.5 w-[112%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(171,246,255,0.78)_35%,rgba(255,255,255,0)_72%)] blur-[1px]"
            /> */}

            {/* Wave shimmer left */}
            <Motion.div
              animate={{ x: ["-10%", "8%", "-6%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-8%] h-6 w-[42%] rounded-full bg-white/20 blur-lg"
              style={{ bottom: `calc(${tool.proficiency}% - 10px)` }}
            />

            {/* Wave shimmer right */}
            <Motion.div
              animate={{ x: ["10%", "-8%", "12%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-8%] h-6 w-[48%] rounded-full bg-cyan-100/16 blur-lg"
              style={{ bottom: `calc(${tool.proficiency}% - 14px)` }}
            />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center px-5 pb-5 pt-0 text-center">
            <div className="flex w-full justify-center">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-b-2xl rounded-t-xl border border-white/10 bg-[#243644]/95 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
                {tool.gambar ? (
                  <img src={tool.gambar} alt={tool.nama} className="h-7 w-7 object-contain" />
                ) : (
                  <span className="text-xs font-semibold tracking-[0.16em] text-cyan-100">{badge}</span>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
              <p className="text-[3.4rem] font-bold leading-none tracking-[-0.06em] text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                {tool.proficiency}%
              </p>
              <div className="mt-3">
                {/* <ShinyText
                  text={tool.nama}
                  disabled={false}
                  speed={4}
                  className="block text-base font-semibold text-white"
                /> */}
                <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-zinc-300/70">
                  Proficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
};
const SkillsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleGroups =
    activeFilter === "All"
      ? groupedTools
      : groupedTools.filter((group) => group.category === activeFilter);

  const visibleCount = visibleGroups.reduce(
    (count, group) => count + group.items.length,
    0
  );

  return (
    <section className="space-y-8 py-4 sm:space-y-10 lg:space-y-12 lg:py-6">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <PageHeading
          title="Skills & Stack"
          description="A category-wise view of the tools I use across frontend work, backend development, design flow, and modern product delivery."
        />
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-6"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Filter Stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Explore my toolkit by category
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition duration-300 ${
                    active
                      ? "border-cyan-300/30 bg-cyan-400/12 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                      : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200">
            Showing {visibleCount} tools
          </div>
          <p className="text-sm text-zinc-400">
            Switch between categories or view the full stack as grouped sections.
          </p>
        </div>
      </Motion.div>

      <Motion.div
        key={activeFilter}
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {visibleGroups.map((group) => (
          <Motion.section
            key={group.category}
            variants={itemVariant}
            className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8 lg:p-8">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08101d]/80 p-5 sm:p-6">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`}
                />
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] ${group.chip}`}>
                    {group.icon}
                    {group.category}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {group.category} Stack
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                    {group.items.length} tools in this stack
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((tool, index) => (
                  <SkillCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            </div>
          </Motion.section>
        ))}
      </Motion.div>
    </section>
  );
};

export default SkillsPage;
