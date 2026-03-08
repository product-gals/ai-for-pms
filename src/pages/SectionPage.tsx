import { useParams, Link } from "react-router-dom";
import { resources, sectionMeta, type Section } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const pathToSection: Record<string, Section> = {
  "learn": "learn",
  "build": "build",
  "stay-current": "stay-current",
  "go-deep": "go-deep",
};

export default function SectionPage() {
  const { section } = useParams<{ section: string }>();
  const sectionKey = section ? pathToSection[section] : undefined;

  if (!sectionKey || !sectionMeta[sectionKey]) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Section not found</h1>
        <Link to="/" className="text-accent hover:underline">← Back home</Link>
      </div>
    );
  }

  const meta = sectionMeta[sectionKey];
  const sectionResources = resources.filter((r) => r.section === sectionKey);

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to home
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="mb-10">
          <div className="text-4xl mb-3">{meta.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{meta.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{meta.description}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectionResources.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <ResourceCard resource={r} />
          </motion.div>
        ))}
      </div>

      {sectionResources.length === 0 && (
        <p className="text-muted-foreground text-center py-12">Resources coming soon — stay tuned!</p>
      )}
    </div>
  );
}
