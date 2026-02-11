import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const floatingEmojis = ["⚛️", "🚀", "💡", "🎯", "✨", "🔮", "🎨", "⚡"];

const HeroSection = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { content, language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % content.hero.subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [content.hero.subtitles.length]);

  useEffect(() => {
    setCurrentSubtitle(0);
  }, [language]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Floating emoji particles */}
      {floatingEmojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-2xl md:text-4xl opacity-20 select-none pointer-events-none animate-float-slow"
          style={{
            left: `${10 + (i * 11) % 80}%`,
            top: `${15 + (i * 13) % 60}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i * 1.2}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-neon-cyan/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-neon-gold/10 blur-[60px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        {/* Greeting */}
        <p className="text-muted-foreground text-lg md:text-xl mb-4 tracking-widest uppercase">
          {content.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-none">
          <span className="text-glow-blue text-primary">Ahmet</span>{" "}
          <span className="text-glow-cyan text-secondary">Can</span>{" "}
          <span className="text-glow-gold text-accent">Saraç</span>
        </h1>

        {/* Rotating subtitle */}
        <div className="h-10 mb-10 overflow-hidden">
          <p
            key={currentSubtitle}
            className="text-xl md:text-2xl text-muted-foreground animate-slide-up font-body"
          >
            {content.hero.subtitles[currentSubtitle]}
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg animate-bounce-soft hover:box-glow-blue transition-shadow duration-300"
        >
          {content.hero.cta}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">{content.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
