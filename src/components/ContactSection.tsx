import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const { content } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-[60vh] flex items-center py-24 px-4">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-foreground">{content.contact.titlePrimary}</span>{" "}
          <span className="text-glow-cyan text-secondary">{content.contact.titleSecondary}</span>{" "}
          <span className="animate-wave inline-block text-4xl md:text-6xl">{content.contact.emoji}</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-12 font-body">
          {content.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Email */}
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neon-blue/40 bg-card/50 backdrop-blur-sm text-neon-blue hover:border-neon-blue hover:box-glow-blue transition-all duration-300 hover:scale-105 font-body"
          >
            <span>📧</span>
            <span>{copied ? content.contact.copied : content.contact.copyEmail}</span>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/crsnc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neon-cyan/40 bg-card/50 backdrop-blur-sm text-neon-cyan hover:border-neon-cyan hover:box-glow-cyan transition-all duration-300 hover:scale-105 font-body"
          >
            <span>🐙</span>
            <span>{content.contact.github}</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/caansarac/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neon-gold/40 bg-card/50 backdrop-blur-sm text-neon-gold hover:border-neon-gold hover:box-glow-gold transition-all duration-300 hover:scale-105 font-body"
          >
            <span>💼</span>
            <span>{content.contact.linkedin}</span>
          </a>
        </div>

        {/* Footer */}
        <p className="mt-16 text-muted-foreground/40 text-sm font-body">
          {content.contact.footer}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
