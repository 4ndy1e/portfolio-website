import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
