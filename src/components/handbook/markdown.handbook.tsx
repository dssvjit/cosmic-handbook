import MDXProviderWrapper from "@/components/mdx/mdx.provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import MD from "@/markdown/hono/hono.m1.mdx";

const MarkdownHandbook = () => {
  const { pathname } = useLocation();
  console.log("PATHNAME: ", pathname);
  return (
    <div className="w-full overflow-auto px-4 md:px-6 md:py-2 scrollbar-hide">
      <div className="flex w-full h-[55px]"></div>
      <div className="flex flex-col w-full md:w-3/4  text-app-primary-dark/80">
        <MDXProviderWrapper>
          <MD />
        </MDXProviderWrapper>
        <div className="w-full flex justify-between items-center my-5">
          <Button variant={"link"}>
            <ChevronLeft />
            Previous
          </Button>
          <Button variant={"link"}>
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownHandbook;
