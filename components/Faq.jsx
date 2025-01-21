import React, { useState } from "react";
import faqData from "./faqData";
import { FaPlus } from "react-icons/fa";

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAnswer = (currentIndex) => {
        setExpandedIndex(expandedIndex === currentIndex ? null : currentIndex);
    };

    return (
        <div className="bg-[#1E002E] overscroll-none w-full mb-5 pb-5">
            <div className="flex justify-center text-[24px] md:text-[30px] font-bold mb-8 pt-10 text-white tracking-tighter">
                FREQUENTLY ASKED QUESTIONS
            </div>

            {faqData.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-center items-center mb-4 px-4 md:px-0 font-semibold">
                    <div
                        className={`flex flex-col w-full max-w-[500px] rounded-xl transition-all ease-in duration-300 ${
                            expandedIndex === idx ? "shadow-[5px_5px_4px_0px_#AA249080] border-2 border-[#AA2490]" : ""
                        }`}
                    >
                        <div
                            className={`question-container flex flex-row justify-between items-center bg-[#3A333E] text-white p-4 md:p-[20px] w-full cursor-pointer transition-all ease-in-out duration-500 ${
                                expandedIndex === idx ? "rounded-t-xl" : "rounded-xl"
                            }`}
                            onClick={() => toggleAnswer(idx)}
                            aria-expanded={expandedIndex === idx}
                        >
                            <span className="text-sm md:text-base">{item.question}</span>
                            
                            <FaPlus className={`h-[10px] md:h-[12px] transition-transform duration-300 ${
                                expandedIndex === idx ? "rotate-45" : "rotate-0"
                            }`} />
                        </div>

                        <div
                            className={`answer-container transition-all duration-500 ease-in-out bg-[#44444480] text-white px-4 md:px-[20px] w-full text-sm md:text-base overflow-hidden ${
                                expandedIndex === idx ? "max-h-[200px] p-4" : "max-h-0 p-0"
                            }`}
                            style={{
                                maxHeight: expandedIndex === idx ? "200px" : "0",
                            }}
                        >
                            {expandedIndex === idx && <div>{item.answer}</div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
