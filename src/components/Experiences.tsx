import BlurFade from "./ui/blur-fade";

function Experiences() {
  return (
    <div className="my-92 flex flex-col w-full">
      <h2 className="text-7xl font-bold my-16 text-left max-md:text-6xl max-md:text-center max-[550px]:text-5xl">
        Experience.
      </h2>
      <BlurFade delay={0.5} inView>
        <Work
          name="Google"
          role="Grow with Google Scholar"
          date="Aug 2025 - Present"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Shamrock Foods Company"
          role="Software Engineer Intern"
          date="May 2025 - Aug 2025"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="eBay"
          role="eBay Pathways 2025"
          date="May 2025 - Aug 2025"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work name="Acorns" role="Ambassador" date="Jan 2025 - May 2025" />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Iron Mountain"
          role="Computer Technician"
          date="May 2024 - Aug 2024"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Tutor Doctor"
          role="Comp Sci & Math Tutor"
          date="Dec 2023 - June 2024"
        />
      </BlurFade>
    </div>
  );
}

interface workInfo {
  name: string;
  role: string;
  date: string;
}

function Work({ name, role, date }: workInfo) {
  return (
    <div className="flex justify-between my-12 max-[550px]:flex-col max-[550px]:gap-4">
      <div className="flex flex-col text-left max-[550px]:text-center">
        <h5>{name}</h5>
        <p className="text-[#B4B4B4] max-md:text-sm max-[550px]:text-xs">
          {role}
        </p>
      </div>
      <div>
        <p className="text-xl font-extralight max-md:text-base font-['Inter'] max-[550px]:text-sm">
          {date}
        </p>
      </div>
    </div>
  );
}

export default Experiences;
