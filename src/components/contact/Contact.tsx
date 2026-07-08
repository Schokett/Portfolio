import { GitHubIcon } from "../icons/GitHubIcon";
import Icons from "../icons/Icons";
import { linkedinPath, githubPath, instagramPath, chatIcon, arrowIcon } from "../icons/paths";
import { arrowRight, rocketIcon } from "../icons/paths";

function Contact() {
  return (
    <div className="">
      <section
        className="flex flex-col xl:flex-row gap-5 p-5 lg:p-5 m-5 xl:m-20 xl:mb-5 justify-center mt-20 xl:mt-50"
        id="contact">
        <div className=" w-full xl:w-8/20 p-[2px] rounded-2xl bg-linear-135 from-cyan-500/80 from-10% to-slate-500/40 to-50%">
          <div className=" backdrop-blur-lg relative overflow-hidden flex flex-col xl:gap-20 p-10 rounded-2xl bg-slate-950 shadow-[inset_8px_0_12px_-10px_theme(colors.cyan.500/40%),inset_-8px_0_12px_-10px_theme(colors.indigo.300/30%)] h-full">
            <img
              src="grid.svg"
              alt="grid-background"
              className="absolute top-5 -right-20 w-55 pointer-events-none select-none opacity-70 "
            />
            <div className="-top-20 -left-20 bg-radial from-cyan-500/25 to-transparent absolute rounded-full w-80 h-80 pointer-events-none select-none blur-3xl"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col ">
              <div className="border-b-slate-800 border-b mb-5">
                <div className="border-cyan-300 border rounded-full p-5 mb-6 w-fit">{chatIcon}</div>
                <span className="text-cyan-300 tracking-widest uppercase text-sm mb-2">
                  Kontakt
                </span>
                <h2 className="text-white text-4xl font-bold mb-5">Noch Frage?</h2>
                <div className="bg-cyan-300 w-10 h-1 rounded-full mb-5"></div>
                <p className="text-slate-400 w-min-60 xl:w-90">
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
                  <span className="break-all text-shadow-xs text-shadow-cyan-500/50 hover:text-cyan-200">
                    skrollanelenazimmermann@gmail.com
                  </span>
                  {arrowIcon}
                </a>
              </div>
              <span className="text-slate-400 font-medium tracking-widest uppercase text-sm mb-2">
                Folge mir
              </span>

              <div className="flex gap-4 mt-5 justify-start lg:mt-2 ">
                <Icons href="https://www.linkedin.com/in/skrollanhyodo" path={linkedinPath} />
                <Icons href="https://github.com/Schokett" path={githubPath} />
                <Icons href="https://www.instagram.com/hyodo.websitedesigns" path={instagramPath} />
              </div>
            </div>
            {/* content */}
          </div>
        </div>

        <div className="w-full xl:w-9/20 p-[2px] rounded-2xl bg-linear-135 from-slate-500/40 from-50% to-purple-400/30 to-70%">
          <div className="relative overflow-hidden flex flex-col min-[1800px]:flex-row xl:gap-20 p-10 min-[1800px]:justify-between min-[1800px]:items-center rounded-2xl bg-slate-950 shadow-[inset_8px_0_12px_-10px_theme(colors.teal.200/30%),inset_-8px_0_12px_-10px_theme(colors.fuchsia.500/25%)] h-full">
            <div className="backdrop-blur-lg -bottom-60 -right-70 bg-radial from-purple-500/80 to-fuchsia-500/50 absolute rounded-full w-120 h-140 pointer-events-none select-none blur-3xl opacity-40"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col">
              <div className="border-cyan-300 border rounded-full p-5 mb-6 w-fit">
                <GitHubIcon />
              </div>
              <span className="text-cyan-300 tracking-widest uppercase text-sm mb-2 flex">
                Entdecke Mehr
              </span>
              <h2 className="text-white text-4xl font-bold mb-5">Weitere Erfahrungen</h2>
              <div className="bg-cyan-300 w-10 h-1 rounded-full mb-5"></div>
              <p className="text-slate-400 w-min-60 xl:w-90">
                Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe der Zeit
                erstellt habe. Dort können Sie sich auch selbst von meinem Code überzeugen.
              </p>
              <a
                href="https://github.com/Schokett"
                className=" mt-15 xl:mt-50 mb-5 bg-linear-150 from-cyan-500/40 via-teal-500/20 to-slate-950 border border-cyan-400  rounded-2xl p-4 flex items-center text-sm gap-2 font-semibold cursor-pointer shadow-[0_0_1px_rgba(34,211,238,0.6),inset_0_0_5px_rgba(34,211,238,0.25)] hover:shadow-[0_0_5px_rgba(34,211,238,0.8),inset_0_0_6px_rgba(34,211,238,0.4)] hover:border-cyan-300 transition-all duration-300">
                <GitHubIcon className="fill-white" size="h-6 w-6 lg:h-7 lg:w-7" />
                <span className="font-medium text-slate-50">GitHub ansehen</span>
                <span className="ml-auto">{arrowIcon}</span>
              </a>
            </div>
            <div className="bottom-40 right-50  hidden lg:block bg-radial from-teal-500/80 to-teal-400/70 absolute rounded-full w-30 h-30 pointer-events-none select-none blur-3xl opacity-40"></div>
            <img
              src="./githubDesigns.svg"
              alt=""
              className="w-80 h-auto right-25 top-35 min-[1800px]:absolute hidden lg:block"
            />

            {/* content */}
          </div>
        </div>
      </section>

      <section className="grid place-items-center">
        <div className=" border-slate-800 border rounded-full w-fit p-5 backdrop-blur-lg my-auto mx-5 flex flex-col xl:flex-row gap-3 items-center ">
          <div className=" bg-slate-800 p-2 rounded-full">{rocketIcon}</div>
          <span className="text-slate-300 mr-1 text-center">
            Lust auf Zusammenarbeit? Ich freue mich auf Ihre Nachricht!
          </span>
          <a
            href="mailto:skrollanelenazimmermann@gmail.com"
            className="text-cyan-300 text-shadow-xs text-shadow-cyan-500/50 lg:text-base flex gap-3 items-center hover:text-cyan-200 transition-all duration-300">
            Kontakt aufnehmen {arrowRight}
          </a>
        </div>
      </section>
    </div>
  );
}
export default Contact;
