import { govt, govt2, govt3 } from "./image";

const HeroBoxContent = () => {
  return (
    <div className="w-full p-5 bg-[#C5E5FF33] mt-5">
      <div className="flex flex-col gap-5 items-center md:flex md:items-center md:justify-center md:flex-row w-full md:gap-x-24">
        <div>
          <img src={govt} alt="" />
        </div>
        <div>
          <img src={govt2} alt="" />
        </div>
        <div>
          <img src={govt3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBoxContent;
