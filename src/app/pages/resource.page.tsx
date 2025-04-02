import MDXProviderWrapper from "@/components/mdx/mdx.provider";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { LOWER_SIDEBAR_LIST } from "@/lib/lists/sidebar.list";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import AsideHandbook from "@/components/handbook/aside.handbook";

const ResourcePage = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const subtopic = pathArray[pathArray.length - 1];
  const topic = pathArray[pathArray.length - 2];

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
      <main className="relative h-full flex w-full">
        <div className="w-8 h-8 absolute bg-white rounded-md flex justify-center items-center right-4 bottom-4 cursor-pointer hover:bg-app-primary-dark hover:text-white transition-all duration-300 ease-in-out z-50">
          <ArrowUp size={15} color="#000" strokeWidth={4} />
        </div>
        <div className="w-full px-4 md:px-6 md:py-2 overflow-y-scroll">
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
    </>
  );
};

export default ResourcePage;
