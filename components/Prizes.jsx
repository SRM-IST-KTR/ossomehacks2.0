import React, { useState, useRef } from 'react';

const Prizes = () => {
	const handleScrollToFaqs = () => {
		const faqstart = document.querySelector('#faqheader');
		if (faqstart) {
			faqstart.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error('Element #faqheader not found in the DOM.');
		}
	};

	return (
		<div className="bg-[#1E002E]">
			<div className="flex justify-center relative text-[60px] sm:text-[120px] md:text-[180px] xl:text-[280px] tracking-tight font-extrabold text-[#6B5E77] mb-[80px]">
				PRIZES
				<div className="flex justify-center absolute text-[30px] sm:text-[60px] md:text-[100px] xl:text-[140px] bottom-0 font-extrabold text-[#FCF961]">
					PRIZES
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-[120px] items-center lg:justify-center">
				<div className="group flex flex-col items-center justify-between h-[344px] w-[295px] bg-white cursor-pointer pb-[30px] pt-[70px] rounded-xl relative hover:translate-y-[-30px] transition-all">
					<div className="absolute top-[-65px]">
						<img
							src="/second.png"
							alt="Rotating Image"
							className="w-32 h-auto group-hover:animate-spin"
							style={{
								animationDuration: '3s',
								animationTimingFunction: 'linear',
							}}
						/>
					</div>
					<div className="text-[24px] font-extrabold">
						Second Prize
					</div>
					<div className="flex flex-col items-center text-[16px] font-medium text-[#5B5C5C]">
						<div>Total Prize of Worth</div>
						<div className="font-extrabold">10,000</div>
						<div>
							Cash Prize of{' '}
							<span className="font-extrabold">INR 500</span>
						</div>
					</div>
					<div
						onClick={handleScrollToFaqs}
						className="text-[16px] font-semibold hover:text-blue-700 transition-all">
						KNOW MORE
					</div>
				</div>
				<div className="group flex flex-col items-center justify-between h-[344px] w-[295px] bg-white cursor-pointer pb-[30px] pt-[70px] rounded-xl relative hover:translate-y-[-30px] transition-all">
					<div className="absolute top-[-65px]">
						<img
							src="/first.png"
							alt="Rotating Image"
							className="w-32 h-auto group-hover:animate-spin"
							style={{
								animationDuration: '3s',
								animationTimingFunction: 'linear',
							}}
						/>
					</div>
					<div className="text-[24px] font-extrabold">
						First Prize
					</div>
					<div className="flex flex-col items-center text-[16px] font-medium text-[#5B5C5C]">
						<div>Total Prize of Worth</div>
						<div className="font-extrabold">10,000</div>
						<div>
							Cash Prize of{' '}
							<span className="font-extrabold">INR 500</span>
						</div>
					</div>
					<div
						onClick={handleScrollToFaqs}
						className="text-[16px] font-semibold hover:text-blue-700 transition-all">
						KNOW MORE
					</div>
				</div>

				<div className="group flex flex-col items-center justify-between h-[344px] w-[295px] bg-white cursor-pointer pb-[30px] pt-[70px] rounded-xl relative hover:translate-y-[-30px] transition-all">
					<div className="absolute top-[-65px]">
						<img
							src="/third.png"
							alt="Rotating Image"
							className="w-32 h-auto group-hover:animate-spin"
							style={{
								animationDuration: '3s',
								animationTimingFunction: 'linear',
							}}
						/>
					</div>
					<div className="text-[24px] font-extrabold">
						Third Prize
					</div>
					<div className="flex flex-col items-center text-[16px] font-medium text-[#5B5C5C]">
						<div>Total Prize of Worth</div>
						<div className="font-extrabold">10,000</div>
						<div>
							Cash Prize of{' '}
							<span className="font-extrabold">INR 500</span>
						</div>
					</div>
					<div
						onClick={handleScrollToFaqs}
						className="text-[16px] font-semibold hover:text-blue-700 transition-all">
						KNOW MORE
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prizes;
