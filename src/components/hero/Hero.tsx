import Button from "../button/Button";
import Cube from "../cube/Cube";
import Icons from "../icons/Icons";
import { linkedinPath, githubPath, instagramPath, arrowDownIcon, folderIcon } from "../icons/paths";

function Hero() {
  return (
    <section className="flex flex-col p-5 lg:p-5" id="hero">
      <div className="p-px rounded-2xl bg-linear-to-r from-teal-200/60 to-indigo-300/60">
        <div className="relative overflow-hidden flex flex-col xl:gap-20 p-10 lg:flex-row lg:justify-between lg:items-center rounded-2xl bg-slate-950 inset-shadow-[0_0_5px_theme(colors.teal.200)]">
          <img
            src="cirle.svg"
            alt="cirle-background"
            className="absolute -bottom-15 -left-25 w-55 pointer-events-none select-none opacity-75"
          />
          <img
            src="grid.svg"
            alt="grid-background"
            className="absolute top-5 -left-20 w-55 pointer-events-none select-none opacity-70"
          />
          <img
            src="polygons.png"
            alt="polygons-background"
            className="absolute top-5 -right-45 w-70 pointer-events-none select-none opacity-40"
          />
          <div className="top-20 -left-50 bg-radial from-fuchsia-500/50 via-violet-400/30 absolute rounded-full w-96 h-96 pointer-events-none select-none blur-3xl opacity-40"></div>
          <div className="-bottom-20 -right-50 bg-radial from-fuchsia-500/50 via-violet-400/30 absolute rounded-full w-96 h-96 pointer-events-none select-none blur-3xl opacity-40"></div>

          {/* content */}
          {/* Linke Seite */}
          <div className="xl:w-1/20"></div>
          <div className="xl:w-2/5">
            {/* Bild */}
            <div className="place-items-center xl:place-items-start">
              <img
                src="/Portfolio/portrae.jpeg"
                alt=""
                className="rounded-full w-40 lg:mb-10 border border-cyan-300 mb-10"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(59,130,246,0.7)) drop-shadow(0 0 1px rgba(45,212,191,0.6)) drop-shadow(0 0 30px rgba(45,212,191,0.4))",
                }}></img>
            </div>

            {/* Überschrift */}
            <div className="text-2xl text-slate-50 lg:text-4xl text-center xl:text-start">
              <h1 className="text-2xl lg:text-4xl font-medium">Skrollan</h1>
              <span
                className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-emerald-500 to-cyan-300 bg-clip-text text-transparent"
                style={{
                  filter:
                    "drop-shadow(0 0 4px rgba(16,185,129,0.5)) drop-shadow(0 0 15px rgba(103,232,249,0.4))",
                }}>
                Frontend Developerin.
              </span>
            </div>

            {/* badges */}
            <div className="flex flex-wrap justify-center mt-5 gap-1 xl:justify-start">
              <div className="border border-slate-700 rounded-lg flex p-2 gap-2 items-center">
                <img
                  src="/Portfolio/330px-React-icon.svg.webp"
                  alt="react-logo"
                  className=" w-6 h-6 object-contain"
                />
                <span className="text-xs text-slate-200">React</span>
              </div>
              <div className="border border-slate-700 rounded-lg flex p-2 gap-2 items-center">
                <img
                  src="/Portfolio/ts-logo-128.png"
                  alt="typescript-logo"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-xs text-slate-200">TypeScript</span>
              </div>
              <div className="border border-slate-700 rounded-lg flex p-2 gap-2 items-center">
                <img
                  src="/Portfolio/tailwindcss-mark.0~s.iziag2xd..svg"
                  alt="tailwind-logo"
                  className=" w-6 h-6 object-contain"
                />
                <span className="text-xs text-slate-200">Tailwind CSS</span>
              </div>
              <div className="border border-slate-700 rounded-lg flex p-2 gap-2 items-center">
                <img
                  src="/Portfolio/js.png"
                  alt="javascript-logo"
                  className=" w-6 h-6 object-contain"
                />
                <span className="text-xs text-slate-200">JavaScript</span>
              </div>
            </div>

            {/* beschreibung */}
            <div className="border-t border-b p-7 mt-10  border-slate-700 ">
              <p className="text-sm text-slate-400 w-full lg:text-xl ">
                Ich bin eine Softwareentwicklerin mit Schwerpunkt auf den Bereich
                Frontend-Web-Development. Ich liebe Es neue Dinge zu gestalten und Ideen in echte
                Projekte umzusetzen.
              </p>
            </div>

            {/* icons + Btn */}
            <div className="flex flex-col items-center xl:items-start xl:mb-4  xl:gap-4 lg:mt-15 ">
              <div className="flex gap-4 mt-15 justify-center text-center lg:mt-0 ">
                <Icons href="https://www.linkedin.com/in/skrollan" path={linkedinPath} />
                <Icons href="https://github.com/Schokett" path={githubPath} />
                <Icons href="https://www.instagram.com/hyodo.websitedesigns" path={instagramPath} />
              </div>
              <div className="xl:flex xl:gap-10 justify-items-center-safe">
                <Button
                  label="Projekte ansehen"
                  targetId="projekte"
                  icon={arrowDownIcon}
                  secendIcon={folderIcon}
                  className="mt-10 lg:mt-10"
                />
                <Button
                  label="Kontakt"
                  targetId="contact"
                  className="mt-10 lg:mt-10 bg-none shadow-amber-950"
                />
              </div>
            </div>
          </div>
          {/* Rechte Seite */}
          <div className="hidden xl:flex xl:w-3/5 justify-center">
            <Cube />
          </div>
          {/* content end */}
        </div>
      </div>
    </section>
  );
}
export default Hero;
