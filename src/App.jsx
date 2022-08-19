import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import light from './assets/light.png';

const App = () => {
  const refLight = useRef();
  const refShadow = useRef();
  const refText = useRef();

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
      delay: 0.75,
      duration: 2,
      ease: 'power1',
      opacity: 1,
    });
  });

  return (
    <div className="app">
      <div className="flex h-screen justify-center items-center bg-white text-black flex-col">
        <div className="absolute top-50 mb-16" ref={refLight}>
          <div class="absolute -translate-y-full translate-x-4 opacity-10 bg-black w-[1px] h-screen"></div>
          <img
            src={light}
            alt="light switch"
            class="cursor-pointer hover:contrast-150 hover:opacity-80 ease-in transition-all"
          />
        </div>
        <div className="opacity-0 text-center" ref={refText}>
          <h1 className="-mt-1 text-5xl font-light italic">
            Ryne <span className="opacity-10">/</span> Not Ryan
          </h1>
          <p className="mt-3 uppercase font-normal opacity-50 tracking-[.4em]">
            Web Development &amp; Design
          </p>
        </div>
        <div
          className="absolute h-0.5 w-10 top-50 mt-20 bg-black blur scale-y-50"
          ref={refShadow}
        ></div>
      </div>
      {/* <div className="flex h-screen justify-center items-center bg-black"></div> */}
    </div>
  );
};

export default App;
