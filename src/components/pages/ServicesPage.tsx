import Divider from "../Divider";
import Service from "../Service";
import website from "../../img/website.png";
import bot from "../../img/bot.png";
import Button from "../Button";

interface IServicesPageProps {
  navigateTo?: (page: string) => void;
}

export default function ServicesPage({ navigateTo }: IServicesPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full min-h-screen absolute flex flex-col justify-start items-center pt-5!"
    >
      <h2 className="text-[32px] font-semibold text-white">Услуги</h2>
      <div className="relative w-full h-auto flex justify-center items-center">
        <Divider />
      </div>
      <Service
        src={website}
        title="Сайт под ключ"
        descr="Разработка полностью готового к работе сайта. Вы получаете работающий проект — от идеи до первого клиента."
        arr={[
          "Понятная структура (клиент найдет нужное за 3 секунды)",
          "Продающий дизайн",
          "Адаптив под все устройства и браузеры",
          "Работающие формы и кнопки",
          "Быстрая загрузка",
        ]}
        price="от 10 000"
        deadline="от 1 дня"
      />
      <Service
        src={bot}
        title="Telegram/VK bots"
        descr="Разработка бота для любых задач: от простого FAQ до полноценного приёма платежей и записи клиентов."
        arr={[
          "Работа 24/7",
          "Обработка заказов и оплат прямо в диалоге",
          "Экономия времени",
          "Готовая админ-панель",
          "Сборка данных в удобную таблицу",
        ]}
        price="от 6 000"
        deadline="от 1 дня"
      />
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
