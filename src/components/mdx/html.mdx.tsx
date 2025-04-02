import { ComponentPropsWithoutRef } from "react";

export const CustomH1 = (props: ComponentPropsWithoutRef<"h1">) => {
  const id = props.children
    ? (props.children as string).toLowerCase().replace(/\s+/g, "-")
    : "";
  return (
    <h1
      id={id}
      className="text-2xl lg:text-3xl font-bold font-dm-sans text-app-typo-h1-dark dark:text-app-primary-light border-b border-b-app-border-dark py-3"
      {...props}
    />
  );
};

export const CustomH2 = (props: ComponentPropsWithoutRef<"h2">) => {
  const id = props.children
    ? (props.children as string).toLowerCase().replace(/\s+/g, "-")
    : "";
  return (
    <h2
      id={id}
      className="text-xl lg:text-[1.6rem] font-bold font-dm-sans text-app-typo-h1-dark dark:text-app-primary-light mt-7 md:mt-10"
      {...props}
    />
  );
};

export const CustomH3 = (props: ComponentPropsWithoutRef<"h3">) => {
  const id = props.children
    ? (props.children as string).toLowerCase().replace(/\s+/g, "-")
    : "";
  return (
    <h3
      id={id}
      className="text-lg lg:text-[1.4rem] font-semibold text-app-typo-h2-dark mt-5 md:mt-8"
      {...props}
    />
  );
};

export const CustomH4 = (props: ComponentPropsWithoutRef<"h3">) => {
  return (
    <h4
      className="text-base lg:text-[1.2rem] font-semibold text-app-typo-h2-dark py-1 mt-1 md:mt-4"
      {...props}
    />
  );
};

export const CustomParagraph = (props: ComponentPropsWithoutRef<"p">) => {
  return (
    <p
      className="text-sm lg:text-base text-app-typo-p-dark/80 py-1"
      {...props}
    />
  );
};

export const CustomLink = (props: ComponentPropsWithoutRef<"a">) => {
  return (
    <a className="text-blue-300 transition-colors underline py-1" {...props} />
  );
};

export const CustomSpan = (props: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className="text-sm text-app-secondary-dark dark:text-app-secondary-light py-1"
      {...props}
    />
  );
};

export const CustomUl = (props: ComponentPropsWithoutRef<"ul">) => {
  return (
    <ul className="list-disc my-2 ml-2 text-app-typo-p-dark/80" {...props} />
  );
};

export const CustomOl = (props: ComponentPropsWithoutRef<"ol">) => (
  <ol className="list-decima my-2 ml-2 text-app-typo-p-dark/80" {...props} />
);

export const CustomLi = (props: ComponentPropsWithoutRef<"li">) => (
  <li className="text-sm md:text-base text-app-typo-p-dark/90" {...props} />
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
  <strong className="font-semibold text-app-typo-h2-dark" {...props} />
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
    className="p-3 text-xs md:text-sm text-left text-app-typo-p-dark border-app-border-dark"
    {...props}
  />
);

export const CustomTh = (props: ComponentPropsWithoutRef<"th">) => (
  <th
    className="p-3 text-xs md:text-sm text-left font-semibold border-app-border-dark bg-app-border-dark/40"
    {...props}
  />
);

export const CustomInlineCode = (props: React.ComponentProps<"code">) => {
  return (
    <code
      {...props}
      className="bg-app-border-dark text-app-btn-primary/80 px-1.5 py-0.5 rounded-md font-dm-mono text-sm"
    />
  );
};
