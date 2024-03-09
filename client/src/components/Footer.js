import logo from "../assets/logo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname === "/product") {
      return "bg-white";
    } else if (location.pathname === "/about") {
      return "bg-neutral-700";
    } else {
      return "bg-gray-100";
    }
  };
  return (
    <div className={getBackgroundColor()}>
      <main className="bg-black pb-6 rounded-t-[70px]">
        <section className="flex flex-col items-center text-center gap-4 pt-14 mx-10">
          <h3 className="text-2xl font-semibold text-white">
            VOTED BEST FLOORING{" "}
            <span className="text-blue-800 font-normal">
              COMPANY IN LAS VEGAS 4
            </span>{" "}
            YEARS IN A ROW
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-12">
            <p className="text-stone-500">
              NV LICENSE #79055 C-16 M/LIMIT: $2,400,000
            </p>
            <p className="text-stone-500">
              NV LICENSE #79667 C-20 M/LIMIT: $2,400,000
            </p>
          </div>
        </section>

        <section className="flex flex-wrap lg:flex-nowrap items-center justify-center w-[81vw] gap-10 lg:justify-between mx-auto mt-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 w-[25rem] ">
              <img src={logo} width={"68px"} />
              <h4 className="text-white">
                4039 SPRING MOUNTAIN RD. LAS VEGAS, NV 89102 (NEXT TO PHO KIM
                LONG)
              </h4>
            </div>
            <div className="flex flex-col gap-4 text-white font-extralight">
              <div className="flex items-center gap-8">
                <HiMiniMapPin />
                <p>VFO@VEGASFLOORINGOUTLET.COM</p>
              </div>
              <div className="flex items-center gap-8">
                <IoMdMail />
                <p>702.685.8880</p>
              </div>
              <div className="flex items-center gap-8">
                <BiSolidPhoneCall />
                <p>MON-FRI: 8:30AM-6PM SAT: 8:30AM-3PM</p>
              </div>
              <div className="flex items-center gap-8">
                <FaTruckFast />
                <p>ORDER PICKUPS MON-FRI UNTIL 5PM | SAT UNTIL 3PM</p>
              </div>
            </div>
          </div>

          <div className="flex gap-20 text-white">
            <div>
              <span className="text-blue-600 font-bold text-xl">
                FLOORING PRODUCTS
              </span>
              <ul className="font-extralight flex flex-col gap-3 mt-6">
                <li>• TILE FLOORING</li>
                <li>• SPC VINYL PLANKS</li>
                <li>• LAMINATE FLOORING</li>
                <li>• CARPET FLOORING</li>
                <Link to="/product">• SHOP ALL PRODUCTS</Link>
              </ul>
            </div>
            <div>
              <span className="text-blue-600 font-bold text-xl">MENU</span>
              <ul className="font-extralight flex flex-col gap-3 mt-6">
                <Link to="/about">• ABOUT</Link>
                <Link to="/design-visualizer">• DESIGN AND VISUALIZER</Link>
                <Link to="/">• FAQS</Link>
                <Link to="/blog">• FLOORING BLOG</Link>
                <Link to="/contact">• CONTACT</Link>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center mt-12 md:mt-20 lg:mt-28 mx-10">
          <p className="text-stone-600">
            COPYRIGHT © 2023 VEGAS FLOORING OUTLET | PRIVACY POLICY
          </p>
        </div>
      </main>
    </div>
  );
};

export default Footer;
