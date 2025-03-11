'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const carouselItems = [
  {
    id: 1,
    image: "",
    title: "Project ",
    description: "Installation of lights in Marrickville."
  },
  {
    id: 2,
    image: "",
    title: "Project ",
    description: "Installation of lights in Marrickville."
  },
  {
    id: 3,
    image: "",
    title: "Project ",
    description: "Installation of lights in Marrickville."
  }
];

const Ourjob: React.FC = () => {
  return (
    <section className="flex flex-row items-center justify-center py-10 bg-gray-100">
      {/* Columna del título */}
      <div className="w-1/3 pl-10">
        <h2 className="text-left text-ms font-semibold lg:ml-32 lg:w-20 ">Our job talk for us </h2>
      </div>

      {/* Columna del carrusel */}
      <div className="w-2/3">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 10000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 }
          }}
          className="w-full"
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className="flex flex-col items-center p-4">
              <img src={item.image} alt={item.title} className="w-60 h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Ourjob;
