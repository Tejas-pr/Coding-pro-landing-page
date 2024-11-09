import { map, note, hat, inst, bars } from "./image.js";

const Sidebar = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 gap-x-8">
        {/* Sidebar item */}
        <div className="flex flex-col md:flex-row col-span-6 md:col-span-3 justify-center items-center border-2 border-[#2B95ED] rounded-2xl space-x-0 md:space-x-3 h-auto">
          <img src={map} alt="map" className="w-12 h-12 md:w-auto md:h-auto" />
          <div className="text-center md:text-left mt-2 md:mt-0">
            <p className="text-md md:text-lg font-bold text-[#2B95ED]">100+</p>
            <span className="text-md md:text-lg font-bold text-[#2B95ED]">
              Institutes
            </span>
          </div>
        </div>

        {/* Sidebar item */}
        <div className="flex flex-col md:flex-row col-span-6 md:col-span-3 justify-center items-center border-2 border-[#2B95ED] rounded-2xl space-x-0 md:space-x-3 h-auto">
          <img
            src={note}
            alt="note"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <div className="text-center md:text-left mt-2 md:mt-0">
            <p className="text-md md:text-lg font-bold text-[#2B95ED]">80+</p>
            <span className="text-md md:text-lg font-bold text-[#2B95ED]">
              Modules
            </span>
          </div>
        </div>

        {/* Sidebar item */}
        <div className="flex flex-col md:flex-row col-span-6 md:col-span-3 justify-center items-center border-2 border-[#2B95ED] rounded-2xl space-x-0 md:space-x-3 h-auto">
          <img src={hat} alt="hat" className="w-12 h-12 md:w-auto md:h-auto" />
          <div className="text-center md:text-left mt-2 md:mt-0">
            <p className="text-md md:text-lg font-bold text-[#2B95ED]">10k+</p>
            <span className="text-md md:text-lg font-bold text-[#2B95ED]">
              Students
            </span>
          </div>
        </div>

        {/* Sidebar item */}
        <div className="flex flex-col md:flex-row col-span-6 md:col-span-3 justify-center items-center border-2 border-[#2B95ED] rounded-2xl p-2 md:px-3 md:py-2 space-x-0 md:space-x-3 h-auto">
          <img
            src={inst}
            alt="inst"
            className="w-12 h-12 md:w-auto md:h-auto"
          />
          <div className="text-center md:text-left mt-2 md:mt-0">
            <p className="text-md md:text-lg font-bold text-[#2B95ED]">100+</p>
            <span className="text-md md:text-lg font-bold text-[#2B95ED]">
              Institutes
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:justify-end md:items-end md:mt-4 md:mb-4 ">
        <img src={bars} alt="side bar" width={180} height={180}/>
      </div>
    </>
  );
};

export default Sidebar;