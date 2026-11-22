import {
  Briefcase,
  Building,
  Building2,
  BookOpen,
  Clock,
  ClipboardCheck,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Layers,
  Leaf,
  Settings,
  ShoppingCart,
  Stethoscope,
  Store,
  UserCheck,
  ShieldCheck,
  Utensils,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon registry. Data files in lib/ are plain TypeScript and store an icon
 * *key*; this is the single place those keys become components, so a data
 * file never has to import React.
 */
const registry = {
  // services
  building: Building,
  briefcase: Briefcase,
  factory: Factory,
  settings: Settings,
  layers: Layers,
  shoppingCart: ShoppingCart,
  graduation: GraduationCap,
  heartPulse: HeartPulse,
  // industries
  building2: Building2,
  stethoscope: Stethoscope,
  bookOpen: BookOpen,
  store: Store,
  warehouse: Warehouse,
  home: Home,
  landmark: Landmark,
  utensils: Utensils,
  // differentiators
  userCheck: UserCheck,
  clipboardCheck: ClipboardCheck,
  shieldCheck: ShieldCheck,
  clock: Clock,
  leaf: Leaf,
  fileText: FileText,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof registry;

export default function ServiceIcon({
  name,
  className = "w-6 h-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = registry[name as IconKey] ?? Building;
  return <Icon className={className} aria-hidden />;
}
