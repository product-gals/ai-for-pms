import { Resource } from "@/data/resources";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border bg-card p-5 transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{resource.category}</span>
          {resource.badge && (
            <Badge variant="secondary" className="text-[10px] bg-accent/15 text-accent border-0 font-medium">
              {resource.badge}
            </Badge>
          )}
        </div>
        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
      </div>
      <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">
        {resource.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{resource.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-primary/70">↗ {resource.source}</span>
        <div className="flex gap-1.5">
          {resource.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
