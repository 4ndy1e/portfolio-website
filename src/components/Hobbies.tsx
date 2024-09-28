function Hobbies() {
  return (
    <section className="flex max-[550px]:flex-col max-[550px]:gap-16 max-[550px]:px-4">
      <div className="border-black w-[40%] flex flex-col gap-24 max-lg:w-[50%] max-md:pr-0 max-[550px]:w-full">
        <div>
          <p className="text-base font-normal font-['Inter'] text-[#b4b4b4] text-left max-sm:text-sm">
            {" "}
            In my free time, I like to...{" "}
          </p>
          <br></br>
          <p className="activities"> Travel </p>
          <p className="activities"> Go to the gym </p>
          <p className="activities"> Visit the art museum </p>
          <p className="activities"> Watch cat videos </p>
        </div>
        <div>
          <p className="text-base font-normal font-['Inter'] text-[#b4b4b4] text-left">
            {" "}
            and of course...{" "}
          </p>
          <br></br>
          <p className="activities"> Design and develop :) </p>
        </div>
      </div>
      <Images />
    </section>
  );
}

function Images() {
  return (
    <div className="flex w-[60%] gap-8 max-lg:w-[50%] max-[550px]:w-full">
      <div className="w-7/10">
        <img src="vietnam.jpg" className="rounded-3xl" />
        <p className="imgCaption m-4"> Summer 2023 trip to Vietnam </p>
      </div>
      <div className="flex flex-col gap-8 w-3/10 max-lg:hidden">
        <img src="hawaii.jpg" className="rounded-3xl" />
        <img src="lilypads.jpg" className="rounded-3xl w-2/3 h-1/3" />
      </div>
    </div>
  );
}

export default Hobbies;
