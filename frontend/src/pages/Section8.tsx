import { people1, people2, people3, people4, topbg } from "../components/image";

const Section8 = () => {
  return (
    <div className="hidden md:block relative bg-section8bg mt-5">
      {/* Top SVG Background */}
      <img src={topbg} alt="topbg" className="absolute bottom-0 left-0 w-full h-auto z-20" />

      {/* Foreground Content */}
      <div className="flex z-10 items-center justify-between relative py-16">
        <img src={people1} alt="people1" />
        <img src={people2} alt="people2" />
        <img src={people3} alt="people3" />
        <img src={people4} alt="people4" />
      </div>
    </div>
  );
};

export default Section8;
