import about from "../assets/about/about.png";
import Agency from "../components/about/Agency";
import BestInVegas from "../components/about/BestInVegas";
import Vision from "../components/about/Vision";

const About = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            ABOUT <span className="font-normal">US</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <Agency />
      <BestInVegas />
      <Vision />
    </main>
  );
};

export default About;
