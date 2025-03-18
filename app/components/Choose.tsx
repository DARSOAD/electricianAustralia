"use client";

import Image from "next/image";
import Form from "./choose/Form";

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}

const Choose = ({ data }: ServiceProps) => {
    return (
        <section
            id="choose"
            className="
        relative 
        text-center
        h-auto lg:h-screen
        flex flex-col lg:flex-row
        justify-start lg:justify-center
        items-center lg:items-start
        w-full
      "
        >
            {/* Imagen de fondo optimizada */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/layout5_mobile.png"
                    alt="Background Mobile"
                    fill
                    className="object-cover object-top lg:hidden"
                    priority
                />
                <Image
                    src="/layout5.png"
                    alt="Background Desktop"
                    fill
                    className="object-cover object-top hidden lg:block"
                    priority
                />
            </div>

            {/* Contenido para móviles */}
            <div className="relative px-16 w-full text-left mt-16 lg:hidden">
                <h5 className="text-xs font-sans font-extralight text-white">
                    Why Choose Us for Commercial Cleaning in Sydney?
                </h5>
                <p className="text-xs font-sans font-extralight text-white">
                    At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                    <br />
                    Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
                </p>
                <h5 className="text-xs font-sans font-extralight text-white">
                    Let’s make your business shine! Get a free quote in just 1 hour!
                </h5>
            </div>

            {/* Formulario para móviles */}
            <div className="relative flex px-16 w-full lg:w-[60%] lg:!hidden">
                <Form data={data} />
            </div>

            {/* Contenido para escritorio */}
            <div className="relative text-left hidden lg:flex flex-row lg:ml-52 h-full lg:w-full">
                <div className="w-[55%] pt-32 px-6">
                    <h5 className="text-sm font-sans font-thin text-white">
                        Why Choose Us for Commercial Cleaning in Sydney?
                    </h5>
                    <p className="text-sm font-sans font-thin text-white">
                        At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                        <br />
                        Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
                    </p>
                    <h5 className="text-sm font-sans font-thin text-white">
                        Let’s make your business shine! Get a free quote in just 1 hour!
                    </h5>

                    {/* Formulario para escritorio */}
                    <div className="hidden lg:flex h-[25%] lg:w-full lg:mr-1 justify-start max-w-2xl mt-[10%]">
                        <Form data={data} />
                    </div>
                </div>

                {/* Imágenes responsivas */}
                <div className="relative w-[45%] h-full flex ml-auto">
                    <Image
                        src="/form2Pc.png"
                        alt="Form Desktop"
                        width={700}
                        height={700}
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>

            {/* Imágenes responsivas */}
            <div className="relative w-full lg:hidden">
                <Image
                    src="/form2Mobile.png"
                    alt="Form Mobile"
                    width={500}
                    height={500}
                    className="w-full h-auto mt-4  rounded-lg"
                />
            </div>
        </section>
    );
};

export default Choose;
