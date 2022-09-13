import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
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
        'overflow-hidden absolute flex pointer-events-none blur opacity-0 origin-bottom absolute w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in',
        { 'pointer-events-auto blur-none': showPortfolio }
      )}
    >
      <header className="flex items-center justify-center absolute top-0 h-[7.5vh] w-[90vw]">
        <div className="text-center">
          <h1 className="-mt-1 text-xl md:text-2xl font-light italic">
            Ryne
            <span className="px-1 md:px-1.5 opacity-10 dark:opacity-20">/</span>
            Not Ryan
          </h1>
        </div>
      </header>
      <Splide
        aria-label="Portfolio"
        options={{
          rewind: true,
          type: 'loop',
          width: '90vw',
          height: '85vh',
          fixedWidth: '90vw',
          fixedHeight: '85vh',
          arrows: true,
          pagination: true,
          keyboard: 'focused',
          keyboardPagination: true,
          flickPower: 50,
          flickMaxPages: 1,
          waitForTransition: true,
          classes: {
            prev: 'hidden md:block z-50 cursor-pointer h-[40px] absolute -left-[2.5vw] top-1/2 h-[40px] -ml-[20px] -mt-[20px] scale-50 active:opacity-30 active:scale-[0.6] transition-all duration-[50ms] dark:invert rotate-180',
            next: 'hidden md:block z-50 cursor-pointer h-[40px] absolute -right-[2.5vw] top-1/2 h-[40px] -mr-[20px] -mt-[20px] scale-50 active:opacity-30 active:scale-[0.6] transition-all duration-[50ms] dark:invert',
            pagination:
              'flex h-[7.5vh] w-full justify-center items-center absolute',
            page: 'mx-0.5 rounded-full w-2.5 h-2.5 scale-75 opacity-30 transition-all duration-[400ms] bg-black dark:bg-white',
          },
        }}
      >
        <SplideSlide>
          <div className="flex w-full h-full bg-black/5 dark:bg-white/5"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex w-full h-full bg-black/10 dark:bg-white/10"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex w-full h-full bg-black/5 dark:bg-white/5"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex w-full h-full bg-black/10 dark:bg-white/10"></div>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Portfolio;
