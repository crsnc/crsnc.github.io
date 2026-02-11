import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "tr" | "en";

type Translations = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitles: string[];
    cta: string;
    scroll: string;
  };
  about: {
    titlePrimary: string;
    titleSecondary: string;
    paragraphs: string[];
    location: string;
    emoji: string;
  };
  skills: {
    titlePrimary: string;
    titleSecondary: string;
    emoji: string;
    groups: Array<{
      title: string;
      emoji: string;
      skills: Array<{ name: string; icon: string; color: "blue" | "cyan" | "gold" }>;
    }>;
  };
  projects: {
    title: string;
    emoji: string;
    comingSoon: string;
    linkLabel: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
        emoji?: string;
        image?: string;
        link?: string;
    }>;
  };
  contact: {
    titlePrimary: string;
    titleSecondary: string;
    emoji: string;
    description: string;
    copyEmail: string;
    copied: string;
    github: string;
    linkedin: string;
    footer: string;
    email: string;
  };
  notFound: {
    subtitle: string;
    returnHome: string;
    startOver: string;
    flavour: string[];
  };
};

const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Selam, ben",
      subtitles: [
        "React, Typescript & Javascript, HTML, CSS",
        "ASP.NET & ASP.NET MVC",
        "Müşteri İlişkileri Yönetimi (CRM)",
        "MYSQL & MSSQL Tabanlı Sistemler",
        "n8n ile İş Otomasyonu",
      ],
      cta: "Beni Tanı ↓",
      scroll: "Kaydır",
    },
    about: {
      titlePrimary: "Hakkımda",
      titleSecondary: "",
      emoji: "🧑‍💻",
      paragraphs: [
        "Akdeniz Üniversitesi Yönetim Bilişim Sistemleri bölümünde 3. sınıf öğrencisiyim ve full-stack web geliştirmeye odaklanıyorum.",
        "React, TypeScript ve ASP.NET ile modern, ölçeklenebilir ve performans odaklı uygulamalar geliştiriyorum.",
        "Teknik uzmanlığı iş bilgisiyle birleştirerek gerçek değer üreten yazılım çözümleri geliştirmeyi hedefliyorum.",
        "Özellikle CRM sistemleri, iş süreci optimizasyonu ve kullanıcı odaklı dijital deneyimlerle ilgileniyorum.",
      ],
      location: "📍 Antalya, Türkiye",
    },
    skills: {
      titlePrimary: "Yetenekler",
      titleSecondary: "Teknolojiler",
      emoji: "⚙️",
      groups: [
        {
          title: "Frontend",
          emoji: "🎨",
          skills: [
            { name: "React", icon: "⚛️", color: "blue" },
            { name: "TypeScript", icon: "🔷", color: "blue" },
            { name: "JavaScript", icon: "⚡", color: "gold" },
            { name: "HTML/CSS", icon: "🎯", color: "cyan" },
            { name: "Tailwind CSS", icon: "💨", color: "cyan" },
          ],
        },
        {
          title: "Backend",
          emoji: "⚙️",
          skills: [
            { name: "ASP.NET", icon: "🔮", color: "blue" },
            { name: "C#", icon: "💎", color: "blue" },
            { name: "SQL", icon: "🗄️", color: "gold" },
            { name: "REST API'ler", icon: "🔗", color: "cyan" },
          ],
        },
        {
          title: "İlgi Alanları",
          emoji: "💡",
          skills: [
            { name: "CRM Sistemleri", icon: "📊", color: "gold" },
            { name: "İş Optimizasyonu", icon: "📈", color: "cyan" },
            { name: "UX Tasarımı", icon: "🎨", color: "blue" },
            { name: "n8n", icon: "🤖", color: "gold" },
          ],
        },
      ],
    },
    projects: {
      title: "Projeler",
      emoji: "🛠️",
      comingSoon: "Tıkla!",
      linkLabel: "Projeyi Gör",
      items: [
        {
          title: "Long Beach Otelleri Web Uygulaması",
          description: "Long Beach Hotel & Resorts için yaptığım bu web uygulaması, otel içinde misafirlerin ihtiyaç duydukları bütün bilgilere erişebilmelerini anlık bir şekilde sağlıyor.",
          tags: ["React", "MySQL", "ASP.NET"],
          image: "/lb-webapp.png",
          link: "https://webapp.lbresorts.com",
        },
        {
          title: "triocord",
          description: "Henüz yapım aşamasında olan bu proje Türkiye'de Discord kapalıyken 10-15 kişilik arkadaş gruplarının kullanabileceği bir alternatif uygulama olacak.",
          tags: ["ASP.NET", "React", "SignalR"],
          image: "/triocord.png",
          emoji: "🔄",
        },
        {
          title: "MTN İnşaat & Mühendislik",
          description: "MTN İnşaat & Mühendislik için yaptığım bu web sitesi, firmanın projelerini ve hizmetlerini modern bir tasarımla sergiliyor.",
          tags: ["React", "ASP.NET", "MySQL"],
          image: "/mtn.png",
          emoji: "🏗️",
          link: "https://mtnmuhendislik.com.tr",
        },
      ],
    },
    contact: {
      titlePrimary: "Bağlantı",
      titleSecondary: "Kuralım",
      emoji: "👋",
      description: "Yeni fırsatlara, iş birliklerine ya da kısa bir sohbete her zaman açığım!",
      copyEmail: "E-postayı Kopyala",
      copied: "Kopyalandı!",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "made with ❤️ by cnsrc",
      email: "caansarac@gmail.com",
    },
    notFound: {
      subtitle: "Oops! Sayfa bulunamadı.",
      returnHome: "Ana Sayfaya Dön",
      startOver: "Baştan Başla",
      flavour: [
        "You breached the <i>City Walls</i>, yet this endpoint is unavailable.",
        "The <i>RAWFEAR</i> of a 404 signals the resource has vanished.",
        "This request now resides in the <i>Garbage</i> collection.",
        "The terms of <i>The Contract</i> failed, so this route dissolved.",
        "Navigation tried <i>Downstairs</i> and found no landing.",
        "Your query aimed at <i>Center Mass</i>, but the target shifted.",
        "A <i>One Way</i> corridor leads elsewhere — this is not it.",
        "<i>Days Lie Dormant</i> while the required page remains missing.",
        "We logged it in the <i>Tally</i> of unfound paths.",
        "Your <i>Intentions</i> were valid, yet the URL returns nothing.",
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey there, I'm",
      subtitles: [
        "React, TypeScript & JavaScript, HTML, CSS",
        "ASP.NET & ASP.NET MVC",
        "Customer Relationship Management (CRM)",
        "MYSQL & MSSQL Based Systems",
        "n8n for Workflow Automation",
      ],
      cta: "Explore My World ↓",
      scroll: "Scroll",
    },
    about: {
      titlePrimary: "About",
      titleSecondary: "Me",
      emoji: "🧑‍💻",
      paragraphs: [
        "I am a 3rd year Management Information Systems student at Akdeniz University with a strong focus on full-stack web development.",
        "I build modern, scalable, and performance-driven web applications using React, TypeScript, and ASP.NET.",
        "My goal is to combine technical expertise with business insight to develop software solutions that deliver real value.",
        "I am particularly interested in CRM systems, business process optimization, and creating user-focused digital experiences.",
      ],
      location: "📍 Antalya, Turkey",
    },
    skills: {
      titlePrimary: "Skills",
      titleSecondary: "Tech",
      emoji: "⚙️",
      groups: [
        {
          title: "Frontend",
          emoji: "🎨",
          skills: [
            { name: "React", icon: "⚛️", color: "blue" },
            { name: "TypeScript", icon: "🔷", color: "blue" },
            { name: "JavaScript", icon: "⚡", color: "gold" },
            { name: "HTML/CSS", icon: "🎯", color: "cyan" },
            { name: "Tailwind CSS", icon: "💨", color: "cyan" },
          ],
        },
        {
          title: "Backend",
          emoji: "⚙️",
          skills: [
            { name: "ASP.NET", icon: "🔮", color: "blue" },
            { name: "C#", icon: "💎", color: "blue" },
            { name: "SQL", icon: "🗄️", color: "gold" },
            { name: "REST APIs", icon: "🔗", color: "cyan" },
          ],
        },
        {
          title: "Interests",
          emoji: "💡",
          skills: [
            { name: "CRM Systems", icon: "📊", color: "gold" },
            { name: "Business Optimization", icon: "📈", color: "cyan" },
            { name: "UX Design", icon: "🎨", color: "blue" },
            { name: "n8n", icon: "🤖", color: "gold" },
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      emoji: "🛠️",
      comingSoon: "Coming soon...",
      linkLabel: "View project",
      items: [
        {
          title: "Long Beach Hotels Web App",
          description: "Interactive service map for Long Beach Alanya, tying guest services, restaurant info, and announcements into one SPA.",
          tags: ["React", "TypeScript", "Tailwind"],
          image: "/lb-webapp.png",
          link: "https://www.longbeachalanya.com",
        },
        {
          title: "FlowSync",
          description: "Business process automation tool that streamlines workflows. Drag-and-drop interface with smart suggestions.",
          tags: ["ASP.NET", "C#", "Automation"],
          emoji: "🔄",
        },
        {
          title: "PixelForge",
          description: "Interactive portfolio generator that creates unique developer portfolios with playful animations.",
          tags: ["React", "Tailwind", "Animation"],
          emoji: "🎨",
        },
      ],
    },
    contact: {
      titlePrimary: "Let's",
      titleSecondary: "Connect",
      emoji: "👋",
      description: "I'm always open to new opportunities, collaborations, or just a friendly chat!",
      copyEmail: "Copy Email",
      copied: "Copied!",
      github: "GitHub",
      linkedin: "LinkedIn",
      footer: "made with ❤️ by cnsrc",
      email: "caansarac@gmail.com",
    },
    notFound: {
      subtitle: "Oops! Page not found.",
      returnHome: "Return home",
      startOver: "Start over",
      flavour: [
        "You breached the <i>City Walls</i>, yet this endpoint is unavailable.",
        "The <i>RAWFEAR</i> of a 404 signals the resource has vanished.",
        "This request now resides in the <i>Garbage</i> collection.",
        "The terms of <i>The Contract</i> failed, so this route dissolved.",
        "Navigation tried <i>Downstairs</i> and found no landing.",
        "Your query aimed at <i>Center Mass</i>, but the target shifted.",
        "A <i>One Way</i> corridor leads elsewhere — this is not it.",
        "<i>Days Lie Dormant</i> while the required page remains missing.",
        "We logged it in the <i>Tally</i> of unfound paths.",
        "Your <i>Intentions</i> were valid, yet the URL returns nothing.",
      ],
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (path: keyof Translations | string) => string;
  content: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolvePath = (obj: Record<string, unknown>, path: string) => {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "tr";
    const stored = window.localStorage.getItem("lang");
    return stored === "en" || stored === "tr" ? stored : "tr";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", language);
    document.documentElement.lang = language === "tr" ? "tr" : "en";
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
  };

  const content = useMemo(() => translations[language], [language]);

  const t = (path: keyof Translations | string) => {
    const value = resolvePath(content as unknown as Record<string, unknown>, path as string);
    return typeof value === "string" ? value : path.toString();
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      content,
    }),
    [language, content],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
