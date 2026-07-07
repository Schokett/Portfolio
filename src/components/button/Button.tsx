import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  targetId?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  secendIcon?: ReactNode;
}

function Button({ label, targetId, href, onClick, className = "", icon, secendIcon }: ButtonProps) {
  const navigate = useNavigate();

  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (isExternal) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        navigate(href);
      }
    } else if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-linear-150 from-cyan-500/50 via-teal-500/20 to-slate-950 border border-cyan-400 text-slate-100 rounded-lg p-3 flex items-center text-sm gap-2 font-semibold cursor-pointer shadow-[0_0_1px_rgba(34,211,238,0.6),inset_0_0_5px_rgba(34,211,238,0.25)] hover:shadow-[0_0_5px_rgba(34,211,238,0.8),inset_0_0_6px_rgba(34,211,238,0.4)] hover:border-cyan-300 transition-all duration-300 ${className}`}
      style={{
        filter:
          "drop-shadow(0 0 2px rgba(59,130,246,0.7)) drop-shadow(0 0 1px rgba(45,212,191,0.6)) drop-shadow(0 0 30px rgba(45,212,191,0.4))",
      }}>
      {secendIcon}
      {label}
      {icon}
    </button>
  );
}

export default Button;
