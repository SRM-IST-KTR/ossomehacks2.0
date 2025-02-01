import React, { useState } from "react";
import faqData from "./faqData";

const Faq = () => {
    const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

    const handleToggleAnswer = (index) => {
        setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
    };

    return (
        <div className="bg-[#1E002E] overscroll-none w-full mb-5 pb-5">
            <div id="faqheader" className="flex justify-center text-[24px] md:text-[30px] font-bold mb-8 pt-10 text-white tracking-tighter">
                FREQUENTLY ASKED QUESTIONS
            </div>

            {faqData.map((faq, index) => (
                <div key={index} className="flex flex-col justify-center items-center mb-4 px-4 md:px-0">
                    <div
                        className={`flex flex-col w-full max-w-[500px] rounded-xl transition-all ease-in duration-300 ${
                            visibleAnswerIndex === index ? "shadow-[5px_5px_4px_0px_#AA249080] border-2 border-[#AA2490]" : ""
                        }`}
                    >
                        <div
                            className={`questiondiv flex flex-row justify-between items-center bg-[#3A333E] text-white p-4 md:p-[20px] w-full cursor-pointer transition-all ease-in duration-300 ${
                                visibleAnswerIndex === index ? "rounded-t-xl" : "rounded-xl"
                            }`}
                            onClick={() => handleToggleAnswer(index)}
                            aria-expanded={visibleAnswerIndex === index}
                        >
                            <span className="text-sm md:text-base">{faq.question}</span>
                            <img
                                src="plus_icon.png"
                                alt="Toggle FAQ"
                                className={`h-[10px] md:h-[12px] transition-transform ease-in duration-300 ${
                                    visibleAnswerIndex === index ? "rotate-45" : ""
                                }`}
                            />
                        </div>
                        {visibleAnswerIndex === index && (
                            <div className="answerdiv bg-[#44444480] text-white p-4 md:p-[20px] w-full rounded-b-xl transition-all ease-in duration-300 text-sm md:text-base">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
