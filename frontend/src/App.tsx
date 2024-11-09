import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./pages/Hero";
import HeroBoxContent from "./components/HeroBoxContent";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";

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
      </BrowserRouter>
    </>
  );
}

export default App;
