import Social1 from "../../assets/main/Social1.png";
import Social2 from "../../assets/main/Social2.png";
import Social3 from "../../assets/main/Social3.png";
import Social4 from "../../assets/main/Social4.png";

const Social = () => {
  return (
    <main className="mt-44 mb-20">
      <section className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center">SOCIAL</h2>
        <p className="text-xl text-gray-500 capitalize my-8 max-w-[60vw] text-center">
          Can’t find the pattern you want? Visit our showroom and speak with our
          customer service reps. We have several products not listed.
        </p>
      </section>
      <section className="flex flex-wrap gap-6 justify-center">
        <div>
          <img src={Social1} />
        </div>
        <div>
          <img src={Social2} />
        </div>
        <div>
          <img src={Social3} />
        </div>
        <div>
          <img src={Social4} />
        </div>
      </section>
    </main>
  );
};

export default Social;
