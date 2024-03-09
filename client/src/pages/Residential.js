import residential from "../assets/residential/residential.png";
import Social from "../components/main/Social";
import BeforeAndAfter from "../components/BeforeAndAfter";
import residentialBeforeAfter from "../assets/residential/residentialBeforeAfter.png";

const Residential = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${residential})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            RESIDENTIAL <span className="font-normal"> PROJECTS</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <BeforeAndAfter beforeAfter={residentialBeforeAfter} />
      <Social /> {/* This is same from main page's components */}
    </main>
  );
};

export default Residential;
