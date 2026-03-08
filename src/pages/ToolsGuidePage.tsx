import { Link } from "react-router-dom";
import { buildingTools, aiModels, type Tool } from "@/data/tools-guide";
import { ArrowLeft, ExternalLink, Check, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <div
        className="rounded-lg border bg-card p-5 transition-all hover:border-primary/20 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-foreground text-lg leading-snug">{tool.name}</h3>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{tool.tagline}</p>

        <div className="mb-3">
          <Badge variant="secondary" className="text-[11px] bg-accent/15 text-accent border-0 font-medium">
            Best for: {tool.bestFor}
          </Badge>
        </div>

        <div className="rounded-md bg-muted/50 px-3 py-2.5 mb-3">
          <p className="text-sm text-foreground">
            <span className="font-semibold text-primary">Choose when:</span> {tool.whenToChoose}
          </p>
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            className="space-y-3 pt-2 border-t"
          >
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Strengths</h4>
              <ul className="space-y-1">
                {tool.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Limitations</h4>
              <ul className="space-y-1">
                {tool.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-3.5 w-3.5 text-yellow-400 shrink-0 mt-0.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <p className="text-[11px] text-muted-foreground mt-2">
          {expanded ? "Click to collapse" : "Click to expand details"}
        </p>
      </div>
    </motion.div>
  );
}

export default function ToolsGuidePage() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 max-w-5xl">
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
          <div className="text-4xl mb-3">🧭</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            AI Tools & Models Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A PM's guide to the AI landscape — what each tool and model is good for, and when to choose it.
          </p>
        </div>
      </motion.div>

      {/* Building Tools */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🛠️</span>
          <h2 className="text-2xl font-bold text-foreground">AI Building Tools</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 ml-10">
          Platforms that let PMs build, prototype, and ship products — from no-code to AI-assisted coding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buildingTools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </section>

      {/* AI Models */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🧠</span>
          <h2 className="text-2xl font-bold text-foreground">AI Models</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 ml-10">
          The major LLMs and when to reach for each one — whether you're writing, analyzing, reasoning, or building.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiModels.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </section>

      <div className="rounded-lg border bg-muted/30 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          This landscape changes fast. Know a tool or model we should add?{" "}
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
  );
}
