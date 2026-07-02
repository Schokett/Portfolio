import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  label: string;
  targetId?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

function Button({ label, targetId, href, onClick, className = "", icon }: ButtonProps) {
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
      className={`bg-cyan-500 rounded-lg p-3 flex items-center text-sm gap-2 font-semibold cursor-pointer ${className}`}
      style={{
        filter:
          "drop-shadow(0 0 2px rgba(59,130,246,0.7)) drop-shadow(0 0 1px rgba(45,212,191,0.6)) drop-shadow(0 0 30px rgba(45,212,191,0.4))",
      }}>
      {label}
      {icon}
    </button>
  );
}

export default Button;
