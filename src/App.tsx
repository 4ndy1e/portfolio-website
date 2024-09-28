import "./App.css";

import { useState, useEffect } from "react";
import "@radix-ui/themes/styles.css";
import Lander from "./components/Lander";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

function App() {
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 750;
      if (window.scrollY > scrollPoint) {
        setBgColor("#EEF1F4"); // New background color
      } else {
        setBgColor("black"); // Original background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1s ease",
      }}
    >
      <Nav />
      <Lander />

      <section className="flex flex-col mx-[15vw] max-sm:mx-[10vw] justify-center items-center">
        <Projects />
        <Experiences />
        <Footer />
      </section>
    </section>
  );
}

export default App;
