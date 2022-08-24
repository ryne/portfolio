import { useState } from 'react';
import clsx from 'clsx';
import Hero from './components/Hero';

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
  const toggleTheme = () => {
    localStorage.setItem('darkTheme', !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div id="app" className={clsx({ dark: isDarkTheme })}>
      <Hero toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
