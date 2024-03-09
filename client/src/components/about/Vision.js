import vision from "../../assets/about/vision.png";

const Vision = () => {
  return (
    <main className="mt-14 pb-4 bg-neutral-700">
      <section>
        <img src={vision} alt="Vision" className="" />
      </section>

      <section className="text-white pt-24 pb-14 mx-10">
        <div className="max-w-[1140px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-medium">
            The Vision of Our Company is To Be Among the Minds, Hearts, and
            Homes of Stylish individuals Around the World
          </h3>
          <div className="flex gap-8 md:gap-28 lg:gap-32 mt-14 items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">120+</h1>
            <span className="text-xl md:text-2xl text-stone-400">
              We offer commercial and domestic flooring at great prices. Contact
              us today for a free estimate.
            </span>
          </div>
        </div>

        <hr className="my-14" />

        <div className="flex max-w-[1140px] mx-auto gap-8 md:gap-28 lg:gap-32 items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">98%</h1>
          <span className="text-xl md:text-2xl text-stone-400">
            Any faults that may arise during the guarantee period will be fixed,
            free of charge. We offer commercial and domestic flooring at great
            prices. Contact us today for a free estimate.
          </span>
        </div>
      </section>
    </main>
  );
};

export default Vision;
