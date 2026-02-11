import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const colorMap = {
  blue: "border-neon-blue/40 hover:border-neon-blue hover:box-glow-blue text-neon-blue",
  cyan: "border-neon-cyan/40 hover:border-neon-cyan hover:box-glow-cyan text-neon-cyan",
  gold: "border-neon-gold/40 hover:border-neon-gold hover:box-glow-gold text-neon-gold",
};

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { content } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-16 text-center">
          <span className="text-glow-cyan text-secondary">{content.skills.titlePrimary}</span>{" "}
          <span className="text-foreground">&</span>{" "}
          <span className="text-glow-blue text-primary">{content.skills.titleSecondary}</span>{" "}
          <span className="animate-spin-slow inline-block">{content.skills.emoji}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.skills.groups.map((group, gi) => (
            <div
              key={group.title}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${gi * 200}ms` }}
            >
              <h3 className="font-display text-xl font-bold mb-4 text-center">
                {group.emoji} {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border bg-card/50 backdrop-blur-sm font-body text-sm font-medium cursor-default transition-all duration-300 hover:scale-110 ${colorMap[skill.color]}`}
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
