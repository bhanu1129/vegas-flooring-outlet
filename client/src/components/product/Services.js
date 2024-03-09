import service1 from "../../assets/product/service1.png";
import service2 from "../../assets/product/service2.png";
import service3 from "../../assets/product/service3.png";
import service4 from "../../assets/product/service4.png";
import service5 from "../../assets/product/service5.png";
import service6 from "../../assets/product/service6.png";

const Services = () => {
  return (
    <main className="relative mt-36 pb-24">
      
      <div
        className="absolute opacity-20 bg-gradient-to-tl from-green-500 to-transparent size-60 rounded-full z-0 
        right-10 bottom-5"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-br from-green-500 to-transparent size-60 rounded-3xl z-0
        top-0 -left-32 rotate-45"
      ></div>

      <section className="flex flex-col gap-2 mx-auto">
        <h2 className="text-5xl font-bold text-center">
          SERVICES <span className="text-blue-600 font-normal">WE PROVIDE</span>
        </h2>
        <p className="text-center text-stone-500">
          We offer commercial and domestic flooring at great prices. Contact us
          today for a free estimate.
        </p>
      </section>
      <section className="w-[81vw] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        <ServiceCard
          imgSrc={service1}
          title="Carpet Removal"
          learnMoreImg="image_src_13"
        />
        <ServiceCard
          imgSrc={service2}
          title="Floor Installation"
          learnMoreImg="image_src_15"
        />
        <ServiceCard
          imgSrc={service3}
          title="Floor Refinishing"
          learnMoreImg="image_src_17"
        />
        <ServiceCard
          imgSrc={service4}
          title="Floor Removal"
          learnMoreImg="image_src_17"
        />
        <ServiceCard
          imgSrc={service5}
          title="Kitchen Strip Outs"
          learnMoreImg="image_src_17"
        />
        <ServiceCard
          imgSrc={service6}
          title="Floor Refinishing"
          learnMoreImg="image_src_17"
        />
      </section>
    </main>
  );
};

const ServiceCard = ({ imgSrc, title, learnMoreImg }) => {
  return (
    <div className="rounded-2xl bg-white shadow-sm px-10 py-14">
      <img src={imgSrc} alt="" className="size-[4.6rem]" />
      <div className="">
        <div className="text-3xl my-6">
          <h3>{title}</h3>
        </div>
        <div className="text-stone-500 mb-9">
          Refresh Your Interior With New Flooring Looking to install new
        </div>
        <div className="">
          Learn More
          <img src={learnMoreImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
