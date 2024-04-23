import { React } from "react";
import avatar from "../assets/ryne.jpg";
import bg from "../assets/bg.png";
import cat from "../assets/omori_cat.gif";
import { IoClose } from "react-icons/io5";

const Profile = ({
  toggleProfile,
  showProfile,
  cpuOnly,
  FaGithub,
  FaCodepen,
  FaXTwitter,
}) => {
  return (
    <div
      className={`${
        showProfile ? "z-1 pointer-events-all" : "-z-1 pointer-events-none"
      } absolute top-0 left-0 flex h-screen w-screen items-center justify-center duration-500`}
    >
      <div
        className={`${
          showProfile ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        } z-[52] m-3 max-w-md rounded-3xl bg-white/95 text-black shadow-xl transition-all duration-500 dark:bg-black/95 dark:text-white dark:shadow-indigo-900/40`}
      >
        <button
          onClick={() => {
            toggleProfile();
          }}
          className="absolute right-4 top-4 z-50 origin-center cursor-pointer rounded-full bg-red-500/80 p-1 text-xl text-white shadow-lg transition-all hover:bg-red-500/100 hover:saturate-150 active:scale-90"
        >
          <IoClose />
        </button>
        <img src={bg} className="w-full rounded-t-3xl" />
        <div className="-mt-8 flex justify-center">
          <img
            className="-mt-3 w-24 rounded-full border-2 border-solid border-white hover:animate-spin dark:border-black"
            src={avatar}
          />
        </div>
        <div className="px-4 pb-6 pt-2 text-center">
          <h3 className="font-bold">Ryne Pittman</h3>
          <div className="flex w-full flex-row justify-center">
            <div className="flex flex-row group my-2 gap-2">
              <a
                href="https://github.com/ryne/"
                title="Ryne on Github"
                target="_blank"
                className="flex h-auto w-auto origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaGithub />
              </a>
              <a
                href="https://codepen.io/ryne"
                title="Ryne on CodePen"
                target="_blank"
                className="flex h-auto w-auto  origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaCodepen />
              </a>
              <a
                href="https://twitter.com/256ofryne"
                title="Ryne on X (Twitter)"
                target="_blank"
                className="flex h-auto w-auto  origin-center items-center justify-center text-3xl text-inherit transition-opacity ease-in selection:bg-transparent hover:!opacity-100 active:scale-95 active:!opacity-50 group-hover:opacity-30 dark:text-white dark:selection:bg-transparent"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
          <p className="text-sm font-light opacity-70 sm:text-base">
            Traverser of technologies with focus on front-end web development
            &amp; design. Building (breaking) all the things since 1989. Let's
            grow together.
          </p>
        </div>
        <div className="flex justify-center pb-6">
          <img className="h-[24px] w-[40px] dark:invert" src={cat} />
        </div>
      </div>
      <div
        onClick={() => {
          toggleProfile();
        }}
        className={`${showProfile ? "opacity-100" : "opacity-0"} ${
          cpuOnly
            ? "bg-gray-50/90 dark:bg-black/90"
            : "bg-gray-50/70 backdrop-blur dark:bg-black/70"
        } absolute top-0 left-0 z-[51] h-screen w-screen transition-all duration-500`}
      ></div>
    </div>
  );
};

export default Profile;
