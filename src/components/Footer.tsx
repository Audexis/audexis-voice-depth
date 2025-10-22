import { Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-muted-foreground font-light">
            © 2025 Audexis Pvt Ltd
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-8">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Home
            </button>
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              About
            </button>
            <button
              onClick={scrollToContact}
              className="text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Contact
            </button>
          </nav>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
