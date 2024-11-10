import { img1C, img2C, leftArrow, rightArrow } from "../components/image";
import { motion } from "framer-motion";
const Carousel = () => {
  return (
    <div className="space-y-8 px-4 mt-5">
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="hidden md:flex bg-[#0FDDD0] p-4 md:p-6 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 items-center justify-center">
            <img src={leftArrow} alt="left arrow" className="w-4 md:w-6" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex-shrink-0"
          >
            <img
              src={img1C}
              alt="Slide 1"
              className="rounded-lg max-w-full md:max-w-lg h-auto md:-translate-x-10 lg:-translate-x-20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-[#0FDDD0] p-4 md:p-6 w-full md:max-w-md lg:max-w-lg h-16 md:h-24 lg:h-32 flex items-center rounded-lg"
          >
            <p className="text-sm md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum.
            </p>
            <img
              src={rightArrow}
              alt="right arrow"
              className="w-4 md:w-6 ml-2"
            />
          </motion.div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-[#0FDDD0] p-4 md:p-6 w-full md:max-w-md lg:max-w-lg h-16 md:h-24 lg:h-32 flex items-center justify-center rounded-lg"
          >
            <p className="text-sm md:text-base text-white">
              Honored by Shri Dharmendra Pradhan ji, Union Minister for
              Education, Govt. of India - 2023
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex-shrink-0"
          >
            <img
              src={img2C}
              alt="Slide 2"
              className="rounded-lg max-w-full md:max-w-lg h-auto md:translate-x-10 lg:translate-x-20"
            />
          </motion.div>

          <div className="hidden md:flex bg-[#0FDDD0] p-4 md:p-6 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
