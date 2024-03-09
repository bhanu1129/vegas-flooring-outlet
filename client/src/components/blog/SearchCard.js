import { CiSearch } from "react-icons/ci";

const SearchCard = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center p-6 bg-white">
        <input
          className="border border-neutral-500 p-5 text-2xl placeholder:text-neutral-600 placeholder:font-light"
          placeholder="Search Here"
        />
        <div className="text-4xl text-white bg-[#533623] p-5">
          <CiSearch />
        </div>
      </div>
    </section>
  );
};

export default SearchCard;
