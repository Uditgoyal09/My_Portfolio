import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ShinyText from "../components/ShinyText/ShinyText";
import BlurText from "../components/BlurText/BlurText";
// eslint-disable-next-line no-unused-vars
import { featuredStats } from "../data";
import AboutPage from "./AboutPage";

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HomePage = () => {
  return (
    <>
    <section className="space-y-10 py-4 sm:py-6 lg:space-y-16 lg:py-10">
      <div className="grid items-center gap-8 xl:min-h-[calc(100vh-180px)] xl:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] xl:gap-10">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.05}
            variants={heroItem}
            className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/20 bg-zinc-900/70 px-4 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:px-5 sm:py-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200 sm:h-10 sm:w-10">
              <Sparkles size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/80 sm:text-xs sm:tracking-[0.35em]">Digital Portfolio</p>
              <p className="text-sm leading-5 text-zinc-300">Avoid it or undertake it.</p>
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.12}
            variants={heroItem}
            className="mb-8 font-['Syne','Clash_Display',sans-serif] text-[clamp(1.2rem,4vw,4rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white"
          >
            <span className="block">The web is crowded.</span>
            <span className="block">
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">Let&apos;s</span> make you stand out.
            </span>
          </motion.h1>

          <motion.div initial="hidden" animate="show" custom={0.2} variants={heroItem}>
            <BlurText
              text="I'm Udit, a full stack developer focused on creating sleek interfaces, strong frontend systems, and polished product experiences that balance performance, clarity, and visual quality."
              delay={200}
              animateBy="words"
              direction="top"
              className="mb-7  mt-4 max-w-xl text-base leading-8 text-zinc-300 sm:max-w-2xl sm:text-lg"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={heroItem}
            className="flex flex-col gap-10 sm:flex-row sm:flex-wrap"
          >
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/12 px-5 py-3.5 text-center text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 sm:px-6 sm:py-4 sm:text-base">
              Explore Projects
              <ArrowRight size={18} />
            </Link>
            {/* <Link to="/resume" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:px-6 sm:py-4 sm:text-base">
              View Resume
            </Link> */}
            <a href="/assets/CV.pdf" download="Udit_CV.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#141824] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#1a2030] sm:px-6 sm:py-4 sm:text-base">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* <motion.div
            initial="hidden"
            animate="show"
            custom={0.36}
            variants={heroItem}
            className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {featuredStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <p className="text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                  <span className="text-cyan-300">{stat.suffix}</span>
                </p>
                <p className="mt-3 text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto order-first flex w-full max-w-[320px] justify-center sm:max-w-[380px] md:max-w-[420px] xl:order-none xl:max-w-[460px] xl:justify-end"
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 blur-2xl" />
          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[36px] sm:p-4">
            <ProfileCard
              name="Udit Goyal"
              title="Full Stack Developer"
              handle="Uditgoya09"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/udit.JPG"
              miniAvatarUrl="/assets/udit.JPG"
              backgroundImageUrl="/assets/udit.JPG"
              showAvatar={false}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.assign("/contact")}
            />
          </div>
        </motion.div>
      </div>
<AboutPage/>
      <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
  className="relative grid gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr] lg:p-8 overflow-hidden"
>
  {/* Optional animated background blur */}
  <div className="absolute inset-0 -z-10 animate-gradient-slow rounded-[36px] bg-gradient-to-tr from-cyan-400/10 via-violet-400/10 to-pink-400/10"></div>

  <div className="space-y-4">
    <p className="mb-3 text-xs font-medium uppercase tracking-widest text-cyan-300/80 drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]">
      Why this portfolio
    </p>
    <h2 className="text-3xl font-extrabold text-white md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300">
      A sharper, more product-minded presentation of my work.
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-9 text-zinc-300">
      This space is designed to feel less like a static resume and more like a modern product experience. Each section highlights capability, direction, and how I think about building for real users.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="group rounded-[28px] border border-cyan-400/15 bg-cyan-400/8 p-6 shadow-[0_12px_40px_rgba(0,255,255,0.1)] hover:bg-cyan-400/20 hover:border-cyan-300/25 transition-all duration-300"
    >
      <p className="text-lg font-semibold text-cyan-200 flex items-center gap-2">
        ✨ Modern interface language
      </p>
      <p className="mt-2 text-sm leading-7 text-zinc-300">
        Clear hierarchy, responsive layouts, and interaction design that feels intentional.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="group rounded-[28px] border border-violet-400/15 bg-violet-400/8 p-6 shadow-[0_12px_40px_rgba(191, 90, 255,0.1)] hover:bg-violet-400/20 hover:border-violet-300/25 transition-all duration-300"
    >
      <p className="text-lg font-semibold text-violet-200 flex items-center gap-2">
        🚀 Developer-first execution
      </p>
      <p className="mt-2 text-sm leading-7 text-zinc-300">
        Structured routes, reusable components, and motion that supports the layout instead of distracting from it.
      </p>
    </motion.div>
  </div>
</motion.section>



    </section>
    
    </>
  );
};

export default HomePage;
