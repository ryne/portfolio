import { React } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BsChevronDown, BsBoxArrowUpRight } from "react-icons/bs";

const Slides = ({ PortfolioData }) => {
  return (
    <Splide
      onActive={(splide, prev, next) => {
        prev.slide.querySelectorAll("video").forEach((video) => video.play());
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
          className={`flex h-[calc(var(--vh)_*_100)] w-full flex-col items-start justify-center p-[50px_20px] md:p-[50px_5vw] lg:p-[5vw]`}
        >
          <div className="flex w-full justify-center">
            <img
              className="block w-[calc(100%_-_20px)] max-w-[480px]"
              src={PortfolioData[0].src}
            />
          </div>
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[0].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[1].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[1].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[2].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[2].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[3].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[3].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[4].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[4].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[5].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[5].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[6].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[6].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[7].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[7].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[8].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[8].assets.video} type="video/mp4" />
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
          <div className="mt-9 flex w-full flex-col justify-center text-center text-sm uppercase tracking-[.3em] md:mt-12 md:text-base md:tracking-[.4em]">
            <p className="block w-full">{PortfolioData[9].description}</p>
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
              className="pointer-events-none mt-6 block text-xl md:mt-8 md:text-3xl"
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
            <source src={PortfolioData[9].assets.video} type="video/mp4" />
          </video>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Slides;