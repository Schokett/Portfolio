import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rooter from "./Rooter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Rooter />
  </StrictMode>,
);
