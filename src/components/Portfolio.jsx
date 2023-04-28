import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Parallax } from 'react-scroll-parallax';
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
        'overflow-hidden absolute flex pointer-events-none blur opacity-0 origin-bottom w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in',
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
        <header className="flex w-full items-center justify-center absolute top-[8px] md:top-[calc(2.5vw_-_16px)] z-10">
          <div className="text-center">
            <button
              onClick={() => togglePortfolio()}
              className="group flex justify-center items-center w-6 h-6 md:w-8 md:h-8 origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <CgClose className="text-4xl md:text-5xl" />
            </button>
          </div>
        </header>

        <Splide
          onHidden={(splide, prev, next) => {
            prev.slide.scrollTop = 0;
          }}
          aria-label="Portfolio"
          options={{
            type: 'loop',
            width: '100vw',
            height: 'calc(var(--vh) * 100)',
            fixedWidth: '100vw',
            arrows: true,
            pagination: true,
            keyboard: 'focused',
            keyboardPagination: true,
            flickPower: 1,
            flickMaxPages: 1,
            waitForTransition: true,
            classes: {
              prev: 'z-10 rotate-180 hidden md:block z-50 cursor-pointer h-[40px] absolute left-[2.5vw] top-1/2 h-[40px] -ml-[20px] -translate-y-2/4 scale-[.62] xl:scale-75 active:opacity-50 active:scale-[.67] xl:active:scale-[.8] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert',
              next: 'z-10 hidden md:block z-50 cursor-pointer h-[40px] absolute right-[2.5vw] top-1/2 h-[40px] -mr-[20px] -translate-y-2/4 scale-[.62] xl:scale-75 active:opacity-50 active:scale-[.67] xl:active:scale-[.8] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert',
              pagination:
                'z-10 flex bottom-[8px] md:bottom-[calc(2.5vw_-_12px)] w-full justify-center items-center fixed',
              page: 'mx-0.5 rounded-full w-2.5 h-2.5 scale-75 opacity-30 active:opacity-50 active:scale-150 ease-in transition-all bg-black dark:bg-white',
            },
          }}
        >
          <SplideSlide className="overflow-y-auto">
            <div className="flex items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <Parallax translateY={[-20, 20]}>
                <img
                  className="block w-[640px] h-[480px]"
                  src="https://placekitten.com/640/480"
                />
              </Parallax>
            </div>
            <div className="flex items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
            <div className="flex items-end justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div className="flex items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
            <div className="flex items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div className="flex items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
            <div className="flex items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)] bg-zinc-100 dark:bg-zinc-900">
              <img
                className="block w-[640px] h-[480px]"
                src="https://placekitten.com/640/480"
              />
            </div>
          </SplideSlide>
        </Splide>
        <span className="w-full h-full border-[40px] md:border-[5vw] bg-transparent border-white/80 dark:border-black/80 backdrop-blur-lg fixed inset-0 saturate-200 clippy"></span>
      </div>
    </section>
  );
}

export default Portfolio;
