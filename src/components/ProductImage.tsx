interface ProductImageProps {
  category: string;
  name: string;
  className?: string;
}

const categoryColors: Record<string, { bg: string; accent: string; label: string }> = {
  cacti: { bg: "#E8F0E5", accent: "#6B8F5E", label: "🌵" },
  succulents: { bg: "#EAF4E8", accent: "#7C9A72", label: "🪴" },
  rare: { bg: "#F4EADF", accent: "#C79A63", label: "✨" },
  tools: { bg: "#EFEAE4", accent: "#A89A8C", label: "🌱" },
};

export default function ProductImage({
  category,
  name,
  className = "",
}: ProductImageProps) {
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
