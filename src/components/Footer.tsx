import { Dna, Send, MessageCircle, MapPin, Mail } from "lucide-react";
import { CONTACT } from "../data/socials";

/** Simple inline Instagram glyph (kept custom since lucide dropped brand icons). */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Resources", href: "#learning-system" },
  { label: "Free Resources", href: "#free-resources" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#A3E635,transparent_35%),radial-gradient(circle_at_80%_60%,#A3E635,transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400/90 text-emerald-900">
                <Dna className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold text-white">
                Bio<span className="text-lime-400">Verse</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-emerald-200/70">
              Premium A/L Biology education focused on conceptual understanding.
              "Understanding beats memorization."
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-lime-400 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    className="hover:text-lime-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-lime-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-lime-400 shrink-0" />
                <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-colors">
                  {CONTACT.whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-lime-400 shrink-0" />
                <span>hello.bioverse@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-lime-400 shrink-0" />
                <span>Kandy, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-lime-400 mb-4">Follow BioVerse</h4>
            <div className="flex gap-3">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-lime-400 hover:text-emerald-900 transition-colors"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-lime-400 hover:text-emerald-900 transition-colors"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-lime-400 hover:text-emerald-900 transition-colors"
              >
                <Send className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300/50">
          <p>© {new Date().getFullYear()} BioVerse. All rights reserved.</p>
          <p>Founded by Hudha Haleem Ishak (Pre-Med) · Built for A/L Biology students of Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
