import "./App.css";

function App() {
  return (
    <div className="font-sans bg-slate-950">
      <section className="flex flex-col mt-15 p-5 lg:m-20">
        <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:items-center">
          <div className="">
            <img src="/portrae.jpeg" alt="" className="rounded-full w-34 mb-5 lg:mb-10" />
            <span className="text-sm mt-5 text-slate-200 lg:text-2xl lg:mt-10">
              Hi, ich bin
              <span className="text-slate-50 font-bold">Skrollan.</span>
            </span>
            <div className="text-2xl text-slate-50 mt-5 lg:text-4xl lg:mt-10">
              {/* prettier-ignore */}
              <h1 className="text-3xl lg:text-5xl">
          Ihre neue<br />
          <span
            className="font-bold bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Frontend Developerin</span>.
        </h1>

              <p className="text-sm mt-6 max-w-prose text-slate-400 w-full lg:text-xl lg:mt-12">
                Mein Name ist Skrollan Elena Hyodo und ich bin eine Softwareentwicklerin mit
                Schwerpunkt auf den Bereich Frontend-Web-Development und komme aus dem Norden
                Deutschlands. Ich liebe Es neue Dinge zu gestalten und meine Ideen in die Tat
                umzusetzen.
              </p>

              <div className="flex gap-8 mt-7 lg:mt-10">
                <a href="https://www.linkedin.com/" className="">
                  <svg
                    className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://github.com/Schokett" className="">
                  <svg
                    className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hyodo.websitedesigns/" className="">
                  <svg
                    className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <button
                onClick={() => document.getElementById("projekte")!.scrollIntoView()}
                className="bg-blue-600 rounded-lg p-3 mt-10 flex items-center text-sm gap-2 font-semibold lg:mt-12 cursor-pointer">
                Projekte ansehen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:w-200 xl:w-140">
            <img src="/files_techs.webp" alt="Web Technologien" className="max-w-full h-auto" />
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
          <div className="flex flex-col gap-3 items-start">
            <img
              src="/wetterApp.png"
              alt=""
              className="w-full max-w-md h-64 object-cover object-top"
            />
            <h2 className="font-extrabold text-3xl">Mobile Wetter App</h2>
            <a
              href="https://schokett.github.io/WetterApp/"
              className="text-blue-500 font-bold flex items-center gap-2">
              schokett.github.io/WetterApp/
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
            </a>
            <p className="text-slate-400">
              Meine mobile Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an.
              Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der
              Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste
              zu bearbeiten.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">HTML</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">JavaScript</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">Vite</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">SCSS</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">BEM</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">WeatherAPI</div>
            </div>
            <a
              href="https://github.com/Schokett/WetterApp"
              className="bg-blue-600 rounded-lg p-3 mt-5 flex gap-1 items-center text-sm text-slate-50">
              Code ansehen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <img
              src="/witzeApp.png"
              alt=""
              className="w-full max-w-md h-64 object-cover object-top"
            />
            <h2 className="font-extrabold text-3xl">Kreative Witze App</h2>
            <a
              href="https://schokett.github.io/witzeApp/"
              className="text-blue-500 font-bold flex items-center gap-2">
              schokett.github.io/WetterApp/
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
            </a>
            <p className="text-slate-400">
              Als Kind habe ich Witze-Bücher geliebt - Jetzt habe ich meine eigene Witze-App
              entwickelt! Hierfür habe ich eine öffentliche API verwendet, um die Witze dynamisch zu
              laden und anzuzeigen. Das Design ist auf Mobilgeräte optimiert und nach SCSS Best
              Practices optimiert.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">HTML</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">JavaScript</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">Vite</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">SCSS</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">BEM</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">AJAX</div>
            </div>
            <a
              href="https://github.com/Schokett/witzeApp"
              className="bg-blue-600 rounded-lg p-3 mt-5 flex gap-1 items-center text-sm text-slate-50">
              Code ansehen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-5 items-start">
            <img
              src="/userApplication.png"
              alt=""
              className="w-full max-w-md h-64 object-cover object-top"
            />
            <h2 className="font-extrabold text-3xl">Nutzerverwaltung WebApp</h2>
            <a
              href="https://schokett.github.io/UserApplication/"
              className="text-blue-500 font-bold flex items-center gap-2">
              schokett.github.io/UserApplication/
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
            </a>
            <p className="text-slate-400">
              Meine mobile Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an.
              Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der
              Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste
              zu bearbeiten.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">HTML</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">Typescript</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">Responsive Design</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">SCSS</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">BEM</div>
              <div className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">React</div>
            </div>
            <a
              href="https://github.com/Schokett/UserApplication"
              className="bg-blue-600 rounded-lg p-3 mt-5 flex gap-1 items-center text-sm text-slate-50">
              Code ansehen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
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
          <div className="flex gap-8 mt-7">
            <a href="https://www.linkedin.com/" className="">
              <svg
                className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/Schokett" className="">
              <svg
                className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/hyodo.websitedesigns/" className="">
              <svg
                className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-6 mt-30 lg:mt-50">
        <div className="container mx-auto px-4 flex justify-center items-center gap-5 text-xs lg:text-md">
          <a href="./impressum.html" className="">
            Impressum
          </a>
          <p>&copy; Skrollan Elena Hyodo 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
