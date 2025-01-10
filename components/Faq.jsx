import React, { useState } from "react";
import faqData from "./faqData";

const Faq = () => {
    const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

    const handleToggleAnswer = (index) => {
        setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
    };

    return (
        <div>
            <div className="flex justify-center text-[30px] font-bold mb-[30px]">FREQUENTLY ASKED QUESTIONS</div>   

            {faqData.map((faq, index) => (
                <div key={index} className="flex flex-col justify-center items-center mb-[10px]">
                    <div className="flex flex-col rounded-xl focus-within::shadow-[0px_0px_5px_3px_rgba(13,255,78,1)] transition-all">
                        <div className="questiondiv flex flex-row justify-between items-center bg-gray-600 text-white p-[20px] w-[500px] rounded-t-xl cursor-pointer"
                            onClick={() => handleToggleAnswer(index)}
                        >
                            <div>{faq.question}</div>
                            <div>
                                <img src="../public/plus_icon.png" className="h-[10px]"/>
                            </div>
                        </div>
                        {visibleAnswerIndex === index && (
                            <div className="answerdiv bg-gray-700 text-white p-[20px] w-[500px] rounded-b-xl">
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
