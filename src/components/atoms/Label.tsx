import type { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export default function Label({ children, ...rest }: LabelProps) {
  return <label {...rest}>{children}</label>;
}
