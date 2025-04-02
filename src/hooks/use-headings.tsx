import { Heading } from "@/utils/common-type.util";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHeadings = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const extractHeadings = () => {
      const elements = document.querySelectorAll("h1, h2 , h3");

      const headingList: Heading[] = Array.from(elements).map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: parseInt(el.tagName.replace("H", ""), 10),
      }));

      const ignoreHeadings = [
        "ON THIS PAGE",
        "PROJECT BY DSS",
        "TABLE OF CONTENTS",
        "ABOUT PROJECT",
        "PROJECT BY",
      ];

      const headingListFiltered = headingList.filter(
        (heading) =>
          !ignoreHeadings.some((ignore) => heading.text.includes(ignore))
      );

      setHeadings(headingListFiltered);
    };

    extractHeadings();
  }, [pathname]);

  return headings;
};
