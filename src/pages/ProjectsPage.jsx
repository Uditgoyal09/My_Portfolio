import { useEffect, useRef, useState } from "react";
import {PageHeading} from "../components/PageHeading";
const listProyek = [
  {
    id: 1,
    title: "FinanceAI",
    category: "AI / FinTech",
    tools: "AI, Machine Learning, React, APIs",
    fullDescription:
      "AI-powered financial analytics platform designed to broaden access to smart forecasting and advanced financial analysis tools.",
    image:
      "/assets/projects/financeai.jpg",
    video: "/assets/projects/financeai.mp4",
    github: "https://github.com/Uditgoyal09/FinanceAI",
    live: "https://finance-ai-five-ochre.vercel.app/",
  },
  {
    id: 2,
    title: "Credi Score - Finance Tracker",
    category: "FinTech",
    tools: "MERN Stack, Charts, Authentication",
    fullDescription:
      "Credit score tracking dashboard with reports, alerts, and credit health insights for better financial decisions.",
    image:
      "/assets/projects/crediscore.jpg",
    video: "/assets/projects/crediscore.mp4",
    github: "https://github.com/Uditgoyal09/CrediScore.git",
    live: "https://credi-score-client.vercel.app/",
  },
  {
    id: 3,
    title: "Carbon Tracker",
    category: "Dashboard / Sustainability",
    tools: "React, Node.js, Charts, REST APIs",
    fullDescription:
      "Sustainability dashboard to log activities, visualize emissions, and track reduction goals over time.",
    image:
      "/assets/projects/carbontracker.jpg",
    video: null,
    github: "https://github.com/Uditgoyal09/Carbon-Tracker.git",
    live: "https://carbon-tracker-lovat.vercel.app/login",
  },
  {
    id: 4,
    title: "Helping Hand - NGO Website",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, Responsive Design",
    fullDescription:
      "Built a static, responsive donation website with WCAG-compliant UI/UX and an optimized mobile-first flow to enhance donor experience and reduce drop-offs.",
    image:
      "/assets/projects/NGO.jpg",
    video: "/assets/projects/NGO.mp4",
    github: "https://github.com/Uditgoyal09/Helping-Hands-NGO",
    live: "https://uditgoyal09.github.io/Helping-Hands-NGO/",
  },
  {
    id: 5,
    title: "Ganesh Jeweller - Wholesale Platform",
    category: "E-commerce / B2B",
    tools: "React, Firebase, Database, Authentication",
    fullDescription:
      "Built a wholesale jewelry ordering platform for retailers to browse collections, place bulk orders, and securely manage order data with real-time database integration.",
    image:
      "/assets/projects/jewellers.jpg",
    video: "/assets/projects/GJ.mp4",
    github: "https://github.com/Uditgoyal09/Jewellery-Webiste",
    live: "https://jewellery-webiste.vercel.app/",
  },
  {
    id: 6,
    title: "YouTube Clone",
    category: "Web App",
    tools: "React, APIs, Tailwind CSS, Video Player",
    fullDescription:
      "Video platform clone with search, categories, and responsive player UI powered by external APIs.",
    image:
      "/assets/projects/yt.jpg",
    video: "/assets/projects/yt.mp4",
    github: "https://github.com/Uditgoyal09/yt-clone.git",
    live: "https://yt-clone-five-murex.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "Coseverse Academy",
  //   category: "EdTech",
  //   tools: "React, LMS, Backend Integration",
  //   fullDescription:
  //     "A learning platform delivering training programs, business-aligned outcomes, and long-term learner engagement.",
  //   image:
  //     "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
  //   github: "https://github.com/Uditgoyal09/LMS-File",
  //   live: null,
  // },
  // {
  //   id: 8,
  //   title: "Chat App",
  //   category: "Real-time App",
  //   tools: "Socket.io, Node.js, React, WebSockets",
  //   fullDescription:
  //     "Real-time chat application with typing indicators, media sharing, and user presence.",
  //   image:
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
  //   github: "#",
  //   live: null,
  // },
];

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "7px 14px",
  borderRadius: 999,
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "all 0.22s ease",
};

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

function Links({ project, align }) {
  if (!project.github && !project.live) {
    return (
      <span
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          color: "#52525b",
          textAlign: align,
        }}
      >
        Coming soon
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
      }}
    >
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            ...buttonStyle,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            color: "#d4d4d8",
          }}
        >
          <GithubIcon />
          Source
        </a>
      ) : null}

      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            ...buttonStyle,
            border: "1px solid rgba(34,211,238,0.3)",
            background: "rgba(34,211,238,0.08)",
            color: "#cffafe",
          }}
        >
          Live
          <ArrowUpRight />
        </a>
      ) : null}
    </div>
  );
}

