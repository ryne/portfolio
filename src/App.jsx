import { useState } from 'react';
import clsx from 'clsx';
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
  const [showPortfolio, setShowPortfolio] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem('darkTheme', !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };
  const togglePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  return (
    <div id="app" className={clsx({ dark: isDarkTheme })}>
      <Hero toggleTheme={toggleTheme} togglePortfolio={togglePortfolio} />
      <Portfolio
        toggleTheme={toggleTheme}
        showPortfolio={showPortfolio}
        togglePortfolio={togglePortfolio}
      />
    </div>
  );
};

export default App;
