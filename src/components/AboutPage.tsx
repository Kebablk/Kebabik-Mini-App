import img from "../img/my-photo.jpg";
import AboutBlock from "./AboutBlock";
import Button from "./Button";
import Divider from "./Divider";
import experience from "../img/experience.png";
import project from "../img/project.png";
import quality from "../img/quality.png";

interface IAboutPageProps {
  navigateTo?: (page: string) => void;
}

export default function AboutPage({ navigateTo }: IAboutPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  const aboutBlocksEnclosure = [
    {
      title: "2+ года в сфере веб-разработки",
      descr:
        "За все это время полноценно владею Frontend- и Backend-разработкой в связке при разработке любого сайта.",
      src: experience,
    },
    {
      title: "Большой проект и стартап",
      descr:
        "Devcast - проект для разработчиков, который я создаю сам с целью успешно запустить в интернет.",
      src: project,
    },
    {
      title: "Быстрые и качественные запуски",
      descr:
        "Создаю проекты под ключ с минимальным сроком и гарантией высшего качества работы.",
      src: quality,
    },
  ];

  const btnValues = [
    { value: "Мой стек", navigate: "stack" },
    { value: "Вернуться в меню", navigate: "main" },
  ];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-full absolute flex flex-col justify-start items-center pt-5!"
    >
      <img
        src={img}
        alt="photo"
        className="w-30 h-30 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-1.5 object-cover object-bottom"
      />
      <h2 className="text-white text-[24px]">Роман</h2>
      <h3 className="text-gray-500 text-[18px]">AKA Kebabik</h3>
      <Divider />
      <h2 className="text-3xl text-center bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold">
        FULLSTACK-разработчик
      </h2>
      <div className="w-[90%] h-full flex flex-col justify-start items-center">
        {aboutBlocksEnclosure.map((obj) => (
          <AboutBlock title={obj.title} description={obj.descr} src={obj.src} />
        ))}
      </div>

      {navigateTo &&
        btnValues.map((obj) => (
          <Button
            className="w-[90%] h-auto flex justify-between items-center p-2! transition-all duration-400 cursor-pointer rounded-3xl bg-gray-500/25 text-center mt-4"
            textClassName="text-white text-[22px] font-semibold"
            value={obj.value}
            onClick={() => navigateTo(obj.navigate)}
          />
        ))}
    </div>
  );
}
