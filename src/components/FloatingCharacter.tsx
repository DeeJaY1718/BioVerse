import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface FloatingCharacterProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * The BioVerse mascot — a cartoonized hijabi doctor character that
 * floats gently to bring a warm, academic presence to key sections.
 */
export default function FloatingCharacter({ className, size = "lg" }: FloatingCharacterProps) {
  const sizes = {
    sm: "w-40 sm:w-52",
    md: "w-56 sm:w-72",
    lg: "w-72 sm:w-96 lg:w-[26rem]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn("relative", sizes[size], className)}
    >
      {/* glow halo */}
      <div className="absolute inset-0 -z-10 rounded-full bg-lime-400/30 blur-3xl scale-75" />

      <motion.img
        src="/images/hero-doctor.png"
        alt="BioVerse mascot — a friendly Biology teacher holding a DNA model"
        className="w-full h-auto drop-shadow-2xl select-none"
        draggable={false}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
