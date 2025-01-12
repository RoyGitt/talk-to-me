import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-3 bg-primary/10">
      <MobileSidebar />
      <Link href="/">
        <h2
          className={cn(
            "tracking-wide text-xl hidden md:block",
            poppins.className
          )}
        >
          TALK TO ME
        </h2>
      </Link>
      <div className="ml-auto flex items-center gap-3">
        <Button variant="premium">Upgrade</Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};
export default Navbar;
