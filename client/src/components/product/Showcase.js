import React, { useState } from "react";
import showcase1 from "../../assets/product/showcase1.png";
import showcase2 from "../../assets/product/showcase2.png";
import showcase3 from "../../assets/product/showcase3.png";
import showcase4 from "../../assets/product/showcase4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: showcase1,
      title: "Laminate Flooring",
      description: "100% Waterproof, Impact Resistant, and Easy to Install.",
    },
    {
      image: showcase2,
      title: "Laminate Flooring",
      description: "100% Waterproof, Impact Resistant, and Easy to Install.",
    },
    {
      image: showcase3,
      title: "Laminate Flooring",
      description: "100% Waterproof, Impact Resistant, and Easy to Install.",
    },
    {
      image: showcase4,
      title: "Laminate Flooring",
      description: "100% Waterproof, Impact Resistant, and Easy to Install.",
    },
  ];

  return (
    <main className="bg-white pt-24 pb-28">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl font-bold text-center">
          VEGAS FLOORING OUTLET
        </h1>
        <p className="text-2xl font-extralight max-w-[55%] text-center leading-10">
          The Vision of our company is to be among the minds, hearts, and homes
          of stylish individuals around the world
        </p>
      </div>
      <div className="w-[100%] mx-auto mt-14 h-[587px]">
        <Swiper
          spaceBetween={300}
          slidesPerView={4}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation
          modules={[Navigation]}
        >
          {slides.map(({ image, title, description }, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={`relative transition h-[507px] w-[367px] rounded-3xl bg-cover ${
                  activeIndex === index ? "h-[587px] w-[425px] -left-7" : ""
                }`}
              >
                <div
                  className={`flex h-full items-end ${
                    activeIndex === index
                      ? "bg-gradient-to-b via-transparent from-transparent to-black"
                      : ""
                  } rounded-3xl p-5`}
                >
                  {activeIndex === index && (
                    <div className="flex flex-col gap-4">
                      <h3 className="text-white text-3xl font-bold">{title}</h3>
                      <p className="text-white">{description}</p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Showcase;
