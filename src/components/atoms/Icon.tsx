type IconName = "menu" | "arrow-left" | "close"; 

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: Props) {
  switch (name) {
    case "menu":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );

    case "close":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={className}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case "arrow-left":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={className}
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      );

    default:
      return null;
  }
}