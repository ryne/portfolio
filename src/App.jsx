import { useState, useEffect } from "react";
// import { usePalette } from "react-palette";
import clsx from "clsx";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import PortfolioData from "./data/PortfolioData";
import { ImSpinner9 } from "react-icons/im";

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
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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

  if (isLoading) {
    // Return a loading indicator while data is loading
    return (
      <div
        id="app"
        className={clsx("bg-white h-screen w-screen", {
          "dark bg-black": isDarkTheme,
        })}
      >
        <span className="flex h-full w-full justify-center items-center">
          <ImSpinner9 className="text-3xl animate-spin text-black dark:text-white" />
        </span>
      </div>
    );
  }

  return (
    <div
      id="app"
      className={clsx("bg-white h-screen w-screen", {
        "dark bg-black": isDarkTheme,
      })}
    >
      <Hero
        toggleTheme={toggleTheme}
        togglePortfolio={togglePortfolio}
        showPortfolio={showPortfolio}
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
