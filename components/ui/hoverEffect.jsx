/** @format */

import { cn } from '@/lib/utils';
import { EvervaultCard } from './evervault-card';
import { useState } from 'react';
import { LinkPreview } from "@/components/ui/link-preview";

export const HoverEffect = ({ items, className }) => {
	let [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2',
				className
			)}>
			{items.map((item, idx) => (
				<div
					key={item.id}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<div className="relative border rounded-2xl border-white/[0.2] dark:border-white/[0.2] p-4">
						{/* EvervaultCard with Image */}
						<EvervaultCard
							src={item.src}
							alt={item.alt}
						/>

						{/* Name Display */}
						<LinkPreview url="https://ossomehacks.devfolio.co/" className="text-center text-white mt-4 font-semibold text-2xl">
							{item.alt}
						</LinkPreview>
					</div>
				</div>
			))}
		</div>
	);
};
