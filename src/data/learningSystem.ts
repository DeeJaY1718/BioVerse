import type { LucideIcon } from "lucide-react";
import { BookOpenText, Zap, FileText, Trophy, CheckCircle2 } from "lucide-react";

export interface LearningModule {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const learningModules: LearningModule[] = [
  {
    id: "short-notes",
    icon: BookOpenText,
    title: "BioVerse Short Notes",
    description:
      "Unit-wise concise biology notes designed for rapid understanding and revision.",
  },
  {
    id: "mcq-sprint",
    icon: Zap,
    title: "MCQ Sprint",
    description:
      "Exam-focused MCQ training to improve accuracy and speed.",
  },
  {
    id: "seq-mastery",
    icon: FileText,
    title: "SEQ Mastery",
    description:
      "Structured preparation for Biology structured essay questions.",
  },
  {
    id: "essay-marathon",
    icon: Trophy,
    title: "Essay Marathon",
    description:
      "Advanced practice for high-scoring biology answers.",
  },
  {
    id: "biocheck",
    icon: CheckCircle2,
    title: "BioCheck",
    description:
      "Unit-wise True/False statement challenges to test conceptual strength.",
  },
];
