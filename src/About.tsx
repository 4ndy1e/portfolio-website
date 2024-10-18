import Nav from "./components/Nav";
import Info from "./components/Info.jsx";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer.jsx";

function AboutPage() {
  return (
    <section className="flex flex-col mx-[5vw] max-sm:mx-[10vw] items-center mt-48 max-[570px]:mx-6 ">
      <Nav />
      <div className="w-full mb-48 max-[570px]:mb-24">
        <h1 className="text-black text-left max-md:text-center text-md:text-[60px] max-[570px]:text-[50px]">
          {" "}
          Hi, I'm Andy...
        </h1>
      </div>
      <div className="w-full m-24">
        <p className="text-left border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Info.
        </p>
      </div>
      <Info />
      <div className="w-full m-28">
        <p className="text-right border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Education.
        </p>
      </div>
      <Education />
      <div className="w-full m-28">
        <p className="text-left border-t-2 text-[#b4b4b4] font-bold text-2xl">
          Hobbies.
        </p>
      </div>
      <Hobbies />
      <Footer />
    </section>
  );
}

export default AboutPage;
