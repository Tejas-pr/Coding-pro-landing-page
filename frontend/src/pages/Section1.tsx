import {
  aiint,
  codeint,
  ebook,
  flash,
  graduate,
  record,
  section1Box,
  section1Box1,
} from "../components/image";
import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#2B95ED] to-[#185587] py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col md:flex-row justify-between items-center mx-8 md:mx-20"
        >
          <h1 className="font-normal text-3xl font-Poppins md:text-5xl text-white mb-6 md:mb-0">
            What sets us apart?
          </h1>
          <div className="flex space-x-4">
            <img
              src={section1Box1}
              alt=""
              className="translate-x-12 translate-y-24"
            />
            <img src={section1Box} alt="" />
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-5 mx-8 md:mx-20 mt-8">
          {/* Each card will take 2 columns on small screens and 3 columns on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={graduate} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              Created by IIT-IIM Alumni
            </h2>
            <p className="text-sm">
              We’ve learnt from the best and <br /> strive to bring you the
              best.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={aiint} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              A.I. Integration
            </h2>
            <p className="text-sm">
              We have harnessed the power of A.I. to enhance and assess your
              knowledge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={codeint} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              In-app Coding
            </h2>
            <p className="text-sm">
              The app features in-app coding, eliminating the need for laptops.
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
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={ebook} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              Extensive E-books
            </h2>
            <p className="text-sm">
              Deepen your understanding and mastery of the skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={record} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              Recorded Lectures
            </h2>
            <p className="text-sm">
              Access lectures anywhere and anytime at your own pace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-white col-span-6 md:col-span-4 rounded-lg text-start p-8"
          >
            <img src={flash} alt="" className="mb-4" />
            <h2 className="font-bold text-xl text-[#2B95ED] mb-2">
              Flash cards
            </h2>
            <p className="text-sm">
              Make learning convenient and fun using flash cards.
            </p>
          </motion.div>
          <div>
            <img
              src={section1Box1}
              alt=""
              className="-translate-y-20 -translate-x-16"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
