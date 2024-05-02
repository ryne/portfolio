import { React } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Tooltip } from "react-tooltip";
import { BsChevronDown, BsBoxArrowUpRight } from "react-icons/bs";
import {
  SiTailwindcss,
  SiWordpress,
  SiHtml5,
  SiPhp,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiInvision,
  SiAdobephotoshop,
  SiSass,
  SiVuedotjs,
  SiAdobeillustrator,
  SiReact,
  SiAbletonlive,
} from "react-icons/si";

const Slides = ({ PortfolioData, showPortfolio }) => {
  return (
    <Splide
      onActive={(splide, prev, next) => {
        prev.slide
          .querySelector(".chevron")
          .classList.add("animate-[bounce_1s_1_reverse_forwards]");
        prev.slide.querySelectorAll("video").forEach((video) => {
          let videoSource = video.querySelector("source");
          if (
            videoSource.getAttribute("src") !==
            PortfolioData[prev.index].assets.video
          ) {
            videoSource.setAttribute(
              "src",
              PortfolioData[prev.index].assets.video
            );
            video.load();
          }
          video.play();
        });
      }}
      onHidden={(splide, prev, next) => {
        prev.slide
          .querySelector(".chevron")
          .classList.remove(
            "animate-[bounce_1s_1_reverse_forwards]",
            "animate-[bounce_1s_1s_1_reverse_forwards]"
          );
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
      <Tooltip
        id="tooltip"
        className="z-[1000] !bg-black !text-white !opacity-90 dark:!bg-white dark:!text-black"
      />
      <SplideSlide className="overflow-y-auto">
        <div
          style={{
            background: `${PortfolioData[0].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[50px_5vw] lg:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[0].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiTailwindcss
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Tailwind"
              />
              <SiJquery
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="jQuery"
              />
              <SiWordpress
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="WordPress"
              />
              <SiPhp
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="PHP"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
              <SiInvision
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="InVision"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[0].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://vimodigital.com/"
              title="Open Vimo Digital in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              Vimodigital.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[0].colors.vibrant}`,
              }}
              className={`chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl animate-[bounce_1s_1s_1_reverse_forwards] ${
                showPortfolio === false ? "!animate-none" : ""
              }`}
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[0].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[1].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiTailwindcss
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Tailwind"
              />
              <SiSass
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Sass"
              />
              <SiJquery
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="jQuery"
              />
              <SiWordpress
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="WordPress"
              />
              <SiPhp
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="PHP"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
              <SiInvision
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="InVision"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[1].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://www.growwithprevail.com/"
              title="Open Prevail Legal Marketing in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              growwithprevail.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[1].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[1].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[2].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[2].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiVuedotjs
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Vue.js"
              />
              <SiSass
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Sass"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[2].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://themoderngroom.com/suit-builder/"
              title="Open The Modern Groom Suit Builder in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              themoderngroom.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[2].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[2].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[3].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[3].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiJquery
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="jQuery"
              />
              <SiWordpress
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="WordPress"
              />
              <SiPhp
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="PHP"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[3].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://hacimechanical.com/"
              title="Open Haci Mechanical in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              hacimechanical.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[3].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[3].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[4].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[4].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
              <SiAdobeillustrator
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Illustrator"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[4].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="http://whittinghamcreations.com/"
              title="Open Whittingham Creations in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              whittinghamcreations.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[4].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[4].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[5].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[5].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiSass
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Sass"
              />
              <SiJquery
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="jQuery"
              />
              <SiWordpress
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="WordPress"
              />
              <SiPhp
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="PHP"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
              <SiInvision
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="InVision"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[5].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://telostennis.com/"
              title="Open Telos Tennis in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              telostennis.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[5].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[5].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[6].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[6].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[6].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://redlinemarketingco.com/hb/lookalike/"
              title="Open HomeBridge LP in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              redlinemarketingco.com
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[6].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[6].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[7].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[7].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiReact
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="React"
              />
              <SiTailwindcss
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Tailwind"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[7].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <div className="flex w-full flex-row items-center justify-center">
              <a
                href="https://github.com/ryne/shortcut-buddy"
                title="Open Shortcut Buddy repo in a new window"
                target="_blank"
                className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
              >
                GitHub
                <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
              </a>
              <a
                href="https://shortcut-buddy.netlify.app/"
                title="Open Shortcut Buddy (live site) in a new window"
                target="_blank"
                className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
              >
                Live
                <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
              </a>
            </div>
            <BsChevronDown
              style={{
                color: `${PortfolioData[7].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[7].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[8].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[8].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiReact
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="React"
              />
              <SiSass
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Sass"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[8].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <div className="flex w-full flex-row items-center justify-center">
              <a
                href="https://github.com/The-Zen-Garden/better-phasmophobia-journal"
                title="Open Better Phasmophobia Journal repo in a new window"
                target="_blank"
                className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
              >
                GitHub
                <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
              </a>
              <a
                href="https://better-phasmophobia-journal.netlify.app/"
                title="Open Better Phasmophobia Journal (live site) in a new window"
                target="_blank"
                className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
              >
                Live
                <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
              </a>
            </div>
            <BsChevronDown
              style={{
                color: `${PortfolioData[8].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[8].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
            background: `${PortfolioData[9].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[9].src}
            />
          </div>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group mt-12 gap-2 cursor-default">
              <SiHtml5
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="HTML5"
              />
              <SiCss3
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="CSS3"
              />
              <SiJavascript
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Javascript"
              />
              <SiSass
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Sass"
              />
              <SiJquery
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="jQuery"
              />
              <SiAdobephotoshop
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Photoshop"
              />
              <SiAdobeillustrator
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Illustrator"
              />
              <SiAbletonlive
                className="transition-all cursor-help hover:!opacity-100 opacity-30"
                data-tooltip-id="tooltip"
                data-tooltip-content="Ableton Live"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:text-base md:tracking-[.4em]">
            <p className="block w-full transition-all">
              {PortfolioData[9].description}
            </p>
          </div>
          <div className="mt-1.5 flex w-full flex-col items-center justify-center md:mt-2">
            <a
              href="https://codepen.io/ryne"
              title="Open Ryne's Codepen in a new window"
              target="_blank"
              className="block p-1.5 px-3 text-xs uppercase tracking-[.3em] opacity-50 transition-all hover:opacity-100 md:tracking-[.4em]"
            >
              codepen.io/ryne
              <BsBoxArrowUpRight className="ml-1 -mt-1.5 inline text-sm" />
            </a>
            <BsChevronDown
              style={{
                color: `${PortfolioData[9].colors.vibrant}`,
              }}
              className="chevron -translate-y-1/4 pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
            />
          </div>
        </div>
        <div
          style={{
            background: `${PortfolioData[9].colors.vibrant}22`,
          }}
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-center justify-center p-[50px_20px] md:p-[5vw]`}
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
    </Splide>
  );
};

export default Slides;
