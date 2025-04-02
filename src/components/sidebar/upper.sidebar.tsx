import { UPPER_SIDEBAR_LIST } from "@/lib/lists/sidebar.list";
import { Link } from "react-router-dom";

interface UpperSidebarProps {
  topic: string;
  subTopic: string;
}

const UpperSidebar = ({ topic, subTopic }: UpperSidebarProps) => {
  return (
    <div className="w-full flex flex-col flex-1 items-start justify-start px-8">
      {UPPER_SIDEBAR_LIST.map((section) => {
        const isUpperSectionActive = section.topic.toLowerCase() === topic;
        return (
          <ul key={section.id + section.topic} className="w-full my-2">
            <span
              className={`font-semibold font-dm-mono text-app-primary-dark  transition-all ${
                isUpperSectionActive ? "text-md" : "text-sm"
              }`}
            >
              {section.topic}
            </span>
            <li className="flex flex-col my-2 font-dm-sans text-[15px]">
              {section.subTopic.map((subtopic) => {
                const isUpperSubtopicActive = subtopic.href === subTopic;

                return (
                  <Link
                    key={subtopic.id + subtopic.topic}
                    to={`/handbook/${section.topic.toLowerCase()}/${
                      subtopic.href
                    }`}
                    className={`px-3 py-1 border-l transition-all ${
                      isUpperSubtopicActive
                        ? "text-white hover:text-app-primary-dark/90 border-app-typo-p-dark"
                        : "text-app-typo-h1-dark/80 hover:text-app-typo-h1-dark border-app-typo-p-dark/30"
                    }`}
                  >
                    {subtopic.topic}
                  </Link>
                );
              })}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default UpperSidebar;
