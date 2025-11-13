import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level?: HeadingLevel;
  className?: string;
  children: ReactNode;
};

export default function Heading({ level = 2, className, children }: HeadingProps) {
  const Tag = (`h${level}` as unknown) as React.ElementType;
  return <Tag className={className}>{children}</Tag>;
}