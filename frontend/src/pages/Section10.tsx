import Card from "../components/Card";
import {
  img001,
  img002,
  img003,
  polygon1,
  polygon2,
} from "../components/image";

const Section10 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 p-12 z-40">
        <h2 className="text-1xl md:text-2xl font-light">
          We know just education is not enough anymore
        </h2>
        <h1 className="text-1.5xl md:text-4xl font-normal">
          So we’ve got the <span className="text-[#008D8F]">best mentors</span>{" "}
          for you.{" "}
        </h1>
      </div>

      <div className="relative">
        <img
          src={polygon2}
          alt=""
          className="hidden md:block translate-x-72 -translate-y-20 absolute"
        />
        <img
          src={polygon1}
          alt=""
          className="hidden md:block translate-x-96 -translate-y-28 absolute"
        />
      </div>
      <div className="relative">
        <img
          src={polygon1}
          alt=""
          className="hidden md:block md:absolute md:right-0 md:-translate-y-8 md:-translate-x-48 -z-10"
        />
      </div>

      <div>
        <div className="flex flex-col gap-10 md:flex-row p-4 gap-x-10 items-center justify-center">
          <Card
            image={img001}
            jobdecs={
              "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"
            }
            fromIt={"IIT- BHU"}
            title={"Software Engineering"}
          />
          <Card
            image={img002}
            jobdecs={
              "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"
            }
            fromIt={"IIT- BHU"}
            title={"Software Engineering"}
          />
          <Card
            image={img003}
            jobdecs={
              "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “"
            }
            fromIt={"IIT- BHU"}
            title={"Software Engineering"}
          />
        </div>
      </div>
    </>
  );
};

export default Section10;
