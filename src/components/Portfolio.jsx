import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';
import { BsFillFileRichtextFill, BsChevronUp } from 'react-icons/bs';

function Portfolio({ toggleTheme, showPortfolio, togglePortfolio }) {
  const refPortfolio = useRef();

  useEffect(() => {
    if (showPortfolio === true) {
      gsap.to(refPortfolio.current, {
        opacity: 1,
        delay: 0.15,
        duration: 0.3,
        ease: 'power1',
      });
    } else {
      gsap.to(refPortfolio.current, {
        opacity: 0,
        delay: 0.15,
        duration: 0.3,
        ease: 'power1',
      });
    }
  }, [showPortfolio]);

  return (
    <section
      ref={refPortfolio}
      className={clsx(
        'absolute pointer-events-none blur opacity-0 origin-bottom absolute flex w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-col selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in',
        { 'pointer-events-auto blur-none': showPortfolio }
      )}
    >
      {/* <button
        className="group flex relative justify-center w-12 h-9 origin-center text-4xl active:opacity-50 active:scale-95 ease-in transition-opacity duration-75 selection:bg-transparent dark:selection:bg-transparent dark:text-white"
        onClick={() => togglePortfolio()}
      >
        <span className="absolute top-0 z-50 after:content['test'] after:absolute after:top-0.5 after:left-1.5 after:w-[24px] after:h-[32px] after:bg-white after:z-[-1] dark:after:bg-black">
          <BsFillFileRichtextFill className="group-hover:scale-105 transition-all" />
        </span>
        <span className="absolute top-0 z-10">
          <BsFillFileRichtextFill className="group-hover:ml-8 group-hover:rotate-12 text-3xl rotate-6 mt-1 ml-6 opacity-20 transition-all" />
        </span>
        <span className="absolute top-0 z-10">
          <BsFillFileRichtextFill className="group-hover:-ml-8 text-3xl group-hover:-rotate-12 -rotate-6 mt-1 -ml-6 opacity-20 transition-all" />
        </span>
        <BsChevronUp
          className={clsx(
            'group-hover:opacity-100 absolute text-lg -top-9 pointer-events-none opacity-20 transition-all',
            { 'animate-bounce': showPortfolio }
          )}
        />
      </button> */}
    </section>
  );
}

export default Portfolio;
