"use client";

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [
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

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary/10 w-20 min-h-screen py-10">
      <ul className="flex flex-col items-center justify-center gap-8">
        {routes.map((route) => (
          <li
            className={cn(
              "flex flex-col items-center gap-1 text-sm cursor-pointer text-muted-foreground hover:text-primary w-[80%] py-3 rounded-md",
              pathname === route.href && "bg-primary/20 text-primary"
            )}
          >
            <route.icon />
            {route.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
