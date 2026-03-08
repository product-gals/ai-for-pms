import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start Here", path: "/start-here" },
  { label: "AI Tools", path: "/ai-tools" },
  { label: "Frameworks", path: "/frameworks" },
  { label: "What's Changing", path: "/whats-changing" },
  { label: "Practitioners", path: "/practitioners" },
  { label: "Go Deeper", path: "/go-deeper" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-foreground">
            <span className="text-primary">PM</span>
            <span className="text-muted-foreground">×</span>
            <span className="text-secondary">AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/quiz" className="hidden sm:block">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Take the Quiz
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-card overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === l.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link to="/quiz" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Take the Quiz
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-extrabold text-lg mb-2">
                <span className="text-primary">PM</span>
                <span className="text-muted-foreground"> × </span>
                <span className="text-secondary">AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The free resource hub for product managers navigating AI. Community-curated, always free.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Sections</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Ecosystem</h4>
              <div className="flex flex-col gap-2">
                <a href="https://justfractional.co" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Just Fractional</a>
                <a href="https://www.linkedin.com/in/meaganglenn/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Product Pivot Podcast</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Substack</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prodfolio</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-3">Get the best new PM × AI resources in your inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
            Created by Meagan Glenn · © {new Date().getFullYear()} PM × AI Resource Hub
          </div>
        </div>
      </footer>
    </div>
  );
}
