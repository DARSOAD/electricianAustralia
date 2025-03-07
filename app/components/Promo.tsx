

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
        lg:flex-row
        justify-between 
        items-center 
        w-full
        lg:px-28
        "
        >
            {/* Texto superior */}
            <div className="absolute top-8 left-[57%] transform -translate-x-[40%] text-gray-500 font-sans w-4/5 text-center text-sm lg:text-2xl lg:top-28 lg:w-3/4 leading-none lg:leading-6 2xl:text-3xl 2xl:top-44 2xl:w-3/5">
                <h3 className="font-extralight mb-0">We’ll beat any competitor’s price, Guaranteed!</h3>
                <p className="font-light mt-0">Found a cheaper electrical  quote?</p>
                <p className="font-extralight">We’ll match it or beat it!</p>
                
            
            </div>

            
             {/* Beneficios con íconos */}
             
             <div className="absolute top-[300px] left-[65%] transform -translate-x-1/2 text-left text-gray-600 text-xs lg:text-lg lg:w-2/5 2xl:text-xl">
                <p className="mt-6 text-gray-600 text-sm lg:text-lg 2xl:text-xl">
                    A clean workspace is essential for productivity, professionalism, and a lasting impression. 
                    We offer high-quality commercial cleaning at unbeatable prices – and if you find a lower quote, 
                    we’ll match it or beat it!
                </p>
                <p className="mt-6"></p> 
                <ul className="space-y-2">
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Best price guarantee – We’ll match or beat any competitor’s quote!</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Licensed & Experienced Electricians for all jobs, big or small</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Fast, Reliable & On-Time Service</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Upfront Pricing – No Hidden Fees</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2"> 24/7 Emergency & Same-Day Repairs</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2">Energy-Efficient & Future-Proof Solutions</span>
                    </li>
                    <li className="flex items-center">
                        ✅ <span className="ml-2"> Fully Insured & Compliant with Australian Standards</span>
                    </li>
                    
                </ul>
            </div>
            {/* Beneficios */}
            <div className="mt-64 pb-8 px-4 w-5/4 transform grid grid-cols-3 gap-6 text-white font-light text-xm text-right lg:grid-cols-4 lg:text-lg lg:mt-[500px] 2xl:mt-[800px] 2xl:px-36 2xl:text-2xl 2xl:pb-20 justify-end">
                <p className="leading-none">24/7 Availability for  Emergency cleaning</p>
                <p className="leading-none">Fast quote – 1 hour – No delays, just clean results!</p>
                <p className="leading-none">Get your first clean  <span className="font-semibold">FREE*</span></p>
            </div>
        </section>
    );
}
