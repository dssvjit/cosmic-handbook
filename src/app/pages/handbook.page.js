import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DocsHandbook from "@/components/handbook/docs.handbook";
import SidebarHandbook from "@/components/handbook/sidebar.handbook";
const HandBookPage = () => {
    return (_jsxs("section", { className: "w-full h-svh flex justify-between items-center", children: [_jsx(SidebarHandbook, {}), _jsx(DocsHandbook, {})] }));
};
export default HandBookPage;
