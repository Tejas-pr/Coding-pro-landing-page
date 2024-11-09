import {
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  teles,
  lab,
  text03,
  resume,
  placement,
  interview,
} from "../components/image";

const Section7 = () => {
  return (
    <>
      <div className="timetime relative max-w-[1200px] mx-auto">
        {/* Container 1 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[5px] bg-white rounded-lg shadow-lg">
            <img
              src={img01}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={teles} alt="" />
              <h2 className="text-xl md:text-3xl font-light">Custom Specialization</h2>
            </div>
            <p className="text-sm md:text-base">
              We understand the value of choice, so we empower you to design
              your course and select the specialization that best suits your
              goals.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Container 2 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative mx-auto">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[6px] bg-white rounded-lg shadow-lg md:left-[60%]">
            <img
              src={img02}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={lab} alt="" />
              <h2 className="text-xl md:text-3xl font-light">Virtual Labs</h2>
            </div>
            <p className="text-sm md:text-base">
              We provide our students with the convenience of accessing a fully
              equipped lab from anywhere just with an internet connection.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* Container 3 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[6px] bg-white rounded-lg shadow-lg">
            <img
              src={img03}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={text03} alt="" />
              <h2 className="text-xl md:text-3xl font-light">AI Tests</h2>
            </div>
            <p className="text-sm md:text-base">
              We understand that teaching alone isn't enough, so we provide our
              students with AI-powered tests to assess their progress.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Container 4 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative mx-auto">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[6px] bg-white rounded-lg shadow-lg md:left-[60%]">
            <img
              src={img04}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={resume} alt="" />
              <h2 className="text-xl md:text-3xl font-light">Resume Builder</h2>
            </div>
            <p className="text-sm md:text-base">
              We not only support skill development but also leverage AI to
              highlight those skills effectively on your resume to help you
              stand out from the crowd.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* Container 5 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[6px] bg-white rounded-lg shadow-lg">
            <img
              src={img05}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={placement} alt="" />
              <h2 className="text-xl md:text-3xl font-light">Placement Preparation</h2>
            </div>
            <p className="text-sm md:text-base">
              We go beyond building skills, taking our students to the next
              level by providing them with thorough placement preparation.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Container 6 */}
        <div className="container py-10 px-4 md:px-12 w-full md:w-[50%] relative mx-auto">
          <div className="text-box py-6 px-4 md:py-10 md:px-8 relative border-[6px] bg-white rounded-lg shadow-lg md:left-[60%]">
            <img
              src={img06}
              alt=""
              className="absolute w-20 md:w-30 right-10 md:right-52 -top-12 z-10"
            />
            <div className="flex items-center gap-x-3 md:gap-x-5 mb-2">
              <img src={interview} alt="" />
              <h2 className="text-xl md:text-3xl font-light">AI Interviews</h2>
            </div>
            <p className="text-sm md:text-base">
              Interviews can be challenging, so we use AI to conduct mock
              interviews, helping our students build confidence and be fully
              prepared.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
