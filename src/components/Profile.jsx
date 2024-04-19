import React from "react";
import avatar from "../assets/ryne.jpg";
import bg from "../assets/bg.png";
import cat from "../assets/omori_cat.gif";

const Profile = ({ toggleProfile, showProfile }) => {
  return (
    <div
      className={`${showProfile ? "z-1 pointer-events-all" : "-z-1 pointer-events-none"} flex items-center justify-center absolute top-0 left-0 w-screen h-screen duration-500`}
    >
      <div
        className={`${showProfile ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"} z-[52] rounded-3xl overflow-hidden shadow-xl max-w-sm m-3 dark:bg-black/70 dark:text-white bg-white text-black transition-all duration-500`}
      >
        <img src={bg} className="w-full" />
        <div className="flex justify-center -mt-8">
          <img
            className="w-24 rounded-full border-solid border-white dark:border-black border-2 -mt-3"
            src={avatar}
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="bold">Ryne Pittman</h3>
          <p className="mt-2 font-light">
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
        className={`${showProfile ? "opacity-100" : "opacity-0"} absolute w-screen h-screen bg-white/40 dark:bg-black/40 backdrop-blur transition-all duration-500 top-0 left-0 z-[51]`}
      ></div>
    </div>
  );
};

export default Profile;
