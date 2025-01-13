import React, { useState } from 'react';
import Image from 'next/image';

const Schedule = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#1E002E] w-full min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Schedule Header */}
      <div className="text-center text-[#6B5E77] text-[280px] font-extrabold opacity-[0.67] leading-[260.72px] tracking-[-0.09em] font-raleway">
        SCHEDULE
        <div className="text-[#FCF961] text-[180px] font-extrabold -mt-6 leading-[0.36px] tracking-[-0.07em] ">
          SCHEDULE
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2 translate-y-1/2 w-full flex justify-center items-center my-20">
        <img
          src="/yellowsnake.png"
          alt="Design Line"
          className="transform scale-[1.01] object-contain"
          style={{
            width: 'auto',
            height: '600px',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>

      {/* Event Cards */}
      <div className="relative flex-grow flex flex-col w-full my-28 px-20 ">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? 'justify-start overflow-y-hidden -my-2 px-60' : 'justify-end py-3 px-60'
            } w-full`}
          >
            <div
              className={`bg-[#FECCFE] group hover:bg-[#660066] p-4 rounded-2xl flex items-center text-white text-lg space-x-3 ${
                index % 2 === 0 ? 'mr-20' : 'ml-20'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex space-x-6 space-y-2">
                <div className="relative w-180 h-100 bg-[#660066] group-hover:bg-[#FECCFE] text-justify text-center p-4 rounded-2xl flex items-center text-white text-lg space-x-3">
                  <div className="relative w-10 h-10">
                    <img
                      src={hoveredIndex === index ? '/purpletime.png' : '/yellowtime.png'}
                      alt="Event Icon"
                      layout="fill"
                      className="rounded-full h-10 w-10"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[#000000] font-bold">01 January 2024</div>
                  <div className="text-[#5B5C5C] font bold">02:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
