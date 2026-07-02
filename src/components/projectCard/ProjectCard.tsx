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
    <div className="flex flex-col gap-3 items-start">
      <img
        src={image}
        alt={imageAlt ?? title}
        className="w-full max-w-md h-64 object-cover object-top"
      />
      <h2 className="font-extrabold text-3xl">{title}</h2>
      <a href={link} className="text-blue-500 font-bold flex items-center gap-2">
        {linkLabel}
        {svgIcon}
      </a>
      <p className="text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tag) => (
          <div key={tag} className="bg-slate-700 p-1 px-2.5 text-xs rounded-full">
            {tag}
          </div>
        ))}
      </div>
      <Button
        label="Code ansehen"
        href={linkBtn}
        icon={ArrowToRightIcon}
        className="mt-10 lg:mt-12"
      />
    </div>
  );
}
export default ProjekteCard;
