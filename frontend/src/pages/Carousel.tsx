import { img1C, img2C, leftArrow, rightArrow } from "../components/image";

const Carousel = () => {
  return (
    <div className="space-y-8 px-4 mt-5">
      {/* Slide 1 */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full h-24 md:h-32 flex items-center">
            <img src={leftArrow} alt="right arrow" className="w-4 md:w-6" />
          </div>
          <div className="flex-shrink-0">
            <img
              src={img1C}
              alt="Slide 1"
              className="rounded-lg max-w-lg h-auto -translate-x-40"
            />
          </div>
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full h-24 md:h-32 flex items-center  rounded-lg">
            <p className="text-sm md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <img src={rightArrow} alt="right arrow" className="w-4 md:w-6" />
          </div>
        </div>
      </div>
      <br />
      {/* Slide 2 */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full h-24 md:h-32 flex items-center rounded-lg">
            <p className="text-sm md:text-base text-white">
              Honored by Shri Dharmendra Pradhan ji Union Minister for Education
              Govt. of India - 2023
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src={img2C}
              alt="Slide 1"
              className="rounded-lg max-w-lg h-auto translate-x-40"
            />
          </div>
          <div className="bg-[#0FDDD0] p-4 md:p-6 w-full h-24 md:h-32 flex items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
