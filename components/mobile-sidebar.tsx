"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-[15rem] sm:w-[10rem]">
        <ul className="mt-8">
          {routes.map((route) => (
            <li
              className={cn(
                "flex flex-col items-center gap-1 text-sm cursor-pointer text-muted-foreground hover:text-primary  py-5 rounded-md",
                pathname === route.href && "bg-primary/20 text-primary"
              )}
            >
              <route.icon />
              {route.label}
            </li>
          ))}
        </ul>{" "}
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
