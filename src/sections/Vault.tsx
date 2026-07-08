import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle } from "lucide-react";
import ResourceCard from "../components/ResourceCard";
import Button from "../components/Button";
import { vaultResources } from "../data/resources";
import { CONTACT } from "../data/socials";

export default function Vault() {
  return (
    <section id="vault" className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/5 border border-emerald-800/10 px-4 py-1.5 text-xs font-medium text-emerald-800 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-lime-600" /> BioVerse Vault
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            The Notes Library
          </h2>
          <p className="mt-4 text-emerald-900/60">
            Premium unit-wise notes, MCQ sets and essay guides. Preview any resource, then unlock full
            access via WhatsApp registration.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaultResources.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-emerald-900 px-8 py-8 text-cream-50 shadow-xl"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Unlock Full Access via WhatsApp</h3>
            <p className="mt-1 text-sm text-emerald-200/70">
              Registered BioVerse students get complete, unrestricted access to the entire Vault.
            </p>
          </div>
          <Button
            href={CONTACT.whatsappLinkWithMessage("Hi! I'd like to unlock full access to the BioVerse Vault.")}
            target="_blank"
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
            className="shrink-0"
          >
            Unlock via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
