import React from 'react';
import { BackgroundBeams } from './Animation/BackgroundBeams.jsx';

const About = () => {
    return (
        <>
            <div className="h-screen relative">
                <BackgroundBeams className=" bg-[#1E002E]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center -mt-16 z-10 text-center ">
                    <div className=''>
                        
                    <p className='text-[#6B5E77] text-center lg:text-[280px] md:text-[230px] text-[120px] -ml-2 font-raleway font-bold -tracking-widest'>ABOUT</p>
                    <div className='flex items-start justify-center'>

                    <p className='text-[#FCF961] text-center lg:text-[140px] md:text-[100px] text-[60px] font-raleway font-bold -tracking-widest lg:-mt-[25%] -mt-[26%] '>ABOUT</p>
                    </div>
                    </div>
                    <p className='text-[#AA2490] font-bold font-poppins lg:text-[32px] md:text-[24px] text-[16px] pb-3 '>Code Your Passion, Build Your Legacy.</p>
                    <p className='text-white lg:text-[24px] md:text-[16px] text-[9px] lg:w-[920px] md:w-[620px] w-[360px] '>
                        “<span className='font-bold'> Ossome Hacks 2.0 </span> builds on the success of its inaugural edition in September 2023, which saw 250+ participants in 50+ teams solving real-world challenges. This <span className='font-bold'>36-hour hackathon</span>  engages tech enthusiasts of all levels with diverse tracks, fostering innovation, skill-building, and collaboration. More than a competition, it celebrates 
                        open-source development and empowers participants to make a meaningful impact.”
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
