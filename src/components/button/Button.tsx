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
      className={`bg-blue-600 rounded-lg p-3 mt-10 flex items-center text-sm gap-2 font-semibold lg:mt-12 cursor-pointer ${className}`}>
      {label}
      {icon}
    </button>
  );
}

export default Button;
