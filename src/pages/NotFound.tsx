import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { content } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const flavour = useMemo(() => {
    const lines = content.notFound.flavour;
    return lines[Math.floor(Math.random() * lines.length)];
  }, [content.notFound.flavour]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-10 left-4 h-40 w-40 rounded-full bg-gradient-to-br from-sky-500/40 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]"></div>
        <div className="absolute inset-0">
          <img
            src="/top-logo.svg"
            alt="Twenty One Pilots logo"
            className="pointer-events-none absolute left-2 bottom-2 h-10 w-10 opacity-20 animate-float-slow"
          />
        </div>
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{location.pathname}</p>
          <h1 className="mt-4 text-6xl font-black tracking-tight text-white sm:text-7xl">404</h1>
          <p className="mt-2 text-lg font-semibold text-slate-200">{content.notFound.subtitle}</p>
        </div>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur">
          <p 
            className={`text-base text-slate-300 ${flavour === "|-/" ? "text-6xl font-bold font-mono tracking-wider" : ""}`}
            dangerouslySetInnerHTML={{ __html: flavour }}
          />
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-amber-400/80 bg-amber-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:border-amber-400 hover:bg-amber-400/20"
            >
              {content.notFound.returnHome}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-white transition hover:border-white/60"
            >
              {content.notFound.startOver}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
