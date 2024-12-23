import { Home, Plus, Settings } from "lucide-react";

export const routes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
    pro: false,
  },
  {
    icon: Plus,
    href: "/companion/new",
    label: "Create",
    pro: false,
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
    pro: false,
  },
];
