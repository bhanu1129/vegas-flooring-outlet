import visualizer from "../assets/visualizer/visualizer.png";
import Expert from "../components/visualizer/Expert";
import Finishing from "../components/visualizer/Finishing";
import Instruction from "../components/visualizer/Instruction";

const Visualizer = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${visualizer})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            DESIGN & <span className="font-normal">VISUALIZER</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <Instruction />
      <Expert />
      <Finishing />
    </main>
  );
};

export default Visualizer;
