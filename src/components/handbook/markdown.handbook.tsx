import MDXProviderWrapper from "@/components/mdx/mdx.provider";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MARKDOWN_LIST } from "@/lib/lists/markdown.list";


const MarkdownHandbook = () => {
  const { pathname } = useLocation();
  
  // Find the markdown component that matches the current route
  const getMarkdownComponent = () => {
    // Extract the path part after /handbook/
    const path = pathname.split('/handbook/')[1];
    
    // Loop through all topics to find the matching markdown
    for (const section of MARKDOWN_LIST) {
      for (const sub of section.subtopic) {
        if (sub.href === path) {
          // Found the matching markdown component
          const MarkdownComponent = sub.markdown;
          return <MarkdownComponent />;
        }
      }
    }
    
    // Fallback: if no matching route is found
    return <div>No content found for this path. Please select a topic from the sidebar.</div>;
  };

  return (
    <div className="w-full overflow-auto px-4 md:px-6 md:py-2 scrollbar-hide">
      <div className="flex w-full h-[55px]"></div>
      <div className="flex flex-col w-full md:w-3/4 text-app-primary-dark/80">
        <MDXProviderWrapper>
          {getMarkdownComponent()}
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
