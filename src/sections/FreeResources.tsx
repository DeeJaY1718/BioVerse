import { motion } from "framer-motion";
import { Gift, FileDown, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { freeResources } from "../data/resources";
import { CONTACT } from "../data/socials";

export default function FreeResources() {
  return (
    <section id="free-resources" className="relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/20 border border-lime-400/30 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
            <Gift className="h-3.5 w-3.5 text-lime-600" /> Free Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            Start Learning — No Registration Needed
          </h2>
          <p className="mt-4 text-emerald-900/60">
            A taste of the BioVerse approach: free notes, revision guides and sample questions to help
            you experience concept-first Biology.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {freeResources.map((res, i) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border-2 border-dashed border-emerald-800/15 bg-emerald-800/[0.02] p-6 flex flex-col hover:border-lime-400/50 hover:bg-lime-400/5 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-800 text-lime-300 mb-4">
                <FileDown className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">{res.type}</span>
              <h4 className="mt-1.5 font-semibold text-emerald-950">{res.title}</h4>
              <p className="mt-2 text-sm text-emerald-900/60 leading-relaxed flex-1">{res.description}</p>
              <a
                href={CONTACT.whatsappLinkWithMessage(`Hi! Could you please send me the free resource: "${res.title}"?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-lime-600 transition-colors"
              >
                Get it free <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href={CONTACT.whatsappLinkWithMessage("Hi BioVerse! I'd like to receive your free Biology resources.")}
            target="_blank"
            size="lg"
          >
            Get All Free Resources on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
