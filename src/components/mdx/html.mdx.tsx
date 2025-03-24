import { ComponentPropsWithoutRef } from "react";

export const CustomH1 = (props: ComponentPropsWithoutRef<"h1">) => (
  <h1
    className="text-2xl lg:text-3xl font-bold font-dm-sans text-app-typo-h1-dark dark:text-app-primary-light border-b border-b-app-border-dark py-3"
    {...props}
  />
);

export const CustomH2 = (props: ComponentPropsWithoutRef<"h2">) => (
  <h2
    className="text-xl lg:text-[1.6rem] font-bold font-dm-sans text-app-typo-h1-dark dark:text-app-primary-light mt-6"
    {...props}
  />
);

export const CustomH3 = (props: ComponentPropsWithoutRef<"h3">) => (
  <h3
    className="text-lg lg:text-xl font-semibold text-app-typo-h2-dark/80 mt-4"
    {...props}
  />
);

export const CustomH4 = (props: ComponentPropsWithoutRef<"h3">) => (
  <h3
    className="text-base lg:text-lg font-semibold text-app-typo-h2-dark py-1"
    {...props}
  />
);

export const CustomParagraph = (props: ComponentPropsWithoutRef<"p">) => (
  <p
    className="text-sm lg:text-base text-app-typo-p-dark/40 tracking-tight py-1"
    {...props}
  />
);

export const CustomLink = (props: ComponentPropsWithoutRef<"a">) => (
  <a className="text-blue-300 transition-colors underline py-1" {...props} />
);

export const CustomSpan = (props: ComponentPropsWithoutRef<"span">) => (
  <span
    className="text-sm text-app-secondary-dark dark:text-app-secondary-light py-1"
    {...props}
  />
);

export const CustomUl = (props: ComponentPropsWithoutRef<"ul">) => (
  <ul
    className="list-disc ml-4 text-app-secondary-dark dark:text-app-secondary-light"
    {...props}
  />
);

export const CustomOl = (props: ComponentPropsWithoutRef<"ol">) => (
  <ol
    className="list-decimal ml-4 text-app-secondary-dark dark:text-app-secondary-light"
    {...props}
  />
);

export const CustomLi = (props: ComponentPropsWithoutRef<"li">) => (
  <li
    className="text-base lg:text-lg text-app-secondary-dark dark:text-app-secondary-light"
    {...props}
  />
);

export const CustomBlockquote = (
  props: ComponentPropsWithoutRef<"blockquote">
) => (
  <blockquote
    className="border-l-4 border-app-primary-dark dark:border-app-primary-light pl-4 italic text-app-secondary-dark dark:text-app-secondary-light"
    {...props}
  />
);

export const CustomImg = (props: ComponentPropsWithoutRef<"img">) => (
  <img className="rounded-xl shadow-lg my-4 w-full object-contain" {...props} />
);

export const CustomStrong = (props: ComponentPropsWithoutRef<"strong">) => (
  <strong className="font-semibold text-app-typo-h2-dark/70" {...props} />
);

export const CustomEm = (props: ComponentPropsWithoutRef<"em">) => (
  <em className="italic text-app-primary-dark" {...props} />
);

export const CustomTable = (props: ComponentPropsWithoutRef<"table">) => (
  <table
    className="table-auto w-full bg-app-border-dark/30 rounded-md my-2"
    {...props}
  />
);

export const CustomThead = (props: ComponentPropsWithoutRef<"thead">) => (
  <thead className="" {...props} />
);

export const CustomTr = (props: ComponentPropsWithoutRef<"tr">) => (
  <tr className="border-app-border-dark" {...props} />
);

export const CustomTd = (props: ComponentPropsWithoutRef<"td">) => (
  <td
    className="p-3 text-left text-app-typo-p-dark border-app-border-dark"
    {...props}
  />
);

export const CustomTh = (props: ComponentPropsWithoutRef<"th">) => (
  <th
    className="p-3 text-left font-semibold border-app-border-dark bg-app-border-dark/40"
    {...props}
  />
);
