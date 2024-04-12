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
    setShowPortfolio(!showPortfolio);
  };

  const startApp = () => {
    document.querySelector("#spinner").style.opacity = 0;
    setTimeout(function () {
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <div
        id="app"
        className={clsx("placeholder_vh_vw bg-white h-screen w-screen", {
          "dark bg-black": isDarkTheme,
        })}
      >
        <span className="flex h-full w-full justify-center items-center">
          <ImSpinner9
            id="spinner"
            className="text-2xl animate-spin text-black dark:text-white transition-all opacity-100 duration-500"
          />
        </span>
        <img className="hidden" src={light} onLoad={() => startApp()} />
      </div>
    );
  }

  return (
    <div
      id="app"
      className={clsx("placeholder_vh_vw bg-white h-screen w-screen", {
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
        togglePortfolio={togglePortfolio}
        showPortfolio={showPortfolio}
        PortfolioData={PortfolioData}
      />
    </div>
  );
};

export default App;
