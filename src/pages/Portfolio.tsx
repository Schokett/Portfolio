import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Icons from "../components/icons/Icons";
import ProjekteCard from "../components/projectCard/ProjectCard";
import { linkedinPath, githubPath, instagramPath } from "../components/icons/paths";

function Portfolio() {
  const LinkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
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
  const ArrowDownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="size-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
      />
    </svg>
  );
  return (
    <div className="font-sans">
      <section className="flex flex-col p-5  lg:p-20 ">
        <div className="p-[1px] rounded-2xl bg-linear-to-r from-teal-200 to-indigo-300">
          <div className="flex lg:flex-col lg:gap-20 p-10 lg:flex-row lg:justify-between lg:items-center rounded-2xl bg-slate-950 inset-shadow-[0_0_5px_theme(colors.teal.200)]">
            <div className="items-center flex flex-col text-center lg:text-left lg:items-start">
              <img
                src="/Portfolio/portrae.jpeg"
                alt=""
                className="rounded-full w-40 lg:mb-10 border-1 border-cyan-300"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(59,130,246,0.7)) drop-shadow(0 0 1px rgba(45,212,191,0.6)) drop-shadow(0 0 30px rgba(45,212,191,0.4))",
                }}></img>
              <div className="text-2xl text-slate-50 mt-10 lg:text-4xl lg:mt-10 ">
                <h1 className="text-3xl lg:text-5xl">
                  Skrollan
                  <br />
                  <span
                    className="font-bold bg-linear-to-r from-emerald-500 to-cyan-300 bg-clip-text text-transparent"
                    style={{
                      filter:
                        "drop-shadow(0 0 2px rgba(59,130,246,0.7)) drop-shadow(0 0 1px rgba(45,212,191,0.6)) drop-shadow(0 0 30px rgba(45,212,191,0.4))",
                    }}>
                    Frontend Developerin.
                  </span>
                </h1>

                <div className="grid justify-center grid-cols-2 sm:grid-cols-4 mt-5 gap-1">
                  <div className="border-1 border-slate-700 rounded-lg flex p-2 gap-2  w-full mx-auto justify-center items-center ">
                    <img
                      src="/Portfolio/330px-React-icon.svg.webp"
                      alt="react-logo"
                      className=" w-6 h-6 object-contain"
                    />
                    <span className="text-xs text-slate-200">React</span>
                  </div>
                  <div className="border-1 border-slate-700 rounded-lg flex p-2 gap-2  w-full mx-auto justify-center items-center ">
                    <img
                      src="/Portfolio/ts-logo-128.png"
                      alt="typescript-logo"
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-xs text-slate-200">TypeScript</span>
                  </div>
                  <div className="border-1 border-slate-700 rounded-lg flex p-2 gap-2  w-full mx-auto justify-center items-center ">
                    <img
                      src="/Portfolio/tailwindcss-mark.0~s.iziag2xd..svg"
                      alt="tailwind-logo"
                      className=" w-6 h-6 object-contain"
                    />
                    <span className="text-xs text-slate-200">Tailwind CSS</span>
                  </div>
                  <div className="border-1 border-slate-700 rounded-lg flex p-2 gap-2 w-full mx-auto justify-center items-center ">
                    <img
                      src="/Portfolio/js.png"
                      alt="javascript-logo"
                      className=" w-6 h-6 object-contain"
                    />
                    <span className="text-xs text-slate-200">JavaScript</span>
                  </div>
                </div>

                <div className="border-t-1 border-b-1 p-7 mt-10 lg:p-14 border-slate-700 ">
                  <p className="text-sm text-slate-400 w-full lg:text-xl ">
                    Ich bin eine Softwareentwicklerin mit Schwerpunkt auf den Bereich
                    Frontend-Web-Development. Ich liebe Es neue Dinge zu gestalten und Ideen in
                    echte Projekte umzusetzen.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start lg:mb-4  lg:gap-4  lg:mt-15">
                  <div className="flex gap-4 mt-15 justify-center text-center lg:mt-0">
                    <Icons href="https://www.linkedin.com/in/skrollan" path={linkedinPath} />
                    <Icons href="https://github.com/Skrollan" path={githubPath} />
                    <Icons href="https://www.instagram.com/skrollan" path={instagramPath} />
                  </div>
                  <Button
                    label="Projekte ansehen"
                    targetId="projekte"
                    icon={ArrowDownIcon}
                    className="mt-10 lg:mt-10"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-200 xl:w-140 "></div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-40 p-5 lg:p-20 " id="projekte">
        <div className=" backdrop-blur-lg rounded-2xl ">
          <div className="text-center mb-20 lg:mb-8">
            <h2 className="text-slate-50 text-2xl font-semibold lg:text-5xl">Meine Projekte</h2>
            <p className="text-slate-400 text-base lg:mt-10 lg:text-xl">
              Hier sind einige Auszüge aus meiner Arbeit, sodass Sie sich ein Bild meiner
              Fähigkeiten und Erfahrungen machen können.
            </p>
          </div>
          <div className="flex flex-col text-slate-50 gap-20 lg:flex-row lg:gap-10 lg:m-20">
            <ProjekteCard
              image="/Portfolio/wetterApp.png"
              title="Mobile Wetter WebApp"
              imageAlt="WetterApp Preview Bild"
              link="https://schokett.github.io/WetterApp/"
              linkLabel="schokett.github.io/WetterApp/"
              svgIcon={LinkIcon}
              description={WeatherDescription}
              technologies={["HTML", "JavaScript", "Vite", "SCSS", "BEM", "WeatherAPI"]}
              linkBtn="https://github.com/Schokett/WetterApp"
            />
            <ProjekteCard
              image="/Portfolio/witzeApp.png"
              title="Kreative Witze WebApp"
              imageAlt="WitzeApp Preview Bild"
              link="https://schokett.github.io/witzeApp/"
              linkLabel="schokett.github.io/witzeApp/"
              svgIcon={LinkIcon}
              description={JokeDescription}
              technologies={["HTML", "JavaScript", "Vite", "SCSS", "BEM", "AJAX"]}
              linkBtn="https://github.com/Schokett/witzeApp"
            />
            <ProjekteCard
              image="/Portfolio/userApplication.png"
              title="Nutzerverwaltung WebApp"
              imageAlt="Nutzerverwaltung WebApp Preview Bild"
              link="https://schokett.github.io/UserApplication/"
              linkLabel="schokett.github.io/UserApplication/"
              svgIcon={LinkIcon}
              description={UserAppDescription}
              technologies={[
                "HTML",
                "TypeScript",
                "Vite",
                "SCSS",
                "BEM",
                "React",
                "Responsive Design",
              ]}
              linkBtn="https://github.com/Schokett/UserApplication"
            />
          </div>
        </div>
      </section>

      <section className="lg:flex lg:m-20 lg:gap-10">
        <div className=" text-slate-50 flex flex-col mt-40 justify-center items-center text-center p-8 order-2 backdrop-blur-lg rounded-2xl">
          <h2 className="text-3xl font-bold lg:text-4xl">Weitere Erfahrungen</h2>
          <p className="text-slate-400 text-base mt-5 lg:text-xl">
            Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe der Zeit erstellt
            habe. Dort können Sie sich auch selbst von meinem Code überzeugen.
          </p>
          <a
            href="https://github.com/Schokett"
            className="bg-blue-600 rounded-lg p-3 mt-10 flex gap-1 w-full text-sm justify-center items-center font-semibold lg:text-xl text-slate-50">
            GitHub ansehen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>

        <div className="text-slate-50 flex flex-col mt-40 p-8 order-1">
          <h2 className="font-bold text-3xl lg:text-4xl">Noch Fragen?</h2>
          <p className="text-slate-400 mt-5 lg:text-xl">
            Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die unten aufgeführte
            E-Mail Adresse oder schauen Sie auf meinen Social-Media-Profilen vorbei!
          </p>
          <a
            href="mailto:skrollanelenazimmermann@gmail.com"
            className="text-blue-500 flex items-center gap-2 mt-5 font-bold lg:text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            skrollanelenazimmermann@gmail.com
          </a>

          <div className="flex gap-4 mt-5 justify-start lg:mt-10">
            <Icons href="https://www.linkedin.com/in/skrollan" path={linkedinPath} />
            <Icons href="https://github.com/Skrollan" path={githubPath} />
            <Icons href="https://www.instagram.com/skrollan" path={instagramPath} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Portfolio;
