import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FAQItemRow from "../components/FAQItem";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-lime-600" /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FAQItemRow
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
