import { IoMdCheckmark } from "react-icons/io";


const Features= () => {
    return (
        
        <div className="text-white mt-8 mx-2 px-4 lg:block border-l-4 lg:!mt-36 lg:border-l-2 lg:py-1 2xl:ml-8">
            <p className="mt-4 font-sans text-xs text-left font-extralight lg:font-thin leading-[1.1] lg:mt-0 2xl:text-lg">
            A safe and reliable electrical system is essential for efficiency, safety, and peace of mind. We provide top-quality electrical services at unbeatable prices – and if you find a lower quote, we’ll match it or beat it!
            </p>
            <ul className="pt-2 space-y-1">
            {[
                "Best price guarantee – We’ll match or beat any competitor’s quote!",
                "Licensed & Experienced Electricians for all residential, commercial & industrial needs",
                "Safe & Compliant Electrical Solutions – Meeting Australian standards",
                "Flexible Scheduling – 24/7 emergency services available",
                "100% satisfaction guarantee",
            ].map((text, index) => (
                <li key={index} className="flex items-start space-x-2">
                <span className="bg-green-500 text-xs"> <IoMdCheckmark/> </span>
                <p className="text-xs font-sans font-extralight lg:font-thin leading-[1] lg:leading-[1.5] 2xl:text-lg">{text}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}  

export default Features