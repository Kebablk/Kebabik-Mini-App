import MainPage from "./components/MainPage";
import Popup from "./components/Popup";

function App() {
  // const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  // const theme = window.Telegram?.WebApp?.themeParams;

  // const bgColor = theme?.bg_color || "#0a0a0a";
  // const textColor = theme?.text_color || "ffffff";
  // const buttonColor = theme?.button_color || "#3b82f6";
  // const linkColor = theme?.link_color || "06b6d4";
  // const hintColor = theme?.hint_color || "6b7280";
  return (
    <>
      <Popup />
      <MainPage />
    </>
  );
}

export default App;
