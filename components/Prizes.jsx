import React from 'react'

const Prizes = () => {
    return (
        <div>
            <div className='bg-[#1E002E]'>
            <div className='flex justify-center relative text-[280px] font-extrabold text-[#6B5E77]'>
                PRIZES
                <div className='flex justify-center absolute text-[140px] bottom-0 font-extrabold text-[#FCF961]'>PRIZES</div>
            </div>

            <div className='flex flex-row justify-center align-bottom items-end'>
                <div className='flex flex-col items-center bg-[#ADD8E6] w-[414px] h-[378px] justify-between py-[54px]'>
                    <div className='text-[32px] font-extrabold'>Second Prize</div>
                    <div className='flex flex-col items-center text-[24px] font-medium'>
                        <div>Total Prize of Worth</div>
                        <div className='font-extrabold'>10,000</div>
                        <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                    </div>
                    <div className='text-[16px] font-semibold'>KNOW MORE</div>
                </div>

                <div className='flex flex-col items-center bg-[#FFD580] w-[414px] h-[544px] mx-[32px] justify-between py-[80px]'>
                    <div className='text-[32px] font-extrabold'>First Prize</div>
                    <div className='flex flex-col items-center text-[24px] font-medium'>
                        <div>Total Prize of Worth</div>
                        <div className='font-extrabold'>10,000</div>
                        <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                    </div>
                    <div className='text-[16px] font-semibold'>KNOW MORE</div>
                </div>

                <div className='flex flex-col items-center bg-[#FF7F7F] w-[414px] h-[335px] justify-between py-[33px]'>
                    <div className='text-[32px] font-extrabold'>First Prize</div>
                    <div className='flex flex-col items-center text-[24px] font-medium'>
                        <div>Total Prize of Worth</div>
                        <div className='font-extrabold'>10,000</div>
                        <div>Cash Prize of <span className='font-extrabold'>INR 500</span></div>
                    </div>
                    <div className='text-[16px] font-semibold'>KNOW MORE</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Prizes