import React, { useState, useEffect } from "react";

const Tracks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    { id: 1, src: "/oi.png", alt: "OI", href: "/oi" },
    { id: 2, src: "/healthcare.png", alt: "Healthcare", href: "/healthcare" },
    { id: 3, src: "/edtech.png", alt: "Edtech", href: "/edtech" },
    { id: 4, src: "/aiml.png", alt: "AI/ML", href: "/aiml" },
    { id: 5, src: "/agritech.png", alt: "Agritech", href: "/agritech" },
    { id: 6, src: "/fintech.png", alt: "Fintech", href: "/fintech" }
  ];

  const handleClick = (e) => {
    if (isAnimating) return;

    const { clientX, target } = e;
    const container = target.closest('.carousel-container');
    if (!container) return;

    const { left, width } = container.getBoundingClientRect();
    const mouseX = clientX - left;

    if (mouseX < width / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const totalItems = items.length;
    const visibleItems = [];

    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + totalItems) % totalItems;
      visibleItems.push({
        ...items[index],
        position: i
      });
    }
    return visibleItems;
  };

  const getTransformStyles = (position) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

    let baseTranslateX, baseRotation;

    if (screenWidth <= 640) { // Mobile
      baseTranslateX = 140;
      baseRotation = 25;
    } else if (screenWidth <= 1024) { // Tablet
      baseTranslateX = 260;
      baseRotation = 30;
    } else { // Desktop
      baseTranslateX = 340;
      baseRotation = 35;
    }

    const translateX = position * baseTranslateX;
    const rotation = position * baseRotation;
    const scale = 1 - (Math.abs(position) * 0.1);

    return {
      transform: `
        perspective(1500px)
        translateX(${translateX}px)
        rotateY(${rotation}deg)
        scale(${scale})
      `,
      zIndex: 5 - Math.abs(position),
      opacity: 1 - (Math.abs(position) * 0.1),
      visibility: 'visible',
      transition: 'all 500ms ease-out',
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div 
      className="relative min-h-screen bg-[#1E002E] flex items-center justify-center overflow-hidden cursor-pointer carousel-container"
      onClick={handleClick}
    >
      <div className="relative w-full max-w-[90vw] lg:max-w-[1600px]">
        <div className="relative flex justify-center items-center w-full h-[60vh] max-h-[600px]">
          {getVisibleItems().map(({ id, src, alt, href, position }) => {
            const styles = getTransformStyles(position);

            return (
              <a
                key={id}
                href={href}
                onClick={(e) => e.preventDefault()}
                className="absolute transform-gpu"
                style={{
                  ...styles,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className={` 
                  relative
                  w-[140px] h-[140px] 
                  sm:w-[180px] sm:h-[180px] 
                  md:w-[220px] md:h-[220px] 
                  lg:w-[260px] lg:h-[260px] 
                  transition-all duration-500 
                  ${position === 0 ? 'hover:shadow-[0_0_30px_#da8ee7]' : ''} 
                `}>
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    draggable="false"
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tracks;