import {
  arrows,
  css,
  flutter,
  java,
  js,
  profile,
  react,
} from "../components/image";

const Section9 = () => {
  const testimonials = [
    {
      quote:
        "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.",
      name: "Saanvi Patel",
      position: "Executive Engineer",
    },
    {
      quote:
        "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.",
      name: "Saanvi Patel",
      position: "Executive Engineer",
    },
    {
      quote:
        "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.",
      name: "Saanvi Patel",
      position: "Executive Engineer",
    },
  ];

  return (
    <div className="relative bg-section9bg py-10 overflow-hidden">
      <div className="absolute top-0 left-0 z-0">
        <img src={java} alt="Java" className="hidden md:block md:h-32" />
        <img
          src={css}
          alt="CSS"
          className="hidden md:block md:h-32 mt-3 md:translate-x-96"
        />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-3xl p-10 md:p-0 md:text-5xl text-white font-semibold">
          And our students agree . . .
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 p-2 md:px-10 mt-10 md:mt-36">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative py-8 px-6 w-full md:w-[30%] bg-white border-4 border-gray-200 rounded-2xl shadow-lg ${
              index === 0
                ? "md:-translate-x-1/4"
                : index === 2
                ? "md:translate-x-1/4"
                : ""
            }`}
          >
            <img
              src={profile}
              alt="Profile"
              className="absolute w-16 h-16 rounded-full border-4 border-white -top-8 left-1/2 transform -translate-x-1/2"
            />
            <div className="mt-8 text-center">
              <p className="text-base font-bold text-[#393939] italic">
                {testimonial.quote}
              </p>
              <h2 className="text-2xl font-normal mt-4 text-[#1C408E]">
                {testimonial.name}
              </h2>
              <p className="text-sm font-bold text-[#1C408E]">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-10 px-4 md:px-10">
        <img src={js} alt="JavaScript" className="h-10 w-10 md:h-16 md:w-16" />
        <img src={arrows} alt="Arrows" className="h-10 w-10 md:h-40 md:w-40" />
        <img src={react} alt="React" className="h-10 w-10 md:h-16 md:w-16" />
        <img
          src={flutter}
          alt="Flutter"
          className="h-10 w-10 md:h-16 md:w-16"
        />
      </div>
    </div>
  );
};

export default Section9;
