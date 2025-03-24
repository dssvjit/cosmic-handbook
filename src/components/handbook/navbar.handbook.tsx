import { Command, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo";

const NavbarHandbook = () => {
  return (
    <nav className="z-20 absolute top-0 w-full h-[55px] flex items-center justify-between bg-none backdrop-blur-lg px-3 border-b border-app-border-dark">
      <Logo withText className="flex md:hidden" />

      <div className="flex justify-between items-center gap-2">
        <div className="w-48 flex items-center justify-between px-2 md:px-4 rounded-md border border-app-border-dark">
          <Input
            placeholder="Search documentation"
            className="border-none p-0 bg-transparent h-7 md:h-8 text-xs md:text-sm"
          />
          <div className="flex justify-center items-center gap-[1px] md:gap-1">
            <Command color="#a3a3a3" className="size-3" />
            <span className="font-semibold text-xs md:text-sm text-[#a3a3a3]">
              K
            </span>
          </div>
        </div>
        <Menu className="flex md:hidden" color="#ffff" />
      </div>
    </nav>
  );
};

export default NavbarHandbook;
