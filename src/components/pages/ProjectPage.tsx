import img from "../../img/DevCast.png";
import Button from "../Button";
import Divider from "../Divider";
import createImg from "../../img/create.png";
import publicateImg from "../../img/publication.png";
import developmentImg from "../../img/development.png";
import telegramImg from "../../img/telegram.png";
import Link from "../Link";

interface IProjectPageProps {
  navigateTo?: (page: string) => void;
}

export default function ProjectPage({ navigateTo }: IProjectPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full min-h-screen absolute flex flex-col justify-start items-center pt-5!"
    >
      <img
        src={img}
        alt="photo"
        className="w-30 h-30 rounded-full border border-[rgba(100,150,255,0.2)] shadow-[0_0_35px_rgba(100,150,255,0.3)] mb-1.5 object-cover object-bottom"
      />
      <h2 className="w-[85%] text-[28px] text-center bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold">
        DevCast - НОВАЯ СРЕДА ДЛЯ РАЗРАБОТЧИКОВ
      </h2>
      <div className="relative w-full h-auto flex justify-center items-center">
        <Divider />
      </div>
      <div className="w-[90%] h-full flex flex-col justify-start items-center gap-1">
        <h2 className="text-white text-[24px] font-semibold">О проекте</h2>
        <div className="w-full h-full flex flex-col justify-start items-center gap-1.5">
          <h3 className="text-white/75 text-[22px font-semibold] text-center">
            DevCast - веб-сайт для разработчиков, расширяющий соло- и командное
            развитие проектов:
          </h3>
          <div className="w-full h-full flex justify-between items-stretch gap-2">
            <div className="w-[2.5%] relative flex flex-col justify-evenly items-center">
              <div className="w-full h-full bg-[rgb(14,26,51)] shadow-[0_0_20px_rgba(100,150,255,0.1)] rounded-[15px] absolute"></div>
              <div
                style={{
                  boxShadow: `0 0 50px ${bgColor}`,
                  border: `4px solid ${bgColor}`,
                }}
                className="w-8 h-8 bg-[rgb(26,48,94)] rounded-full z-10 mb-6"
              ></div>
              <div
                style={{
                  boxShadow: `0px 0px 50px ${bgColor}`,
                  border: `4px solid ${bgColor}`,
                }}
                className="w-8 h-8 bg-[rgb(26,48,94)] rounded-full z-10 mb-5"
              ></div>
              <div
                style={{
                  boxShadow: `0 0 50px ${bgColor}`,
                  border: `4px solid ${bgColor}`,
                }}
                className="w-8 h-8 bg-[rgb(26,48,94)] rounded-full z-10 mt-2"
              ></div>
            </div>
            <div className="w-[92%] h-full flex flex-col justify-start items-start gap-1.5">
              <div className="w-full h-auto min-h-[33%] border border-gray-500 shadow-[0_0_20px_rgba(100,150,255,0.3)] bg-white/5 flex flex-col justify-start items-start gap-1 rounded-[15px] p-3">
                <h3 className="text-white text-[22px] font-semibold border-b border-gray-500 pb-1">
                  <div className="w-12 h-12 flex justify-center items-center p-2 border border-gray-500 rounded-[10px]">
                    <img src={createImg} width="35px" height="35px"></img>
                  </div>
                  <span className="text-[rgb(55,94,179)] font-bold">
                    Создай
                  </span>{" "}
                  проект и "поставь в нем точку"
                </h3>
                <h4 className="text-gray-500 text-[16px] font-medium mt-1">
                  Создай новый проект в своем профиле или добавь уже
                  существующий. Подготовь его к публикации на сайте.
                </h4>
              </div>
              <div className="w-full h-auto min-h-[33%] border border-gray-500 shadow-[0_0_20px_rgba(100,150,255,0.3)] bg-white/5 flex flex-col justify-start items-start gap-1 rounded-[15px] p-3">
                <h3 className="text-white text-[22px] font-semibold border-b border-gray-500 pb-1">
                  <div className="w-12 h-12 flex justify-center items-center p-2 border border-gray-500 rounded-[10px]">
                    <img src={publicateImg} width="35px" height="35px"></img>
                  </div>
                  <span className="text-[rgb(55,94,179)] font-bold">
                    Опубликуй
                  </span>{" "}
                  проект на сайте
                </h3>
                <h4 className="text-gray-500 text-[16px] font-medium mt-1">
                  Как только всё будет готово, останется просто нажать на
                  кнопку, и твой проект уже смогут просматривать другие
                  разработчики.
                </h4>
              </div>
              <div className="w-full h-auto min-h-[33%] border border-gray-500 shadow-[0_0_20px_rgba(100,150,255,0.3)] bg-white/5 flex flex-col justify-start items-start gap-1 rounded-[15px] p-3">
                <h3 className="text-white text-[22px] font-semibold border-b border-gray-500 pb-1">
                  <div className="w-12 h-12 flex justify-center items-center p-2 border border-gray-500 rounded-[10px]">
                    <img src={developmentImg} width="35px" height="35px"></img>
                  </div>
                  <span className="text-[rgb(55,94,179)] font-bold">
                    Развивай
                  </span>{" "}
                  и смотри за результатом
                </h3>
                <h4 className="text-gray-500 text-[16px] font-medium mt-1">
                  Смотри за недостатками проекта, которые отметят пользователи и
                  вспомогательная AI, улучшай свой проект и становись
                  приоритетнее на рынке DevCast. Чем лучше проекты, тем больше
                  шанс и легче старт в командной разработке и ее продвижении.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className="w-[90%] h-auto flex justify-center items-center gap-1.5 p-2! transition-all duration-400 cursor-pointer rounded-3xl bg-linear-to-br from-gray-700 to-gray-900 mt-4"
        href="https://t.me/kebabikORL"
      >
        <span className="text-center text-white text-[22px] font-semibold">
          Больше о проекте
        </span>
        <img src={telegramImg} width="30px" height="30px"></img>
      </a> */}
      <Link href="https://t.me/kebabikORL">
        <span className="text-center text-white text-[22px] font-semibold">
          Больше о проекте
        </span>
        <img src={telegramImg} width="30px" height="30px"></img>
      </Link>
      {navigateTo && (
        <Button
          className="w-[90%] h-auto flex justify-between items-center p-2! transition-all duration-400 cursor-pointer rounded-3xl bg-linear-to-br from-gray-700 to-gray-900 text-center mt-4"
          textClassName="text-white text-[22px] font-semibold"
          value="Вернуться в меню"
          onClick={() => navigateTo("main")}
        />
      )}
    </div>
  );
}
