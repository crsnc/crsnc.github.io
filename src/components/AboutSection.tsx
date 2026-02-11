import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const { content } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-16 text-center">
          <span className="text-glow-blue text-primary">{content.about.titlePrimary}</span>{" "}
          {content.about.titleSecondary && (
            <span className="text-foreground">{content.about.titleSecondary}</span>
          )}{" "}
          <span className="animate-wiggle inline-block">{content.about.emoji}</span>
        </h2>

        <div className="space-y-8">
          {content.about.paragraphs.map((text, i) => (
            <div
              key={i}
              data-index={i}
              className={`transition-all duration-700 ${
                visibleItems.includes(i)
                  ? "opacity-100 translate-x-0"
                  : i % 2 === 0
                  ? "opacity-0 -translate-x-12"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className={`p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 ${
                  i % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}
              >
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-body">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun accent */}
        <div className="mt-12 text-center">
          <span className="location-tag inline-flex items-center justify-center px-4 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan text-sm overflow-hidden">
            <span className="relative z-10">{content.about.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
