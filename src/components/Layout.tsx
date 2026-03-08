import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Resources", path: "/" },
  { label: "Tools Guide", path: "/tools-guide" },
  { label: "AI Readiness Quiz", path: "/quiz" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-foreground">
            <span className="text-primary">PM</span>
            <span className="text-muted-foreground">×</span>
            <span className="text-secondary">AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  (l.path === "/" ? location.pathname === "/" : location.pathname === l.path)
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
            <a href="https://www.linkedin.com/in/meaganglenn/" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs">
                + Submit Resource
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground"
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
              className="md:hidden border-t bg-card overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      (l.path === "/" ? location.pathname === "/" : location.pathname === l.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <a href="https://www.linkedin.com/in/meaganglenn/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    + Submit Resource
                  </Button>
                </a>
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
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-extrabold text-lg mb-2">
                <span className="text-primary">PM</span>
                <span className="text-muted-foreground"> × </span>
                <span className="text-secondary">AI</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The free resource hub for product managers navigating AI. Hand-picked, not overwhelming.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xs mb-3 text-foreground uppercase tracking-wider">Explore</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                ))}
                <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xs mb-3 text-foreground uppercase tracking-wider">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://justfractional.co" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Just Fractional</a>
                <a href="https://www.linkedin.com/in/meaganglenn/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Product Pivot Podcast</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-5 border-t text-center text-xs text-muted-foreground">
            Created by Meagan Glenn · © {new Date().getFullYear()} PM × AI
          </div>
        </div>
      </footer>
    </div>
  );
}
