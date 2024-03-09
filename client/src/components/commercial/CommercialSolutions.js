import cs1 from "../../assets/commercial/cs1.png";
import cs2 from "../../assets/commercial/cs2.png";
import cs3 from "../../assets/commercial/cs3.png";
import cs4 from "../../assets/commercial/cs4.png";
import cs5 from "../../assets/commercial/cs5.png";

const CommercialSolutions = () => {
  return (
    <main className="relative flex flex-col items-center mt-36 mb-14 z-10">
      <div
        className="absolute opacity-20 bg-gradient-to-tr from-green-500 to-transparent size-44 rounded-3xl z-0 
        right-10 bottom-60 rotate-45"
      ></div>

      <h2 className="text-5xl font-bold">
        THE BEST{" "}
        <span className="text-blue-600 font-normal">COMMERCIAL FLOORING</span>
      </h2>
      <h2 className="text-5xl font-bold">SOLUTIONS</h2>

      <div className="relative my-20 w-full">
        <div className="flex justify-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={cs1} alt="Image 1" />
            <img src={cs2} alt="Image 2" />
            <img src={cs3} alt="Image 3" />
            <img src={cs4} alt="Image 4" />
          </div>
          <div className="flex flex-col items-center">
            <img src={cs5} alt="Image 5" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommercialSolutions;
