import { useEffect, useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="w-full h-full bg-[#0d031b] flex justify-center items-center">
      <h1>Wassup!</h1>
    </div>
  );
}
