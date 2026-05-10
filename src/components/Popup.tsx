import { useEffect, useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isVisibleText, setIsVisibleText] = useState<boolean>(false);

  useEffect(() => {
    const appearanceTimer = setTimeout(() => {
      setIsVisibleText(true);
    }, 500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setIsVisibleText(false);
    }, 3000);

    const popupTimer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => {
      clearTimeout(appearanceTimer);
      clearTimeout(popupTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {}, []);

  if (!showPopup) return null;

  return (
    <div
      className={`w-full h-dvh bg-[#131215] opacity-100 flex justify-center items-center transition-all duration-1000 z-50${!isVisible && "opacity-0"}`}
    >
      <h1
        className={`text-white text-[50px] font-semibold transition-all duration-1000 opacity-0 ${isVisibleText && "opacity-100"}`}
      >
        Wassup!
      </h1>
    </div>
  );
}
