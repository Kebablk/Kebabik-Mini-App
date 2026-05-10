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
    <div className="w-full h-full bg-[#131215] flex justify-center items-center">
      <h1>Wassup!</h1>
    </div>
  );
}
