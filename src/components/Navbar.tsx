import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Dna } from "lucide-react";
import { CONTACT } from "../data/socials";
import { cn } from "../utils/cn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Resources", href: "#learning-system" },
  { label: "Free Resources", href: "#free-resources" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-cream-50/90 backdrop-blur-lg shadow-md shadow-emerald-900/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }} className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-lime-300 shadow-md shadow-emerald-900/20 group-hover:rotate-12 transition-transform duration-300">
            <Dna className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight text-emerald-900">
            Bio<span className="text-lime-600">Verse</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3.5 py-2 text-sm font-medium text-emerald-900/80 hover:text-emerald-900 rounded-full hover:bg-emerald-800/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I'd like to know more about your Biology classes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-lime-300 shadow-md shadow-emerald-900/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden rounded-lg p-2 text-emerald-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-cream-50/98 backdrop-blur-lg border-t border-emerald-900/10"
          >
            <ul className="flex flex-col px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block py-3 text-base font-medium text-emerald-900/80 border-b border-emerald-900/5 last:border-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <a
                href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I'd like to know more about your Biology classes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-lime-300 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
