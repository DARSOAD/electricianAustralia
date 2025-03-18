import { IoMdCheckmark } from "react-icons/io";

export default function Promo() {
    return (
        <section id="promo"
            className="
        relative 
        bg-[url('/layout2_mobile.png')]
        lg:bg-[url('/layout2.png')]
        bg-cover
        bg-top  
        bg-no-repeat
        text-center
        h-auto
        flex flex-col 
        justify-between 
        items-center 
        w-full
        lg:px-28
        "
        >
            {/* Texto superior */}
            <div className="flex flex-col justify-end w-[70%] ml-24 mt-24 text-gray-500 font-sans text-left text-xl lg:text-2xl lg:w-3/4 lg:mt-36 leading-none lg:leading-6 2xl:text-3xl 2xl:w-3/5 ">
                <h3 className="font-extralight mb-0 lg:hidden">We’ll beat any competitor’s price, Guaranteed!</h3>
            </div>
            <div className="mt-50  text-left ml-48 lg:text-2xl lg:w-[50%]  text-gray-500 lg:ml-[50%] lg:!text-center">
                <h3 className="font-extralight mb-0 hidden lg:block">We’ll beat any competitor’s price, Guaranteed!</h3>
                <p className="font-light w-40 lg:w-full leading-none">Found a cheaper electrical  quote?</p>
                <p className="font-extralight">We’ll match it or beat it!</p>
            </div>


            {/* Beneficios con íconos */}

            <div className="flex flex-col items-start w-64 ml-auto  font-extralight font-sans text-left text-xs lg:text-lg lg:w-[60%] leading-none lg:leading-6 2xl:text-xl 2xl:w-2/5 ">
                <p className="mt-6 leading-none text-gray-500 text-xs lg:text-xs 2xl:text-xl lg:leading-[1] ">
                    A clean workspace is essential for productivity, professionalism, and a lasting impression.
                    We offer high-quality commercial cleaning at unbeatable prices – and if you find a lower quote,
                    we’ll match it or beat it!
                </p>
                <ul className="pt-2  lg:leading-[1] lg:text-xs text-gray-500">
                    {[
                        "Best Price Guarantee – We’ll match or beat any competitor’s quote",
                        "Licensed & Experienced Electricians for all jobs, big or small",
                        "Fast, Reliable & On-Time Service",
                        "Upfront Pricing – No Hidden Fees",
                        "24/7 Emergency & Same-Day Repairs",
                        "Energy-Efficient & Future-Proof Solutions",
                        "Fully Insured & Compliant with Australian Standards",
                    ].map((text, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <span className="bg-green-500 text-xs"> <IoMdCheckmark /> </span>
                            <p className="text-xs font-sans font-extralight lg:font-thin leading-[1] lg:leading-[1.5] 2xl:text-lg">{text}</p>
                        </li>
                    ))}
                </ul>


            </div>
            {/* Beneficios */}
            <div className="ml-5 mt-100 pb-8 px-4 w-50 transform grid grid-cols-2 gap-6 text-white font-light text-xm text-center lg:grid-cols-3 lg:text-lg lg:mt-52lg:mt-[500px] 2xl:mt-[800px] 2xl:px-36 2xl:text-2xl 2xl:pb-20 justify-end">
                <p className="leading-none">
                    Power your space with confidence! Get a free quote in 1 hour!
                </p>
                <p className="leading-none">Power your space with confidence! Get a free quote in 1 hour!
                </p>
                <p className="leading-none hidden lg:block">Spark Up Safety & Savings! Book Your Complimentary Electrical Assessment Now - Zero Obligation, Maximum Peace of Mind.</p>
            </div>
        </section>
    );
}
