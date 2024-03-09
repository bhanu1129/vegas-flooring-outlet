import instruction from "../../assets/visualizer/instruction.png";
import { FaCamera } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Instruction = () => {
  return (
    <main className="flex flex-col relative items-center mt-32 mb-20">
      <div
        className="absolute opacity-20 bg-gradient-to-bl from-green-500 to-transparent size-60 rounded-3xl z-0 
        right-20 bottom-96 rotate-45"
      ></div>
      
      <div
        className="absolute opacity-20 bg-gradient-to-br from-green-500 to-transparent w-60 h-32 rounded-full z-0
        top-20 left-20 rotate-45"
      ></div>

      <h2 className="text-5xl font-bold mb-14">
        INSTRUCTIONS ON{" "}
        <span className="text-blue-600 font-normal">HOW TO USE</span>
      </h2>
      <div
        className="relative z-10 h-[568px] w-[1140px] bg-no-repeat"
        style={{ backgroundImage: `url(${instruction})` }}
      >
        <h2 className="text-white font-bold text-7xl text-center mt-[26rem]">
          VEGAS FLOORING OUTLET
        </h2>
      </div>

      <div className="flex w-[81vw] mx-auto mt-28">
        <div className="flex flex-col gap-3 justify-center items-center max-w-[50%]">
          <div className="p-5 bg-gray-300 rounded-full cursor-pointer">
            <FaCamera className="text-3xl" />
          </div>
          <h3 className="font-semibold text-2xl">SELECT A PHOTO</h3>
          <p className="text-2xl max-w-[70%] text-stone-400 text-center font-light">
            Use your smartphone to take a photo of your room, or select an
            existing photo and upload to our Visualizer.
          </p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center max-w-[50%]">
          <div className="p-5 bg-gray-300 rounded-full cursor-pointer">
            <FaPlus className="text-3xl" />
          </div>
          <h3 className="font-semibold text-2xl">CHOOSE A PRODUCT</h3>
          <p className="text-2xl max-w-[70%] text-stone-400 text-center font-light">
            Browse through our flooring options and select any option to
            transform your room.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Instruction;
