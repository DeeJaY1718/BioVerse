import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import Button from "../components/Button";
import FloatingCharacter from "../components/FloatingCharacter";
import { CONTACT } from "../data/socials";

/** Simple inline Instagram glyph (lucide-react no longer ships brand icons). */
function InstagramIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950 py-20 sm:py-28">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,#A3E635,transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to understand Biology, not just memorize it?
          </h2>
          <p className="mt-4 text-emerald-100/70 max-w-lg mx-auto lg:mx-0">
            Message us on WhatsApp to register, ask questions about batches, or request free resources.
            Our team replies quickly and personally.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I want to join the Biology classes.")}
              target="_blank"
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Chat on WhatsApp
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-lime-400 hover:text-emerald-900 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-lime-400 hover:text-emerald-900 transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:flex justify-center">
          <FloatingCharacter size="md" />
        </div>
      </div>
    </section>
  );
}
