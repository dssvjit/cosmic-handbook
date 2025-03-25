import { Button } from "@/components/ui/button";
import { ChevronRight, Users } from "lucide-react";
import Marquee from "@/components/home/marquee.home";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <HeroHeader />
      <HeroContent />
      <Marquee />
    </div>
  );
};

const HeroHeader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <h3 className="w-full lg:w-2/3 text-center text-app-primary-dark font-dm-sans font-semibold text-3xl lg:text-5xl tracking-tight">
        Your Ultimate Knowledge Hub for Everything about{" "}
        <span className="text-app-btn-primary/90">Technology</span>
      </h3>
      <span className="w-full lg:w-2/3 tracking-tighter font-light text-sm md:text-xl text-center text-app-secondary-dark">
        Explore the future of technology through well-organized,
        community-driven documentation
      </span>
      <div className="flex justify-start items-center gap-2">
        <span className="text-md md:text-lg text-app-primary-dark/80 font-dm-sans ">
          Passionately built by
        </span>
        <img
          src="/assets/vectors/dss-logo-dark.svg"
          alt="DSS Logo"
          className="size-12 md:size-16"
        />
      </div>
    </div>
  );
};

const HeroContent = () => {
  const navigate = useNavigate();

  const handleHandbookClick = () => {
    navigate("/handbook");
  };
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-1">
      <div className="z-10 flex justify-center items-center gap-3">
        <Button onClick={handleHandbookClick}>
          Handbook <ChevronRight />
        </Button>
        <Button variant={"secondary"}>
          Join Nxtgen <Users />
        </Button>
      </div>
      <div className="z-10 flex flex-col justify-center items-center">
        <div className="text-app-secondary-dark">
          Already a member?{" "}
          <Button variant={"link"} className="text-app-primary-dark/70 p-0">
            Login
          </Button>
        </div>
        <Button
          variant={"link"}
          className="text-app-primary-dark/50 -translate-y-2 p-0"
        >
          What is Nxtgen?
        </Button>
      </div>
      <div className="z-0 absolute bottom-32 w-80 h-10 bg-app-secondary-dark/30 blur-3xl" />
    </div>
  );
};

export default Hero;
