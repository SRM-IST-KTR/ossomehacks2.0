/** @format */

'use client';
import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const EvervaultCard = ({ src, alt, className }) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	const [randomString, setRandomString] = useState('');

	useEffect(() => {
		let str = generateRandomString(1500);
		setRandomString(str);
	}, []);

	function onMouseMove({ currentTarget, clientX, clientY }) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);

		const str = generateRandomString(1500);
		setRandomString(str);
	}

	return (
		<div
			className={cn(
				'p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative',
				className
			)}>
			<div
				onMouseMove={onMouseMove}
				className="group/card rounded-xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
				<CardPattern
					mouseX={mouseX}
					mouseY={mouseY}
					randomString={randomString}
				/>
				<div className="relative z-10 flex items-center justify-center">
					{/* Updated container size */}
					<div className="relative h-56 w-56 md:h-44 md:w-44 lg:h-64 lg:w-64 rounded-xl flex items-center justify-center">
						<div className="absolute w-full h-full dark:bg-black/[0.8] blur-sm rounded-full" />
						{/* Adjusted image size */}
						<img
							src={src}
							alt={alt}
							className="w-[150px] h-[150px] md:w-[90px] md:h-[90px] lg:w-[150px] lg:h-[150px] object-contain z-20"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export function CardPattern({ mouseX, mouseY, randomString }) {
	let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div className="pointer-events-none">
			<div className="absolute inset-0 rounded-2xl group-hover/card:opacity-50"></div>
			<motion.div
				className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FCF961] to-[#AA2490] opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
				style={style}
			/>
			<motion.div
				className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
				style={style}>
				<p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
					{randomString}
				</p>
			</motion.div>
		</div>
	);
}

const characters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const generateRandomString = (length) => {
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return result;
};
