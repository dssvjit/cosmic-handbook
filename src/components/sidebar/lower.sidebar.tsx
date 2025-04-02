import { LOWER_SIDEBAR_LIST } from "@/lib/lists/sidebar.list";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface LowerSidebarProps {
  topic: string;
  subTopic: string;
  techTopic: string;
}

const LowerSidebar = ({ topic, subTopic, techTopic }: LowerSidebarProps) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="w-full flex flex-col flex-1 items-start justify-start px-8 mb-10">
      {LOWER_SIDEBAR_LIST.map((section) => {
        const isLowerSectionActive = section.topic.toLowerCase() === topic;
        return (
          <ul key={section.id + section.topic} className="w-full my-2">
            <span
              className={`font-semibold font-dm-mono text-app-primary-dark transition-all ${
                isLowerSectionActive ? "text-md" : "text-sm"
              }`}
            >
              {section.topic}
            </span>
            <li className="flex flex-col my-2 font-dm-sans text-[15px]">
              {section.subTopic.map((subtopic) => {
                const isLowerSubtopicActive =
                  subtopic.topic.toLowerCase() === subTopic;
                const isSectionOpen = openSections[subtopic.topic] || false;

                return (
                  <Collapsible
                    key={subtopic.id + subtopic.topic}
                    open={isSectionOpen}
                    onOpenChange={() => toggleSection(subtopic.topic)}
                  >
                    <CollapsibleTrigger
                      className={`px-3 w-full py-1 flex justify-between
                       items-center border-l transition-all ${
                         isLowerSubtopicActive
                           ? "text-white hover:text-app-primary-dark/90 border-app-typo-p-dark"
                           : "text-app-typo-h1-dark/80 hover:text-app-typo-h1-dark border-app-typo-p-dark/30"
                       }`}
                    >
                      <div className="flex justify-start items-center gap-2">
                        <subtopic.icon size={13} />
                        {subtopic.topic}
                      </div>
                      <ChevronRight
                        size={15}
                        className={`transition-transform duration-75 ${
                          isSectionOpen ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-sm tracking-wide">
                      {subtopic.subtopic.map((techtopic) => {
                        const isLowerTechSubtopicActive =
                          isLowerSubtopicActive && techtopic.href === techTopic;

                        return (
                          <Link
                            key={techtopic.id + techtopic.title}
                            to={`/handbook/${section.topic.toLowerCase()}/${subtopic.topic.toLowerCase()}/${
                              techtopic.href
                            }`}
                            className={`pl-6 px-3 text-[14px] flex flex-col py-1 border-l transition-all ${
                              isLowerTechSubtopicActive
                                ? "text-white hover:text-app-primary-dark/90 font-semibold tracking-wide border-app-typo-p-dark"
                                : "text-app-typo-h2-dark/90 hover:text-app-typo-h1-dark border-app-typo-p-dark/30"
                            }`}
                          >
                            {techtopic.title}
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default LowerSidebar;
