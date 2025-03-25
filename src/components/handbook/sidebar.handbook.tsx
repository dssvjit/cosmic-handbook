import { MARKDOWN_LIST } from "@/lib/lists/markdown.list";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "@/components/shared/logo";

const SidebarHandbook = () => {
  return (
    <aside className="w-1/6 hidden lg:flex flex-col gap-8 h-full overflow-auto p-4 px-6 relative border-r border-app-border-dark">
      <Logo withText />

      <div className="w-full flex flex-col items-start justify-start">
        {MARKDOWN_LIST.map((section) => (
          <Collapsible key={section.topic} className="w-full">
            <CollapsibleTrigger className="text-app-primary-dark w-full text-left">
              {section.topic}
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-4 px-3 text-sm border-l border-app-typo-p-dark/30">
              {section.subtopic.map((sub) => {
                const isActive = location.pathname.includes(sub.href);
                return (
                  <li key={sub.id} className="list-none">
                    <Link
                      to={`/handbook/${sub.href}`}
                      className={`py-1 block ${
                        isActive
                          ? "text-app-primary-dark"
                          : "text-app-typo-p-dark"
                      } hover:text-app-primary-dark transition`}
                    >
                      {sub.title}
                    </Link>
                  </li>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </aside>
  );
};

export default SidebarHandbook;
