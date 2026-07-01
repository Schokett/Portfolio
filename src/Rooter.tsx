import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Impressum from "./pages/Impressum";

function Rooter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rooter;
