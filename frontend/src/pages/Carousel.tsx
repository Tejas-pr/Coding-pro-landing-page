import { img1C, img2C, leftArrow, rightArrow } from "../components/image";

const Carousel = () => {
  return (
    <div className="space-y-8 px-4 mt-5">
      {/* Slide 1 */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left background with arrow for md and lg */}
          <div className="hidden md:flex bg-[#0FDDD0] p-4 md:p-6 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 items-center justify-center">
            <img src={leftArrow} alt="left arrow" className="w-4 md:w-6" />
          </div>

          {/* Image Container */}
          <div className="flex-shrink-0">
            <img
              src={img1C}
              alt="Slide 1"
              className="rounded-lg max-w-full md:max-w-lg h-auto md:-translate-x-10 lg:-translate-x-20"
            />
          </div>

          {/* Right background with text for md and lg */}
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full md:max-w-md lg:max-w-lg h-16 md:h-24 lg:h-32 flex items-center rounded-lg">
            <p className="text-sm md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <img src={rightArrow} alt="right arrow" className="w-4 md:w-6 ml-2" />
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left background with text for md and lg */}
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full md:max-w-md lg:max-w-lg h-16 md:h-24 lg:h-32 flex items-center justify-center rounded-lg">
            <p className="text-sm md:text-base text-white">
              Honored by Shri Dharmendra Pradhan ji, Union Minister for Education,
              Govt. of India - 2023
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-shrink-0">
            <img
              src={img2C}
              alt="Slide 2"
              className="rounded-lg max-w-full md:max-w-lg h-auto md:translate-x-10 lg:translate-x-20"
            />
          </div>

          {/* Right background for md and lg */}
          <div className="hidden md:flex bg-[#0FDDD0] p-4 md:p-6 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
