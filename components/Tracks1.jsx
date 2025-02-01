import React from "react";
import { HoverEffect } from "./ui/hoverEffect";

const Tracks1 = () => {
    const trackItems = [
        { id: 1, src: "/tracks/EdTech.png", alt: "Ed Tech", href: "/edtech" },
        { id: 2, src: "/tracks/health.png", alt: "Healthcare", href: "/healthcare" },
        { id: 3, src: "/tracks/Fintech.png", alt: "Fintech", href: "/fintech" },
        { id: 4, src: "/tracks/Agritech.png", alt: "Agritech", href: "/agritech" },
        { id: 5, src: "/tracks/Web3.png", alt: "Web3 and Crypto", href: "/web3" },
        { id: 6, src: "/tracks/OpenInno.png", alt: "Open Innovation", href: "/open-innovation" },
    ];

    return (
        <div
            id="tracks"
            className="bg-[#1e002e] min-h-screen py-20">
            {/* Section Title */}
            <div className="flex justify-center relative text-[60px] sm:text-[120px] md:text-[160px] xl:text-[280px] font-extrabold text-[#6B5E77] md:pl-20 md:pr-20">
                DOMAINS
                <div className="absolute bottom-0 text-[30px] sm:text-[60px] md:text-[90px] xl:text-[140px] font-extrabold text-[#FCF961]">
                    DOMAINS
                </div>
            </div>

            {/* Card Hover Effect Section */}
            <div className="max-w-6xl mx-auto px-6">
                <HoverEffect items={trackItems} />
            </div>
        </div>
    );
};

export default Tracks1;