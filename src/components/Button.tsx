import { type ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  target?: string;
}

/**
 * Reusable premium CTA button used across BioVerse.
 * Supports link (anchor) and button behaviour depending on `href`.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className,
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 whitespace-nowrap select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const variants = {
    primary:
      "bg-emerald-800 text-lime-300 hover:bg-emerald-700 shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5",
    secondary:
      "bg-white text-emerald-800 border-2 border-emerald-800/15 hover:border-emerald-800/40 hover:-translate-y-0.5 shadow-sm",
    ghost:
      "bg-transparent text-emerald-800 hover:bg-emerald-800/5",
    whatsapp:
      "bg-lime-400 text-emerald-900 hover:bg-lime-300 shadow-lg shadow-lime-500/30 hover:-translate-y-0.5",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={target ? "noopener noreferrer" : undefined}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
