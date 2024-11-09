import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full p-4 md:p-6">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        <img src={Logo} alt="logo" className="h-12 md:h-16 w-auto" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-center mb-4 md:mb-0 ">
        <Link to="/aboutus" className="hover:text-blue-500 ">About Us</Link>
        <Link to="/virtual-labs" className="hover:text-blue-500">Virtual Labs</Link>
        <Link to="/program" className="hover:text-blue-500">Programs</Link>
        <Link to="/for-colleges" className="hover:text-blue-500">For Colleges</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="text-[#2B95ED] border border-blue-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Log in
        </button>
        <button
          type="button"
          className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
