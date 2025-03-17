'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { IoIosArrowForward } from "react-icons/io";

const carouselItems = [
  {
    id: 1,
    image: "/carrusel1.webp",
    title: "Project",
    description: "Installation of lights in Marrickville."
  },
  {
    id: 2,
    image: "carrusel2.webp",
    title: "Project",
    description: "Installation of lights in Marrickville."
  },
  {
    id: 3,
    image: "carrusel1.webp",
    title: "Project",
    description: "Installation of lights in Marrickville."
  }
];

const OurJob: React.FC = () => {
  return (
    <section className="work-card lg:py-20 sm:py-14 py-10 bg-[#f9f9fa]">
      <div className="container flex sm:flex-col lg:flex-row items-center lg:items-start">
        
         {/* Columna del título y flecha */}
         <div className="w-[40%] sm:w-full lg:w-1/5 flex flex-row items-start justify-center pl-6 sm:pl-10 lg:pl-16 mb-6 sm:mb-8  lg:mt-64 ">
          <h3 className="font-sans text-left text-gray-800 text-lg sm:text-xl lg:!text-2xl leading-[1.1] tracking-tight">
            Our job <br /> talk for us
          </h3>
          <IoIosArrowForward className="mt-2 w-5 h-5 text-gray-800 sm:w-6 sm:h-6 lg:mt-4" />
        </div>

        {/* Columna del carrusel */}
        <div className="w-[60%] sm:w-full lg:w-4/5">
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 10000 }}
            pagination={{
                clickable: true,
                el: ".custom-pagination",
                horizontalClass: "swiper-pagination-horizontal",
            }}
            modules={[Pagination, Autoplay]}
            direction="horizontal"
            breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="h-full relative"
              >
            {carouselItems.map((item) => (
                <SwiperSlide key={item.id} className="flex flex-col items-start p-4">
                    <div className="flex justify-start w-full">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-cover rounded-lg mb-4"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-left w-full">{item.title}</h3>
                    <p className="text-gray-600 text-left w-full">{item.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>

      </div>
    </section>
  );
};

export default OurJob;
