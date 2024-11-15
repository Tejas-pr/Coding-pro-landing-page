import { laptop, campus1, trainBuilding, tri, tri2 } from "./image.js";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className=" mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center lg:items-start"
        >
          <img
            src={laptop}
            alt="laptop"
            className="w-full h-auto md:mb-6 lg:mb-0"
          />
          <div className="flex justify-between md:mt-8 space-x-5"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center lg:items-start md:space-y-6"
        >
          <h2 className="font-Gilroy-ExtraBold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C408E] text-center lg:text-left">
            Where The World
          </h2>
          <div className="flex gap-x-2 items-center justify-center lg:justify-start">
            <h2 className="font-Gilroy-ExtraBold text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C408E]">
              Learns To Code
            </h2>
            <img src={tri} alt="polygon1" className="h-4 w-4 mt-2 mb-6 md:mb-0 lg:mt-0" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:space-x-5"
          >
            <div className="flex flex-col justify-center items-center border-2 border-[#2B95ED] rounded-2xl px-4 py-6 md:py-8 lg:py-10 w-full lg:w-auto">
              <img src={campus1} alt="campus training" className="mb-4 w-20" />
              <div className="text-center">
                <p className="text-lg text-[#1C408E]">Campus Training</p>
                <p className="text-sm">
                  Designed for college students with a <br />
                  focus on xyz, xyz, xyz Lorem ipsum dolor
                </p>
                <motion.button
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Explore {">"}
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex flex-col justify-center items-center border-2 border-[#2B95ED] rounded-2xl px-4 py-6 md:py-8 lg:py-10 shadow-lg w-full lg:w-auto"
            >
              <img
                src={tri2}
                alt="polygon2"
                className="w-7 md:w-auto hidden lg:block translate-x-32 -translate-y-20"
              />
              <img
                src={trainBuilding}
                alt="professional training"
                className="mb-4 w-10 md:w-15 max-w-xs lg:max-w-none"
              />
              <div className="text-center">
                <p className="text-lg text-[#1C408E]">Professional Training</p>
                <p className="text-sm">
                  Designed for college students with a <br />
                  focus on xyz, xyz, xyz Lorem ipsum dolor
                </p>
                <motion.button
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Explore {">"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
