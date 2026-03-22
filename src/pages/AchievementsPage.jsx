import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { achievements } from "../data";
import {PageHeading} from "../components/PageHeading";

const AUTO_ADVANCE_MS = 4000;

const accentPalette = [
  {
    glow: "rgba(34, 211, 238, 0.24)",
    border: "rgba(34, 211, 238, 0.28)",
    text: "#67e8f9",
    background: "rgba(34, 211, 238, 0.08)",
  },
  {
    glow: "rgba(200, 245, 66, 0.2)",
    border: "rgba(200, 245, 66, 0.28)",
    text: "#d9ff6e",
    background: "rgba(200, 245, 66, 0.08)",
  },
  {
    glow: "rgba(255, 107, 107, 0.22)",
    border: "rgba(255, 107, 107, 0.3)",
    text: "#ff8f8f",
    background: "rgba(255, 107, 107, 0.08)",
  },
  {
    glow: "rgba(120, 119, 255, 0.22)",
    border: "rgba(120, 119, 255, 0.3)",
    text: "#9a9cff",
    background: "rgba(120, 119, 255, 0.08)",
  },
];

const buildHighlights = (achievement) => {
  if (Array.isArray(achievement.highlights) && achievement.highlights.length > 0) {
    return achievement.highlights;
  }

  const metric = achievement.metric ?? achievement.tag ?? "";

  if (metric.includes("+")) {
    return ["Delivery streak", "Execution consistency", "Built across multiple domains"];
  }

  if (metric.includes("/")) {
    return ["Academic discipline", "Strong balance of theory and practice", "High-performance coursework"];
  }

  return ["Exploration mindset", "Applied experimentation", "Cross-domain technical curiosity"];
};

const AchievementsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = useMemo(
    () =>
      achievements.map((item, index) => ({
        ...item,
        year: item.year ?? String(2026 - index),
        metric: item.metric ?? item.tag ?? "Milestone",
        palette: accentPalette[index % accentPalette.length],
        highlights: buildHighlights(item),
      })),
    []
  );

  const activeAchievement = timelineData[activeIndex];
  const ActiveIcon = activeAchievement.icon;

  useEffect(() => {
    if (timelineData.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % timelineData.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [timelineData.length]);

  return (
    <section className="relative min-w-0 overflow-x-hidden py-6 sm:py-8 xl:py-10">
      <div className="mb-6">
        <PageHeading
          title="Achievements"
          description="Explore the moments that shaped my growth across software building, academics, and hands-on technical experimentation."
        />

        <div className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-zinc-400 backdrop-blur-xl sm:w-fit sm:justify-start sm:gap-3 sm:px-4 sm:py-2.5 sm:text-[10px] sm:tracking-[0.28em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)] sm:h-2 sm:w-2" />
          Click a card to explore each milestone
        </div>
      </div>

      <div className="grid min-w-0 gap-3 sm:gap-4 xl:grid-cols-[minmax(17rem,0.82fr)_minmax(0,1.18fr)] 2xl:grid-cols-[minmax(18rem,0.88fr)_minmax(0,1.12fr)]">
        <div className="min-w-0 overflow-hidden rounded-[18px] border border-white/10 bg-white/5 p-2.5 backdrop-blur-xl sm:rounded-[22px] sm:p-3 lg:p-4">
          <div className="space-y-2">
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex w-full gap-2.5 rounded-[14px] border border-transparent bg-transparent p-2 text-left transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] sm:rounded-[18px] sm:p-2.5 lg:gap-3 lg:p-3"
                  style={
                    isActive
                      ? {
                          borderColor: item.palette.border,
                          background: item.palette.background,
                          boxShadow: `0 0 0 1px ${item.palette.border} inset, 0 16px 40px ${item.palette.glow}`,
                        }
                      : undefined
                  }
                >
                  <div className="relative z-10 flex flex-col items-center pt-0.5">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full border"
                      style={{
                        borderColor: isActive ? item.palette.text : "rgba(255,255,255,0.18)",
                        background: isActive ? item.palette.text : "rgba(255,255,255,0.06)",
                        boxShadow: isActive ? `0 0 16px ${item.palette.glow}` : "none",
                      }}
                    />
                    {index < timelineData.length - 1 ? (
                      <span className="mt-2 h-8 w-px bg-gradient-to-b from-white/10 to-transparent lg:h-10" />
                    ) : null}
                  </div>

                  <div className="relative z-10 min-w-0 flex-1 overflow-hidden">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-1.5">
                      <span
                        className="rounded-full border px-2 py-0.5 text-[8px] uppercase tracking-[0.22em] lg:px-2.5 lg:text-[9px] lg:tracking-[0.28em]"
                        style={{
                          borderColor: isActive ? item.palette.border : "rgba(255,255,255,0.08)",
                          color: isActive ? item.palette.text : "#94a3b8",
                          background: isActive ? "rgba(255,255,255,0.03)" : "transparent",
                        }}
                      >
                        {item.year}
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.18em] text-zinc-500 lg:text-[9px] lg:tracking-[0.22em]">
                         {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mb-2 text-[13px] font-semibold text-white sm:text-sm lg:text-base xl:text-lg">
                      {item.title}
                    </h2>
                    <p className="line-clamp-2 text-[10px] leading-5 text-zinc-400 lg:text-[11px] lg:leading-6">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <article className="relative min-w-0 overflow-hidden rounded-[18px] border border-white/10 bg-[#090d17]/80 p-3.5 backdrop-blur-xl sm:rounded-[22px] sm:p-4 lg:p-5 xl:p-6">
          <div
            className="pointer-events-none absolute -right-8 top-5 h-24 w-24 rounded-full blur-3xl sm:-right-10 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
            style={{ background: activeAchievement.palette.glow }}
          />
          <div
            className="pointer-events-none absolute -bottom-6 left-3 h-16 w-16 rounded-full blur-3xl sm:-bottom-8 sm:left-5 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            style={{ background: activeAchievement.palette.background }}
          />

          <div className="relative z-10 flex flex-col gap-4 lg:gap-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p
                  className="mb-1.5 text-[8px] uppercase tracking-[0.25em] sm:text-[9px] lg:text-[10px] lg:tracking-[0.32em]"
                  style={{ color: activeAchievement.palette.text }}
                >
                  Active Milestone
                </p>
                <h2 className="text-[clamp(1.6rem,3.1vw,3.35rem)] font-bold leading-[0.95] text-white">
                  {activeAchievement.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full border px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] sm:text-[9px]"
                    style={{
                      borderColor: activeAchievement.palette.border,
                      color: activeAchievement.palette.text,
                      background: activeAchievement.palette.background,
                    }}
                  >
                    {activeAchievement.category ?? "Achievement"}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
                    {activeAchievement.tag}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 items-start gap-3">
                <div
                  className="flex h-[clamp(4.25rem,8vw,5.75rem)] w-[clamp(4.25rem,8vw,5.75rem)] items-center justify-center rounded-[22px] border"
                  style={{
                    borderColor: activeAchievement.palette.border,
                    background: `radial-gradient(circle, ${activeAchievement.palette.background} 0%, rgba(255,255,255,0.02) 70%)`,
                    boxShadow: `0 0 30px ${activeAchievement.palette.glow}`,
                    color: activeAchievement.palette.text,
                  }}
                >
                  {ActiveIcon ? <ActiveIcon size={34} /> : null}
                </div>

                <div
                  className="flex h-[clamp(4rem,8vw,5.6rem)] w-[clamp(4rem,8vw,5.6rem)] items-center justify-center rounded-full border text-center"
                  style={{
                    borderColor: activeAchievement.palette.border,
                    background: `radial-gradient(circle, ${activeAchievement.palette.background} 0%, rgba(255,255,255,0.02) 70%)`,
                    boxShadow: `0 0 30px ${activeAchievement.palette.glow}`,
                  }}
                >
                  <div>
                    <div
                      className="text-[clamp(1rem,1.3vw,1.15rem)] font-semibold"
                      style={{ color: activeAchievement.palette.text }}
                    >
                      {activeAchievement.metric}
                    </div>
                    <div className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[8px] lg:text-[9px]">
                      Metric
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1.14fr)_minmax(14rem,0.86fr)]">
              <div className="min-w-0 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[18px] sm:p-3.5 lg:p-4">
                <p className="mb-1.5 text-[8px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[9px] lg:text-[10px] lg:tracking-[0.28em]">
                  Why It Matters
                </p>
                <p className="text-[10px] leading-5 text-zinc-300 sm:text-[11px] sm:leading-6 lg:text-xs lg:leading-7">
                  {activeAchievement.description}
                </p>
              </div>

              <div className="min-w-0 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] p-3 sm:rounded-[18px] sm:p-3.5 lg:p-4">
                <p className="mb-1.5 text-[8px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[9px] lg:text-[10px] lg:tracking-[0.28em]">
                  Focus Points
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeAchievement.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border px-2 py-2 text-[8px] uppercase tracking-[0.1em] sm:px-2.5 sm:text-[9px] lg:px-3 lg:py-1.5 lg:text-[10px] lg:tracking-[0.14em]"
                      style={{
                        borderColor: activeAchievement.palette.border,
                        color: activeAchievement.palette.text,
                        background: activeAchievement.palette.background,
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {timelineData.map((item, index) => {
                const isCurrent = index === activeIndex;
                // const CardIcon = item.icon;

                return (
                  <div
                    key={`${item.title}-preview`}
                    className="min-w-0 overflow-hidden rounded-[14px] border p-2 transition-all duration-300 sm:rounded-[16px] sm:p-2.5 lg:p-3"
                    style={{
                      borderColor: isCurrent ? item.palette.border : "rgba(255,255,255,0.08)",
                      background: isCurrent ? item.palette.background : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="w-full text-left"
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <p className="text-[7px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[8px] lg:text-[9px] lg:tracking-[0.24em]">
                          {item.year}
                        </p>
                        <p className="text-[7px] uppercase tracking-[0.14em] text-zinc-500 sm:text-[8px]">
                          {item.category ?? "Achievement"}
                        </p>
                      </div>
                      
                      <p className="mb-1 text-[13px] font-semibold text-white sm:text-sm lg:text-base">
                        {item.metric}
                      </p>
                      <p className="mb-1 text-[9px] font-medium text-zinc-300 sm:text-[10px] lg:text-[11px]">
                        {item.title}
                      </p>
                      <p className="line-clamp-2 text-[8px] leading-4 text-zinc-500 sm:text-[9px] sm:leading-4 lg:text-[10px]">
                        {item.tag}
                      </p>
                    </button>

                    {item.verifyUrl?.startsWith("/") ? (
                      <Link
                        to={item.verifyUrl}
                        className="mt-3 inline-flex rounded-full border px-2.5 py-1 text-[8px] uppercase tracking-[0.16em]"
                        style={{
                          borderColor: item.palette.border,
                          color: item.palette.text,
                          background: item.palette.background,
                        }}
                      >
                        {item.verifyLabel ?? "Verify"}
                      </Link>
                    ) : (
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex rounded-full border px-2.5 py-1 text-[8px] uppercase tracking-[0.16em]"
                        style={{
                          borderColor: item.palette.border,
                          color: item.palette.text,
                          background: item.palette.background,
                        }}
                      >
                        {item.verifyLabel ?? "Verify"}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AchievementsPage;
