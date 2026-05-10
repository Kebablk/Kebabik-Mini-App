import img from "../img/kebab-portfolio.png";
import Button from "./Button";
import Divider from "./Divider";

export default function MainPage() {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-dvh relative flex flex-col justify-start items-center pt-5!"
    >
      <img
        src={img}
        alt="logo"
        className="w-22.5 h-22.5 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-1.5"
      />
      <h2 className="text-white text-[24px]">Kebabik</h2>
      <h3 className="text-gray-500 text-[18px] mb-4.5">
        Fullstack-разработчик
      </h3>
      <Divider />
      <div className="w-full h-[40%] flex flex-col justify-center items-center gap-2">
        <Button value="Обо мне" />
        <Button value="Мой проект" />
        <Button value="Услуги" />
        <Button value="Отзывы" />
      </div>
    </div>
  );
}
