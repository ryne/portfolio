import { useState } from 'react';
import { usePalette } from 'react-palette';
import clsx from 'clsx';
import PortfolioData from './data/PortfolioData';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

const App = () => {
  const getCurrentTheme = () => {
    const localTheme = localStorage.getItem('darkTheme');
    return localTheme
      ? localTheme === 'true'
        ? true
        : false
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const [showPortfolio, setShowPortfolio] = useState(!false);

  const toggleTheme = () => {
    localStorage.setItem('darkTheme', !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };
  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  const PortfolioDataMap = PortfolioData.map((item) => {
    const { data, loading, error } = usePalette(item.src);
    return { ...item, colors: data };
  });

  return (
    <div
      id="app"
      className={clsx('bg-white h-screen w-screen', {
        'dark bg-black': isDarkTheme,
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
        PortfolioDataMap={PortfolioDataMap}
      />
    </div>
  );
};

export default App;
