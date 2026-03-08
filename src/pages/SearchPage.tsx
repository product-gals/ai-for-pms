import { useState, useMemo } from "react";
import { resources, sectionMeta } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return resources.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.source.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-10 md:py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to home
      </Link>

      <h1 className="text-3xl font-extrabold text-foreground mb-6">Search Resources</h1>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by topic, tool, source..."
          autoFocus
          className="w-full h-12 pl-10 pr-4 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-sm"
        />
      </div>

      {query.trim() && (
        <p className="text-sm text-muted-foreground mb-4">
          {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
        </p>
      )}

      <div className="grid grid-cols-1 gap-4">
        {results.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>

      {query.trim() && results.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="mb-2">No resources found for "{query}"</p>
          <p className="text-sm">Try different keywords or browse by section from the homepage.</p>
        </div>
      )}

      {!query.trim() && (
        <div className="text-center py-12 text-muted-foreground">
          <p>Start typing to search across all {resources.length} resources.</p>
        </div>
      )}
    </div>
  );
}
