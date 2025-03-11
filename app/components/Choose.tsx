"use client";

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
        <section id="about" 
        className="
        relative 
        bg-[url('/layout5_mobile.png')]  
        lg:bg-[url('/layout5.png')]
        bg-cover
        bg-top 
        bg-no-repeat
        text-center
        h-[70vh]
        lg:h-screen
        flex flex-col 
        lg:flex-row
        justify-start
        items-center 
        w-full
        lg:pl-0
        lg:pr-0 
        lg:items-start
        lg:justify-center
        "
    > {/*Texto para celular */}
        <div className="px-16 w-full text-left space-y-0 lg:hidden mt-16">
            <h5 className="leading-1 text-xs lg:text-lg font-sans font-extralight text-[#ffffff]">
                Why Choose Us for Commercial Cleaning in Sydney?
            </h5>
            <p  className="leading-1 text-xs lg:text-lg font-sans font-extralight text-[#ffffff] ">
                At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                <br/>
                Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
            </p>
            <h5 className="leading-1 text-xs lg:text-lg font-sans font-extralight text-[#ffffff]">
                Let’s make your business shine! Get a free quote in just 1 hour! 
            </h5>
        </div>
    <div className="lg:!hidden flex px-16 w-full lg:w-[60%]">
            <Form data={data} />            
    </div>
    {/* Texto para computador */}
        <div className="px-6  text-left space-y-0 hidden lg:block lg:ml-52  pt-32">
            <h5 className="hidden text-sm font-sans font-thin text-white lg:block">
                Why Choose Us for Commercial Cleaning in Sydney?
            </h5>
            <p  className="hidden text-sm font-sans font-thin text-white  lg:block">
                At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                <br/>
                Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
            </p>
            <h5 className="text-sm font-sans font-thin text-white">
                Let’s make your business shine! Get a free quote in just 1 hour! 
            </h5>

            <div className="hidden lg:flex  h-full lg:w-full lg:mr-1 justify-start max-w-2xl">
                <Form data={data}/>            
            </div>
        </div>
        

    

        {/* Imagen */}
        <img src="/form2Mobile.png"  className="w-full h-auto mt-4 lg:hidden rounded-lg  "
            />
        <img src="/form2Pc.png"  
            className="hidden lg:block w-[45%] h-full object-cover lg:mr-0"/>
    </section>
    
    );
};

export default Choose;
