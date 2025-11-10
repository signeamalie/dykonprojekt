import type { ElementType, ReactNode } from "react";

type TextVariant = "body" | "lead" | "kicker" | "kicker-large" | "muted";
type TextAs = "p" | "span" | "div";

type TextProps = {
  as?: TextAs;
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<TextVariant, string> = {
  body: "text-body",
  lead: "text-lead",
  kicker: "text-kicker",
  "kicker-large": "text-kicker-large",
  muted: "text-muted",
};

export default function Text({
  as = "p",
  variant = "body",
  className,
  children,
}: TextProps) {
  const Tag = as as ElementType;
  const cls = `${variantClasses[variant]} ${className ?? ""}`.trim();
  return <Tag className={cls}>{children}</Tag>;
}