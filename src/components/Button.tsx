import { useState } from "react";

interface ButtonProps {
  value: string;
}

export default function Button({ value }: ButtonProps) {
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
      className="w-[90%] h-auto flex justify-between items-center p-2! transition-all duration-400 cursor-pointer rounded-3xl"
    >
      <div
        className={`w-5 h-5 rounded-full bg-white transition-all duration-400 shadow-[0_0_35px_rgba(255,255,255,0.3)] ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>
      <h3 className="text-white text-3xl font-semibold">{value}</h3>
      <div
        className={`w-5 h-5 rounded-full bg-white transition-all duration-400 shadow-[0_0_35px_rgba(255,255,255,0.3)] ${isHovered ? "opacity-100" : "opacity-0"}`}
      ></div>
    </div>
  );
}
