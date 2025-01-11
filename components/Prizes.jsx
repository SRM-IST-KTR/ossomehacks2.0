import React from 'react'

const Prizes = () => {
    return (
        <div className='bg-[#1E002E]'>
            <div>
            <div className='flex justify-center relative text-[280px] font-extrabold text-[#6B5E77]'>
                PRIZES
                <div className='flex justify-center absolute text-[140px] bottom-0 font-extrabold text-[#FCF961]'>PRIZES</div>
            </div>

            <div className='flex lg:flex-row flex-col justify-center align-bottom items-end mt-[300px]'>
                <div className='flex flex-col'>
                    <div className='relative'>
                        <img className='absolute top-[-220px] left-1/2 transform -translate-x-1/2' src='blue.png'/>
                    </div>
                    <div className='w-[414px] border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent border-b-[80px] border-b-[#406E7D]'></div>
                    <div className='flex flex-col items-center bg-[#ADD8E6] w-[414px] h-[378px] justify-between py-[54px]'>
                        <div className='text-[32px] font-extrabold'>Second Prize</div>
                        <div className='flex flex-col items-center text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[16px] font-semibold'>KNOW MORE</div>
                    </div>
                </div>

                <div className='flex flex-col relative'>
                    <div className='absolute top-[-80px] left-1/2 transform -translate-x-1/2'>
                    <div className='relative'>
                        <img className='absolute top-[-220px] left-1/2 transform -translate-x-1/2' src='yellow.png'/>
                    </div>
                        <div className='w-[414px] border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent border-b-[80px] border-b-[#926200]'></div>
                    </div>
                    <div className='flex flex-col items-center bg-[#FFD580] w-[414px] h-[544px] lg:mx-[32px] justify-between py-[80px]'>
                        <div className='text-[32px] font-extrabold'>First Prize</div>
                        <div className='flex flex-col items-center text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[16px] font-semibold'>KNOW MORE</div>
                    </div>
                </div>


                <div className='flex flex-col'>
                    <div className='relative'>
                        <img className='absolute top-[-220px] left-1/2 transform -translate-x-1/2' src='pink.png'/>
                    </div>
                    <div className='w-[414px] border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent border-b-[80px] border-b-[#953E3E]'></div>
                    <div className='flex flex-col items-center bg-[#FF7F7F] w-[414px] h-[335px] justify-between py-[33px]'>
                        <div className='text-[32px] font-extrabold'>Third Prize</div>
                        <div className='flex flex-col items-center text-[24px] font-medium text-[#5B5C5C]'>
                            <div>Total Prize of Worth</div>
                            <div className='font-extrabold'>10,000</div>
                            <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                        </div>
                        <div className='text-[16px] font-semibold'>KNOW MORE</div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Prizes