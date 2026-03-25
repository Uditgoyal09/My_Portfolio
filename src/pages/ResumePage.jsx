import { useEffect, useRef, useState } from "react";
import { PageHeading } from "../components/PageHeading";

const resumeTabs = [
  {
    id: "education",
    label: "Education",
    eyebrow: "Academic Timeline",
    title: "Education",
    description:
      "A focused snapshot of my academic background, current degree, and school education.",
    items: [
      {
        title: "Bachelor of Technology",
        subtitle: "Lovely Professional University, Phagwara, Punjab",
        period: "Aug 2023 - Present",
        detail: "Computer Science and Engineering",
        highlight: "CGPA: 7.76",
      },
      {
        title: "Intermediate",
        subtitle: "D.A.V Public School, Pundri, Haryana",
        period: "Apr 2021 - Mar 2022",
        detail: "PCM",
        highlight: "Percentage: 76%",
      },
      {
        title: "Matriculation",
        subtitle: "D.A.V Public School, Pundri, Haryana",
        period: "Apr 2019 - Mar 2020",
        detail: "School Education",
        highlight: "Percentage: 80%",
      },
    ],
  },
  {
    id: "internship",
    label: "Internship",
    eyebrow: "Hands-On Training",
    title: "Internship Experience",
    description:
      "Practical training experience focused on shipping product features and building reliable systems.",
    items: [
      {
        title: "Web Developer Intern",
        subtitle: "Green Mandi Deals Private Limited",
        period: "Jun 2025 - Aug 2025",
        detail:
          "Architected and developed core components of the admin workflow, helping administrators oversee platform operations, enforce role-based access control, and manage user permissions and system activity efficiently.",
        highlight: "Certificate",
        tech: "Tech: Next.js, React.js, Node.js, Express.js, TypeScript",
      },
    ],
  },
  {
    id: "training",
    label: "Training",
    eyebrow: "Courses and Certifications",
    title: "Training and Certifications",
    description:
      "Structured learning programs and certifications that strengthened my software and cloud fundamentals.",
    items: [
      {
        title: "AWS SimuLearn Cloud Computing Essentials",
        subtitle: "AWS Training & Certification",
        period: "Mar 2026",
        detail: "Cloud computing fundamentals and platform basics.",
        highlight: "AWS",
      },
      {
        title: "Summer Training in Object Oriented Programming using C++",
        subtitle: "LPU",
        period: "Aug 2025",
        detail: "Training focused on object-oriented programming concepts and implementation in C++.",
        highlight: "C++ Training",
      },
      {
        title: "Privacy and Security in Online Social Media",
        subtitle: "NPTEL",
        period: "Apr 2025",
        detail: "Coursework around privacy, digital safety, and secure behavior in social platforms.",
        highlight: "NPTEL",
      },
      {
        title: "Full Stack Development",
        subtitle: "Board Infinity",
        period: "Feb 2024",
        detail: "Training in full-stack development workflows and application building fundamentals.",
        highlight: "Full Stack",
      },
    ],
  },
];

const resumeHighlights = [
  { value: "7.76", label: "Current CGPA" },
  { value: "1", label: "Internship" },
  { value: "4", label: "Trainings" },
  { value: "3", label: "Education Stages" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function HighlightPill({ value, label, delay }) {
  const [ref, visible] = useInView(0.4);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center backdrop-blur-sm"
    >
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-zinc-500">{label}</p>
    </div>
  );
}

function ResumeEntry({ item, index }) {
  const [ref, visible] = useInView(0.2);

  return (
    <article
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.55s ease ${index * 90}ms, transform 0.55s ease ${index * 90}ms`,
      }}
      className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/25 p-5 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.12),transparent_40%)]" />

      <div className="relative z-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/75">{item.highlight}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-zinc-300">{item.subtitle}</p>
          </div>

          <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            {item.period}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-zinc-400">{item.detail}</p>

        {item.tech ? (
          <p className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
            {item.tech}
          </p>
        ) : null}
      </div>
    </article>
  );
}

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState("education");
  const activeSection = resumeTabs.find((tab) => tab.id === activeTab) ?? resumeTabs[0];
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section className="relative min-h-screen py-10">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 left-[18%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[110px] animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute right-[-120px] top-[28%] h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="absolute bottom-0 left-[-80px] h-[280px] w-[280px] rounded-full bg-indigo-500/10 blur-[90px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div ref={headerRef} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <PageHeading
            title="Resume"
            description="This section now focuses only on my education, internship training, and certification-based learning journey."
            className="mb-0 lg:mx-0 lg:items-start lg:text-left"
          />
        </div>

        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.6s ease 180ms, transform 0.6s ease 180ms",
          }}
          className="flex gap-3"
        >
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Preview PDF
          </a>
          <a
            href="/assets/CV.pdf"
            download="Udit_CV.pdf"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-400/60 hover:bg-cyan-400/20"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {resumeHighlights.map((item, index) => (
          <HighlightPill key={item.label} value={item.value} label={item.label} delay={index * 90} />
        ))}
      </div>

      <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap justify-center gap-3">
          {resumeTabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border border-cyan-400/30 bg-cyan-400/15 text-cyan-100"
                    : "border border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-white/8 bg-black/20 p-5 sm:p-7">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/70">{activeSection.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{activeSection.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{activeSection.description}</p>
          </div>

          <div className="grid gap-5">
            {activeSection.items.map((item, index) => (
              <ResumeEntry key={`${activeSection.id}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs tracking-[0.28em] text-zinc-600">
        Resume focus: education and training
      </p>
    </section>
  );
};

export default ResumePage;
