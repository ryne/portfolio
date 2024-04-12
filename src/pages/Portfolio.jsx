import { useRef, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { BsChevronDown, BsBoxArrowUpRight } from "react-icons/bs";
import {
  FaGithub,
  FaCodepen,
  FaXTwitter,
  FaUserAstronaut,
} from "react-icons/fa6";
import light from "../assets/light.png";

function Portfolio({
  toggleTheme,
  showPortfolio,
  togglePortfolio,
  PortfolioData,
}) {
  const refPortfolio = useRef();
  const refSplide = useRef();

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
    } else {
      gsap.to(refPortfolio.current, {
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power1",
      });
      gsap.to(refSplide.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1",
      });
    }
  }, [showPortfolio]);

  return (
    <section
      ref={refPortfolio}
      className={clsx(
        "transition-[filter, color, background] overflow-hidden absolute flex pointer-events-none blur opacity-0 origin-bottom w-screen h-screen bottom-0 justify-center items-center bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in",
        { "pointer-events-auto blur-none": showPortfolio }
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute blur opacity-0 bg-white text-black flex-row selection:bg-black selection:text-white dark:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black transition-[filter] duration-300 ease-in",
          { "pointer-events-auto blur-none": showPortfolio }
        )}
        ref={refSplide}
      >
        <header className="flex w-full items-center justify-center content-center absolute top-[8px] sm:top-[12px] md:top-[calc(2.5vw_-_16px)] z-10">
          <div className="absolute flex flex-row justify-end items-center w-[calc(50%_-_51px)] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)] left-[20px] md:left-[5vw] top-0 h:[24px] md:h-[32px]">
            <h1 className="xl:-mr-[1px] -mt-[2px] sm:-mt-[2px] lg:-mt-[4px] xl:-mt-[4px] 2xl:-mt-[6px] text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light italic 2xl:tracking-wide">
              Ryne
              <span className="px-0.5 md:px-1 lg:px-1.5 xl:px-2 opacity-10 dark:opacity-20">
                /
              </span>
              Not Ryan
            </h1>
          </div>
          <div className="z-10 flex flex-row justify-center h-[32px] -mt-0.5 xl:-mt-2">
            <div class="absolute -translate-y-full mt-1 opacity-10 bg-black w-[1px] h-screen dark:bg-white"></div>
            <button
              className="cursor-pointer origin-center active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:invert"
              onClick={() => toggleTheme()}
            >
              <img
                src={light}
                alt="Theme Toggle"
                className="h-[3.5vw] sm:h-[4.5vw] md:h-[3.5vw] xl:h-[51px] min-h-[25.5px]"
              />
            </button>
          </div>
          <div className="absolute gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-9 flex flex-row justify-start w-[calc(50%_-_51px)] md:w-[calc(50%_-_5vw_-_51px)] 2xl:w-[calc(50%_-_5vw_-_61px)] right-[20px] md:right-[5vw] top-1 sm:top-1 md:top-0 h:[24px] md:h-[32px]">
            <a
              href="https://github.com/ryne/"
              target="_blank"
              className="group flex justify-center items-center w-auto h-auto origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <FaGithub className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[32px]" />
            </a>
            <a
              href="https://codepen.io/ryne"
              target="_blank"
              className="group flex justify-center items-center w-auto h-auto origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <FaCodepen className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[32px]" />
            </a>
            <a
              href="https://twitter.com/256ofryne"
              target="_blank"
              className="group flex justify-center items-center w-auto h-auto origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <FaXTwitter className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[32px]" />
            </a>
            <button
              onClick={() => togglePortfolio()}
              className="group flex justify-center items-center w-auto h-auto origin-center text-3xl active:opacity-50 active:scale-95 ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white"
            >
              <FaUserAstronaut className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[32px]" />
            </button>
          </div>
        </header>
        <Splide
          onActive={(splide, prev, next) => {
            prev.slide
              .querySelectorAll("video")
              .forEach((video) => video.play());
          }}
          onHidden={(splide, prev, next) => {
            prev.slide.scrollTop = 0;
            prev.slide.querySelectorAll("video").forEach((video) => {
              video.currentTime = "0";
              video.pause();
            });
          }}
          aria-label="Portfolio"
          options={{
            type: "slide",
            width: "100vw",
            height: "calc(var(--vh) * 100)",
            fixedWidth: "100vw",
            arrows: true,
            pagination: true,
            keyboard: "focused",
            keyboardPagination: true,
            flickPower: 1,
            flickMaxPages: 1,
            waitForTransition: true,
            classes: {
              prev: "transition-all z-10 rotate-180 hidden md:block z-50 cursor-pointer h-[40px] absolute left-[2.5vw] top-1/2 h-[40px] -ml-[20px] -translate-y-2/4 scale-[.62] xl:scale-75 active:opacity-50 active:scale-[.67] xl:active:scale-[.8] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert",
              next: "transition-all z-10 hidden md:block z-50 cursor-pointer h-[40px] absolute right-[2.5vw] top-1/2 h-[40px] -mr-[20px] -translate-y-2/4 scale-[.62] xl:scale-75 active:opacity-50 active:scale-[.67] xl:active:scale-[.8] ease-in transition-opacity selection:bg-transparent dark:selection:bg-transparent dark:text-white dark:invert",
              pagination:
                "transition-all z-10 flex bottom-[8px] md:bottom-[calc(2.5vw_-_12px)] w-full justify-center items-center fixed",
              page: "transition-all mx-0.5 rounded-full w-2.5 h-2.5 scale-75 opacity-30 active:opacity-50 active:scale-150 ease-in transition-all bg-black dark:bg-white",
            },
          }}
        >
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[0].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[50px_5vw] lg:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[0].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[0].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://vimodigital.com/"
                  title="Open Vimo Digital in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  Vimodigital.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[0].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[0].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[0].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[1].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[1].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[1].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://www.growwithprevail.com/"
                  title="Open Prevail Legal Marketing in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  growwithprevail.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[1].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[1].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[1].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[2].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[2].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[2].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://themoderngroom.com/suit-builder/"
                  title="Open The Modern Groom Suit Builder in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  themoderngroom.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[2].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[2].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[2].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[3].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[3].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[3].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://hacimechanical.com/"
                  title="Open Haci Mechanical in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  hacimechanical.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[3].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[3].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[3].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[4].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[4].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[4].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="http://whittinghamcreations.com/"
                  title="Open Whittingham Creations in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  whittinghamcreations.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[4].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[4].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[4].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[5].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[5].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[5].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://telostennis.com/"
                  title="Open Telos Tennis in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  telostennis.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[5].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[5].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[5].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[6].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[6].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[6].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://redlinemarketingco.com/hb/lookalike/"
                  title="Open HomeBridge LP in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  redlinemarketingco.com
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[6].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[6].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[6].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[7].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[7].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[7].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <div className="flex flex-row items-center justify-center w-full">
                  <a
                    href="https://github.com/ryne/shortcut-buddy"
                    title="Open Shortcut Buddy repo in a new window"
                    target="_blank"
                    className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                  >
                    GitHub
                    <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                  </a>
                  <a
                    href="https://shortcut-buddy.netlify.app/"
                    title="Open Shortcut Buddy (live site) in a new window"
                    target="_blank"
                    className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                  >
                    Live
                    <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                  </a>
                </div>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[7].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[7].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[7].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[8].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[8].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[8].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <div className="flex flex-row items-center justify-center w-full">
                  <a
                    href="https://github.com/The-Zen-Garden/better-phasmophobia-journal"
                    title="Open Better Phasmophobia Journal repo in a new window"
                    target="_blank"
                    className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                  >
                    GitHub
                    <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                  </a>
                  <a
                    href="https://better-phasmophobia-journal.netlify.app/"
                    title="Open Better Phasmophobia Journal (live site) in a new window"
                    target="_blank"
                    className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                  >
                    Live
                    <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                  </a>
                </div>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[8].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[8].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[8].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
          <SplideSlide className="overflow-y-auto">
            <div
              style={{
                background: `${PortfolioData[9].colors.vibrant}22`,
              }}
              className={`flex flex-col items-start justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <div className="flex w-full justify-center">
                <img
                  className="block w-[calc(100%_-_20px)] max-w-[480px]"
                  src={PortfolioData[9].src}
                />
              </div>
              <div className="flex flex-col w-full justify-center mt-9 md:mt-12 text-center text-sm md:text-base tracking-[.3em] md:tracking-[.4em] uppercase">
                <p className="block w-full">{PortfolioData[9].description}</p>
              </div>
              <div className="flex flex-col w-full items-center justify-center mt-1.5 md:mt-2">
                <a
                  href="https://codepen.io/ryne"
                  title="Open Ryne's Codepen in a new window"
                  target="_blank"
                  className="block opacity-50 hover:opacity-100 p-1.5 px-3 text-xs tracking-[.3em] md:tracking-[.4em] uppercase transition-all"
                >
                  codepen.io/ryne
                  <BsBoxArrowUpRight className="inline ml-1 -mt-1.5 text-sm" />
                </a>
                <BsChevronDown
                  style={{
                    color: `${PortfolioData[9].colors.vibrant}`,
                  }}
                  className="block text-xl md:text-3xl pointer-events-none mt-6 md:mt-8"
                />
              </div>
            </div>
            <div
              style={{
                background: `${PortfolioData[9].colors.vibrant}22`,
              }}
              className={`flex flex-col items-center justify-center w-full p-[50px_20px] md:p-[5vw] h-[calc(var(--vh)_*_100)]`}
            >
              <video
                loop
                muted
                className="aspect-video h-full cursor-pointer"
                onClick={(e) =>
                  e.target.paused ? e.target.play() : e.target.pause()
                }
              >
                <source src={PortfolioData[9].assets.video} type="video/mp4" />
              </video>
            </div>
          </SplideSlide>
        </Splide>
        <span className="transition-all w-full h-full border-[40px_0] sm:border-[50px_0] md:border-[50px_5vw] lg:border-[5vw] bg-transparent border-white/70 dark:border-black/70 backdrop-blur-lg fixed inset-0 backdrop-saturate-150 clippy"></span>
      </div>
    </section>
  );
}

export default Portfolio;
