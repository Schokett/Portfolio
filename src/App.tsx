import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-950 overflow-hidden relative z-0">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src="/Portfolio/plexus.svg"
          alt="plexus-shape"
          className="absolute w-60 -right-10 mt-20 lg:w-160 lg:mt-20 lg:-right-15"
        />
        <img
          src="/Portfolio/zahnrad.png"
          alt="plexus-shape"
          className="absolute w-30 -left-10 mt-140 lg:w-60 lg:mt-170 lg:-left-20"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
