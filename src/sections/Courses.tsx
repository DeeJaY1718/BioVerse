import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="relative bg-emerald-950 py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_15%_30%,#A3E635,transparent_30%),radial-gradient(circle_at_85%_70%,#A3E635,transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-lime-300 mb-4">
            <BookMarked className="h-3.5 w-3.5" /> Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Choose Your BioVerse Batch
          </h2>
          <p className="mt-4 text-emerald-200/70">
            Structured, concept-first Biology programs designed around the real A/L syllabus and exam patterns.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
