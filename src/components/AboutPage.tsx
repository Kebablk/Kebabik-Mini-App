import img from "../img/my-photo.jpg";
import AboutBlock from "./AboutBlock";
import Button from "./Button";
import Divider from "./Divider";

interface IAboutPageProps {
  navigateTo?: (page: string) => void;
}

export default function AboutPage({ navigateTo }: IAboutPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-dvh relative flex flex-col justify-start items-center pt-5!"
    >
      <img
        src={img}
        alt="photo"
        className="w-30 h-30 rounded-full shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-1.5 object-cover object-bottom"
      />
      <h2 className="text-white text-[24px]">Роман</h2>
      <h3 className="text-gray-500 text-[18px] mb-4.5">AKA Kebabik</h3>
      <h2 className="text-3xl text-center bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-bold">
        FULLSTACK-разработчик <br></br>
        <span className="text-3xl">в 15:</span>
      </h2>
      <Divider />
      <div className="w-[90%] h-full flex flex-col justify-start items-center">
        <AboutBlock
          title="2+ года в сфере"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, illo ipsa, obcaecati laboriosam animi dolores ea doloremque magni eum excepturi? Dolores tempora animi sapiente consequatur eaque dolor, hic vitae?"
        />
        <AboutBlock
          title="2+ года в сфере"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, illo ipsa, obcaecati laboriosam animi dolores ea doloremque magni eum excepturi? Dolores tempora animi sapiente consequatur eaque dolor, hic vitae?"
        />
        <AboutBlock
          title="2+ года в сфере"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, illo ipsa, obcaecati laboriosam animi dolores ea doloremque magni eum excepturi? Dolores tempora animi sapiente consequatur eaque dolor, hic vitae?"
        />
        <AboutBlock
          title="2+ года в сфере"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus, illo ipsa, obcaecati laboriosam animi dolores ea doloremque magni eum excepturi? Dolores tempora animi sapiente consequatur eaque dolor, hic vitae?"
        />
      </div>

      {navigateTo && (
        <Button value="Вернуться в меню" onClick={() => navigateTo("main")} />
      )}
    </div>
  );
}
