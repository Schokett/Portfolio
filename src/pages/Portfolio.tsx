import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Icons from "../components/icons/Icons";
import { useEffect, useRef } from "react";

import ProjekteCard from "../components/projectCard/ProjectCard";
import {
  linkedinPath,
  githubPath,
  instagramPath,
  ArrowDownIcon,
  FolderIcon,
  WorldIcon,
  ChatIcon,
  arrowIcon,
} from "../components/icons/paths";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import Cube from "../components/cube/Cube";

function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const lightTopRef = useRef<HTMLDivElement>(null);
  const lightBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const update = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const totalScrollable = Math.max(rect.height - vh, 1);
      const overall = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      const topProgress = Math.min(overall / 0.6, 1);
      const bottomProgress = Math.min(Math.max((overall - 0.4) / 0.6, 0), 1);

      const distance = (rect.height - 384) * 0.7;

      if (lightTopRef.current) {
        lightTopRef.current.style.transform = `translateY(${topProgress * distance}px)`;
      }
      if (lightBottomRef.current) {
        lightBottomRef.current.style.transform = `translateY(${-bottomProgress * distance}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const WeatherDescription = `Meine mobile Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an.
            Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der
            Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste zu
            bearbeiten.`;

  const JokeDescription = `Als Kind habe ich Witze-Bücher geliebt - Jetzt habe ich meine eigene Witze-App
            entwickelt! Hierfür habe ich eine öffentliche API verwendet, um die Witze dynamisch zu
            laden und anzuzeigen. Das Design ist auf Mobilgeräte optimiert und nach SCSS Best
            Practices optimiert.`;
  const UserAppDescription = `Mit der UserApplication kannst du Benutzerprofile anlegen, bearbeiten und in einer Übersicht ansehen. 
            Jedes Profil enthält Angaben wie Name, Geburtsdatum, Geschlecht, E-Mail, Telefonnummer, Adresse, Webseite und optional ein Profilbild.`;

  return (
    <div className="font-sans">
      <section className="flex flex-col p-5 lg:p-5 ">
        <div className="p-[1px] rounded-2xl bg-linear-to-r from-teal-200/60 to-indigo-300/60">
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
                  className="rounded-full w-40 lg:mb-10 border-1 border-cyan-300 mb-10"
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
                  <Icons href="https://github.com/Skrollan" path={githubPath} />
                  <Icons href="https://www.instagram.com/skrollan" path={instagramPath} />
                </div>
                <div className="xl:flex xl:gap-10 justify-items-center-safe">
                  <Button
                    label="Projekte ansehen"
                    targetId="projekte"
                    icon={ArrowDownIcon}
                    secendIcon={FolderIcon}
                    className="mt-10 lg:mt-10"
                  />
                  <Button
                    label="Kontakt"
                    targetId="contact"
                    className="mt-10 lg:mt-10 bg-slate-950 shadow-amber-950"
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

      <section ref={sectionRef} className="relative flex flex-col mt-40 p-5 lg:p-20 " id="projekte">
        <div className=" backdrop-blur-lg rounded-3xl ">
          <div className="mb-20 lg:mb-8 text-center">
            <span className="text-teal-300 tracking-widest">• Projekte •</span>
            <h2 className="text-slate-50 text-3xl font-semibold lg:text-5xl mt-2">
              Meine Projekte
            </h2>
            <p className="text-slate-400 text-xl lg:mt-10 lg:text-xl mt-2.5">
              Eine Auswahl meiner Projekte – entwickelt mit Fokus auf sauberen Code, moderne
              Webtechnologien und praxisnahe Softwareentwicklung.
            </p>
          </div>

          <div className="flex flex-col items-center text-slate-50 gap-20 xl:flex-row xl:items-stretch lg:gap-10 lg:m-20">
            <div
              ref={lightTopRef}
              className="top-0 -left-50 bg-radial from-fuchsia-500/50 via-violet-400/30 absolute rounded-full w-96 h-96 pointer-events-none select-none blur-3xl opacity-40"></div>
            <div
              ref={lightBottomRef}
              className="bottom-0 -right-50 bg-radial from-fuchsia-500/50 via-violet-400/30 absolute rounded-full w-96 h-96 pointer-events-none select-none blur-3xl opacity-40"></div>
            <ProjekteCard
              image="/Portfolio/wetterApp.png"
              title="Mobile Wetter WebApp"
              imageAlt="WetterApp Preview Bild"
              link="https://schokett.github.io/WetterApp/"
              linkLabel="schokett.github.io/WetterApp/"
              svgIcon={WorldIcon}
              description={WeatherDescription}
              technologies={["JavaScript", "Vite", "SCSS", "BEM", "WeatherAPI"]}
              linkBtn="https://github.com/Schokett/WetterApp"
              feature="Mobile View"
            />
            <ProjekteCard
              image="/Portfolio/witzeApp.png"
              title="Kreative Witze WebApp"
              imageAlt="WitzeApp Preview Bild"
              link="https://schokett.github.io/witzeApp/"
              linkLabel="schokett.github.io/witzeApp/"
              svgIcon={WorldIcon}
              description={JokeDescription}
              technologies={["JavaScript", "Vite", "SCSS", "BEM", "AJAX"]}
              linkBtn="https://github.com/Schokett/witzeApp"
            />
            <ProjekteCard
              image="/Portfolio/userApplication.png"
              title="Nutzerverwaltung WebApp"
              imageAlt="Nutzerverwaltung WebApp Preview Bild"
              link="https://schokett.github.io/UserApplication/"
              linkLabel="schokett.github.io/UserApplication/"
              svgIcon={WorldIcon}
              description={UserAppDescription}
              technologies={["TypeScript", "Vite", "SCSS", "BEM", "React", "Responsive Design"]}
              linkBtn="https://github.com/Schokett/UserApplication"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row gap-5 p-5 lg:p-5 m-5 xl:m-20 justify-center ">
        <div className=" w-full xl:w-8/20 p-[2px] rounded-2xl bg-linear-135 from-cyan-500/80 from-10% to-slate-500/40 to-50%">
          <div className="relative overflow-hidden flex flex-col xl:gap-20 p-10 lg:flex-row lg:justify-between lg:items-center rounded-2xl bg-slate-950 shadow-[inset_8px_0_12px_-10px_theme(colors.cyan.500/40%),inset_-8px_0_12px_-10px_theme(colors.indigo.300/30%)] h-full">
            <img
              src="grid.svg"
              alt="grid-background"
              className="absolute top-5 -right-20 w-55 pointer-events-none select-none opacity-70 "
            />
            <div className="-top-20 -left-20 bg-radial from-cyan-500/25 to-transparent absolute rounded-full w-80 h-80 pointer-events-none select-none blur-3xl"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col ">
              <div className="border-b-slate-800 border-b mb-5">
                <div className="border-cyan-300 border rounded-full p-5 mb-6 w-fit">{ChatIcon}</div>
                <span className="text-cyan-300 tracking-widest uppercase text-sm mb-2">
                  Kontakt
                </span>
                <h2 className="text-white text-4xl font-bold mb-5">Noch Frage?</h2>
                <div className="bg-cyan-300 w-10 h-1 rounded-full mb-5"></div>
                <p className="text-slate-400 w-90">
                  Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die unten
                  aufgeführte E-Mail Adresse oder schauen Sie auf meinen Social-Media-Profilen
                  vorbei!
                </p>
                <a
                  href="mailto:skrollanelenazimmermann@gmail.com"
                  className="text-cyan-300  mb-8 border rounded-xl border-cyan-700 p-3 flex items-center gap-3 mt-10 lg:text-base justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="break-all">skrollanelenazimmermann@gmail.com</span>
                  {arrowIcon}
                </a>
              </div>
              <span className="text-slate-400 font-medium tracking-widest uppercase text-sm mb-2">
                Folge mir
              </span>

              <div className="flex gap-4 mt-5 justify-start lg:mt-2 ">
                <Icons href="https://www.linkedin.com/in/skrollan" path={linkedinPath} />
                <Icons href="https://github.com/Skrollan" path={githubPath} />
                <Icons href="https://www.instagram.com/skrollan" path={instagramPath} />
              </div>
            </div>
            {/* content */}
          </div>
        </div>

        <div className="w-full xl:w-9/20 p-[2px] rounded-2xl bg-linear-135 from-slate-500/40 from-50% to-purple-400/30 to-70%">
          <div className="relative overflow-hidden flex flex-col xl:gap-20 p-10 lg:flex-row lg:justify-between lg:items-center rounded-2xl bg-slate-950 shadow-[inset_8px_0_12px_-10px_theme(colors.teal.200/30%),inset_-8px_0_12px_-10px_theme(colors.fuchsia.500/25%)] h-full">
            <div className="-bottom-60 -right-70 bg-radial from-purple-500/80 to-fuchsia-500/50 absolute rounded-full w-120 h-140 pointer-events-none select-none blur-3xl opacity-40"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col">
              <div className="border-cyan-300 border rounded-full p-5 mb-6 w-fit">
                <GitHubIcon />
              </div>
              <span className="text-cyan-300 tracking-widest uppercase text-sm mb-2">
                Entdecke Mehr
              </span>
              <h2 className="text-white text-4xl font-bold mb-5">Weitere Erfahrungen</h2>
              <div className="bg-cyan-300 w-10 h-1 rounded-full mb-5"></div>
              <p className="text-slate-400 w-90">
                Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe der Zeit
                erstellt habe. Dort können Sie sich auch selbst von meinem Code überzeugen.
              </p>
              <a
                href="mailto:skrollanelenazimmermann@gmail.com"
                className="mt-50 mb-5 bg-linear-150 from-teal-500/50 via-cyan-500/20 to-slate-950 border border-teal-400  rounded-2xl p-4 flex items-center text-sm gap-2 font-semibold cursor-pointer shadow-[0_0_1px_rgba(34,211,238,0.6),inset_0_0_5px_rgba(34,211,238,0.25)] hover:shadow-[0_0_5px_rgba(34,211,238,0.8),inset_0_0_6px_rgba(34,211,238,0.4)] hover:border-cyan-300 transition-all duration-300">
                <GitHubIcon className="fill-white" size="h-6 w-6 lg:h-7 lg:w-7" />
                <span className="font-medium text-slate-50">GitHub ansehen</span>
                <span className="ml-auto">{arrowIcon}</span>
              </a>
            </div>
            <div className="bottom-40 right-50 bg-radial hidden lg:block from-teal-500/80 to-teal-400/70 absolute rounded-full w-30 h-30 pointer-events-none select-none blur-3xl opacity-40"></div>
            <img
              src="./githubDesigns.svg"
              alt=""
              className="w-80 h-auto right-25 top-35 xl:absolute hidden lg:block"
            />

            {/* content */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Portfolio;
