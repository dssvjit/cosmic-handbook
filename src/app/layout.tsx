import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";

function App() {
  return (
    <section className="w-full min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight font-dm-mono">
      <div className="container min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
