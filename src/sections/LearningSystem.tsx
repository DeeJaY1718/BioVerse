import { motion } from "framer-motion";
import { Orbit } from "lucide-react";
import { learningModules } from "../data/learningSystem";

export default function LearningSystem() {
  return (
    <section id="learning-system" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
            <Orbit className="h-3.5 w-3.5 text-lime-600" /> The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            The BioVerse Learning System
          </h2>
          <p className="mt-4 text-emerald-900/60">
            Five interconnected tools that take you from first understanding to full exam mastery.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningModules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative rounded-3xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                i === 0
                  ? "sm:col-span-2 bg-emerald-900 text-cream-50 shadow-xl shadow-emerald-900/20"
                  : "bg-white text-emerald-950 shadow-md shadow-emerald-900/5 border border-emerald-900/5 hover:shadow-xl"
              }`}
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 opacity-40 group-hover:opacity-70 ${
                  i === 0 ? "bg-lime-400/40" : "bg-emerald-400/20"
                }`}
              />
              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl mb-5 ${
                  i === 0 ? "bg-lime-400 text-emerald-900" : "bg-emerald-800/5 text-emerald-700"
                }`}
              >
                <mod.icon className="h-6 w-6" />
              </div>
              <h3 className="relative font-bold text-lg">{mod.title}</h3>
              <p className={`relative mt-2 text-sm leading-relaxed ${i === 0 ? "text-emerald-100/80" : "text-emerald-900/60"}`}>
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
