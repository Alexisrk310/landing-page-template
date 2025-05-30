import type { HeroProps } from '@/interfaces/hero.Interface';
import { Phone } from 'lucide-react';

const colorClasses = {
	teal: {
		text: 'text-teal-700',
		border: 'border-teal-700',
		bg: 'bg-teal-700',
		hoverBg: 'hover:bg-teal-800',
	},
	green: {
		text: 'text-green-700',
		border: 'border-green-700',
		bg: 'bg-green-700',
		hoverBg: 'hover:bg-green-800',
	},
	red: {
		text: 'text-red-700',
		border: 'border-red-700',
		bg: 'bg-red-700',
		hoverBg: 'hover:bg-red-800',
	},
} as const;

export default function Hero({
	tagline,
	title,
	description,
	highlight,
	reversed = false,
	color = 'teal',
	buttonLabel,
	imageUrl,
	phoneNumber,
}: HeroProps) {
	const current = colorClasses[color];

	const mobileDirection = reversed ? 'flex-col' : 'flex-col-reverse';
	const desktopDirection = reversed ? 'lg:flex-row-reverse' : 'lg:flex-row';

	return (
		<section className="flex items-center justify-center py-16 lg:py-32 px-6 md:px-20">
			<div
				className={`flex ${mobileDirection} ${desktopDirection} items-center gap-16 max-w-7xl mx-auto w-full`}>
				{/* Left Content */}
				<div className="flex-1">
					<span
						className={`inline-block text-sm px-4 py-1 border ${current.border} ${current.text} rounded-full mb-4`}>
						{tagline}
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 whitespace-pre-line">
						{title}
					</h1>
					<p className="text-gray-600 text-2xl mb-6 md:mt-12 max-w-xl">
						{description}
					</p>
					<p className={`${current.text} text-base font-medium mb-8`}>
						{highlight}
					</p>

					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
						<button
							className={`${current.bg} text-white px-6 py-2 rounded-full font-medium ${current.hoverBg} transition`}>
							{buttonLabel}
						</button>
						{phoneNumber && (
							<div className="flex items-center gap-3">
								<div className="bg-green-500 p-3 rounded-full text-white">
									<Phone className="w-5 h-5" />
								</div>

								<div>
									<p className="text-sm text-gray-700">Contáctanos</p>
									<p className={`text-sm font-semibold ${current.text}`}>
										{phoneNumber}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Right Image */}
				<div className="flex-1">
					<div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-lg overflow-hidden shadow-lg">
						<img
							src={imageUrl}
							alt="Hero"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
