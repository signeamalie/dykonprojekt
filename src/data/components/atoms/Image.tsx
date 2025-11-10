type ImageSize = "hero" | "large" | "medium" | "small";

type Props = {
  src: string;
  alt: string;
  size?: ImageSize;
  className?: string;
  onClick?: () => void;
};

export default function Image({
  src,
  alt,
  size = "medium",
  className,
  onClick,
}: Props) {
  const sizeClasses: Record<ImageSize, string> = {
    hero: "img-hero",
    large: "img-large",
    medium: "img-medium",
    small: "img-small",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} ${className ?? ""}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
}