function ProjectMedia({ project }) {
  const mediaRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!project.video || !mediaRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(mediaRef.current);

    return () => observer.disconnect();
  }, [project.video]);

  const revealVideo = () => {
    if (project.video) {
      setShouldLoadVideo(true);
    }
  };

  return (
    <div
      ref={mediaRef}
      onMouseEnter={revealVideo}
      onPointerDown={revealVideo}
      onFocus={revealVideo}
      tabIndex={project.video ? 0 : -1}
      style={{
        width: "100%",
        height: "clamp(220px, 25vw, 300px)",
        borderRadius: 8,
        overflow: "hidden",
        background: "#0c0e13",
        border: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        outline: "none",
      }}
    >
      {project.video && shouldLoadVideo ? (
        <video
          src={project.video}
          poster={project.image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            background: "#0c0e13",
          }}
        />
      ) : (
        <>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              transition: "transform 0.6s ease",
              background: "#0c0e13",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "scale(1)";
            }}
          />
          {project.video ? (
            <div
              style={{
                position: "absolute",
                right: 14,
                bottom: 14,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(5,8,22,0.72)",
                padding: "8px 12px",
                color: "#d4d4d8",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(34,211,238,0.16)",
                  color: "#a5f3fc",
                  fontSize: 11,
                }}
              >
                ▶
              </span>
              Preview
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function CardInfo({ project, index, tools, align }) {
  const isRight = align === "right";
  const projectNumber = String(index + 1).padStart(2, "0");
  const leadingDigits = projectNumber.slice(0, -1);
  const lastDigit = projectNumber.slice(-1);
  const highlightedTools = tools.map((tool) => (
    <span
      key={`${project.id}-${tool}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(34,211,238,0.18)",
        background: "rgba(34,211,238,0.08)",
        color: "#a5f3fc",
        fontSize: 10.5,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      {tool}
    </span>
  ));

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 16,
          gap: 12,
          flexDirection: isRight ? "row" : "row-reverse",
        }}
      >
        <span
          style={{
            fontSize: "clamp(2.4rem,4vw,3.4rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.85)",
            flexShrink: 0,
          }}
        >
          <span>{leadingDigits}</span>
          <span style={{ color: "#22d3ee" }}>{lastDigit}</span>
        </span>

        <div style={{ textAlign: align, paddingTop: 5 }}>
          <p
            style={{
              margin: 0,
              fontSize: 28.5,
              fontWeight: 500,
              color: "#e4e4e7",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </p>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#52525b",
            }}
          >
            {project.category}
          </p>
        </div>
      </div>

      <p
        style={{
          margin: "0 5px 8px",
          fontSize: 9.5,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.28em",
          color: "white",
          textAlign: align,
        }}
      >
        Tools and features
      </p>
      <div
        style={{
          margin: "0 0 16px",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        {highlightedTools}
      </div>
      <p
        style={{
          margin: "0 0 16px",
          fontSize: 12.5,
          lineHeight: 1.75,
          color: "#71717a",
          textAlign: align,
        }}
      >
        {project.fullDescription}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  const railRef = useRef(null);
  const sectionRef = useRef(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    hasMoved: false,
  });
  const [scrollX, setScrollX] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const updateMax = () => {
      if (!railRef.current) return;

      const nextMax = Math.max(
        0,
        railRef.current.scrollWidth - railRef.current.clientWidth
      );

      setMaxScroll(nextMax);

      // reset only when layout actually changes
      railRef.current.scrollLeft = 0;
      setScrollX(0);
    };

    updateMax();
    window.addEventListener("resize", updateMax);

    return () => window.removeEventListener("resize", updateMax);
  }, [activeCategory]);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return;

    const onWheel = (event) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;

      const nextScroll = Math.min(
        maxScroll,
        Math.max(0, rail.scrollLeft + delta * 2) // reduced speed
      );

      // stop hijacking scroll at edges (VERY IMPORTANT)
      if (nextScroll === rail.scrollLeft) return;

      event.preventDefault();

      // direct scroll (no smooth)
      rail.scrollLeft = nextScroll;

      setScrollX(nextScroll);
    };

    section.addEventListener("wheel", onWheel, { passive: false });

    return () => section.removeEventListener("wheel", onWheel);
  }, [maxScroll]);

  const categories = ["All", ...Array.from(new Set(listProyek.map((project) => project.category)))];
  const filteredProjects =
    activeCategory === "All"
      ? listProyek
      : listProyek.filter((project) => project.category === activeCategory);

  const progress = maxScroll > 0 ? (scrollX / maxScroll) * 100 : 0;
  const projectCardWidth = "clamp(420px, 32vw, 520px)";
  const projectCardMinHeight = "clamp(460px, 44vw, 560px)";
  const sideRailGap = "clamp(20px, 4vw, 60px)";

  const tools = (project) =>
    Array.isArray(project.tools)
      ? project.tools
      : String(project.tools || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  const handlePointerDown = (event) => {
    if (!railRef.current) {
      return;
    }

    if (event.target.closest("a, button, select, option, label")) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: railRef.current.scrollLeft,
      hasMoved: false,
    };

    railRef.current.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!railRef.current || !dragStateRef.current.isDragging) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;
    if (!dragStateRef.current.hasMoved && Math.abs(deltaX) < 6) {
      return;
    }

    dragStateRef.current.hasMoved = true;
    const nextScroll = Math.min(
      maxScroll,
      Math.max(0, dragStateRef.current.startScrollLeft - deltaX)
    );

    railRef.current.style.cursor = "grabbing";
    railRef.current.style.userSelect = "none";
    railRef.current.scrollLeft = nextScroll;
    setScrollX(nextScroll);
  };

  const handlePointerUp = (event) => {
    if (!railRef.current) {
      return;
    }

    dragStateRef.current.isDragging = false;
    dragStateRef.current.hasMoved = false;
    railRef.current.releasePointerCapture?.(event.pointerId);
    railRef.current.style.cursor = "grab";
    railRef.current.style.removeProperty("user-select");
  };

  return (
    <div
      ref={sectionRef}
      style={{
        fontFamily: "'Segoe UI',system-ui,-apple-system,sans-serif",
        color: "#fff",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", padding: "20px 0 0", overflow: "hidden" }}>
        {/* <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        > */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
           
            </div>
               <PageHeading 
  title="My Work" 
  description="A selection of my latest projects and work highlights." 
/>

          </div>
          {/* <p
            style={{
              margin: "0 0 6px",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#52525b",
            }}
          >
            Scroll right
          </p> */}
        {/* </div> */}

        <div
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
               width: "100%",
          }}
        >
           {/* <PageHeading title="My Work" /> */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#71717a",
            }}
          >
            Category
            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              style={{
                border: "1px solid rgba(34,211,238,0.22)",
                background: "rgba(7,16,31,0.92)",
                color: "#a5f3fc",
                borderRadius: 999,
                padding: "10px 14px",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                outline: "none",
                cursor: "pointer",
              }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.07)",
            marginTop: 28,
          }}
        />
      </div>

      <div
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onScroll={() => {
          if (railRef.current) {
            setScrollX(railRef.current.scrollLeft);
          }
        }}
        style={{
          display: "flex",
          alignItems: "stretch",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          cursor: "grab",
          touchAction: "pan-y",
        }}
      >
        <div style={{ flexShrink: 0, width: sideRailGap }} />

        {filteredProjects.map((project, index) => {
          const currentTools = tools(project);
          const isEvenCard = index % 2 === 0;
          const align = isEvenCard ? "left" : "right";

          return (
            <div
              key={project.id}
              style={{
                flexShrink: 0,
                width: projectCardWidth,
                minHeight: projectCardMinHeight,
                display: "flex",
                flexDirection: "column",
                borderRight:
                  index < listProyek.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                padding: "clamp(20px, 2.2vw, 30px) clamp(20px, 2.4vw, 32px) 16px",
                margin: "12px 0",
                transition:
                  "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: 20,
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background = "rgba(255,255,255,0.03)";
                event.currentTarget.style.transform = "translateY(-8px)";
                event.currentTarget.style.boxShadow =
                  "0 24px 60px rgba(0,0,0,0.22)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = "transparent";
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow = "none";
              }}
            >
              {isEvenCard ? (
                <>
                  <CardInfo
                    project={project}
                    index={index}
                    tools={currentTools}
                    align={align}
                  />
                  <ProjectMedia project={project} />
                  <div style={{ marginTop: 16 }}>
                    <Links project={project} align={align} />
                  </div>
                </>
              ) : (
                <>
                  <ProjectMedia project={project} />
                  <div style={{ marginTop: 16 }}>
                    <CardInfo
                      project={project}
                      index={index}
                      tools={currentTools}
                      align={align}
                    />
                  </div>
                  <Links project={project} align={align} />
                </>
              )}
            </div>
          );
        })}

        <div style={{ flexShrink: 0, width: sideRailGap }} />
      </div>

      <div style={{ height: 2, background: "rgba(255,255,255,0.05)", margin: `0 ${sideRailGap}` }}>
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg,#22d3ee,#67e8f9)",
            width: `${progress}%`,
            transition: "width 0.15s ease",
            borderRadius: 1,
          }}
        />
      </div>

      <div
        style={{
          padding: `10px ${sideRailGap} 40px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#3f3f46",
          }}
        >
          {filteredProjects.length} Projects
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#3f3f46",
          }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
