"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Gallery() {
  const images = [
    "/oh_images/image1.png",
    "/oh_images/image2.png",
    "/oh_images/image3.png",
    "/oh_images/image4.png",
    "/oh_images/image5.png",
    "/oh_images/image6.png",
    "/oh_images/image7.png",
    "/oh_images/image8.png",
    "/oh_images/image9.png",
    "/oh_images/image10.png",
    "/oh_images/image11.png",
    "/oh_images/image12.png",
    "/oh_images/image13.png",
    "/oh_images/image14.png",
    "/oh_images/image15.png",
    "/oh_images/image16.png",
    "/oh_images/image17.png",
    "/oh_images/image18.png",
    "/oh_images/image19.png",
    "/oh_images/image20.png",
    "/oh_images/image21.png",
  ];

  // Split images into two rows
  const firstRowImages = images.slice(0, Math.ceil(images.length / 2));
  const secondRowImages = images.slice(Math.ceil(images.length / 2));

  return (
    <>
      <div className="flex justify-center relative text-[60px] sm:text-[120px] md:text-[180px] xl:text-[280px] tracking-tight font-extrabold text-[#6B5E77] mb-[80px]">
        GLIMPSE
        <div className="flex justify-center absolute text-[30px] sm:text-[60px] md:text-[100px] xl:text-[140px] bottom-0 font-extrabold text-[#FCF961]">
        GLIMPSE
        </div>
      </div>
      <div className="space-y-10">
        {/* First Row */}
        <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={firstRowImages} direction="right" speed="normal" />
        </div>

        {/* Second Row */}
        <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={secondRowImages} direction="left" speed="normal" />
        </div>
      </div>
    </>
  );
}