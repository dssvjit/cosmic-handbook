import { useLocation } from "react-router-dom";
import Logo from "@/components/shared/logo";
import UpperSidebar from "@/components/sidebar/upper.sidebar";
import LowerSidebar from "@/components/sidebar/lower.sidebar";

const HandbookSidebar = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const subTopic = pathArray[3];
  const topic = pathArray[2];
  const techTopic = pathArray[4];

  return (
    <aside className="w-1/6 hidden lg:flex flex-col h-full relative border-r border-app-border-dark">
      <Logo
        withText
        className="h-[55px] flex justify-start items-center px-6 py-8"
      />

      <div className="flex flex-col justify-start items-start flex-1 py-2 overflow-auto scrollbar-hide">
        <UpperSidebar subTopic={subTopic} topic={topic} />
        <LowerSidebar subTopic={subTopic} topic={topic} techTopic={techTopic} />
      </div>
    </aside>
  );
};

export default HandbookSidebar;
