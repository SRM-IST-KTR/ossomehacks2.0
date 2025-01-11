import React, { useRef, useEffect, useState } from "react";

const Tracks = () => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      setRotation(prev => prev + (delta / 10));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex justify-center items-center min-h-screen bg-[#1E002E]"
    >
      <div className="relative w-[200px] h-[300px] [perspective:1500px] mt-[200px] sm:scale-[0.4] md:scale-[0.6] lg:scale-[1.0] scale-[0.4]">
        <div 
          className="absolute w-full h-full [transform-style:preserve-3d]"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(0deg) translateZ(350px)`,
            }}
          >
            <img
              src="./oi.png"
              alt="oi"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(60deg) translateZ(350px)`,
            }}
          >
            <img
              src="/healthcare.png"
              alt="healthcare"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(120deg) translateZ(350px)`,
            }}
          >
            <img
              src="/edtech.png"
              alt="edtech"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(180deg) translateZ(350px)`,
            }}
          >
            <img
              src="/aiml.png"
              alt="aiml"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(240deg) translateZ(350px)`,
            }}
          >
            <img
              src="/agritech.png"
              alt="agritech"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full [transform-style:preserve-3d]"
            style={{
              transform: `rotateY(300deg) translateZ(350px)`,
            }}
          >
            <img
              src="/fintech.png"
              alt="fintech"
              className="w-[175px] h-[175px] object-cover transition-all duration-300 rounded-md hover:translate-y-[-5px] hover:shadow-[0_0_30px_#da8ee7]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tracks;