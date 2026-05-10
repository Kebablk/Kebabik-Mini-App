import { useEffect, useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="w-full h-dvh bg-[#131215] flex justify-center items-center">
      <h1 className="text-white text-6xl font-semibold">Wassup!</h1>
    </div>
  );
}
