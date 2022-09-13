import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import clsx from 'clsx';
import { CgClose } from 'react-icons/cg';

function Portfolio({ toggleTheme, showPortfolio, togglePortfolio }) {
  const refPortfolio = useRef();
  const refSplide = useRef();

  useEffect(() => {
    if (showPortfolio === true) {
      gsap.to(refPortfolio.current, {
        opacity: 1,
        delay: 0.15,
        duration: 0.3,
        ease: 'power1',
      });
      gsap.to(refSplide.current, {
        opacity: 1,
        delay: 0.45,
        duration: 0.55,
        ease: 'power1',
      });
    } else {
      gsap.to(refPortfolio.current, {
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: 'power1',
      });
      gsap.to(refSplide.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1',
      });
    }
  }, [showPortfolio]);

  return (
    <section
      ref={refPortfolio}
      className={clsx(
        'overflow-hidden absolute flex pointer-events-none blur opacity-0 origin-bottom absolute w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in',
        { 'pointer-events-auto blur-none': showPortfolio }
      )}
    >
      <div
        className={clsx(
          'pointer-events-none absolute blur opacity-0 bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in',
          { 'pointer-events-auto blur-none': showPortfolio }
        )}
        ref={refSplide}
      >
        <header className="flex h-[7.5vh] w-full items-center justify-center absolute -top-[7.5vh]">
          <div className="text-center">
            <button
              onClick={() => togglePortfolio()}
              className="group flex justify-center items-center w-8 h-8 origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <CgClose />
            </button>
          </div>
        </header>

        <Splide
          aria-label="Portfolio"
          options={{
            rewind: true,
            type: 'fade',
            width: '90vw',
            height: '85vh',
            fixedWidth: '90vw',
            fixedHeight: '85vh',
            arrows: true,
            pagination: true,
            keyboard: 'focused',
            keyboardPagination: true,
            flickPower: 1,
            flickMaxPages: 1,
            waitForTransition: true,
            classes: {
              prev: 'hidden md:block z-50 cursor-pointer h-[40px] absolute -left-[2.5vw] top-1/2 h-[40px] -ml-[20px] -mt-[20px] scale-50 active:opacity-50 active:scale-[.55] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert rotate-180',
              next: 'hidden md:block z-50 cursor-pointer h-[40px] absolute -right-[2.5vw] top-1/2 h-[40px] -mr-[20px] -mt-[20px] scale-50 active:opacity-50 active:scale-[.55] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert',
              pagination:
                'flex h-[7.5vh] w-full justify-center items-center absolute',
              page: 'mx-0.5 rounded-full w-2.5 h-2.5 scale-75 opacity-30 active:opacity-50 active:scale-50 ease-in transition-all bg-black dark:bg-white',
            },
          }}
        >
          <SplideSlide>
            <div className="flex w-full h-full bg-black/50 dark:bg-white/50"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex w-full h-full bg-black/75 dark:bg-white/75"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex w-full h-full bg-black/50 dark:bg-white/50"></div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex w-full h-full bg-black/75 dark:bg-white/75"></div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Portfolio;
