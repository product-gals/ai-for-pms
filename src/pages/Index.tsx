import { Link } from "react-router-dom";
import { sectionMeta, type Section } from "@/data/resources";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const sections = Object.entries(sectionMeta) as [Section, typeof sectionMeta[Section]][];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-24 md:py-32">
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
              Free, community-curated resources for product managers learning, building, and staying current on AI. No course. No paywall. Just the good stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/start-here">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8">
                  Start Here <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/quiz">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8">
                  How AI-Ready Are You?
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">Explore by Topic</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Six curated sections covering everything from getting started to going deep on AI product management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map(([key, meta], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={meta.path}
                className="group block rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 h-full"
              >
                <div className="text-3xl mb-3">{meta.emoji}</div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {meta.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{meta.description}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                  Explore <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
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
