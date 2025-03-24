import AsideHandbook from "@/components/handbook/aside.handbook";
import MarkdownHandbook from "./markdown.handbook";

const MainHandbook = () => {
  return (
    <div className="relative w-full h-full flex flex-col overflow-auto">
      <MarkdownHandbook />
      <AsideHandbook />
    </div>
  );
};

export default MainHandbook;
