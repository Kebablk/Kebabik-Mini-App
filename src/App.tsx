import { useState } from "react";
import MainPage from "./components/pages/MainPage";
import Popup from "./components/Popup";
import AboutPage from "./components/pages/AboutPage";
import StackPage from "./components/pages/StackPage";
import LoadingPage from "./components/pages/LoadingPage";
import ProjectPage from "./components/pages/ProjectPage";
import ServicesPage from "./components/pages/ServicesPage";

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
      case "my-project":
        return (
          <>
            <LoadingPage title="МОЙ ПРОЕКТ" />
            <ProjectPage navigateTo={navigateTo} />
          </>
        );
      case "services":
        return (
          <>
            <LoadingPage title="УСЛУГИ" />
            <ServicesPage navigateTo={navigateTo} />
          </>
        );
    }
  };

  return <>{renderPage()}</>;
}

export default App;
