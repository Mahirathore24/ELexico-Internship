import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg hero-gradient">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight font-['Space_Grotesk']">
              ELEXICO <span className="text-gradient">INTERNSHIP</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/" ? "text-accent" : "text-muted-foreground"}`}>Home</Link>
            <Link to="/#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent">Projects</Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-foreground">Home</Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ELEXICO INTERNSHIP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
