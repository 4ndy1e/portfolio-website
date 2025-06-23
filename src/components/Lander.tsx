import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import Particles from "@/blocks/Backgrounds/Particles/Particles";

function Lander() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100vh] mb-[400px]">
      {/* Aurora as background */}
      <div className="absolute inset-0 z-0 h-[50%]">
        <Aurora
          colorStops={["#5227FF", "#7CFF67", "#5227FF"]}
          blend={0.5}
          amplitude={0.5}
          speed={1}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={75}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 max-w-[900px] flex-col text-left items-center justify-center">
        <h2 className="text-white text-3xl font-bold font-['Inter'] max-lg:text-2xl max-sm:text-xl">
          Andy Le
        </h2>
        <h1 className="my-16 leading-none max-lg:text-5xl max-sm:text-4xl max-sm:my-8 max-[480px]:text-3xl">
          Software Engineer
          <br />
          based in Arizona
          <br />
        </h1>
        <h1 className="my-16 leading-none max-lg:text-5xl max-sm:text-4xl max-sm:my-8 max-[480px]:text-3xl">
          Student at
          <br />
          <span className="asu">Arizona State University</span>
          <br />
          B.S. in Computer Science
        </h1>
      </div>
    </section>
  );
}

export default Lander;
