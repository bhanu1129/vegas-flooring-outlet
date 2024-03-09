import finishing1 from "../../assets/visualizer/finishing1.png";
import finishing2 from "../../assets/visualizer/finishing2.png";
import finishing3 from "../../assets/visualizer/finishing3.png";
import finishing4 from "../../assets/visualizer/finishing4.png";

const Finishing = () => {
  return (
    <div className="my-32">
      <h2 className="text-5xl font-bold text-center">
        OUR CONCRETE{" "}
        <span className="text-blue-600 font-normal">FINISHING SERVICES</span>
      </h2>
      <div className="flex justify-around px-14 mt-24">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-200 p-16 rounded-full">
            <img src={finishing1} />
          </div>
          <span className="text-2xl font-medium text-stone-700">
            Color Board
          </span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-200 p-16 rounded-full">
            <img src={finishing2} />
          </div>
          <span className="text-2xl font-medium text-stone-700">Dimension</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-200 p-16 rounded-full">
            <img src={finishing3} />
          </div>
          <span className="text-2xl font-medium text-stone-700">
            Installation
          </span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-gray-200 p-16 rounded-full">
            <img src={finishing4} />
          </div>
          <span className="text-2xl font-medium text-stone-700">Finishing</span>
        </div>
      </div>
    </div>
  );
};

export default Finishing;
