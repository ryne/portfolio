import { useState } from "react";
import clsx from "clsx";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";

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

  const toggleTheme = () => {
    localStorage.setItem("darkTheme", !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };
  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

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
      />
    </div>
  );
};

export default App;
