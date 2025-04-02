import Explore from "@/components/home/explore.home";
import Hero from "@/components/home/hero.home";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import { HERO_ICON_LIST } from "@/lib/lists/heroicon.list";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="relative flex w-full flex-col justify-center items-center px-5 sm:px-8 gap-14 py-6 pb-10 md:py-10 md:pb-16">
        {HERO_ICON_LIST.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className={`absolute z-50 ${item.position} ${item.size}  hidden md:flex items-center p-4 justify-center rounded-full bg-gradient-to-br ${item.gradient} shadow-lg shadow-[${item.color}] opacity-40 hover:opacity-100 transition-opacity duration-300 blur-xl hover:blur-0 cursor-pointer`}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Icon className={`${item.iconSize}  text-white drop-shadow-md`} />
            </motion.div>
          );
        })}
        <Hero />
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
