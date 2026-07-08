import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { CONTACT } from "../data/socials";

/**
 * Top-of-page announcement bar for the newest batch / event.
 */
export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden bg-emerald-900 text-cream-50"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-xs sm:text-sm">
            <Sparkles className="h-4 w-4 shrink-0 text-lime-300" />
            <p className="text-emerald-50">
              <span className="font-semibold text-lime-300">2028 A/L Biology</span> batch is open —
              first session <span className="font-semibold text-lime-300">FREE</span> · Topic:{" "}
              <span className="font-semibold">Photosynthesis</span> · Starts 8 July 2026
            </p>
            <a
              href={CONTACT.whatsappLinkWithMessage("Hi! I want to join the free 2028 A/L Biology first session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 shrink-0 rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-emerald-900 hover:bg-lime-300 transition-colors"
            >
              Reserve Seat
            </a>
          </div>
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-emerald-200 hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
