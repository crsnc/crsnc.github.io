import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const navLinks = [
    { label: content.nav.about, target: "about" },
    { label: content.nav.skills, target: "skills" },
    { label: content.nav.projects, target: "projects" },
    { label: content.nav.contact, target: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={() => handleScroll("hero")}
          className="font-display font-extrabold text-xl text-primary hover:text-glow-blue transition-all"
        >
          ACS<span className="text-secondary">.</span>
        </button>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleScroll(link.target)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body hidden sm:block"
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center gap-1 rounded-full border border-border bg-card/40 p-1 text-xs font-body uppercase tracking-[0.2em] text-muted-foreground">
            <button
              type="button"
              onClick={() => setLanguage("tr")}
              className={`rounded-full px-2 py-1 transition ${
                language === "tr" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              aria-pressed={language === "tr"}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-1 transition ${
                language === "en" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
