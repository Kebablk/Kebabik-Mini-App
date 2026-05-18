import img from "../img/kebab-portfolio.png";
import Button from "./Button";
import Divider from "./Divider";

interface IMainPageProps {
  navigateTo?: (page: string) => void;
}

export default function MainPage({ navigateTo }: IMainPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  const btnsValue = [
    { value: "Обо мне", navigate: "about" },
    { value: "Мой проект", navigate: "my-project" },
    { value: "Услуги", navigate: "services" },
    { value: "Кейсы", navigate: "cases" },
    { value: "Отзывы", navigate: "reviews" },
  ];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-full relative flex flex-col justify-start items-center pt-5!"
    >
      <img
        src={img}
        alt="logo"
        className="w-22.5 h-22.5 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-1.5"
      />
      <h2 className="text-white text-[24px]">Kebabik</h2>
      <h3 className="text-gray-500 text-[18px]">Fullstack-разработчик</h3>
      <Divider />
      <div className="w-full h-[40%] flex flex-col justify-center items-center gap-2">
        {navigateTo &&
          btnsValue.map((e) => (
            <Button
              value={e.value}
              onClick={() => {
                navigateTo(e.navigate);
              }}
              className="w-[90%] h-auto flex justify-between items-center p-2! transition-all duration-400 cursor-pointer rounded-3xl"
              textClassName="text-white text-3xl font-semibold"
            />
          ))}
      </div>
    </div>
  );
}
