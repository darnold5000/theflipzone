import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-10", className)}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl uppercase",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg max-w-2xl mx-auto normal-case leading-relaxed",
            light ? "text-white/80" : "text-muted-foreground",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "navy" | "gradient";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 px-4 sm:px-6 lg:px-8",
        variant === "muted" && "bg-gradient-flip-soft",
        variant === "navy" && "bg-gradient-flip text-white",
        variant === "gradient" && "bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function EnrollButton({
  href,
  children,
  variant = "default",
  size = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent" | "white";
  size?: "default" | "sm" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    default: "bg-gradient-flip text-white hover:opacity-95 shadow-md shadow-blue-500/20",
    outline:
      "border-2 border-flip-blue text-flip-blue hover:bg-flip-blue hover:text-white",
    accent: "bg-flip-teal text-white hover:opacity-90 shadow-md",
    white: "bg-white text-flip-blue hover:bg-white/90 shadow-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function InternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-bold rounded-full px-6 py-2.5 text-sm border-2 border-flip-blue text-flip-blue hover:bg-flip-blue hover:text-white transition-all duration-200",
        className
      )}
    >
      {children}
    </Link>
  );
}
