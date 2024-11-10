import {
  cardImg,
  cardLogo1,
  cardLogo2,
  circle2,
} from "../components/image";
import Section11Card from "../components/Section11Card";

const Section11 = () => {
  return (
    <>
      <div className="hidden md:block absolute -z-50 w-full h-full">
        <img
          src={circle2}
          alt=""
          className="absolute top-0 left-0 translate-x-16 translate-y-8 w-auto h-auto"
        />
      </div>
      
      <div className="relative z-10 m-10">
        <div className="flex items-center justify-center font-Poppins text-4xl md:text-5xl mt-10 md:mt-16">
          <h1>
            We’ve Also Been In <span className="text-[#008D8F]">News!</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-4 mt-5 md:mt-20">
          <Section11Card
            logo={cardLogo1}
            date={"31 March, 2023"}
            cardImg={cardImg}
            description={
              "Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40"
            }
          />
          <Section11Card
            logo={cardLogo2}
            date={"31 March, 2023"}
            cardImg={cardImg}
            description={
              "Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40"
            }
          />
          <Section11Card
            logo={cardLogo1}
            date={"31 March, 2023"}
            cardImg={cardImg}
            description={
              "Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Section11;
