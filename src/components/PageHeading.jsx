export const PageHeading = ({ title, description = "", className = "" }) => {
  return (
    <div className={`mx-auto mb-8 flex max-w-4xl flex-col items-center text-center ${className}`}>
      <div className="mb-3 flex w-full items-center justify-center gap-4 overflow-hidden">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-300/70 sm:w-32 md:w-48" />
        <span className="font-['Orbitron','Share_Tech_Mono',monospace] text-[clamp(2rem,2.4vw,2.5rem)] uppercase tracking-[0.45em] text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text">
          {title}
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-cyan-300/70 to-transparent sm:w-32 md:w-48" />
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
};

