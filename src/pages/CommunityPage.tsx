import { Link } from "react-router-dom";
import { communitySections } from "@/data/community-resources";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-12">
          <div className="text-4xl mb-3">🌐</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Community Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tools, assessments, and resources built by PMs in the community. Explore what others have created to help you level up.
          </p>
        </div>
      </motion.div>

      <div className="space-y-12">
        {communitySections.map((section, si) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: si * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{section.emoji}</span>
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5 ml-10">
              {section.description}
            </p>

            {section.resources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
                {section.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border bg-card p-5 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-2xl">{resource.emoji}</span>
                      <div className="flex items-center gap-2">
                        {resource.featured && (
                          <Badge
                            variant="secondary"
                            className="text-[10px] bg-accent/15 text-accent border-0 font-medium"
                          >
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        by {resource.author}
                      </span>
                      <div className="flex gap-1.5">
                        {resource.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="ml-10 rounded-lg border border-dashed bg-muted/30 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Resources coming soon — know something that belongs here?{" "}
                  <a
                    href="https://www.linkedin.com/in/meaganglenn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Suggest a resource
                  </a>
                </p>
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
