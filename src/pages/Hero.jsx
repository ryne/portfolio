import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import light from "../assets/light.png";
import { BsFillFileRichtextFill, BsChevronDown } from "react-icons/bs";

function Hero({ toggleTheme, showPortfolio, togglePortfolio }) {
  const refBase = useRef();
  const refLight = useRef();
  const refShadow = useRef();
  const refText = useRef();
  const refPortfolio = useRef();

  useEffect(() => {
    gsap.to(refBase.current, {
      duration: 0.25,
      opacity: 1,
      ease: "power4",
    });
    gsap.to(refLight.current, {
      y: -112,
      delay: 1,
      duration: 1.5,
      ease: "power4",
    });
    gsap.to(refShadow.current, {
      y: 112,
      delay: 1,
      duration: 1.5,
      transform: "scale(3,1.5)",
      opacity: 0.2,
      ease: "power4",
    });
    gsap.to(refText.current, {
      delay: 1.2,
      duration: 1.5,
      ease: "power1",
      opacity: 1,
    });
    gsap.to(refPortfolio.current, {
      y: -30,
      delay: 2.5,
      duration: 1,
      opacity: 1,
      pointerEvents: "all",
      ease: "power4",
    });
  });

  return (
    <section
      id="hero"
      style={{ height: "100vh", width: "100vw" }}
      className={clsx(
        "opacity-0 placeholder absolute flex h-screen w-screen justify-center items-center bg-white text-black flex-col selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter, color, background] duration-300 ease-in",
        {
          "pointer-events-none blur": showPortfolio,
        }
      )}
      ref={refBase}
    >
      <div className="absolute top-50 mb-8 md:mb-16 z-10" ref={refLight}>
        <div
          style={{ height: "100vh" }}
          className="placeholder absolute -translate-y-full translate-x-4 opacity-10 bg-black w-[1px] h-screen dark:bg-white"
        ></div>
        <button
          className="cursor-pointer active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:invert"
          onClick={() => toggleTheme()}
        >
          <img src={light} alt="Theme Toggle" />
        </button>
      </div>
      <div className="opacity-0 text-center" ref={refText}>
        <h1 className="-mt-1 text-4xl md:text-5xl font-light italic">
          Ryne
          <span className="px-2 md:px-3 opacity-10 dark:opacity-20">/</span>
          Not Ryan
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase opacity-50">
          Web Development &amp; Design
        </p>
      </div>
      <div
        className="absolute h-0.5 w-10 top-50 mt-20 bg-black blur scale-y-50 dark:bg-white"
        ref={refShadow}
      ></div>
      <div
        className="absolute pointer-events-none opacity-0 bottom-12 z-10"
        ref={refPortfolio}
      >
        <button
          className="group flex justify-center w-12 h-9 origin-center text-4xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
          onClick={() => togglePortfolio()}
        >
          <span className="absolute top-0 z-50 after:content['test'] after:absolute after:top-0.5 after:left-1.5 after:w-[24px] after:h-[32px] after:bg-white after:z-[-1] dark:after:bg-black after:transition-colors after:duration-300 after:ease-linear">
            <BsFillFileRichtextFill className="group-hover:scale-105 transition-all" />
          </span>
          <span className="absolute top-0 z-10">
            <BsFillFileRichtextFill className="group-hover:ml-8 group-hover:rotate-12 text-3xl rotate-6 mt-1 ml-6 opacity-20 transition-all" />
          </span>
          <span className="absolute top-0 z-10">
            <BsFillFileRichtextFill className="group-hover:-ml-8 text-3xl group-hover:-rotate-12 -rotate-6 mt-1 -ml-6 opacity-20 transition-all" />
          </span>
          <BsChevronDown
            className={clsx(
              "group-hover:opacity-100 absolute text-lg -bottom-9 pointer-events-none opacity-20 transition-all",
              { "animate-bounce": !showPortfolio }
            )}
          />
        </button>
      </div>
    </section>
  );
}

export default Hero;
