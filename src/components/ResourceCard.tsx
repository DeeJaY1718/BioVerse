import { Eye, Lock } from "lucide-react";
import Button from "./Button";
import type { VaultResource } from "../data/resources";
import { CONTACT } from "../data/socials";

interface ResourceCardProps {
  resource: VaultResource;
}

/**
 * Card used inside the BioVerse Vault — teases premium content while
 * requiring WhatsApp registration for full access.
 */
export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white border border-emerald-900/5 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col hover:-translate-y-1">
      <span className="inline-flex w-fit items-center rounded-full bg-emerald-800/5 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 mb-3">
        {resource.tag}
      </span>
      <h4 className="font-semibold text-emerald-950 leading-snug">{resource.title}</h4>
      <p className="mt-2 text-sm text-emerald-900/60 leading-relaxed flex-1">{resource.description}</p>

      <div className="mt-5 flex items-center gap-2">
        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/10 px-3.5 py-2 text-xs font-medium text-emerald-800 hover:bg-emerald-800/5 transition-colors"
          aria-label={`Preview ${resource.title}`}
        >
          <Eye className="h-3.5 w-3.5" /> Preview
        </button>
        <Button
          href={CONTACT.whatsappLinkWithMessage(`Hi! I'd like to unlock full access to "${resource.title}".`)}
          target="_blank"
          size="sm"
          icon={<Lock className="h-3.5 w-3.5" />}
          className="flex-1"
        >
          Unlock via WhatsApp
        </Button>
      </div>
    </div>
  );
}
