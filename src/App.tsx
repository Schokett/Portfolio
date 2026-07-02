import "./App.css";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Icons from "./components/icons/Icons";
import ProjekteCard from "./components/projectCard/ProjectCard";

function App() {
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
    <div className="font-sans bg-slate-950">
      <section className="flex flex-col p-5 lg:p-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:items-center">
          <div className="">
            <img src="./portrae.jpeg" alt="" className="rounded-full w-34 mb-5 lg:mb-10" />
            <span className="text-sm mt-5 text-slate-200 lg:text-2xl lg:mt-10">
              Hi, ich bin
              <span className="text-slate-50 font-bold"> Skrollan.</span>
            </span>
            <div className="text-2xl text-slate-50 mt-5 lg:text-4xl lg:mt-10">
              <h1 className="text-3xl lg:text-5xl">
                Ihre neue
                <br />
                <span className="font-bold bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  Frontend Developerin
                </span>
                .
              </h1>

              <p className="text-sm mt-6 max-w-prose text-slate-400 w-full lg:text-xl lg:mt-12">
                Mein Name ist Skrollan Elena Hyodo und ich bin eine Softwareentwicklerin mit
                Schwerpunkt auf den Bereich Frontend-Web-Development und komme aus dem Norden
                Deutschlands. Ich liebe Es neue Dinge zu gestalten und meine Ideen in die Tat
                umzusetzen.
              </p>

              <Icons />
              <Button label="Projekte ansehen" targetId="projekte" icon={ArrowDownIcon} />
            </div>
          </div>
          <div className="lg:w-200 xl:w-140">
            <img src="./files_techs.webp" alt="Web Technologien" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-40 p-5" id="projekte">
        <div className="text-center mb-20 lg:mb-8">
          <h2 className="text-slate-50 text-2xl font-semibold lg:text-5xl">Meine Projekte</h2>
          <p className="text-slate-400 text-base lg:mt-10 lg:text-xl">
            Hier sind einige Auszüge aus meiner Arbeit, sodass Sie sich ein Bild meiner Fähigkeiten
            und Erfahrungen machen können.
          </p>
        </div>
        <div className="flex flex-col text-slate-50 gap-20 lg:flex-row lg:gap-10 lg:m-20">
          <ProjekteCard
            image="./wetterApp.png"
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
            image="./witzeApp.png"
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
            image="./userApplication.png"
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
      </section>

      <section className="lg:flex lg:m-20 lg:gap-10">
        <div className="bg-slate-900 text-slate-50 flex flex-col mt-40 justify-center items-center text-center p-8 rounded-lg order-2">
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
          <Icons />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
