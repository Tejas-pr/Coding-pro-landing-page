import { govt, govt2, govt3 } from "./image";
import { motion } from "framer-motion";
const HeroBoxContent = () => {
  return (
    <div className="w-full p-5 bg-[#C5E5FF33] mt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col gap-5 items-center md:flex md:items-center md:justify-center md:flex-row w-full md:gap-x-24"
      >
        <div>
          <img src={govt} alt="govt" />
        </div>
        <div>
          <img src={govt2} alt="govt" />
        </div>
        <div>
          <img src={govt3} alt="govt" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBoxContent;
