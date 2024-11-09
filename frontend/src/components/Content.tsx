import { laptop, campus1, trainBuilding, tri, tri2 } from "./image.js";

const Content = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center">
          <img src={laptop} alt="laptop" className="w-full h-auto" />
          <div className="flex justify-between mt-8 space-x-5">
            {/* Optional content can be added here */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="font-Gilroy-ExtraBold text-4xl md:text-6xl font-bold text-[#1C408E] text-center md:text-left">
            Where The World
          </h2>
          <div className="flex gap-x-2 items-center">
            <h2 className="font-Gilroy-ExtraBold text-4xl md:text-6xl font-bold text-[#1C408E]">
              Learns To Code
            </h2>
            <img src={tri} alt="polygon1" className="h-4 w-4 mt-2 md:mt-0 gap-x-10" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:flex md:space-x-5">
            {/* Campus Training Card */}
            <div className="flex flex-col justify-center items-center border-2 border-[#2B95ED] rounded-2xl px-4 py-6 md:py-10">
              <img src={campus1} alt="campus training" className="mb-4" />
              <div className="text-center">
                <p className="text-lg text-[#1C408E]">Campus Training</p>
                <p className="text-sm">
                  Designed for college students with a <br />
                  focus on xyz, xyz, xyz Lorem ipsum dolor
                </p>
                <button
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Explore {">"}
                </button>
              </div>
            </div>

            {/* Professional Training Card */}
            <div className="flex flex-col justify-center items-center border-2 border-[#2B95ED] rounded-2xl px-4 py-6 md:py-10 shadow-lg">
            <img src={tri2} alt="polygon2" className="w-8 md:w-auto hidden lg:block translate-x-32 -translate-y-20" />
              <img src={trainBuilding} alt="professional training" className="mb-4" />
              <div className="text-center">
                <p className="text-lg text-[#1C408E]">Professional Training</p>
                <p className="text-sm">
                  Designed for college students with a <br />
                  focus on xyz, xyz, xyz Lorem ipsum dolor
                </p>
                <button
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Explore {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional footer or additional content can go here */}
    </div>
  );
};

export default Content;
