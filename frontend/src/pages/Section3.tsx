import { img1, img2 } from "../components/image";

const Section3 = () => {
  return (
    <div className="flex items-center justify-center w-full p-6 mt-5 mb-5 gap-x-5 md:gap-x-28">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <h1 className="text-1xl text-center md:text-4xl">
          Our Efforts To <span className="text-[#008D8F]">Innovate</span> Have
          Been <br /> <span className="text-[#008D8F]">Recognized</span> And{" "}
          <span className="text-[#008D8F]">Appreciated</span>
        </h1>
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Section3;
