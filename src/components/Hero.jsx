import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import light from '../assets/light.png';
import computer from '../assets/omori_computer.gif';

function Hero({ toggleTheme }) {
  const refLight = useRef();
  const refShadow = useRef();
  const refText = useRef();
  const refComputer = useRef();

  useEffect(() => {
    gsap.to(refLight.current, {
      y: -112,
      delay: 0.5,
      duration: 2,
      ease: 'power4',
    });
    gsap.to(refShadow.current, {
      y: 112,
      delay: 0.5,
      duration: 2,
      transform: 'scale(3,1.5)',
      opacity: 0.2,
      ease: 'power4',
    });
    gsap.to(refText.current, {
      delay: 0.7,
      duration: 2,
      ease: 'power1',
      opacity: 1,
    });
    gsap.to(refComputer.current, {
      y: -120,
      delay: 2,
      duration: 1,
      ease: 'power4',
    });
  });

  return (
    <section className="flex h-screen justify-center items-center bg-white text-black flex-col selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-opacity transition-colors overflow-hidden">
      <div className="absolute top-50 mb-8 md:mb-16 z-10" ref={refLight}>
        <div className="absolute -translate-y-full translate-x-4 opacity-10 bg-black w-[1px] h-screen dark:bg-white"></div>
        <img
          src={light}
          alt="Theme Toggle"
          className="cursor-pointer active:opacity-50 active:scale-95 ease-in transition-opacity duration-75 selection:bg-transparent dark:selection:bg-transparent dark:invert"
          onClick={() => toggleTheme()}
        />
      </div>
      <div className="opacity-0 text-center" ref={refText}>
        <h1 className="-mt-1 text-4xl md:text-5xl font-light italic">
          Ryne
          <span className="px-2 md:px-3 opacity-10 dark:opacity-20">/</span>
          Not Ryan
        </h1>
        <p className="mt-2 md:mt-3 text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase opacity-50">
          Web Development &amp; Design
        </p>
      </div>
      <div
        className="absolute h-0.5 w-10 top-50 mt-20 bg-black blur scale-y-50 dark:bg-white"
        ref={refShadow}
      ></div>
      <div
        className="absolute w-10 -bottom-12 md:-bottom-16 z-10"
        ref={refComputer}
      >
        <img
          src={computer}
          alt="Portfolio Start"
          className="rendering-pixelated cursor-pointer active:opacity-50 active:scale-95 ease-in transition-opacity duration-75 selection:bg-transparent dark:selection:bg-transparent dark:invert"
          onClick={() => toggleTheme()}
        />
      </div>
    </section>
  );
}

export default Hero;
