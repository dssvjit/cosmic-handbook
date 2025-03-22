import Logo from "@/components/shared/logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full absolute sm:relative top-0 flex items-center justify-between h-[60px] px-6 border-b border-b-neutral-300 bg-[#ffffff81] z-50 backdrop-blur-sm">
      <Link to="/">
        <Logo withText className="w-[70px] h-[70px]" />
      </Link>
    </nav>
  );
};

export default Navbar;
