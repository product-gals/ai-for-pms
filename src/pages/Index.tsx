import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { resources, sectionMeta, type Section } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allSections = Object.entries(sectionMeta) as [Section, typeof sectionMeta[Section]][];

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section | "all">("all");
  const [search, setSearch] = useState("");

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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4 leading-tight tracking-tight">
              The PM's Guide to AI
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Community-curated resources to supercharge your AI product practice. Browse, learn, and contribute.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources by name, description, or tag..."
                className="w-full h-13 pl-12 pr-4 rounded-xl border border-white/20 bg-card/95 backdrop-blur text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content: sidebar + grid */}
      <section className="container mx-auto px-4 py-10 md:py-14">
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
      </section>

      {/* Newsletter */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Stay in the loop</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the best new PM × AI resources delivered to your inbox. No spam, unsubscribe anytime.
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
