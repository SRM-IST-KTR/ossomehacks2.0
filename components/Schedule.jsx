import { useState } from "react";
import Image from "next/image";
import spiral2 from "@/public/spiral.png";
import clock from "@/public/clock.png";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../components/ui/animated-modal.jsx";
import { motion } from "framer-motion";

const Schedule = () => {

    return (
        <>
            <div className="bg-[#1E002E] w-full relative overflow-hidden pb-16">

                <div className="relative z-10 text-center pt-10">
                    <p className="text-[#6B5E77] lg:text-[250px] md:text-[150px] text-[75px] -ml-2 font-raleway font-extrabold -tracking-wider">
                        SCHEDULE
                    </p>
                    <p className="text-[#FCF961] lg:text-[140px] md:text-[80px] text-[42px] font-raleway font-extrabold -tracking-wider lg:ml-5 lg:-mt-[12%] -mt-[15%]">
                        SCHEDULE
                    </p>
                </div>


                <div className="relative w-full flex justify-center">
                    <Image
                        src={spiral2}
                        className="absolute top-0 left-1/2 transform md:mt-6 mt-2 -translate-x-1/2 lg:w-[160px] lg:h-[746px] md:w-[140px] md:h-[650px] w-[85px] h-[425px] "
                        priority
                    />
                </div>



                <div className="flex pt-7 md:pt-12 lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-2 md:px-6 md:py-[10px] lg:px-4 lg:py-3  " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px]  md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        5th February 2025
                                    </span>
                                   {/* <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p> */} 
                                </div>
                            </div>
                            <div className="-translate-x-64 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                Registration Start
                            </div>
                        </ModalTrigger>

                    </Modal>

                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>


                </div>


                <div className="flex pt-[30px] md:pt-[58px] lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">

                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-2 md:px-6 md:py-[10px] lg:px-5 lg:py-3  " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px]  md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        6th March 2025
                                    </span>
                                  {/*   <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p> */}
                                </div>
                            </div>
                            <div className="-translate-x-64 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                Registration Close
                            </div>
                        </ModalTrigger>

                    </Modal>
                </div>



                <div className="flex pt-[30px] md:pt-[58px] lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-2 md:px-6 md:py-[10px] lg:px-5 lg:py-3  " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px]  md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        8th March 2025
                                    </span>
                                   {/*  <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p>  */}
                                </div>
                            </div>
                            <div className="-translate-x-64 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                RSVP
                            </div>
                        </ModalTrigger>

                    </Modal>

                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>


                </div>



                <div className="flex pt-[30px] md:pt-[58px] lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">

                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-2 md:px-6 md:py-[10px] lg:px-5 lg:py-3  " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px]  md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        10th March 2025
                                    </span>
                                   {/* <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p> */}
                                </div>
                            </div>
                            <div className="-translate-x-64 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                Hackathon Starts
                            </div>
                        </ModalTrigger>

                    </Modal>




                </div>



                <div className="flex pt-[30px] md:pt-[58px] lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-2 md:px-6 md:py-[10px] lg:px-5 lg:py-3 " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px] md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        11th March 2025
                                    </span>
                                  {/*   <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p> */}
                                </div>
                            </div>
                            <div className="-translate-x-64 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                Hackathon Ends
                            </div>
                        </ModalTrigger>

                    </Modal>

                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>


                </div>


{/* 
                <div className="flex pt-10 md:pt-16 lg:pt-16 items-center justify-center gap-[40%]  lg:gap-[30%]  ">


                    <div className="bg-transparent w-2 md:w-5 lg:w-20">

                    </div>
                    <Modal>
                        <ModalTrigger className=" rounded-2xl text-nowrap flex justify-center items-center group/modal-btn relative">

                            <div className="bg-[#FECCFE] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 rounded-lg md:rounded-xl lg:rounded-2xl px-3 py-1 md:px-6 md:py-[6px] lg:px-7 lg:py-2  " >
                                <Image
                                    src={clock}
                                    className="lg:w-[40px]  md:w-[36px]  w-[20px]   transition-opacity duration-300 group-hover/modal-btn:opacity-0 bg-[#660066] p-[4px] md:p-[6px] lg:p-2 rounded-md md:rounded-lg lg:rounded-xl "
                                />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="group-hover/modal-btn:translate-x-40 font-extrabold font-raleway text-center md:text-[16px] text-[9px] lg:text-[17px] transition duration-500">
                                        01 Jan 2024
                                    </span>
                                    <p className="group-hover/modal-btn:translate-x-40 text-[#5B5C5C] font-raleway md:text-[16px] text-[9px] font-semibold text-center lg:text-[16px] transition duration-500">
                                        02:00 AM
                                    </p>
                                </div>
                            </div>
                            <div className="-translate-x-56 bg-[#1E002E] group-hover/modal-btn:translate-x-0 flex items-center font-bold text-[9px] md:text-[16px] lg:text-[18px] justify-center rounded-2xl   absolute inset-0 transition duration-500 border-2 border-[#660066] text-[#FCF961] z-20 ">
                                Registration open
                            </div>
                        </ModalTrigger>

                    </Modal>
                    
                </div>
                */}
            </div>
        </>
    );
};

export default Schedule;
