import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Portfolio({ toggleTheme, showPortfolio }) {
  const refPortfolio = useRef();

  useEffect(() => {
    if (showPortfolio === true) {
      gsap.to(refPortfolio.current, {
        scaleY: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power1',
      });
    } else {
      gsap.to(refPortfolio.current, {
        scaleY: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power1',
      });
    }
  }, [showPortfolio]);

  return (
    <section
      ref={refPortfolio}
      className="scale-y-0 opacity-0 origin-bottom z-10 absolute flex w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-col selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black overflow-hidden"
    >
      <h1>Portfolio</h1>
    </section>
  );
}

export default Portfolio;
