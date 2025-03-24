import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import HandBookPage from "@/app/pages/handbook.page";
function App() {
    return (_jsx("section", { className: "w-full min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight font-dm-sans", children: _jsx("div", { className: "container min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight text-app-secondary-dark", children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "/handbook", element: _jsx(HandBookPage, {}) })] }) }) }));
}
export default App;
