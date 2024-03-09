import logowhite from "../../assets/about/logowhite.png";
import tick from "../../assets/about/tick.png";
import best from "../../assets/best.png";

const BestInVegas = () => {
  return (
    <main className="mx-10">
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl font-black italic text-blue-600 opacity-30">
            BEST IN VEGAS
          </h1>
          <span className="relative bottom-6 text-3xl font-bold text-blue-600">
            VEGAS FLOORING OUTLET
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-7xl font-bold italic">
            VOTED BEST IN LAS VEGAS
          </h2>
        </div>
      </section>

      <section className="flex flex-wrap md:flex-nowrap justify-center gap-14 mt-10">
        <div className="flex flex-col justify-center items-center gap-6 text-2xl font-medium">
          <span className="flex gap-2">
            <img src={tick} className="shrink-0" /> LOWEST PRICES
          </span>
          <span className="flex gap-2">
            <img src={tick} className="shrink-0" /> PROFESSIONAL INSTALLERS
          </span>
          <span className="flex gap-2">
            <img src={tick} className="shrink-0" /> 0% FINANCING
          </span>
        </div>
        <div className="ml-2">
          <img src={logowhite} />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-2xl font-medium">
          <span className="flex gap-2">
            <img src={tick} /> 5-STAR SERVICE
          </span>
          <span className="flex gap-2">
            <img src={tick} /> LICENSED • BONDED • INSURED
          </span>
          <span className="flex gap-2">
            <img src={tick} /> FREE ESTIMATES
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-5 text-xl text-gray-700 font-extralight text-center max-w-[1047px] mx-auto mt-10 leading-9">
        <p>
          Vegas Flooring Outlet supplies the most popular flooring options at
          absolutely the lowest prices in town. We also feature a broad
          selection of backsplash, moldings, and trims for your remodeling
          needs.
        </p>
        <p>
          We prioritize keeping prices as low as possible while providing
          outstanding customer service. All while diligently researching
          hundreds of brands so you can rest assured you have spent your
          hard-earned money on the best quality flooring out there.
        </p>
        <p>
          After you have found the flooring of your dreams at our showroom, our
          team of expert professionals will schedule an at home measure to send
          you a free estimate then schedule an install. Our turnaround times can
          be as quick as a week. Best of all, our installers are our own
          employees – fully licensed, bonded and insured.
        </p>
        <span>Come visit our Las Vegas showroom today!</span>

        <div className="flex justify-center gap-4 md:gap-10 lg:gap-20 mt-14">
          <img src={best} className="size-48 md:size-60" />
          <img src={best} className="size-48 md:size-60" />
        </div>

        <span>
          Read our testimonials and over 100 5-Star reviews and <br />
          you'll easily see why Vegas voted us the best flooring company 2 years
          in a row.
        </span>

        <div className="mt-5 mb-10">
          <a className="nav-a">View Testimonials</a>
        </div>
      </section>
    </main>
  );
};

export default BestInVegas;
