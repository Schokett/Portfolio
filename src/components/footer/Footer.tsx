import { Link, useLocation, useNavigate } from "react-router-dom";
import { arrowUp } from "../icons/paths";
import Button from "../button/Button";
import Icons from "../icons/Icons";
import { linkedinPath, githubPath, instagramPath } from "../icons/paths";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="border-t-2 border-transparent [border-image:linear-gradient(to_right,#2dd4bf,#22d3ee,#8b5cf6,#d946ef)_1] bg-slate-900 text-slate-400 py-6 mt-30 lg:mt-50 p-5">
      <div className="">
        <p className="text-slate-100 font-bold">Skrollan Hyodo</p>
        <p className="text-cyan-400 font-medium">Frontend Developer</p>
        <p className="mt-2 mb-8">
          Einzigartige Webseiten mit Fokus auf modernem, detailreichem Design. Mit Hingabe zu jedem
          Pixel entwickelt — direkt aus Schleswig-Holstein.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-between">
        <div className="">
          <h4 className="uppercase">Navigation</h4>
          <div className="text-slate-300 grid gap-1 mt-3 font-medium">
            <a href="#hero" onClick={handleNavClick("hero")} className="cursor-pointer">
              Start
            </a>
            <a href="#projekte" onClick={handleNavClick("projekte")} className="cursor-pointer">
              Projekte
            </a>
            <a href="#contact" onClick={handleNavClick("contact")} className="cursor-pointer">
              Kontakt
            </a>
          </div>
        </div>

        <div className="">
          <h4 className="uppercase ">Rechtliches</h4>
          <div className="text-slate-300 grid gap-1 mt-3 font-medium">
            <Link to="/impressum" className="">
              Impressum
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-5 items-center mt-5 lg:mt-5">
        <div className="flex gap-4 justify-start h-fit lg:mt-2 ">
          <Icons href="https://www.linkedin.com/in/skrollan" path={linkedinPath} />
          <Icons href="https://github.com/Skrollan" path={githubPath} />
          <Icons href="https://www.instagram.com/skrollan" path={instagramPath} />
        </div>
        <Button secendIcon={arrowUp} label="Nach oben" targetId="hero" glow={false} className="" />
      </div>
      <div className="flex justify-between border-t pt-5 border-slate-800">
        <p className="text-xs">&copy;2026 Skrollan Hyodo </p>
        <p className="">
          Gebaut mit <span className=" font-medium text-violet-500">React</span> +{" "}
          <span className="font-medium text-cyan-500">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
