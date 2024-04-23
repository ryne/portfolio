import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import "@splidejs/react-splide/css/core";
import {
  FaGithub,
  FaCodepen,
  FaXTwitter,
  FaUserAstronaut,
} from "react-icons/fa6";
import light from "../assets/light.png";
import Profile from "../components/Profile";
import Slides from "../components/Slides";

function Portfolio({ toggleTheme, showPortfolio, PortfolioData }) {
  const refPortfolio = useRef();
  const refSplide = useRef();

  const [showProfile, setShowProfile] = useState(false);
  const [cpuOnly, setCpuOnly] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    if (showPortfolio === true) {
      gsap.to(refPortfolio.current, {
        opacity: 1,
        delay: 0.15,
        duration: 0.3,
        ease: "power1",
      });
      gsap.to(refSplide.current, {
        opacity: 1,
        delay: 0.45,
        duration: 0.55,
        ease: "power1",
      });
      // Check if a GPU is being utilized for hardware acceleration. Apply optimizations if necessary.
      setTimeout(function () {
        let canvas = document.createElement("canvas");
        let gl;
        let debugInfo;
        let vendor;

        try {
          gl =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
        } catch (e) {}

        if (gl) {
          debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
          if (vendor === "Google Inc. (Google)") {
            // Remove GPU-intensive elements.
            setCpuOnly(true);
            document.getElementById("gpu_accel_only").remove();
            document
              .querySelectorAll(".blur, .blur-none, .backdrop-blur")
              .forEach(function (i) {
                i.classList.remove("blur", "blur-none", "backdrop-blur");
              });
          } else {
            document.getElementById("cpu_accel_only").remove();
          }
        }
      }, 450);
    }
  }, [showPortfolio]);

  return (
    <section
      ref={refPortfolio}
      className={clsx(
        "z-10 transition-[filter, color, background] overflow-hidden absolute flex pointer-events-none blur opacity-0 origin-bottom w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in",
        { "pointer-events-auto blur-none": showPortfolio }
      )}
    >
      <Profile
        toggleProfile={toggleProfile}
        showProfile={showProfile}
        cpuOnly={cpuOnly}
      />
      <div
        className={clsx(
          "pointer-events-none absolute blur opacity-0 bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in",
          { "pointer-events-auto blur-none": showPortfolio }
        )}
        ref={refSplide}
      >
        <header className="flex w-full items-center justify-center content-center absolute top-0 h-[40px] sm:h-[50px] md:h-[5vw] z-10">
          <div className="absolute flex flex-row justify-start sm:justify-end items-center w-[calc(50%_-_51px)] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)] left-[20px] md:left-[5vw] sm:-mt-1 xl:-mt-1.5">
            <h1 className="xl:-mr-[1px] text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light italic">
              Ryne
              <span className="px-0.5 md:px-1 lg:px-1.5 xl:px-2 opacity-10 dark:opacity-20">
                /
              </span>
              Not Ryan
            </h1>
          </div>
          <div className="z-10 flex flex-row justify-center">
            <div className="absolute -translate-y-full mt-1 opacity-10 bg-black w-[1px] h-screen dark:bg-white"></div>
            <button
              className="cursor-pointer origin-center active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:invert"
              onClick={() => toggleTheme()}
            >
              <img
                src={light}
                alt="Theme Toggle"
                className="h-[32px] sm:h-[36px] md:h-[4vw] xl:h-[51px] min-h-[25.5px]"
              />
            </button>
          </div>
          <div className="absolute flex flex-row justify-end sm:justify-start w-[calc(50%_-_51px)] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)] right-[20px] md:right-[5vw]">
            <div className="flex group gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-9 text-xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-[32px]">
              <a
                href="https://github.com/ryne/"
                target="_blank"
                className="text-inherit group-hover:opacity-30 hover:!opacity-100 flex justify-center items-center w-auto h-auto origin-center text-3xl active:!opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://codepen.io/ryne"
                target="_blank"
                className="text-inherit group-hover:opacity-30 hover:!opacity-100  flex justify-center items-center w-auto h-auto origin-center text-3xl active:!opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
              >
                <FaCodepen />
              </a>
              <a
                href="https://twitter.com/256ofryne"
                target="_blank"
                className="text-inherit group-hover:opacity-30 hover:!opacity-100  flex justify-center items-center w-auto h-auto origin-center text-3xl active:!opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
              >
                <FaXTwitter />
              </a>
              <button
                onClick={() => toggleProfile()}
                className="text-inherit group-hover:opacity-30 hover:!opacity-100 flex justify-center items-center w-auto h-auto origin-center text-3xl active:!opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
              >
                <FaUserAstronaut />
              </button>
            </div>
          </div>
        </header>
        <Slides PortfolioData={PortfolioData} />
        <span
          id="gpu_accel_only"
          className="transition-all w-full h-full border-[40px_0] sm:border-[50px_0] md:border-[50px_5vw] lg:border-[5vw] bg-transparent border-white/70 dark:border-black/70 backdrop-blur-lg fixed inset-0 backdrop-saturate-150 clippy"
        ></span>
        <span
          id="cpu_accel_only"
          className="absolute w-full h-full top-0 pointer-events-none z-0 dark:shadow-[0_0_40px_#000_inset] shadow-[0_0_40px_#FFF_inset] md:dark:shadow-[0_0_5vw_#000_inset] md:shadow-[0_0_5vw_#FFF_inset]"
        ></span>
      </div>
    </section>
  );
}

export default Portfolio;
