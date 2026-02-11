import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { content } = useLanguage();
  const [modalProject, setModalProject] = useState<null | (typeof content.projects.items)[number]>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = modalProject ? "hidden" : "auto";
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalProject(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (typeof document !== "undefined") document.body.style.overflow = "auto";
    };
  }, [modalProject]);

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center py-24 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-16 text-center">
          <span className="text-glow-gold text-accent">{content.projects.title}</span>{" "}
          <span className="text-foreground">{content.projects.emoji}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.projects.items.map((project, i) => (
            <div
              key={project.title}
              className={`tilt-card transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="gradient-border h-full">
                <div
                  className="bg-card rounded-lg p-6 h-full flex flex-col cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setModalProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setModalProject(project);
                    }
                  }}
                >
                  {project.image ? (
                    <div className="mb-4 overflow-hidden rounded-xl border border-border bg-background/20">
                      <div className="relative w-full pb-[56.25%]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-4xl mb-4 block">{project.emoji}</span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 font-body">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground bg-muted/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-l text-muted-foreground/50 mt-6">
                    {content.projects.comingSoon}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          aria-modal="true"
          role="dialog"
          onClick={(event) => {
            if (event.target === event.currentTarget) setModalProject(null);
          }}
        >
          <div className="relative max-w-3xl w-full">
            <button
              type="button"
              className="absolute right-0 top-0 text-white text-2xl font-bold p-4"
              onClick={() => setModalProject(null)}
              aria-label="Close project preview"
            >
              ×
            </button>
            <div className="bg-card rounded-2xl p-6 flex flex-col gap-4 text-left">
              {modalProject.image ? (
                <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl border border-border bg-background/10">
                  <img
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ) : (
                <span className="text-6xl text-muted-foreground">{modalProject.emoji}</span>
              )}
              <h3 className="font-display text-3xl text-foreground font-bold">{modalProject.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {modalProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              {modalProject.link && (
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1 mt-4 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  {content.projects.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
