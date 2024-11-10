import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <div className="bg-[#CEFEFF] text-center p-2 font-bold w-full">
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        >
        <p>
          Learn coding at the nearby{" "}
          <span className="text-[#1C408E]">Coding Pro</span> Institute.{" "}
          <Link to="/Enquire">
            <span className="underline text-[#1C408E]">Enquire now</span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Topbar;
