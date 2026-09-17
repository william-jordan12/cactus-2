interface ProductImageProps {
  category: string;
  name: string;
  image?: string;
  className?: string;
}

const categoryColors: Record<string, { bg: string; accent: string; label: string }> = {
  dogs: { bg: "#E9E7E2", accent: "#8C7A5B", label: "🐕" },
  cats: { bg: "#F0ECEB", accent: "#A8826B", label: "🐈" },
  rabbits: { bg: "#F3EEE8", accent: "#A98E77", label: "🐇" },
  birds: { bg: "#EBF0F3", accent: "#6F8CA0", label: "🦜" },
  aquatic: { bg: "#E7F0F4", accent: "#5E8CA0", label: "🐠" },
  reptiles: { bg: "#EDF1E7", accent: "#7A8F62", label: "🦎" },
};

export default function ProductImage({
  category,
  name,
  image,
  className = "",
}: ProductImageProps) {
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }

  const colors = categoryColors[category] ?? categoryColors.cacti;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ backgroundColor: colors.bg }}
      role="img"
      aria-label={name}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-5xl">{colors.label}</span>
        <span
          className="px-2 text-xs font-medium uppercase tracking-wider"
          style={{ color: colors.accent }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}