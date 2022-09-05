import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Portfolio({ showPortfolio }) {
  return (
    <section className="flex h-screen justify-center items-center bg-white text-black flex-col selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-opacity transition-colors"></section>
  );
}

export default Portfolio;
