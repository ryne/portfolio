import { React } from "react";
import avatar from "../assets/ryne.jpg";
import bg from "../assets/bg.png";
import cat from "../assets/omori_cat.gif";
import { IoClose } from "react-icons/io5";

const Profile = ({ toggleProfile, showProfile, cpuOnly }) => {
  return (
    <div
      className={`${showProfile ? "z-1 pointer-events-all" : "-z-1 pointer-events-none"} flex items-center justify-center absolute top-0 left-0 w-screen h-screen duration-500`}
    >
      <div
        className={`${showProfile ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"} z-[52] rounded-3xl shadow-xl dark:shadow-indigo-900/40 max-w-sm m-3 dark:bg-black/95 dark:text-white bg-white/95 text-black transition-all duration-500`}
      >
        <button
          onClick={() => {
            toggleProfile();
          }}
          className="hover:bg-red-500 hover:saturate-150 absolute p-1 cursor-pointer right-4 shadow-lg top-4 z-50 text-white bg-red-500 rounded-full text-xl transition-all"
        >
          <IoClose />
        </button>
        <img src={bg} className="w-full rounded-t-3xl" />
        <div className="flex justify-center -mt-8">
          <img
            className="w-24 rounded-full border-solid border-white dark:border-black border-2 -mt-3"
            src={avatar}
          />
        </div>
        <div className="text-center px-4 pb-6 pt-2">
          <h3 className="bold">Ryne Pittman</h3>
          <p className="mt-2 font-light opacity-70">
            Traverser of technologies with focus on front-end web development
            &amp; design. Building (breaking) all the things since 1989. Let's
            grow together.
          </p>
        </div>
        <div className="flex justify-center pb-6">
          <img className="w-[40px] h-[24px] dark:invert" src={cat} />
        </div>
      </div>
      <div
        onClick={() => {
          toggleProfile();
        }}
        className={`${showProfile ? "opacity-100" : "opacity-0"} ${cpuOnly ? "bg-white/90 dark:bg-black/90" : "backdrop-blur bg-white/70 dark:bg-black/70"} absolute w-screen h-screen transition-all duration-500 top-0 left-0 z-[51]`}
      ></div>
    </div>
  );
};

export default Profile;
