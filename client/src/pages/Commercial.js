import commercial from "../assets/commercial/commercial.png";
import commercialBeforeAfter from "../assets/commercial/commercialBeforeAfter.png";
import BeforeAndAfter from "../components/BeforeAndAfter";
import CommercialSolutions from "../components/commercial/CommercialSolutions";

const Commercial = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${commercial})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            COMMERCIAL <span className="font-normal"> PROJECTS</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <BeforeAndAfter beforeAfter={commercialBeforeAfter}/>
      <CommercialSolutions />
    </main>
  );
};

export default Commercial;
