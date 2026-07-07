import { useEffect, useRef } from "react";
import ProjekteCard from "../projectCard/ProjectCard";
import { worldIcon } from "../icons/paths";
import { useLocation } from "react-router-dom";

function Projects() {
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

  const sectionRef = useRef<HTMLElement>(null);
  const lightTopRef = useRef<HTMLDivElement>(null);
  const lightBottomRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

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
  return (
    <section ref={sectionRef} className="relative flex flex-col mt-40 p-5 lg:p-20 " id="projekte">
      <div className=" backdrop-blur-lg rounded-3xl ">
        <div className="mb-20 lg:mb-8 text-center">
          <span className="text-teal-300 tracking-widest">• Projekte •</span>
          <h2 className="text-slate-50 text-3xl font-semibold lg:text-5xl mt-2">Meine Projekte</h2>
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
            svgIcon={worldIcon}
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
            svgIcon={worldIcon}
            description={JokeDescription}
            technologies={["JavaScript", "Vite", "SCSS", "BEM", "AJAX"]}
            linkBtn="https://github.com/Schokett/witzeApp"
          />
          <ProjekteCard
            image="/Portfolio/userApplication.png"
            title="Nutzerverwaltung WebApp"
            imageAlt="Nutzerverwaltung WebApp Preview Bild"
            link="https://schokett.github.io/UserApplication/"
            svgIcon={worldIcon}
            description={UserAppDescription}
            technologies={["TypeScript", "Vite", "SCSS", "BEM", "React", "Responsive Design"]}
            linkBtn="https://github.com/Schokett/UserApplication"
          />
        </div>
      </div>
    </section>
  );
}
export default Projects;
