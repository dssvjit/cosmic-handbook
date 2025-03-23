import Explore from "@/components/home/explore.home";
import Hero from "@/components/home/hero.home";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center px-5 sm:px-8 gap-14 py-6 pb-10 md:py-10 md:pb-16">
        <Hero />
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
