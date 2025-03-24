import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Explore from "@/components/home/explore.home";
import Hero from "@/components/home/hero.home";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
const HomePage = () => {
    return (_jsxs("div", { className: "w-full flex flex-col justify-center items-center gap-2", children: [_jsx(Navbar, {}), _jsxs("div", { className: "w-full flex flex-col justify-center items-center px-5 sm:px-8 gap-14 py-6 pb-10 md:py-10 md:pb-16", children: [_jsx(Hero, {}), _jsx(Explore, {})] }), _jsx(Footer, {})] }));
};
export default HomePage;
