import DocsHandbook from "@/components/handbook/docs.handbook";
import SidebarHandbook from "@/components/handbook/sidebar.handbook";

const HandBookPage = () => {
  return (
    <section className="w-full h-svh flex justify-between items-center">
      <SidebarHandbook />
      <DocsHandbook />
    </section>
  );
};

export default HandBookPage;
