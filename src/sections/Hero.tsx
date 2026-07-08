import { motion } from "framer-motion";
import { ArrowRight, Compass, Dna, Sparkles } from "lucide-react";
import Button from "../components/Button";
import FloatingCharacter from "../components/FloatingCharacter";
import { CONTACT } from "../data/socials";

/**
 * Cinematic hero section — the first impression of BioVerse.
 * Combines a biotech-inspired animated backdrop with the mascot character.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-50 pt-10 sm:pt-14 lg:pt-16 pb-20 lg:pb-28">
      {/* Ambient biotech background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/biotech-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50/95 to-cream-50" />
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(14)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-lime-400/40"
              style={{
                width: `${4 + (i % 4) * 3}px`,
                height: `${4 + (i % 4) * 3}px`,
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-800 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-lime-600" />
            A/L Biology · English Medium · Kandy District
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.08]"
          >
            Understanding <span className="relative text-emerald-700">
              beats
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C40 2 160 2 198 9" stroke="#A3E635" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            memorization
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-emerald-900/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            From fundamentals to exam mastery, BioVerse guides students towards
            A/L Biology success — built on concepts, not just content.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button
              href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I want to join the Biology classes.")}
              target="_blank"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Join BioVerse Today
            </Button>
            <Button href="#courses" variant="secondary" size="lg" icon={<Compass className="h-5 w-5" />}>
              Explore Courses
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-emerald-900/60"
          >
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-emerald-800">82</p>
              <p className="text-xs">Kandy District Rank</p>
            </div>
            <div className="h-8 w-px bg-emerald-900/10" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-emerald-800">3+</p>
              <p className="text-xs">Years Teaching</p>
            </div>
            <div className="h-8 w-px bg-emerald-900/10" />
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-emerald-800">2028</p>
              <p className="text-xs">New Batch Open</p>
            </div>
          </motion.div>
        </div>

        {/* Mascot visual */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-700/10 blur-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-4 -left-2 sm:left-4 flex items-center gap-1.5 rounded-2xl bg-white/80 backdrop-blur px-3 py-2 shadow-lg text-xs font-semibold text-emerald-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{ delay: 0.8, y: { duration: 4, repeat: Infinity } }}
          >
            <Dna className="h-4 w-4 text-lime-600" /> Concept First
          </motion.div>
          <motion.div
            className="absolute bottom-8 -right-1 sm:right-2 flex items-center gap-1.5 rounded-2xl bg-white/80 backdrop-blur px-3 py-2 shadow-lg text-xs font-semibold text-emerald-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{ delay: 1, y: { duration: 5, repeat: Infinity } }}
          >
            <Sparkles className="h-4 w-4 text-lime-600" /> Exam-Focused
          </motion.div>
          <FloatingCharacter />
        </div>
      </div>
    </section>
  );
}
