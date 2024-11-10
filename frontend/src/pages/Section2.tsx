import { card1, card2, dots, roundDisk } from "../components/image";
import { motion } from "framer-motion"
const Section2 = () => {
  return (
    <>
     <div className="bg-no-repeat bg-left bg-hero-pattern">
        <div
        className="flex flex-col items-center">
          <img src={roundDisk} alt="rounddisk" className="mb-4 -translate-x-40 translate-y-32 md:-translate-x-96" />
          <h1 className="font-normal text-4xl text-center px-4">
            Check out our{" "}
            <span className="text-[#008D8F]">holistic programs</span> designed
            to help you reach your <span className="text-[#008D8F]">goals</span>
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 space-y-8 px-4">
          {/* card 1 */}
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01]
      }}
          className="flex flex-col md:flex-row bg-white shadow-lg items-center p-6 md:p-8 gap-6 md:gap-10 w-full max-w-lg md:max-w-4xl">
            <div className="w-full md:w-auto">
              <img
                src={card1}
                alt="Campus Training"
                className="w-full md:w-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl md:text-2xl">Campus Training</h2>
              <h3 className="font-normal text-sm md:text-base mt-2">
                For students | 24+ Modules | 10 instructors
              </h3>
              <p className="text-sm md:text-base mt-4">
                The app features in-app coding, eliminating the need for
                laptops. With cloud-based virtual machines and labs, students
                can practice freely, cutting hardware and maintenance costs.
              </p>
              <div className="mt-4">
                <motion.button
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Explore {">"}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0, 0.71, 0.2, 1.01]
      }}
          className="flex flex-col md:flex-row bg-white shadow-lg items-center p-6 md:p-8 gap-6 md:gap-10 w-full max-w-lg md:max-w-4xl">
            <div className="w-full md:w-auto">
              <img
                src={card2}
                alt="Professional Training"
                className="w-full md:w-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl md:text-2xl">
                Professional Training
              </h2>
              <h3 className="font-normal text-sm md:text-base mt-2">
                For Professionals | 24+ Modules | 10 instructors
              </h3>
              <p className="text-sm md:text-base mt-4">
                The app features in-app coding, eliminating the need for
                laptops. With cloud-based virtual machines and labs, students
                can practice freely, cutting hardware and maintenance costs.
              </p>
              <div className="mt-4">
                <motion.button
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
                  type="button"
                  className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Explore {">"}
                </motion.button>
              </div>
            </div>
          </motion.div>
          <img src={dots} alt="rounddisk" className="mb-4 hidden md:block md:translate-x-96 md:-translate-y-32 -z-10" />
        </div>
      </div>
    </>
  );
};

export default Section2;
