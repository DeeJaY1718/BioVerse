import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Gift } from "lucide-react";
import Button from "./Button";
import type { Course } from "../data/courses";
import { CONTACT } from "../data/socials";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const isFeatured = course.status === "Starting Soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
        isFeatured
          ? "bg-emerald-900 text-cream-50 shadow-2xl shadow-emerald-900/30"
          : "bg-white text-emerald-950 shadow-lg shadow-emerald-900/10 border border-emerald-900/5"
      }`}
    >
      {course.badge && (
        <span
          className={`absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-bold shadow-md ${
            isFeatured ? "bg-lime-400 text-emerald-900" : "bg-emerald-800 text-lime-300"
          }`}
        >
          {course.badge}
        </span>
      )}

      <h3 className="text-2xl font-bold mt-3">{course.title}</h3>
      <p className={`text-sm mt-1 flex items-center gap-1.5 ${isFeatured ? "text-emerald-200/70" : "text-emerald-900/50"}`}>
        <Calendar className="h-3.5 w-3.5" /> {course.meta}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold">{course.price}</span>
        <span className={isFeatured ? "text-emerald-200/60 text-sm" : "text-emerald-900/40 text-sm"}>/ month</span>
      </div>

      {course.highlight && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-lime-400/15 border border-lime-400/30 px-3.5 py-2.5 text-sm font-medium text-lime-300">
          <Gift className="h-4 w-4 shrink-0" />
          {course.highlight}
        </div>
      )}

      <ul className="mt-6 space-y-3 flex-1">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className={`h-4.5 w-4.5 mt-0.5 shrink-0 ${isFeatured ? "text-lime-400" : "text-emerald-600"}`} />
            <span className={isFeatured ? "text-emerald-50/90" : "text-emerald-900/80"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={CONTACT.whatsappLinkWithMessage(`Hi BioVerse! I'd like to join the ${course.title} course.`)}
        target="_blank"
        variant={isFeatured ? "whatsapp" : "primary"}
        className="mt-8 w-full"
      >
        Join via WhatsApp
      </Button>
    </motion.div>
  );
}
