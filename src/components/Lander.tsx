function Lander() {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] mb-[400px]">
      <div className="max-w-[900px] flex-col text-left items-center justify-center">
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
