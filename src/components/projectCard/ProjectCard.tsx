import Button from "../button/Button";

interface ProjectCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  link: string;
  svgIcon: React.ReactNode;
  description: string;
  technologies: string[];
  linkBtn: string;
  feature?: string;
}

function ProjekteCard({
  image,
  imageAlt,
  title,
  link,
  svgIcon,
  description,
  technologies,
  linkBtn,
  feature,
}: ProjectCardProps) {
  const ArrowToRightIcon = (
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
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
  return (
    <div
      className="w-full max-w-xl xl:max-w-none xl:flex-1 xl:min-w-0 p-[2px] rounded-2xl"
      style={{
        background:
          "radial-gradient(ellipse 500px 400px at -5% -10%, rgba(170,210,255,0.7), rgba(99,102,241,0.25) 40%, rgba(51,65,85,0.4) 75%)",
      }}>
      <div className="relative overflow-hidden h-full flex flex-col gap-3 rounded-2xl p-4 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 500px at -10% -20%, rgba(148,196,255,0.22), rgba(148,163,255,0.08) 40%, transparent 65%)",
          }}
        />

        <img
          src={image}
          alt={imageAlt ?? title}
          className="rounded-xl border border-slate-700/50 w-full max-w-md h-64 object-cover object-top mx-auto"
        />
        {feature && (
          <div
            className="inline-flex items-center rounded-full w-fit px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-200 border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 via-cyan-400/12 to-blue-400/15 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,.25),0_0_30px_rgba(34,211,238,.12)] transition-all duration-300"
            style={{
              textShadow: "0 0 8px rgba(45,212,191,.6)",
            }}>
            {feature}
          </div>
        )}
        <h2 className="font-extrabold text-3xl">{title}</h2>
        <a
          href={link}
          className="text-sky-500 font-medium flex gap-2 items-start"
          style={{
            textShadow: "0 0 2px rgba(56,189,248,0.8), 0 0 20px rgba(56,189,248,0.4)",
          }}>
          {svgIcon}
          <span className="font-medium">Live Demo</span>
        </a>
        <p className="text-slate-400 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tag) => (
            <div key={tag} className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">
              {tag}
            </div>
          ))}
        </div>
        <Button
          label="Repository ansehen"
          href={linkBtn}
          icon={ArrowToRightIcon}
          className="mt-6 bg-none text-slate-200 w-full justify-center"
        />
      </div>
    </div>
  );
}
export default ProjekteCard;
