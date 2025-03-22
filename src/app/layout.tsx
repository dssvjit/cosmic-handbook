import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/pages/home.page";
import NotFoundPage from "@/app/pages/not-found.page";
import AppLayout from "@/app/layout/app.layout";
import AuthLayout from "@/app/layout/auth.layout";

function App() {
  return (
    <section className="w-full min-h-svh flex flex-col">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />

        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
}

export default App;
