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
import Section6 from "./pages/Section6";
import Section8 from "./pages/Section8";
import Section9 from "./pages/Section9";
import Section10 from "./pages/Section10";
import Section11 from "./pages/Section11";
import Section12 from "./pages/Section12";
import Section13 from "./pages/Section13";
import Footer from "./pages/Footer";

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
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
