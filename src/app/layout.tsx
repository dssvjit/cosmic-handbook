import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import GuidesPage from "@/app/pages/guides.page";
import MeetNxtgenPage from "@/app/pages/meet-nxtgen.page";
import HandbookLayout from "@/app/layout/handbook.layout";
import ResourcePage from "@/app/pages/resource.page";
import WhatIsNxtgen from "@/components/meet-nxtgen/what-is-nxtgen";

function App() {
  return (
    <section className="w-full min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight font-dm-sans">
      <div className="container min-h-svh flex flex-col justify-start items-center p-0 m-0 bg-midnight text-app-secondary-dark">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/handbook" element={<HandbookLayout />}>
            <Route
              path="/handbook/meet-nxtgen/what-is-nxtgen"
              element={<WhatIsNxtgen />}
            />
            <Route
              path="/handbook/meet-nxtgen/:topic"
              element={<MeetNxtgenPage />}
            />
            <Route path="/handbook/guides/:topic" element={<GuidesPage />} />
            <Route
              path="/handbook/resource/:tech/:topic"
              element={<ResourcePage />}
            />
          </Route>
        </Routes>
      </div>
    </section>
  );
}

export default App;
