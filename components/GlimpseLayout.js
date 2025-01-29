"use client";

import React from "react";
import Image from "next/image";

const GlimpseLayout = () => {
  const imageGrid = [
    [1, 2, 3], // Column 1
    [4, 5], // Column 2
    [6, 7, 8], // Column 3
    [9, 10], // Column 4
    [11, 12, 13], // Column 5
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#AA2490] via-[#AAA69B] to-[#1E002E] p-4 sm:p-8">
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .carousel {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 16px;
          overflow: hidden;
          height: 600px;
          position: relative;
          flex-wrap: wrap;
        }

        .carousel-column {
          display: flex;
          flex-direction: column;
          animation: scroll-up 20s linear infinite;
        }

        .carousel-column:nth-child(2n) {
          animation: scroll-down 20s linear infinite;
        }

        .carousel-column > * {
          flex-shrink: 0;
        }

        .carousel-column-inner {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .carousel {
            gap: 8px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        <div className="relative mb-16 pt-8">
          <h1 className="text-[50px] sm:text-[100px] md:text-[150px] font-extrabold text-yellow-400/50 leading-none tracking-tight text-center">
            GLIMPSE
          </h1>
          <h1 className="text-[25px] sm:text-[60px] md:text-[80px] font-bold text-gray-800 absolute top-[65px] sm:top-[80px] md:top-[120px] left-1/2 -translate-x-1/2 leading-none">
            GLIMPSE
          </h1>
        </div>

        <div className="carousel">
          {imageGrid.map((column, colIndex) => (
            <div
              key={colIndex}
              className="carousel-column"
              style={{ animationDuration: "20s" }}
            >
              <div className="carousel-column-inner">
                {[...column, ...column, ...column, ...column].map((index, i) => (
                  <div key={`${index}-${i}`} className="w-[160px] h-[180px] mb-4">
                    <Image
                      src={`/images/image${index}.png`}
                      alt={`Image ${index}`}
                      width={160}
                      height={180}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blur effect at corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-black/50 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-black/50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/50 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default GlimpseLayout;
