import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
    const navigate = useNavigate();
    return (_jsxs("section", { className: "w-full h-svh flex flex-col justify-center items-center gap-5", children: [_jsx(Logo, { withText: true, className: "w-24" }), _jsxs("div", { className: "flex flex-col justify-center items-center gap-1", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold", children: "404" }), _jsx("p", { className: "text-lg", children: "Page not found" })] }), _jsx(Button, { onClick: () => navigate("/"), variant: "secondary", children: "Back to Home" })] }));
};
export default NotFoundPage;
