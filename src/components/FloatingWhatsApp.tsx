import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../data/socials";

/**
 * Persistent floating WhatsApp button, fixed to the viewport corner.
 */
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I'm interested in joining the Biology classes.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BioVerse on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" fill="white" strokeWidth={1} />
    </motion.a>
  );
}
