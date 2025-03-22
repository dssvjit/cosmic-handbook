import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import App from "@/app/layout";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
