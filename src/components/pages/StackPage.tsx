import reactLogo from "../../img/react.png";
import tsLogo from "../../img/typescript.png";
import viteLogo from "../../img/vite.png";
import tailwindLogo from "../../img/tailwind.svg";
import mobxlogo from "../../img/mobx.svg";
import axiosLogo from "../../img/axios.png";
import gitLogo from "../../img/git.png";
import nestLogo from "../../img/nest.png";
import nodeLogo from "../../img/node.webp";
import expressLogo from "../../img/express.png";
import prismaLogo from "../../img/prisma.png";
import postgresqlLogo from "../../img/postgresql.png";
import redisLogo from "../../img/redis.png";
import dockerLogo from "../../img/docker.svg";
import Divider from "../Divider";
import Button from "../Button";

interface IStackPageProps {
  navigateTo?: (page: string) => void;
}

export default function StackPage({ navigateTo }: IStackPageProps) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  const frontendStack = [
    { technology: "React", logo: reactLogo, width: "55px", height: "55px" },
    { technology: "TypeScript", logo: tsLogo, width: "50px", height: "50px" },
    { technology: "Vite", logo: viteLogo, width: "45px", height: "45px" },
    {
      technology: "Tailiwind",
      logo: tailwindLogo,
      width: "65px",
      height: "65px",
    },
    { technology: "MobX", logo: mobxlogo, width: "50px", height: "50px" },
    { technology: "Axios", logo: axiosLogo, width: "50px", height: "50px" },
    { technology: "Git", logo: gitLogo, width: "50px", height: "50px" },
  ];

  const backendStack = [
    { technology: "NestJS", logo: nestLogo, width: "55px", height: "55px" },
    { technology: "NodeJS", logo: nodeLogo, width: "55px", height: "55px" },
    { technology: "Express", logo: expressLogo, width: "55px", height: "55px" },
    { technology: "Prisma", logo: prismaLogo, width: "55px", height: "55px" },
    {
      technology: "PostgreSQL",
      logo: postgresqlLogo,
      width: "55px",
      height: "55px",
    },
    { technology: "Redis", logo: redisLogo, width: "55px", height: "55px" },
    { technology: "Docker", logo: dockerLogo, width: "55px", height: "55px" },
  ];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full h-full absolute flex flex-col justify-start items-center pt-5!"
    >
      <h2 className="text-[32px] font-semibold text-white">Мой стек</h2>
      <div className="relative w-full h-auto flex justify-center items-center">
        <Divider />
      </div>
      <div className="w-[80%] h-full flex flex-col justify-center items-center gap-2">
        <div className="w-full h-full flex flex-col justify-start items-center gap-1">
          <h3 className="text-[25px] font-medium text-white">Frontend</h3>
          <div className="w-full h-full bg-gray-500/5 rounded-[10px] p-2! grid grid-cols-2 grid-rows-4 gap-2 shadow-[0_0_35px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] border border-gray-800/40 transition-all duration-300">
            {frontendStack.map((obj) => (
              <div className="bg-gray-500/10 border border-gray-800/75 rounded-[10px] flex flex-col justify-between items-center gap-1 pt-2! pb-2!">
                <img
                  src={obj.logo}
                  width={obj.width}
                  height={obj.height}
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                ></img>
                <h3 className="text-white text-[19px] font-medium">
                  {obj.technology}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-full flex flex-col justify-center items-center gap-2 mt-5!">
        <div className="w-full h-full flex flex-col justify-start items-center gap-1">
          <h3 className="text-[25px] font-medium text-white">Backend</h3>
          <div className="w-full h-full bg-gray-500/5 rounded-[10px] p-2! grid grid-cols-2 grid-rows-4 gap-2 shadow-[0_0_35px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] border border-gray-800/40 transition-all duration-300">
            {backendStack.map((obj) => (
              <div className="bg-gray-500/10 border border-gray-800/75 rounded-[10px] flex flex-col justify-between items-center gap-1 pt-2! pb-2!">
                <img
                  src={obj.logo}
                  width={obj.width}
                  height={obj.height}
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                ></img>
                <h3 className="text-white text-[19px] font-medium">
                  {obj.technology}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
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
