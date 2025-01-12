import React from 'react'

const Prizes = () => {
    return (
        <div className='bg-[#1E002E]'>
            <div>
            <div className='flex justify-center relative text-[60px] sm:text-[120px] md:text-[180px] lg:text-[280px] tracking-tight font-extrabold text-[#6B5E77]'>
                PRIZES
                <div className='flex justify-center absolute text-[30px] sm:text-[60px] md:text-[100px] lg:text-[140px] bottom-0 font-extrabold text-[#FCF961]'>
                    PRIZES
                </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-center items-center mt-16 lg:mt-[70px] gap-10'>

                <div className='flex flex-col items-center mt-[80px] sm:mt-[150px] md:mt-[220px] relative'>
                    <div className='absolute top-[-40px] sm:top-[-60px] lg:top-[-80px] left-1/2 transform -translate-x-1/2'>
                        <div className='relative'>
                            <img
                                className='absolute top-[-80px] sm:top-[-120px] lg:top-[-160px] left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[200px] lg:w-[250px]'
                                src='blue.png'/>
                        </div>
                        <div className='w-[200px] sm:w-[300px] lg:w-[414px]
                            border-l-[30px] sm:border-l-[50px] lg:border-l-[75px] border-l-transparent
                            border-r-[30px] sm:border-r-[50px] lg:border-r-[75px] border-r-transparent
                            border-b-[40px] sm:border-b-[60px] lg:border-b-[80px] border-b-[#406E7D]'>
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-[#ADD8E6] w-[200px] sm:w-[300px] lg:w-[414px]
                    h-auto lg:h-[378px] justify-between py-[20px] sm:py-[40px] lg:py-[54px]'>
                        <div className='text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold'>
                            Second Prize
                        </div>
                        <div className='flex flex-col items-center text-[14px] sm:text-[18px] lg:text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>
                                Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[16px] font-semibold'>KNOW MORE</div>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-[120px] sm:mt-[150px] md:mt-[200px] relative'>
                    <div className='absolute top-[-40px] sm:top-[-60px] lg:top-[-80px] left-1/2 transform -translate-x-1/2'>
                        <div className='relative'>
                            <img
                            className='absolute  top-[-80px] sm:top-[-120px] lg:top-[-160px] left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[200px] lg:w-[250px]'
                            src='yellow.png'/>
                        </div>
                        <div className='w-[200px] sm:w-[300px] lg:w-[414px]
                        border-l-[30px] sm:border-l-[50px] lg:border-l-[75px] border-l-transparent
                        border-r-[30px] sm:border-r-[50px] lg:border-r-[75px] border-r-transparent
                        border-b-[40px] sm:border-b-[60px] lg:border-b-[80px] border-b-[#926200]'>
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-[#FFD580] w-[200px] sm:w-[300px] lg:w-[414px] h-auto lg:h-[544px] justify-between  mt-0 mb-[80px] py-[20px] sm:py-[30px] lg:py-[33px]'>
                        <div className='text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold'>First Prize</div>
                        <div className='flex flex-col items-center text-[14px] sm:text-[18px] lg:text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[12px] sm:text-[14px] lg:text-[16px] font-semibold'>KNOW MORE</div>
                    </div>
                </div>


                <div className='flex flex-col items-center  mt-[40px] sm:mt-[150px] md:mt-[220px]  relative'>
                    <div className='absolute top-[-40px] sm:top-[-60px] lg:top-[-80px] left-1/2 transform -translate-x-1/2'>
                        <div className='relative'>
                            <img
                                className='absolute top-[-80px] sm:top-[-120px] lg:top-[-160px] left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[200px] lg:w-[250px]'
                                src='pink.png'/>
                        </div>
                        <div className='w-[200px]
                        sm:w-[300px] lg:w-[414px]
                        border-l-[30px] sm:border-l-[50px] lg:border-l-[75px] border-l-transparent
                        border-r-[30px] sm:border-r-[50px] lg:border-r-[75px] border-r-transparent
                        border-b-[40px] sm:border-b-[60px] lg:border-b-[80px] border-b-[#953E3E]'>
                        </div>
                    </div>
                    <div className='flex flex-col items-center bg-[#FF7F7F] w-[200px] sm:w-[300px] lg:w-[414px] h-auto lg:h-[335px] justify-between py-[20px] sm:py-[30px] lg:py-[33px]'>
                        <div className='text-[20px] sm:text-[24px] lg:text-[32px] font-extrabold'>
                            Third Prize</div>
                        <div className='flex flex-col items-center text-[14px] sm:text-[18px] lg:text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[12px] sm:text-[14px] lg:text-[16px]  font-semibold'>KNOW MORE</div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Prizes