import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import CodeblockMDX from "@/components/mdx/codeblock.mdx";
import {
  CustomBlockquote,
  CustomEm,
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomImg,
  CustomLi,
  CustomLink,
  CustomOl,
  CustomParagraph,
  CustomSpan,
  CustomStrong,
  CustomTable,
  CustomTd,
  CustomTh,
  CustomThead,
  CustomTr,
  CustomUl,
} from "@/components/mdx/html.mdx";

const components: MDXComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  p: (props) => {
    if (
      props.children &&
      typeof props.children === "object" &&
      "type" in props.children &&
      props.children.type === "pre"
    ) {
      return props.children;
    }

    return <CustomParagraph {...props} />;
  },
  a: CustomLink,
  span: CustomSpan,
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
  blockquote: CustomBlockquote,
  img: CustomImg,
  strong: CustomStrong,
  em: CustomEm,
  table: CustomTable,
  thead: CustomThead,
  tr: CustomTr,
  td: CustomTd,
  th: CustomTh,
  code: CodeblockMDX,
};

interface MDXProviderWrapperProps {
  children: React.ReactNode;
}

const MDXProviderWrapper = ({ children }: MDXProviderWrapperProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
