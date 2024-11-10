import {
  apple,
  bar,
  cloud,
  coding,
  codingMaz,
  evalution,
  infinity,
  keyboard,
  leftarrow,
  mobile,
  online,
  playstore,
  recorded,
  rightarrow,
} from "../components/image";

import { motion } from "framer-motion";

const Section12 = () => {
  return (
    <>
      <div className="flex justify-center items-center m-10 gap-x-20 md:mt-20">
        <div className="hidden md:block ">
          <img src={mobile} alt="mobile" />
        </div>

        <div className="flex justify-center items-center">
          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-normal mb-6">
              Wanna See More? <br />
              <span>Join Us!</span>
            </h1>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 gap-y-10">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <img src={recorded} alt="Recorded Lectures" />
                  <p>Recorded Lectures</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={online} alt="Online Quizzes" />
                  <p>Online Quizzes</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={coding} alt="In-app Coding" />
                  <p>In-app Coding</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={evalution} alt="Evaluation Reports" />
                  <p>Evaluation Reports</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img src={keyboard} alt="Language-specific keyboard" />
                  <p>Language-specific keyboard</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={infinity} alt="Infinite Project Size" />
                  <p>Infinite Project Size</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={cloud} alt="Cloud Computation" />
                  <p>Cloud Computation</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={codingMaz} alt="Coding Magazine" />
                  <p>Coding Magazine</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <img src={leftarrow} alt="" className="hidden md:block" />
              <h2>50k+ Active Users</h2>
              <img src={rightarrow} alt="" className="hidden md:block" />
            </div>

            {/* Buttons Section */}
            <div className="mt-1 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
              className="bg-[#2B95ED] text-white rounded-lg px-6 py-2 shadow-lg hover:bg-blue-500">
                <div className="flex items-center space-x-2">
                  <img
                    src={playstore}
                    alt="Google Play Icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm">Get it on</p>
                    <p className="text-2xl font-bold">Google Play</p>
                  </div>
                </div>
              </motion.button>
              <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
              className="bg-[#2B95ED] text-white rounded-lg px-6 py-2 shadow-lg hover:bg-blue-500">
                <div className="flex items-center space-x-2">
                  <img
                    src={apple}
                    alt="Apple Store Icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm">Download on the</p>
                    <p className="text-2xl font-bold">App Store</p>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        <div>
          <img src={bar} alt="sidebar" className="hidden md:block" />
        </div>
      </div>
    </>
  );
};

export default Section12;
