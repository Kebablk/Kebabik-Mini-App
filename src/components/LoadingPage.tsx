export default function LoadingPage(title: string) {
  const theme = window.Telegram?.WebApp?.themeParams;
  const bgColor = theme?.bg_color || "#0b0b0b";

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-1.5"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="w-[75%] text-white text-[35px] font-semibold">{title}</h2>
      <div className="w-auto h-auto flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all bounce-once"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all bounce-once"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white transition-all bounce-once"></div>
      </div>
    </div>
  );
}
