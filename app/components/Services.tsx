'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import ServiceItem from "@/app/components/service/Serviceitem";

interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;    
    slug: string;
}

interface ServiceProps {
    data: ServiceItemData[];
    classname?: string;  // classname puede ser opcional
}

export default function Services({ data, classname }: ServiceProps) {
    return (
        <section className={`testimonial-block sm:py-14 py-10 bg-[#f9f9fa] ${classname}`}>
            <div className="flex flex-col w-full">
                <div className="heading lg:px-8 lg:py-8">
                    <h3 className="font-sans text-center text-gray-600 lg:!text-2xl leading-none">Electrician Syndey</h3>
                    <p className="font-sans text-center text-gray-500 lg:!text-2xl leading-none">Sydney-Wide Electrician Services</p>
                </div>
                <div className="list-testimonials md:mt-10 mt-7 w-full px-5 lg:pl-20 lg:pr-20 2xl:pr-56 2xl:pl-64">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination-services", // Conectamos la paginación externa
                        horizontalClass: "swiper-pagination-horizontal", // Asegura que sea horizontal
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="h-full relative style-section"
                    id="serviceSwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="2xl:!flex 2xl:!items-center 2xl:!justify-center 2xl:!mx-2">
                            <ServiceItem data={item} type={'style-two'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </section>
    );
}
