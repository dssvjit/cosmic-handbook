import { Command, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo";
import NavbarBreadcrumb from "@/components/shared/breadcrumb";
import { Button } from "@/components/ui/button";

const NavbarHandbook = () => {
  return (
    <nav className="z-20 absolute top-0 w-full h-[55px] flex items-center justify-start bg-none backdrop-blur-lg px-3 border-b border-app-border-dark">
      <Logo withText className="flex md:hidden" />

      <NavbarBreadcrumb />

      <div className="flex justify-between items-center flex-1">
        <div className="flex flex-1 justify-end md:justify-end items-center gap-2">
          <div className="w-44 md:w-60 h-8 flex items-center justify-between px-2 md:px-4 rounded-md bg-app-border-dark/60 border border-app-border-dark">
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
          <div className="hidden md:flex justify-start items-center gap-2">
            <Button variant={"ghost"} className="h-8">
              Login
            </Button>
            <Button className="h-8">Register</Button>
          </div>
          <Menu className="flex md:hidden" color="#ffff" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarHandbook;
