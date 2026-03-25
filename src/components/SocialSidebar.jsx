import "remixicon/fonts/remixicon.css";
import { socialLinks } from "../data";

const SocialSidebar = () => {
  return (
    <aside className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="pointer-events-auto flex flex-col items-center gap-5">
        {socialLinks.map((item) => {
          const isMail = item.href.startsWith("mailto:");

          return (
            <a
              key={item.label}
              href={item.href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noreferrer"}
              aria-label={item.label}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#08101d]/75 text-xl text-zinc-400 shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:scale-105"
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = item.borderColor;
                event.currentTarget.style.background = item.backgroundColor;
                event.currentTarget.style.color = item.color;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                event.currentTarget.style.background = "rgba(8,16,29,0.75)";
                event.currentTarget.style.color = "#a1a1aa";
              }}
            >
              <i className={item.iconClass} />
            </a>
          );
        })}

        <div className="mt-1 h-24 w-px rounded-full bg-gradient-to-b from-cyan-300/70 via-cyan-400/20 to-transparent" />
      </div>
    </aside>
  );
};

export default SocialSidebar;
