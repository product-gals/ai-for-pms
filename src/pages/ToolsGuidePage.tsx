import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { buildingTools, aiModels, type Tool } from "@/data/tools-guide";
import { ArrowLeft, ExternalLink, Check, AlertCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type Category = "all" | "builder" | "model";

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "all", label: "All Tools", emoji: "📋" },
  { key: "builder", label: "Building Tools", emoji: "🛠️" },
  { key: "model", label: "AI Models", emoji: "🧠" },
];

const allTools = [...buildingTools, ...aiModels];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
    >
      <div
        className="rounded-lg border bg-card p-5 transition-all hover:border-primary/20 cursor-pointer h-full"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-bold text-foreground text-sm leading-snug">{tool.name}</h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground mb-3">{tool.tagline}</p>

        <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0 font-medium mb-3">
          {tool.bestFor}
        </Badge>

        <div className="rounded-md bg-muted/50 px-3 py-2 mb-2">
          <p className="text-xs text-foreground">
            <span className="font-semibold text-primary">Choose when:</span>{" "}
            <span className="text-muted-foreground">{tool.whenToChoose}</span>
          </p>
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            className="space-y-3 pt-3 border-t mt-3"
          >
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Strengths</h4>
              <ul className="space-y-1">
                {tool.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Limitations</h4>
              <ul className="space-y-1">
                {tool.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <AlertCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <p className="text-[10px] text-muted-foreground/50 mt-2">
          {expanded ? "Click to collapse" : "Click to expand"}
        </p>
      </div>
    </motion.div>
  );
}

export default function ToolsGuidePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = activeCategory === "all" ? allTools : allTools.filter((t) => t.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.bestFor.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  const counts = useMemo(() => {
    return {
      all: allTools.length,
      builder: buildingTools.length,
      model: aiModels.length,
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-3 leading-tight tracking-tight">
              AI Tools & Models Guide
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              What each tool and model is good for, and when to choose it.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools by name or use case..."
                className="w-full h-14 pl-14 pr-5 rounded-xl border bg-card text-foreground text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content: sidebar + grid */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <aside className="lg:w-52 shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Categories
            </h3>
            <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat.key
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </span>
                  <span className="ml-2 text-xs opacity-60">{counts[cat.key]}</span>
                </button>
              ))}

              <div className="hidden lg:block mt-6 pt-4 border-t space-y-2">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to resources
                </Link>
              </div>
            </nav>
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                tool{filtered.length !== 1 ? "s" : ""} · Click any card to expand
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((tool, i) => (
                  <ToolCard key={tool.name} tool={tool} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No tools found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-10">
        <div className="rounded-lg border bg-muted/30 p-5 text-center">
          <p className="text-xs text-muted-foreground">
            This landscape changes fast. Know a tool we should add?{" "}
            <a
              href="https://www.linkedin.com/in/meaganglenn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Suggest an update
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
