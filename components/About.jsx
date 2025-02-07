import React from 'react';
import { BackgroundBeams } from './Animation/BackgroundBeams.jsx';

const About = () => {
    return (
        <>
            <div
                id="about"
                className="h-screen relative bg-[#1E002E]">
                <BackgroundBeams />
                <div className="absolute inset-0 flex flex-col justify-center items-center -mt-16 z-10 text-center px-4">
                    <div className=''>

                        <p className='text-[#6B5E77] text-center lg:text-[280px] md:text-[230px] text-[120px] -ml-2 font-raleway font-bold -tracking-widest'>ABOUT</p>
                        <div className='flex items-start justify-center'>

                            <p className='text-[#FCF961] text-center lg:text-[140px] md:text-[100px] text-[60px] font-raleway font-bold -tracking-widest lg:-mt-[25%] -mt-[26%] '>ABOUT</p>
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-[#AA2490] font-bold font-poppins text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] pb-3">
                        Code Your Passion, Build Your Legacy.
                    </p>

                    {/* Main Paragraph */}
                    <p className="text-white font-poppins text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-relaxed max-w-[400px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[920px]">
                        <span className="font-bold">Ossome Hacks 2.0</span> builds on the success of its inaugural edition in September 2023,
                        which saw 250+ participants in 50+ teams solving real-world challenges. This <span className="font-bold">36-hour hackathon</span> engages tech enthusiasts of all levels with diverse tracks, fostering innovation, skill-building, and collaboration. More than a competition,
                        it celebrates open-source development and empowers participants to make a meaningful impact.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;