import { useEffect, useRef } from "react";

const faceClasses =
  "absolute inset-0 border border-cyan-300/60 bg-teal-400/5 shadow-[inset_0_0_15px_rgba(34,211,238,0.3)]";

const REST_SECONDS = 5; // Würfel bleibt zu (5rem)
const OPEN_SECONDS = 5; // 5rem → 7rem
const CLOSE_SECONDS = 30; // 7rem → 5rem
const CYCLE = OPEN_SECONDS + CLOSE_SECONDS;

// weiche S-Kurve: 0 → 1
const ease = (x: number) => (1 - Math.cos(Math.PI * x)) / 2;

export default function Cube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    let frameId: number;

    const spin = (time: number) => {
      angle = (angle + 0.25) % 360;

      const t = (time / 1000) % CYCLE;
      let progress: number;
      if (t < REST_SECONDS) {
        progress = 0; // Phase 1: Pause, Würfel bleibt geschlossen
      } else if (t < REST_SECONDS + OPEN_SECONDS) {
        progress = ease((t - REST_SECONDS) / OPEN_SECONDS); // Phase 2: öffnen
      } else {
        progress = 1 - ease((t - REST_SECONDS - OPEN_SECONDS) / CLOSE_SECONDS); // Phase 3: schließen
      }

      const gap = 5 + progress * 2;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(-20deg) rotateY(${angle}deg)`;
        cubeRef.current.style.setProperty("--gap", `${gap}rem`);
      }
      frameId = requestAnimationFrame(spin);
    };
    frameId = requestAnimationFrame(spin);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="perspective-[700px]">
      <div ref={cubeRef} className="relative size-40 transform-3d [--gap:5rem]">
        <div className={`${faceClasses} [transform:translateZ(var(--gap))]`} />
        <div className={`${faceClasses} [transform:rotateY(180deg)_translateZ(var(--gap))]`} />
        <div className={`${faceClasses} [transform:rotateY(90deg)_translateZ(var(--gap))]`} />
        <div className={`${faceClasses} [transform:rotateY(-90deg)_translateZ(var(--gap))]`} />
        <div className={`${faceClasses} [transform:rotateX(90deg)_translateZ(var(--gap))]`} />
        <div className={`${faceClasses} [transform:rotateX(-90deg)_translateZ(var(--gap))]`} />
      </div>
    </div>
  );
}
