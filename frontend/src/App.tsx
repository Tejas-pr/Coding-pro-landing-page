import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./pages/Hero";
import HeroBoxContent from "./components/HeroBoxContent";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Carousel from "./pages/Carousel";

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
      </BrowserRouter>
    </>
  );
}

export default App;
