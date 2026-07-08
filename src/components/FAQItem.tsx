import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "../data/faq";

interface FAQItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItemRow({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="rounded-2xl bg-white border border-emerald-900/5 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-emerald-950">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-emerald-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-emerald-900/65 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
