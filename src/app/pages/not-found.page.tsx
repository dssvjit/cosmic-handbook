import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-svh flex flex-col justify-center items-center gap-5">
      <Logo withText className="w-24" />
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>
        <p className="text-lg">Page not found</p>
      </div>
      <Button onClick={() => navigate("/")} variant={"secondary"}>
        Back to Home
      </Button>
    </section>
  );
};

export default NotFoundPage;
