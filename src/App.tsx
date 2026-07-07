import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useRef } from "react";

function App() {
  const plexusRef = useRef<HTMLImageElement>(null);
  const gearRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frameId: number;

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const rotation = window.scrollY * 0.05; // Grad pro gescrolltem Pixel
        const scale = 1 + Math.min(window.scrollY * 0.00005, 0.08); // wächst mit dem Scrollen, max. +8%

        if (gearRef.current) {
          gearRef.current.style.transform = `rotate(${rotation}deg)`; // im Uhrzeigersinn
        }
        if (plexusRef.current) {
          plexusRef.current.style.transform = `scale(${scale})`; // wächst beim Scrollen, schrumpft wieder beim Hochscrollen
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="bg-slate-950 overflow-hidden relative z-0">
      <ScrollRestoration />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          ref={plexusRef}
          src="/Portfolio/plexus.svg"
          alt="plexus-shape"
          className="absolute w-110 -right-40 top-10 lg:w-120 lg:top-10 lg:-right-40 opacity-60 will-change-transform"
        />
        <img
          ref={gearRef}
          src="/Portfolio/gearwheel.png"
          alt="gearwheel"
          className="absolute w-70 -left-25 -bottom-35 lg:w-90 lg:-bottom-30 lg:-left-25 opacity-35 will-change-transform"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
