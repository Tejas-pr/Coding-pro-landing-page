import { arrowBtn } from "./image";

interface Section11CardProps {
  logo: string;
  date: string;
  cardImg: string;
  description: string;
}
const Section11Card = ({
  date,
  cardImg,
  description,
  logo,
}: Section11CardProps) => {
  return (
    <>
      <div className="rounded-xl shadow-2xl p-4 z-20">
        <div className="flex justify-between p-4">
          <img src={logo} alt="card logo" />
          <p>{date}</p>
        </div>
        <div className="flex flex-col p-4 gap-3 z-20">
          <img src={cardImg} alt="card image" className="rounded-lg" />
          <p className="font-light text-2xl">
            {description.split(" ").slice(0, 5).join(" ")} <br />
            {description.split(" ").slice(4).join(" ")}
          </p>
        </div>
        <div>
          <button className="w-full p-4 text-[#0770C7]">
            <div className="flex flex-row justify-between items-center w-full">
              <p>Read article</p>
              <img src={arrowBtn} alt="arrow for btn" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Section11Card;
