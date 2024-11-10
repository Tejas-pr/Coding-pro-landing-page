import { circledot, leftImage, topimage } from "../components/image";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const Section13 = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="hidden md:block md:absolute translate-x-36 -translate-y-3">
        <img src={topimage} alt="top image" className="relative" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row p-8 gap-10 shadow-2xl rounded-2xl m-10 md:m-20 ">
          <div className="w-100 h-100">
            <img src={leftImage} alt="left image" />
          </div>
          <div>
            <div>
              <h1 className="text-[#2B95ED] text-3xl md:text-6xl">
                Find out more <br /> reasons to stay
              </h1>
              <div className="hidden md:block md:absolute translate-x-96 -translate-y-32">
                <img src={circledot} alt="top image" className="relative" />
              </div>
              <div className="p-8 space-y-8">
                <TextField fullWidth label="Full Name" id="fullName" />
                <TextField fullWidth label="Mobile no." id="mobileNo" />
                <TextField fullWidth label="City" id="city" />
              </div>
              <div className="flex justify-center items-start gap-x-2 mt-4">
                <Checkbox {...label} defaultChecked />
                <p className="text-sm">
                  <span className="text-red-700 font-bold text-lg">*</span> Creating an account means you’re okay with our Terms of
                  Service, Privacy Policy, and default Notification Settings
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:gap-4 mt-8">
              {" "}
              {/* Centered alignment */}
              <button
                type="button"
                className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4 md:mt-0"
              >
                Enquire Now
              </button>
              <p className="mt-2 md:mt-0">
                Already Have An Account?{" "}
                <span className="underline hover:cursor-pointer">Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section13;
