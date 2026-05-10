import img from "../img/kebab-portfolio.png";

export default function MainPage() {
  return (
    <div className="w-full h-dvh relative bg-[#131313] flex flex-col justify-start items-center pt-5!">
      <img
        src={img}
        alt="logo"
        className="w-17.5 h-17.5 rounded-[50%] shadow-gray-400 shadow-2xs mb-1"
      />
      <h2 className="text-white text-[24px]">Kebabik</h2>
      <h3 className="text-gray-500 text-[18px]">Fullstack-разработчик</h3>
    </div>
  );
}
