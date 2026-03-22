import { listTools } from "../data";
import ShinyText from "../components/ShinyText/ShinyText";
import {PageHeading} from "../components/PageHeading";

const SkillsPage = () => {
  return (
    <section className="py-10">
      <PageHeading
        title="Skills & Stack"
        description="A practical toolkit built around frontend engineering, backend workflows, design systems, and modern product delivery."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {listTools.map((tool) => (
          <div key={tool.id} className="group flex items-center gap-4 rounded-3xl border border-zinc-700 bg-zinc-900/60 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/80">
            <img src={tool.gambar} alt={tool.nama} className="h-16 w-16 rounded-2xl bg-zinc-800 p-3 object-contain transition-all duration-300 group-hover:bg-zinc-900" />
            <div className="min-w-0">
              <ShinyText text={tool.nama} disabled={false} speed={3} className="block text-lg font-semibold" />
              <p className="truncate text-sm text-zinc-400">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;

