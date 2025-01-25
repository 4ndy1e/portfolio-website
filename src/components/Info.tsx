import BlurFade from "./ui/blur-fade";

function Info() {
  return (
    <section className="flex items-center max-md:flex-col">
      <div className="border-black w-[50%] pr-24 max-lg:pr-16 max-lg:w-[60%] max-md:px-4 max-md:w-full">
        <BlurFade>
          <p className="aboutDesc">
            I am currently a undergraduate student with a passion for{" "}
            <span className="text-black">design and software development</span>.
          </p>
        </BlurFade>
        <br></br>
        <BlurFade delay={0.5}>
          <p className="aboutDesc">
            Through my experiences, I’ve developed a strong foundation in web
            development and application design.{" "}
            <span className="text-black">
              I enjoy the process of bringing ideas to life— translating
              concepts into functional, scalable, and user-friendly applications
              through code.
            </span>{" "}
            The journey of troubleshooting, refining, and implementing solutions
            is both challenging and exhilarating, and it fuels my drive to
            continuously improve.
          </p>
        </BlurFade>
        <br></br>
        <BlurFade delay={1}>
          <p className="aboutDesc">
            The biggest reason I’m pursuing a career in tech is because of its
            ever-evolving nature. I’m inspired by the endless opportunities to
            learn, grow, and innovate in this field.{" "}
            <span className="text-black">
              Every day presents a new challenge, and I love being able to
              evolve alongside the technology I work with.
            </span>
          </p>
        </BlurFade>
      </div>
      <Images />
    </section>
  );
}

function Images() {
  return (
    <div className="flex w-[50%] items-center gap-8 max-md:w-full max-md:mt-24 max-[570px]:px-4">
      <div className="w-3/5 max-lg:w-full ">
        <img src="profile1.jpeg" className="rounded-3xl"></img>
        <p className="imgCaption m-4"> Fall in Northern Arizona</p>
      </div>
      <div className="flex flex-col gap-8 w-2/5 max-lg:hidden">
        <img src="profile2.jpg" className="rounded-3xl max-lg:hidden" />
        <img src="boston.jpg" className="rounded-3xl max-lg:hidden" />
      </div>
    </div>
  );
}

export default Info;
