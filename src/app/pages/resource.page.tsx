import { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MDXProviderWrapper from "@/components/mdx/mdx.provider";
import AsideHandbook from "@/components/handbook/aside.handbook";
import { LOWER_SIDEBAR_LIST } from "@/lib/lists/sidebar.list";

const ResourcePage = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const subtopic = pathArray[pathArray.length - 1];
  const topic = pathArray[pathArray.length - 2];


  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
    
        setShowButton(contentRef.current.scrollTop > 300);
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
    }


    return () => {
      if (content) {
        content.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const DisplayMarkdown = useMemo(() => {
    const topicArray = LOWER_SIDEBAR_LIST[0].subTopic.find(
      (techTopic) => techTopic.topic.toLowerCase() === topic
    );

    if (!topicArray) return null;

    const subTopicMarkdown = topicArray.subtopic.find(
      (subTopic) => subTopic.href === subtopic
    );

    if (!subTopicMarkdown) return null;

    return subTopicMarkdown.markdown || "No content available";
  }, [subtopic, topic]);

  return (
    <>
      <main className="relative flex w-full min-h-screen">

        <div
          className="w-full px-4 md:px-6 md:py-2 overflow-y-auto flex-grow"
          ref={contentRef}
          style={{ maxHeight: "calc(100vh - 50px)" }} 
        >
          <div className="flex w-full h-[55px]"></div>
          <div className="flex w-full flex-col md:w-3/4 text-app-primary-dark/80 px-2 py-2 md:px-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.1 }}
              >
                <MDXProviderWrapper>
                  <DisplayMarkdown />
                </MDXProviderWrapper>
              </motion.div>
            </AnimatePresence>

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

        <AsideHandbook />
      </main>

      {showButton && (
        <div
          className="w-8 h-8 fixed bg-white rounded-md flex justify-center items-center right-4 bottom-4 cursor-pointer hover:bg-app-primary-dark hover:text-white transition-all duration-300 ease-in-out z-50"
          onClick={scrollToTop}
        >
          <ArrowUp size={15} color="#000" strokeWidth={4} />
        </div>
      )}
    </>
  );
};

export default ResourcePage;
