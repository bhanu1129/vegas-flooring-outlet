import contactCard from "../../assets/contact/contactCard.png";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";

const ContactCard = () => {
  return (
    <div className="relative">
      <div
        className="absolute opacity-20 bg-gradient-to-tl from-green-500 to-transparent size-60 rounded-full z-0 
        right-20 -bottom-24"
      ></div>

      <div
        className="absolute opacity-20 bg-gradient-to-br from-green-500 to-transparent size-60 rounded-3xl z-0
        -top-10 left-20"
      ></div>
      <main className="relative flex justify-center gap-10 max-w-[80vw] mx-auto bg-white rounded-3xl border border-blue-500 p-6 mt-28">
        <section className="flex flex-col gap-10 flex-1 py-3 px-6">
          <div>
            <span className="text-xl font-light text-stone-500">
              VEGAS FLOORING OUTLET
            </span>
            <h3 className="text-5xl font-bold mt-3">
              CONTACT <span className="font-normal">US</span>
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <Detail icon={<IoMdMail />} data="vfo@vegasflooringoutlet.com" />
            <Detail icon={<BiSolidPhoneCall />} data="702.685.8880" />
            <Detail
              icon={<HiMiniMapPin />}
              data="4039 Spring Mountain Rd. Las Vegas, NV 89102 (Next to Pho Kim Long)"
            />
            <Detail
              icon={<FaTruckFast />}
              data="Mon-Fri: 8:30am-6pmSat: 8:30am-3pm"
              subData="Order Pickups Mon-Fri until 5pm | Sat Until 3pm"
            />
          </div>

          <div className="flex gap-6 mt-5">
            <button className="nav-a">Join Newsletter</button>
            <button className="nav-a">Free Estimate</button>
          </div>
        </section>

        <section>
          <img src={contactCard} alt="contact" />
        </section>
      </main>
    </div>
  );
};

const Detail = ({ icon, data, subData }) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex p-2 rounded-full bg-black text-white text-xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-normal max-w-80">{data}</span>
        <span className="font-normal text-stone-500">{subData}</span>
      </div>
    </div>
  );
};

export default ContactCard;
