import { motion } from "framer-motion";
import { Bot, MessageCircleQuestion, Repeat, Sparkles, Zap } from "lucide-react";

const CAPABILITIES = [
  { icon: MessageCircleQuestion, label: "Clarify Concepts" },
  { icon: Zap, label: "Practice MCQs" },
  { icon: Repeat, label: "Revise Topics" },
  { icon: Sparkles, label: "Strengthen Understanding" },
];

export default function AIAssistant() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(163,230,53,0.12),transparent_50%)]" />
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-lime-400/50"
            style={{ left: `${(i * 47) % 100}%`, top: `${(i * 31) % 100}%` }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400 text-emerald-900 shadow-xl shadow-lime-400/20"
        >
          <Bot className="h-8 w-8" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-lime-300"
        >
          Future Roadmap
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-white"
        >
          BioVerse AI Assistant — Coming Soon
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-emerald-200/70 max-w-2xl mx-auto leading-relaxed"
        >
          An intelligent biology companion designed to help students clarify concepts, practice MCQs,
          revise topics and strengthen their conceptual understanding — anytime, anywhere.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-6 hover:bg-white/10 transition-colors"
            >
              <cap.icon className="h-6 w-6 text-lime-400 mx-auto" />
              <p className="mt-3 text-xs font-medium text-emerald-100">{cap.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-xs font-medium text-emerald-300/50 uppercase tracking-widest"
        >
          Part of the BioVerse Platform Roadmap
        </motion.p>
      </div>
    </section>
  );
}
