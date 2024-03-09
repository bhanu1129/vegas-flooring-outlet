import team from "../../assets/about/team.png";

const Agency = () => {
  return (
    <main className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-20 my-12 md:my-36 mx-10">
      <section className="object-cover">
        <img src={team} alt="Team" className="w-[570px] object-cover" />
      </section>
      <section className="flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl lg:text-5xl font-bold">WE ARE A MODERN</h2>
          <h2 className="text-4xl lg:text-5xl font-light text-blue-600">
            FLOORING AGENCY...
          </h2>
          <span className="text-xl text-stone-500">VEGAS FLOORING OUTLET</span>
        </div>
        <p className="max-w-[500px] text-gray-600 leading-8 text-base lg:text-lg font-extralight capitalize">
          Since our beginning in 2012, Vegas Flooring Outlet has been focused on
          achieving one goal: to be the best flooring company that Las Vegas
          locals deserve. Our exceptional service and quality product has earned
          us the title of best flooring company in Las Vegas by the Las Vegas
          Review-Journal two years in a row. We will not only maintain these
          standards but strive to exceed them.
        </p>
      </section>
    </main>
  );
};

export default Agency;
