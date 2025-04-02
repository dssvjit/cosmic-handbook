import NavbarHandbook from "@/components/handbook/navbar.handbook";
import HandbookSidebar from "@/components/sidebar/handbook.sidebar";
import { Outlet } from "react-router-dom";

const HandbookLayout = () => {
  return (
    <section className="w-full h-svh flex justify-between items-center">
      <HandbookSidebar />
      <div className="relative w-full h-full flex-1 flex flex-col justify-start">
        <NavbarHandbook />
        <Outlet />
      </div>
    </section>
  );
};

export default HandbookLayout;
