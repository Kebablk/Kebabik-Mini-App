import type React from "react";
import { useEffect, useState } from "react";

interface ILoadingPage {
  title: string;
}

const LoadingPage: React.FC<ILoadingPage> = (props) => {
  const { title } = props;
  const [visible, setIsVisible] = useState<boolean>(true);

  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      setIsVisible(true);
      clearTimeout(timer);
    };
  }, [title]);

  if (!visible) return null;

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-5.5 z-50 smooth-bg-fading fixed"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="w-[75%] text-white text-[35px] text-center font-semibold object-smooth-fading">
        {title}
      </h2>
      <div className="w-auto h-auto flex gap-1.5 object-smooth-fading">
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all bounce-once"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all delay-150 bounce-once"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all delay-300 bounce-once"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
