import AsideHandbook from "@/components/handbook/aside.handbook";
import NavbarHandbook from "@/components/handbook/navbar.handbook";
import SidebarHandbook from "@/components/handbook/sidebar.handbook";
import { Outlet } from "react-router-dom";

const HandBookPage = () => {
  return (
    <section className="w-full h-svh flex justify-between items-center">
      <SidebarHandbook />
      <div className="relative w-full h-full lg:w-5/6 flex flex-col justify-start">
        <NavbarHandbook />
        <main className="relative flex flex-col overflow-auto ">
          <Outlet />
          <AsideHandbook />
        </main>
      </div>
    </section>
  );
};

export default HandBookPage;
