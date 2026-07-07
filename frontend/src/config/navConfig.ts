import { NavItem } from "@/types/nav";
import { Info, Clapperboard, Contact, FolderKanban, Tag } from "lucide-react";

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    icon: Info,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: FolderKanban,
  },
  {
    label: "Studio",
    href: "/Studio",
    icon: Clapperboard,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: Tag,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Contact,
  },
];
