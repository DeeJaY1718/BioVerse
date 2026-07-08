import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TestimonialPlaceholderCard from "../components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
            <Star className="h-3.5 w-3.5 text-lime-600" /> First Batch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Student Voices
          </h2>
        </motion.div>

        <div className="mt-12">
          <TestimonialPlaceholderCard />
        </div>
      </div>
    </section>
  );
}
