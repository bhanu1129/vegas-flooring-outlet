import ba1 from "../assets/residential/ba1.png";
import ba2 from "../assets/residential/ba2.png";
import ba3 from "../assets/residential/ba3.png";

const BeforeAndAfter = ({ beforeAfter }) => {
  return (
    <main className="relative flex flex-col items-center mt-32">
      <div
        className="absolute opacity-20 bg-gradient-to-b from-green-500 to-transparent size-60 rounded-full z-0 
        right-20 bottom-44"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-r from-green-500 to-transparent size-44 rounded-3xl z-0 
        left-28 top-36"
      ></div>

      <div
        className="absolute opacity-10 bg-gradient-to-tl from-green-500 via-green-400 to-transparent w-52 h-32 rounded-full z-0
        top-0 right-10 -rotate-45"
      ></div>

      <h2 className="text-5xl font-bold">
        BEFORE & <span className="text-blue-600 font-normal">AFTER</span>
      </h2>
      <img src={beforeAfter} className="relative mt-12 max-w-[1140px]" />
      <div className="flex gap-8 mt-12">
        <img src={ba1} />
        <img src={ba2} />
        <img src={ba3} />
      </div>
    </main>
  );
};

export default BeforeAndAfter;
