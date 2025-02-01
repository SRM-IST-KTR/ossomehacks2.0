import { useState } from "react";
import Image from "next/image";
import spiral from "@/public/spiral.png";
import clock from "@/public/clock.png";

const Schedule = () => {
    const [showCard2, setShowCard2] = useState(false);
    const [showCard3, setShowCard3] = useState(false);
    const [showCard4, setShowCard4] = useState(false);
    const [showCard5, setShowCard5] = useState(false);
    const [showCard6, setShowCard6] = useState(false);
    const [showCard7, setShowCard7] = useState(false);

    return (
        <>
            <div className="bg-[#1E002E] w-full relative overflow-hidden pb-10">
             
                <div className="relative z-10 text-center pt-10">
                    <p className="text-[#6B5E77] lg:text-[250px] md:text-[150px] text-[75px] -ml-2 font-raleway font-extrabold -tracking-wider">
                        SCHEDULE
                    </p>
                    <p className="text-[#FCF961] lg:text-[140px] md:text-[80px] text-[42px] font-raleway font-extrabold -tracking-wider lg:ml-5 lg:-mt-[12%] -mt-[15%]">
                        SCHEDULE
                    </p>
                </div>

               

               
                <div className="relative w-full flex justify-center">
                    <Image
                        src={spiral}
                        className="absolute top-0 left-1/2 transform md:mt-6 mt-2 -translate-x-1/2 lg:w-[185px] lg:h-[906px] md:w-[170px] md:h-[850px] w-[100px] h-[550px] "
                        priority
                    />
                </div>

                



                {/*card row 1 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
                   
                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard2(true)}
                        onMouseLeave={() => setShowCard2(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-[16px] text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>

                    
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>
                </div>




                {/*card row 2 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
                    
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard3 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>

                    
                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard3(true)}
                        onMouseLeave={() => setShowCard3(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-[16px] text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>




               {/*card row 3 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
                    
                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard4(true)}
                        onMouseLeave={() => setShowCard4(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-16px text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>

                    
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard4 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>
                </div>




               {/*card row 4 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
                  
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard5 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>

                   
                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard5(true)}
                        onMouseLeave={() => setShowCard5(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-16px text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>




            {/*card row 5 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
         
                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard6(true)}
                        onMouseLeave={() => setShowCard6(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-16px text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>

                  
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard6 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>
                </div>




                {/*card row 6 */}
                <div className="relative z-10 flex items-center justify-center lg:py-10 md:py-9 py-5 lg:gap-80 md:gap-60 gap-[100px]">
           
                    <div
                        className={`bg-[#1E002E] lg:w-[275px] border-2 border-[#660066] lg:h-[70px] md:w-[245px] md:h-[70px] w-[120px] h-[50px] rounded-2xl p-2 transition-all duration-2000 ease-in-out ${showCard7 ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="flex items-center justify-center w-full p-[10px]">
                            <p className="text-[#FCF961] lg:text-[16px] md:text-[16px] text-[9px] text-center font-bold lg:mt-1 md:mt-1">Registrations Open</p>
                        </div>

                    </div>


                    <div
                        className="bg-[#FECCFE] lg:w-[275px] lg:h-[70px] md:w-[245px] md:h-[70px] w-[130px] h-[50px] rounded-2xl lg:p-2 md:p-2 p-1 cursor-pointer"
                        onMouseEnter={() => setShowCard7(true)}
                        onMouseLeave={() => setShowCard7(false)}
                    >
                        <div className="flex items-center justify-start gap-2 lg:mt-0 md:mt-0 mt-[5px]">
                            <div className="bg-[#660066] rounded-2xl lg:w-[54px] lg:h-[54px] md:w-[54px] md:h-[54px] w-[25px] h-[25px] flex items-center justify-center">
                                <Image src={clock} className="lg:w-[26px] lg:h-[26px] md:w-[26px] md:h-[26px] w-[13px]  h-[13px]" />
                            </div>
                            <div>
                                <p className="text-black lg:text-[16px] md:text-16px text-[9px] font-bold">01 January 2024</p>
                                <p className="text-[#5B5C5C] font-bold text-[9px]">02:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Schedule;
