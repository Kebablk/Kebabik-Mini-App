import { useState } from "react";
import MainPage from "./components/MainPage";
import Popup from "./components/Popup";
import AboutPage from "./components/AboutPage";
import StackPage from "./components/StackPage";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return (
          <>
            <Popup />
            <MainPage navigateTo={navigateTo} />
          </>
        );
      case "about":
        return (
          <>
            <LoadingPage title="ОБО МНЕ" />
            <AboutPage navigateTo={navigateTo} />
          </>
        );
      case "stack":
        return (
          <>
            <LoadingPage title="МОЙ СТЕК" />
            <StackPage navigateTo={navigateTo} />
          </>
        );
      // case "settings":
      //   return <SettingsPage navigateTo={navigateTo} />;
      // default:
      //   return <HomePage navigateTo={navigateTo} />;
    }
  };

  return <>{renderPage()}</>;
}

export default App;
