import { motion } from "framer-motion";
import { Award, Brain, GraduationCap, Target } from "lucide-react";

const PILLARS = [
  {
    icon: Brain,
    title: "Concept-Based Learning",
    description: "Every lesson is built from the ground up so ideas connect logically instead of relying on rote memorization.",
  },
  {
    icon: Target,
    title: "Exam-Focused Preparation",
    description: "Content is mapped directly to the A/L Biology syllabus and past-paper patterns for maximum exam readiness.",
  },
  {
    icon: GraduationCap,
    title: "Scientific Thinking",
    description: "Students learn to reason like scientists — analysing, questioning and applying knowledge with confidence.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Portrait / credential card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-800/10 to-lime-400/20 -z-10" />
              <div className="rounded-[1.75rem] bg-white/70 backdrop-blur-xl border border-white shadow-xl shadow-emerald-900/10 p-8 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-800 text-lime-300 text-3xl font-bold shadow-lg">
                  HH
                </div>
                <h3 className="mt-5 text-xl font-bold text-emerald-950">Hudha Haleem Ishak</h3>
                <p className="text-sm font-medium text-emerald-700">(Pre-Med)</p>
                <p className="mt-1 text-xs text-emerald-900/50">Founder & Lead Biology Instructor, BioVerse</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-emerald-800/5 py-3">
                    <p className="text-lg font-bold text-emerald-800">82</p>
                    <p className="text-[11px] text-emerald-900/60 leading-tight mt-0.5">Kandy District Rank<br />2025 A/L</p>
                  </div>
                  <div className="rounded-xl bg-emerald-800/5 py-3">
                    <p className="text-lg font-bold text-emerald-800">3+ yrs</p>
                    <p className="text-[11px] text-emerald-900/60 leading-tight mt-0.5">Teaching<br />Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text + pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
              <Award className="h-3.5 w-3.5 text-lime-600" /> Meet Your Instructor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
              A teacher who believes learning should make sense
            </h2>
            <blockquote className="mt-6 border-l-4 border-lime-400 pl-5 text-lg sm:text-xl font-medium text-emerald-900/80 italic leading-relaxed">
              "Biology is not a subject to memorize. It is a system to understand."
            </blockquote>
            <p className="mt-6 text-emerald-900/70 leading-relaxed">
              Hudha Haleem Ishak ranked <strong className="text-emerald-800">82nd in the Kandy District</strong> for
              the 2025 A/L examination and has spent over three years helping students reframe how they see Biology —
              not as a mountain of facts, but as an interconnected system of logic and cause-and-effect. This
              philosophy shapes every course, note and resource inside BioVerse.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl bg-white border border-emerald-900/5 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <pillar.icon className="h-7 w-7 text-emerald-700" />
                  <h4 className="mt-3 font-semibold text-emerald-950 text-sm">{pillar.title}</h4>
                  <p className="mt-1.5 text-xs text-emerald-900/60 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
