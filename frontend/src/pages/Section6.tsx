import { arrowDown, imgcont } from "../components/image";

const Section6 = () => {
  return (
    <>
      <div className="relative w-full flex justify-center items-center">
        {/* Centered Image */}
        <img src={imgcont} alt="container" className="block" />

        {/* Image at the right side */}
        <img src={arrowDown} alt="arrowDown" className="absolute right-0 hidden md:block md:-translate-x-1/2" />
      </div>
    </>
  );
};

export default Section6;
