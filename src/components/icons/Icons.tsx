import { useId } from "react";

type SocialIconProps = {
  href: string;
  path: string;
  gradientFrom?: string;
  gradientTo?: string;
};

function Icons({ href, path, gradientFrom = "#a855f7", gradientTo = "#2dd4bf" }: SocialIconProps) {
  const gradientId = useId();

  return (
    <div className="group relative flex items-center justify-center bg-slate-800 rounded-xl p-3 transition hover:bg-slate-700">
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          rx="22"
          strokeWidth="4"
          strokeDasharray="350"
          strokeDashoffset="350"
          vectorEffect="non-scaling-stroke"
          stroke={`url(#${gradientId})`}
          className="transition-[stroke-dashoffset] duration-700 group-hover:[stroke-dashoffset:0]"
        />
      </svg>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center">
        <svg
          className="h-6 w-6 lg:h-8 lg:w-8 fill-cyan-400 transition hover:fill-cyan-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d={path} />
        </svg>
      </a>
    </div>
  );
}

export default Icons;
