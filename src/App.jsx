import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import light from './assets/light.png';

const App = () => {
  const refLight = useRef();
  const refShadow = useRef();
  const refText = useRef();

  useEffect(() => {
    gsap.to(refLight.current, {
      y: '-200px',
      delay: 0.5,
      duration: 2,
      ease: 'power3',
    });
    gsap.to(refShadow.current, {
      y: '200px',
      delay: 0.5,
      duration: 2,
      transform: 'scale(1.5,1)',
      opacity: '0',
      ease: 'power3',
    });
    gsap.to(refText.current, {
      delay: 0.6,
      duration: 2,
      ease: 'power1',
      opacity: 1,
    });
  });

  return (
    <>
      <div className="app">
        <div className="flex h-screen justify-center items-center bg-white flex-col">
          <div className="absolute top-50 mb-24 box" ref={refLight}>
            <img src={light} alt="Logo" />
          </div>
          <div className="opacity-0" ref={refText}>
            <h1 className="text-center text-5xl font-light italic">
              Ryne <span className="opacity-10">/</span> Not Ryan
            </h1>
            <p className="flex mt-4 text-center uppercase font-normal opacity-50 tracking-[.4em]">
              Web Development &amp; Design
            </p>
          </div>
          <div
            className="absolute h-0.5 w-12 top-50 mt-24 bg-black blur"
            ref={refShadow}
          ></div>
        </div>
        {/* <div className="flex h-screen justify-center items-center bg-black"></div> */}
      </div>
    </>
  );
};

export default App;
