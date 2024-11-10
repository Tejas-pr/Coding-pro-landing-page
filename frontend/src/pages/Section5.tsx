import { star } from "../components/image";

const Section3 = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full p-6 mt-10 mb-5 gap-x-5 md:gap-x-28">
        <div>
          <h1 className="text-1xl text-center md:text-4xl">
            Because We Offer What You Need <br /> at{" "}
            <span className="text-[#008D8F]">every step</span> of your <br />{" "}
            <span className="text-[#008D8F]">
              transformative learning journey
            </span>
          </h1>
        </div>
      </div>
      <img
        src={star}
        alt="star"
        className="translate-x-80 -translate-y-24 transform -rotate-12"
      />
    </>
  );
};

export default Section3;
