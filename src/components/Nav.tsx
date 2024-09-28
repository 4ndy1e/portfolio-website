import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section className="fixed top-0 left-0 w-full h-[57px] px-6 py-3 border-b border-[#606060] justify-between items-center flex bg-black z-[10] max-sm:h-[45px]">
      <div className="text-white text-base font-normal font-['Inter'] leading-snug">
        <img src="4L.png" className="h-[50px] apsect-square max-sm:h-[35px]" />
      </div>
      <div className="h-[45px] justify-start items-center gap-16 flex max-sm:gap-8">
        <div className="flex-col justify-center items-center">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "active" : ""}
          >
            {/* <img
              className="h-[30px] aspect-square max-sm:h-[25px]"
              src="work.png"
              alt="Work"
            /> */}
          </Link>
        </div>
        <div className="flex-col justify-center items-center">
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "active" : ""}
          >
            <img
              className="h-[30px] aspect-square max-sm:h-[25px]"
              src="profile.png"
              alt="About"
            />
          </Link>
        </div>
        <div className="flexjustify-center items-center">
          <a href="https://www.linkedin.com/in/4ndyle/" target="_blank">
            {/* <img
              className="h-[30px] aspect-square max-sm:h-[25px]"
              src="linkedin.png"
              alt="LinkedIn"
            /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
