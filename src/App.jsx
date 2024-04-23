import { useState } from "react";
// import { usePalette } from "react-palette";
import clsx from "clsx";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import PortfolioData from "./data/PortfolioData";
import { ImSpinner9 } from "react-icons/im";
import light from "./assets/light.png";

const App = () => {
  const getCurrentTheme = () => {
    const localTheme = localStorage.getItem("darkTheme");
    return localTheme
      ? localTheme === "true"
        ? true
        : false
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const [showPortfolio, setShowPortfolio] = useState(!false);
  const [isLoading, setIsLoading] = useState(true);

  // const PortfolioData = PortfolioData.map((item) => {
  //   const { data, loading, error } = usePalette(item.src);
  //   return { ...item, colors: data };
  // });

  const toggleTheme = () => {
    localStorage.setItem("darkTheme", !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  const togglePortfolio = () => {
    setShowPortfolio(true);
    setTimeout(function () {
      document.getElementById("hero").remove();
    }, 1000);
  };

  const startApp = () => {
    document.querySelector("#spinner").style.opacity = 0;
    setTimeout(function () {
      setIsLoading(false);
      let placeholders = document.querySelectorAll(".placeholder");
      placeholders.forEach((i) => i.removeAttribute("style"));
    }, 500);
  };

  if (isLoading) {
    return (
      <div
        id="app"
        style={{ height: "100vh", width: "100vw" }}
        className={clsx("placeholder h-screen w-screen bg-white", {
          "dark bg-black": isDarkTheme,
        })}
      >
        <span className="flex h-full w-full items-center justify-center">
          <ImSpinner9
            id="spinner"
            className="animate-spin text-2xl text-black opacity-100 transition-all duration-500 dark:text-white"
          />
        </span>
        <img className="hidden" src={light} onLoad={() => startApp()} />
      </div>
    );
  }

  return (
    <div
      id="app"
      style={{ height: "100vh", width: "100vw" }}
      className={clsx("placeholder h-screen w-screen bg-white", {
        "dark bg-black": isDarkTheme,
      })}
    >
      <Hero
        toggleTheme={toggleTheme}
        togglePortfolio={togglePortfolio}
        showPortfolio={showPortfolio}
        setIsLoading={setIsLoading}
      />
      <Portfolio
        toggleTheme={toggleTheme}
        showPortfolio={showPortfolio}
        PortfolioData={PortfolioData}
      />
    </div>
  );
};

export default App;
