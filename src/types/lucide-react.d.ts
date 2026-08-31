declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
  }
  export type Icon = ComponentType<LucideProps>;
  export const ArrowRight: Icon;
  export const BookOpen: Icon;
  export const Check: Icon;
  export const CheckCircle2: Icon;
  export const ChevronRight: Icon;
  export const Droplets: Icon;
  export const FlaskConical: Icon;
  export const Leaf: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const Minus: Icon;
  export const PackageCheck: Icon;
  export const Phone: Icon;
  export const Plus: Icon;
  export const RotateCcw: Icon;
  export const SearchX: Icon;
  export const Send: Icon;
  export const ShieldCheck: Icon;
  export const ShoppingBag: Icon;
  export const Sprout: Icon;
  export const Star: Icon;
  export const Sun: Icon;
  export const Trash2: Icon;
  export const Truck: Icon;
  export const X: Icon;
}
