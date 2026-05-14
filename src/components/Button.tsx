import { useState } from "react";

interface ButtonProps {
  value: string;
  onClick: () => void;
  className: string;
  textClassName: string;
}

export default function Button({
  value,
  onClick,
  className,
  textClassName,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const buttonColor = "#0f0f0f";

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{ backgroundColor: isHovered ? buttonColor : "" }}
      className={className}
      onClick={onClick}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white transition-all duration-400 shadow-[0_0_35px_rgba(255,255,255,0.3)] ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>
      <h3 className={textClassName}>{value}</h3>
      <div
        className={`w-5 h-5 rounded-full bg-white transition-all duration-400 shadow-[0_0_35px_rgba(255,255,255,0.3)] ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>
    </div>
  );
}
