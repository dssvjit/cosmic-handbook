import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import HandBookPage from "@/app/pages/handbook.page";
import MarkdownHandbook from "@/components/handbook/markdown.handbook";

function App() {
  return (
    <section className="w-full min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight font-dm-sans">
      <div className="container min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight text-app-secondary-dark">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/handbook" element={<HandBookPage />}>
            <Route path="/handbook/:name" element={<MarkdownHandbook />} />
          </Route>
        </Routes>
      </div>
    </section>
  );
}

export default App;
