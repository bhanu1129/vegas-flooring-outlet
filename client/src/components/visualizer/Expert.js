import { useState } from "react";
import expert from "../../assets/visualizer/expert.png";

const Expert = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleShowFullText = () => setShowFullText(!showFullText);

  const description = `There are various amazing flooring types in the market right now.
  While most of them look dazzling, it also has to be functional. That’s
  why it is important to know when to choose SPC Vinyl for your Las
  Vegas flooring. SPC (Stone Plastic Composite or Stone Polymer
  Composite) is also known as Rigid Core Luxury Vinyl. SPC is one of the
  most indestructible type of flooring option available. Apart from
  being completely rigid due to its various layers, it is also
  waterproof. Overall, SPC flooring is pretty great but it might not be
  in all situations. Keep reading to find out if SPC Vinyl is the right
  choice for your floor construction.`;

  const shortenedText = showFullText
    ? description
    : `${description.slice(0, description.length / 2 + 1)}...`;

  return (
    <div className="flex bg-white">
      <div className="flex flex-col gap-12 justify-center max-w-[60vw] pl-40 pr-24">
        <div>
          <h2 className="text-5xl font-bold">EXPERT FLOORING</h2>
          <h2 className="text-5xl font-medium text-blue-500">INSTALLERS</h2>
          <p className="leading-8 pt-6">
            {shortenedText}
            {showFullText ? (
              <button
                onClick={toggleShowFullText}
                className="text-blue-500 underline cursor-pointer"
              >
                Read less
              </button>
            ) : (
              <button
                onClick={toggleShowFullText}
                className="text-blue-500 underline cursor-pointer"
              >
                Read more
              </button>
            )}
          </p>
        </div>

        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center gap-2 bg-gray-100 rounded-full px-12 py-14">
            <h2 className="text-6xl font-bold">5K+</h2>
            <p className="text-blue-500">Completed Projects</p>
            <span className="text-stone-600 text-sm">5K complete work</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-gray-100 rounded-full px-12 py-14">
            <h2 className="text-6xl font-bold">30K+</h2>
            <p className="text-blue-500">Completed Projects</p>
            <span className="text-stone-600 text-sm">
              Expert Flooring Worker
            </span>
          </div>
        </div>
      </div>

      <div>
        <img src={expert} className="" />
      </div>
    </div>
  );
};

export default Expert;
