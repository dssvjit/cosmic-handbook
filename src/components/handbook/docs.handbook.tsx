import NavbarHandbook from "@/components/handbook/navbar.handbook";
import MarkdownHandbook from "./markdown.handbook";
import AsideHandbook from "./aside.handbook";

const DocsHandbook = () => {
  return (
    <section className="relative w-full h-svh lg:w-5/6 flex flex-col justify-start">
      <NavbarHandbook />
      <div className="relative flex flex-col overflow-auto">
        <MarkdownHandbook />
        <AsideHandbook />
      </div>
    </section>
  );
};

export default DocsHandbook;
