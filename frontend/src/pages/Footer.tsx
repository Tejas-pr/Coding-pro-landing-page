import { Link } from "react-router-dom";
import {
  arrow001,
  call,
  email,
  facebook,
  insta,
  linkedin,
  location,
} from "../components/image";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        {/* left side */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        className="bg-[#195B9A] p-16 md:w-1/2 w-full text-white space-y-7">
          <h1 className="text-3xl md:text-4xl lg:text-6xl">
            Let’s keep in touch!
          </h1>
          <p className="text-lg md:text-xl font-light">
            Request a CodingPro Institute enquiry!
          </p>
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-3 px-3 text-black border border-gray-300 rounded-l-full outline-none"
              placeholder="Institute name"
            />
            <motion.button 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} 
            className="bg-gradient-to-r from-[#9BFEFF] to-[#5D9899] text-white p-2 px-10 rounded-r-full">
              <img src={arrow001} alt="" />
            </motion.button>
          </div>

          <div className="flex flex-col space-y-4">
            <Link to={"/CreateAccount"}>Create Account</Link>
            <Link to={"/Signin"}>Sign in</Link>
          </div>
          <div className="flex items-center space-x-2">
            <img src={call} alt="Phone" className="h-6 w-6" />
            <p className="text-lg md:text-xl font-light">+91 97973 59144</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={email} alt="Email" className="h-6 w-6" />
            <p className="text-lg md:text-xl font-light">
              codingjr.in@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={location} alt="Location" className="h-6 w-6" />
            <p className="text-lg md:text-xl font-light">
              AIC-BHU, Varanasi, 421004
            </p>
          </div>
        </motion.div>

        {/* right side */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        className="bg-[#2289DE] p-16 md:w-1/2 w-full text-white">
          <div className="flex flex-col md:flex-row md:justify-between gap-y-8 gap-x-10">
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl font-semibold">Courses</h2>
              <Link to={"/program"}>Campus Training Program</Link>
              <Link to={"/program"}>Professional Training Program</Link>
              <Link to={"/program"}>B. Tech</Link>
              <Link to={"/program"}>B. Des.</Link>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-xl font-semibold">Company</h2>
              <Link to={"/AboutUs"}>About Us</Link>
              <Link to={"/Blog"}>Blog</Link>
              <Link to={"/OurTeam"}>Our Team</Link>
              <Link to={"/Privacy"}>Privacy</Link>
              <Link to={"/Terms&Conditions"}>Terms & Conditions</Link>
              <Link to={"/FAQ"}>FAQ</Link>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex flex-row space-x-4">
                <Link to={"/instagram"}>
                  <img src={insta} alt="Instagram" className="h-8 w-8" />
                </Link>
                <Link to={"/facebook"}>
                  <img src={facebook} alt="Instagram" className="h-8 w-8" />
                </Link>
                <Link to={"/linkedin"}>
                  <img src={linkedin} alt="Instagram" className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
