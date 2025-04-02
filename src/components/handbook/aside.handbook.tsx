import { useState, useEffect } from "react";
import { useHeadings } from "@/hooks/use-headings";
import { SOCIAL_LISTS } from "@/lib/lists/social.list";
import { useLocation } from "react-router-dom";

const AsideHandbook = () => {
  const headings = useHeadings();
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings, pathname]);

  const handleClick = (id: string) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      window.scrollBy(0, 100);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <aside className="hidden w-1/4 md:flex flex-col h-full absolute right-0 bg-app-background-light dark:bg-app-background-dark border-l border-app-border-dark overflow-y-scroll scrollbar-hide gap-4 p-6  py-[75px] mb-10">
      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-sm font-semibold tracking-tight text-app-typo-h1-dark font-mono">
          ON THIS PAGE
        </h3>
        <ul className="flex flex-col justify-center items-start gap-1 w-full ">
          {headings.map((heading) => (
            <li
              key={heading.id + heading.text}
              onClick={() => handleClick(heading.id)}
              className={`px-1 text-left text-sm cursor-pointer ml-${
                (heading.level - 2) * 2
              }  ${
                activeHeading === heading.id
                  ? "text-app-primary-dark/80 underline"
                  : "border-app-border-dark/5 text-app-typo-p-dark/70"
              }`}
            >
              {heading.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold tracking-tight text-app-typo-h1-dark font-mono">
          ABOUT PROJECT
        </h3>
        <p className="text-sm">
          This handbook is a collection of resources and information about the
          technology. It aims to provide a comprehensive overview of the topic.
        </p>
        <ul className="flex gap-3 w-full justify-end items-center px-3">
          {SOCIAL_LISTS.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.component />
            </a>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold tracking-tight text-app-typo-h1-dark font-mono">
          PROJECT BY
        </h3>
        <p className="text-sm">
          This project is developed and maintained by a dedicated team of
          contributors at
          <span className="font-semibold text-app-border-light px-2">
            Developers Student Society.
          </span>
        </p>
      </div>
    </aside>
  );
};

export default AsideHandbook;
