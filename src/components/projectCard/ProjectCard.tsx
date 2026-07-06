import Button from "../button/Button";

interface ProjectCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  link: string;
  linkLabel: string;
  svgIcon: React.ReactNode;
  description: string;
  technologies: string[];
  linkBtn: string;
}

function ProjekteCard({
  image,
  imageAlt,
  title,
  link,
  linkLabel,
  svgIcon,
  description,
  technologies,
  linkBtn,
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
    <div className="w-full max-w-xl xl:max-w-none xl:flex-1 xl:min-w-0 p-[1px] rounded-2xl bg-linear-to-r from-teal-900/50 to-indigo-800/50">
      <div className="h-full flex flex-col gap-3 rounded-2xl p-4  bg-slate-950 inset-shadow-[0_0_4px_theme(colors.teal.200)] pt-10">
        <img
          src={image}
          alt={imageAlt ?? title}
          className="rounded-xl border border-slate-700/50 w-full max-w-md h-64 object-cover object-top"
        />
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
