import Image from "./Image";
import img from "../img/kebab-portfolio.png";

export default function MainPage() {
  return (
    <div className="w-full h-dvh relative bg-[#23282b] flex flex-col justify-start items-center gap-2 pb-5">
      <Image
        src={img}
        alt="logo"
        className="w-12.5 h-12.5 rounded-[50%] shadow-gray-400 shadow-2xs"
      />
    </div>
  );
}
