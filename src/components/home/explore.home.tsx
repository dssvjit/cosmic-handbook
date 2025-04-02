import { useRef, useState } from "react";
import { EXPLORE_LIST } from "@/lib/lists/explore.list";
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Explore = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth <= 768 ? 4 : 6;

  const pillsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (pillsRef.current) {
      pillsRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (pillsRef.current) {
      pillsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const categories = [
    "all",
    ...new Set(EXPLORE_LIST.flatMap((item) => item.categories)),
  ];

  const filteredList =
    filter === "all"
      ? EXPLORE_LIST
      : EXPLORE_LIST.filter((item) => item.categories.includes(filter));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full z-30 flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-2xl md:text-3xl font-semibold font-dm-sans text-app-primary-dark">
          Start Exploring the Handbook
        </h4>
        <span className="w-full lg:w-2/3 text-xs md:text-base font-light text-app-secondary-dark text-center">
          Unlock the world of technology with our comprehensive documentation
          library. Each topic is curated to provide you with the best resources
          and practical guides
        </span>
      </div>

      <CategoryBar
        categories={categories}
        filter={filter}
        pillsRef={pillsRef}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        setFilter={setFilter}
        setCurrentPage={setCurrentPage}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:px-32">
        <AnimatePresence mode="wait">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.1 }}
            >
              <ExploreCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>

      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              variant={"outline"}
              className={`${
                currentPage === pageNumber
                  ? "bg-app-secondary-dark/10 border-app-border-light/10"
                  : ""
              }`}
            >
              {pageNumber}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

interface ExploreCardProps {
  item: {
    id: number;
    name: string;
    docs: string;
    icon: IconType;
    gradient: string[];
  };
}

const ExploreCard = ({ item }: ExploreCardProps) => {
  return (
    <li
      key={item.id}
      className={`relative flex flex-col items-start justify-center space-y-1 p-4 rounded-md bg-app-border-dark/40 hover:bg-app-border-dark/60 border border-app-border-dark transition-all cursor-pointer`}
    >
      <div
        className={`z-0 w-10 h-10 blur-2xl bg-gradient-to-r ${item.gradient[0]} top-5 left-5 rounded-full absolute`}
      />

      <div className="z-10 flex items-center space-x-2 mb-2">
        <div
          className={`p-2 rounded-full bg-gradient-to-br ${item.gradient[0]} ${item.gradient[1]}`}
        >
          <item.icon className="size-3 md:size-5" color={"#ffff"} />
        </div>
        <span className="text-sm md:text-base font-semibold text-app-primary-dark dark:text-app-primary-light">
          {item.name}
        </span>
      </div>
      <p className="text-xs max-h-12 overflow-clip md:text-base font-light text-app-primary-dark/60 dark:text-app-secondary-light">
        {item.docs}
      </p>
    </li>
  );
};

interface CategoryPillProps {
  category: string;
  setFilter: (category: string) => void;
  setCurrentPage: (pageNumber: number) => void;
  filter: string;
}

const CategoryPill = ({
  category,
  setFilter,
  setCurrentPage,
  filter,
}: CategoryPillProps) => {
  return (
    <Button
      key={category}
      onClick={() => {
        setFilter(category);
        setCurrentPage(1);
      }}
      variant={filter === category ? "default" : "outline"}
      className={`h-7 sm:h-full px-3 text-[10px] sm:text-xs ${
        filter !== category && " bg-app-border-dark/60"
      }`}
    >
      {category}
    </Button>
  );
};

interface CategoryBarProps {
  scrollLeft: () => void;
  scrollRight: () => void;
  categories: string[];
  pillsRef: React.RefObject<HTMLDivElement>;
  setFilter: (category: string) => void;
  setCurrentPage: (pageNumber: number) => void;
  filter: string;
}

export const CategoryBar = ({
  scrollLeft,
  scrollRight,
  categories,
  pillsRef,
  setFilter,
  setCurrentPage,
  filter,
}: CategoryBarProps) => {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <Button onClick={scrollLeft} variant={"ghost"} className="p-2 sm:p-3">
        <ChevronLeft />
      </Button>
      <div
        ref={pillsRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide w-full sm:w-3/4 lg:w-2/3"
      >
        {categories.map((category) => (
          <CategoryPill
            key={category}
            category={category}
            setFilter={setFilter}
            setCurrentPage={setCurrentPage}
            filter={filter}
          />
        ))}
      </div>
      <Button onClick={scrollRight} variant={"ghost"} className="p-2 sm:p-3">
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Explore;
