interface DykonButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function DykonButton({
  label,
  variant = "primary",
  onClick,
}: DykonButtonProps) {
  return (
    <button
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
