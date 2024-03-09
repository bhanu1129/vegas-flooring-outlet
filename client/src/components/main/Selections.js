import vinyl from "../../assets/main/vinyl.png";
import tiles from "../../assets/main/tiles.png";
import laminate from "../../assets/main/laminate.png";
import carpet from "../../assets/main/carpet.png";

const Selections = () => {
  return (
    <main className="relative mt-44">
      <div
        className="absolute opacity-20 bg-gradient-to-b from-green-500 via-green-400 to-transparent size-60 rounded-full z-0 
        right-10 top-20"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-l from-green-500 to-transparent size-44 rounded-3xl z-0
        top-32 left-20 -rotate-45"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-b from-green-500 to-transparent size-60 rounded-3xl z-0
        bottom-5 -left-36 rotate-45"
      ></div>

      <section className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center">
          BROWSE <span className="text-blue-500 font-normal">OUR FLOORING</span>{" "}
          SELECTIONS
        </h2>
        <p className="text-xl text-gray-500 capitalize my-8 max-w-[60vw] text-center">
          Can’t find the pattern you want? Visit our showroom and speak with our
          customer service reps. We have several products not listed.
        </p>
      </section>

      <section className="relative flex w-[81vw] mx-auto flex-wrap justify-center gap-1 bg-white min-h-[520px] rounded-[50px] p-8 z-10">
        <div
          style={{ backgroundImage: `url(${vinyl})` }}
          className="h-[26rem] w-[17rem]"
        >
          <div className="flex items-end h-[26rem] w-[17rem] bg-gradient-to-b via-transparent from-transparent to-black rounded-l-[20px]">
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-white text-3xl font-bold">VINYL PLANK</h3>
              <p className="text-white">
                100% Waterproof, Impact Resistant, and Easy to Install.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${tiles})` }}
          className="h-[26rem] w-[17rem]"
        >
          <div className="flex items-end h-[26rem] w-[17rem] bg-gradient-to-b via-transparent from-transparent to-black">
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-white text-3xl font-bold">TILES</h3>
              <p className="text-white">
                100% Waterproof, Impact Resistant, and Easy to Install.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${laminate})` }}
          className="h-[26rem] w-[17rem]"
        >
          <div className="flex items-end h-[26rem] w-[17rem] bg-gradient-to-b via-transparent from-transparent to-black">
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-white text-3xl font-bold">LAMINATE</h3>
              <p className="text-white">
                100% Waterproof, Impact Resistant, and Easy to Install.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${carpet})` }}
          className="h-[26rem] w-[17rem] rounded-r-[20px]"
        >
          <div className="flex items-end h-[26rem] w-[17rem] bg-gradient-to-b via-transparent from-transparent to-black rounded-r-[20px]">
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-white text-3xl font-bold">CARPET</h3>
              <p className="text-white">
                100% Waterproof, Impact Resistant, and Easy to Install.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Selections;
