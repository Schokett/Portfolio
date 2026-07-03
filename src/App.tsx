import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-950 overflow-hidden relative z-0">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src="/Portfolio/plexus.svg"
          alt="plexus-shape"
          className="absolute w-110 -right-40 top-10 lg:w-120 lg:top-10 lg:-right-40 opacity-60"
        />
        <img
          src="/Portfolio/gearwheel.png"
          alt="gearwheel"
          className="absolute w-70 -left-25 -bottom-35 lg:w-90 lg:-bottom-30 lg:-left-25 opacity-35"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
