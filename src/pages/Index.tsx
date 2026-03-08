import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { resources, sectionMeta, type Section } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allSections = Object.entries(sectionMeta) as [Section, typeof sectionMeta[Section]][];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section | "all">("all");
  const [search, setSearch] = useState("");
  const [showStartHere, setShowStartHere] = useState(true);

  const filtered = useMemo(() => {
    let list = resources;
    if (activeSection !== "all") {
      list = list.filter((r) => r.section === activeSection);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeSection, search]);

  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: resources.length };
    for (const r of resources) counts[r.section] = (counts[r.section] || 0) + 1;
    return counts;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="border-b pb-10 md:pb-14">
        <div className="container mx-auto px-4 text-center pt-14 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-3 leading-tight tracking-tight">
              AI resources for PMs.<br className="hidden md:block" />
              <span className="text-primary">One place. Hand-picked.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
              We don't create content — we find the best stuff so you don't have to. Hand-picked from {new Set(resources.map(r => r.source)).size}+ trusted sources.
            </p>
            <p className="text-xs text-muted-foreground/60 mb-8">
              Every link goes to the original source. We're just the guide.
            </p>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative mb-10">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, topic, or tag..."
                className="w-full h-14 pl-14 pr-5 rounded-xl border bg-card text-foreground text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg"
              />
            </div>
          </motion.div>

        {/* Main content: sidebar + grid */}
        <div className="text-left">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <aside className="lg:w-56 shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Categories
            </h3>
            <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              <button
                onClick={() => setActiveSection("all")}
                className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === "all"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span>All Resources</span>
                <span className="ml-2 text-xs opacity-60">{sectionCounts.all}</span>
              </button>
              {allSections.map(([key, meta]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === key
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{meta.emoji}</span>
                    <span>{meta.title}</span>
                  </span>
                  <span className="ml-2 text-xs opacity-60">{sectionCounts[key] || 0}</span>
                </button>
              ))}

              {/* Extra links */}
              <div className="hidden lg:block mt-6 pt-4 border-t space-y-2">
                <Link
                  to="/tools-guide"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  🧭 Tools & Models Guide
                </Link>
                <Link
                  to="/community"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  🌐 Community Tools
                </Link>
                <Link
                  to="/quiz"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
                >
                  ⚡ AI Readiness Quiz
                </Link>
              </div>
            </nav>
          </aside>

          {/* Resource grid */}
          <div className="flex-1 min-w-0">
            {/* Start Here nudge */}
            {showStartHere && activeSection === "all" && !search && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-accent/20 bg-accent/5 p-4 mb-6 flex items-start gap-3"
              >
                <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground mb-1">New to AI as a PM?</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Start with our hand-picked essentials — a 30-minute reading path to get you up to speed without the overwhelm.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveSection("learn")}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                    >
                      Start with Learn <ArrowRight className="h-3 w-3" />
                    </button>
                    <Link
                      to="/tools-guide"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Or explore AI tools <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => setShowStartHere(false)}
                  className="text-muted-foreground hover:text-foreground text-xs"
                >
                  ✕
                </button>
              </motion.div>
            )}

            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                resource{filtered.length !== 1 ? "s" : ""}
                {search && (
                  <span>
                    {" "}for "<span className="text-foreground">{search}</span>"
                  </span>
                )}
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                  >
                    <ResourceCard resource={r} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No resources found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-14 text-center">
          <h2 className="text-xl font-extrabold text-foreground mb-2">Stay in the loop</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            The best new PM × AI resources, delivered weekly. No spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 h-11 rounded-md border border-input bg-card px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-11 px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
