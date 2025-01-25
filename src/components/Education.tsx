import BlurFade from "./ui/blur-fade";

function Education() {
  return (
    <section className="w-full flex flex-col gap-8 max-[550px]:px-4">
      <div className="flex gap-16 items-center max-lg:gap-8 max-md:flex-col-reverse max-md:gap-16">
        <img
          src="westCampus.jpeg"
          className="rounded-3xl w-1/2 max-md:w-full"
        />
        <div className="w-1/2 px-8 max-md:w-full max-md:px-0">
          <BlurFade inView>
            <div className="mb-16 max-lg:mb-12">
              <p className="text-2xl text-left font-bold max-md:text-center">
                {" "}
                Arizona State University
              </p>
              <p className="text-left text-black text-sm font-bold font-['Inter'] max-md:text-center">
                Ira A. Fulton Schools of Engineering
              </p>
            </div>
            <p className="text-left text-[#b4b4b4] max-md:text-center">
              I am currently an undergraduate student at ASU pursing a{" "}
              <span className="text-black">
                B.S. in Computer Science - Software Engineering
              </span>{" "}
              averaging a <span className="text-black">4.12 GPA</span>.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="flex w-full gap-8 box-border max-lg:hidden">
        <img src="asu2023.jpeg" className="w-1/3 rounded-3xl" />
        <img src="oldmain.jpg" className="w-2/5 rounded-3xl" />
      </div>
    </section>
  );
}

export default Education;
