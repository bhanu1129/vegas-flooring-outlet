import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main>
      <nav className="flex justify-between items-center rounded-2xl shadow-xl px-6 bg-black bg-opacity-70 absolute left-8 top-4 min-w-[95vw] h-[130px] z-10">
        <div className="flex justify-center items-center gap-8 shrink-0">
          <img
            src={menu}
            alt="Menu"
            className="cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <img src={logo} alt="Logo" className="w-[80px] sm:w-[121px]" />
        </div>
        <div>
          <h1 className="text-white pl-5 font-bold text-2xl sm:text-4xl">
            VEGAS FLOORING OUTLET
          </h1>
        </div>
        <div className="hidden md:flex gap-4 shrink-0">
          <button className="text-white text-sm lg:text-lg font-semibold bg-blue-600 py-3 px-5 lg:px-7 rounded-full">
            CALL NOW
          </button>
          <button className="text-white text-sm lg:text-lg font-semibold bg-blue-600 py-3 px-5 lg:px-7 rounded-full">
            <Link to="/map">GET DIRECTIONS</Link>
          </button>
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="absolute top-[9.125rem] left-8 w-[95vw] p-5 rounded-2xl bg-black bg-opacity-70 z-10">
          <ul className="text-white text-base md:text-lg lg:text-xl font-extralight flex flex-wrap gap-4 sm:gap-8 ">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/design-visualizer">Visualizer</Link>
            <Link to="/commercial">Commercial</Link>
            <Link to="/residential">Residential</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </ul>
          <div className="md:hidden flex gap-4 shrink-0">
            <button className="text-white text-sm lg:text-lg font-semibold bg-blue-600 py-3 px-5 lg:px-7 rounded-full">
              CALL NOW
            </button>
            <button className="text-white text-sm lg:text-lg font-semibold bg-blue-600 py-3 px-5 lg:px-7 rounded-full">
              <Link to="/map">GET DIRECTIONS</Link>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
