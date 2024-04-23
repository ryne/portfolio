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
        "transition-[filter, color, background] pointer-events-none absolute bottom-0 z-10 flex h-screen w-screen origin-bottom flex-row items-center justify-center overflow-hidden bg-white text-black opacity-0 blur transition-[filter] duration-300 ease-in selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black",
        { "pointer-events-auto blur-none": showPortfolio },
      )}
    >
      <Profile
        toggleProfile={toggleProfile}
        showProfile={showProfile}
        cpuOnly={cpuOnly}
        FaGithub={FaGithub}
        FaCodepen={FaCodepen}
        FaXTwitter={FaXTwitter}
      />
      <div
        className={clsx(
          "pointer-events-none absolute flex-row bg-white text-black opacity-0 blur transition-[filter] duration-300 ease-in selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black",
          { "pointer-events-auto blur-none": showPortfolio },
        )}
        ref={refSplide}
      >
        <header className="absolute top-0 z-10 flex h-[40px] w-full content-center items-center justify-center sm:h-[50px] md:h-[5vw]">
          <div className="absolute left-[20px] flex w-[calc(50%_-_51px)] flex-row items-center justify-start sm:justify-end md:left-[5vw] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)]">
            <h1 className="text-xl font-light italic sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Ryne
              <span className="px-0.5 opacity-10 dark:opacity-20 md:px-1 lg:px-1.5 xl:px-2">
                /
              </span>
              Not Ryan
            </h1>
          </div>
          <div className="z-10 flex flex-row justify-center">
            <div className="absolute mt-1 h-screen w-[1px] -translate-y-full bg-black opacity-10 dark:bg-white"></div>
            <button
              className="origin-center cursor-pointer transition-opacity ease-in selection:bg-transparent active:scale-95 active:opacity-50 dark:invert dark:selection:bg-transparent"
              onClick={() => toggleTheme()}
            >
              <img
                src={light}
                alt="Theme Toggle"
                className="h-[32px] min-h-[25.5px] sm:h-[36px] md:h-[4vw] xl:h-[51px]"
              />
            </button>
          </div>
          <div className="absolute right-[20px] flex w-[calc(50%_-_51px)] flex-row justify-end sm:justify-start md:right-[5vw] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)]">
            <div className="group flex gap-4 text-xl sm:gap-4 sm:text-2xl md:gap-5 md:text-2xl lg:gap-6 lg:text-3xl xl:gap-8 2xl:gap-9 2xl:text-[32px]">
              <a
                href="https://github.com/ryne/"
                target="_blank"
                className="flex h-auto w-auto origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaGithub />
              </a>
              <a
                href="https://codepen.io/ryne"
                target="_blank"
                className="flex h-auto w-auto  origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaCodepen />
              </a>
              <a
                href="https://twitter.com/256ofryne"
                target="_blank"
                className="flex h-auto w-auto  origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaXTwitter />
              </a>
              <button
                onClick={() => toggleProfile()}
                className="flex h-auto w-auto origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaUserAstronaut />
              </button>
            </div>
          </div>
        </header>
        <Slides PortfolioData={PortfolioData} />
        <span
          id="gpu_accel_only"
          className="clippy fixed inset-0 h-full w-full border-[40px_0] border-white/70 bg-transparent backdrop-blur-lg backdrop-saturate-150 transition-all dark:border-black/70 sm:border-[50px_0] md:border-[50px_5vw] lg:border-[5vw]"
        ></span>
        <span
          id="cpu_accel_only"
          className="pointer-events-none absolute top-0 z-0 h-full w-full shadow-[0_0_40px_#FFF_inset] dark:shadow-[0_0_40px_#000_inset] md:shadow-[0_0_5vw_#FFF_inset] md:dark:shadow-[0_0_5vw_#000_inset]"
        ></span>
      </div>
    </section>
  );
}

export default Portfolio;
