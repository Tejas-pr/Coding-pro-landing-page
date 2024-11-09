import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./pages/Hero";
import HeroBoxContent from "./components/HeroBoxContent";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section5 from "./pages/Section5";
import Carousel from "./pages/Carousel";
import Section7 from "./pages/Section7";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="mx-20">
          <Hero />
        </div>
        <HeroBoxContent />
        <Section1 />
        <Section2 />
        <Section3 />
        <Carousel />
        <div className="mx-20">
          <Section5 />
        </div>
        <Section7 />
      </BrowserRouter>
    </>
  );
}

export default App;
