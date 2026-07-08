import { MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Placeholder card shown while BioVerse awaits its first batch of
 * genuine student testimonials. Designed to feel intentional, not empty.
 */
export default function TestimonialPlaceholderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-xl rounded-3xl bg-white border border-emerald-900/5 shadow-lg p-10 text-center"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-800/5 text-emerald-700">
        <MessageSquareHeart className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-emerald-950">Student Experiences Coming Soon</h3>
      <p className="mt-3 text-sm text-emerald-900/60 leading-relaxed">
        BioVerse is currently teaching its very first batches. As students complete their journey with us,
        their genuine experiences, reviews and feedback on our resources will be featured here.
      </p>
      <p className="mt-4 text-xs font-medium text-emerald-700/70 uppercase tracking-wide">
        Be part of our first success stories
      </p>
    </motion.div>
  );
}
