import React from 'react';

interface HeroFoodFeatureProps {
	title: string;
	description: string;
	additionalText?: string;
	image: string;
	buttonText?: string;
	reversed?: boolean;
	classNameImg?: string;
	onClick?: () => void;
}

const HeroFoodFeature: React.FC<HeroFoodFeatureProps> = ({
	title,
	description,
	additionalText,
	image,
	buttonText,
	reversed = true,
	classNameImg = '',
	onClick,
}) => {
	return (
		<section className="flex items-center justify-center py-10 lg:py-10 px-6 md:px-20 bg-white">
			<div
				className={
					`flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto w-full` +
					(reversed ? ' lg:flex-row-reverse' : '')
				}>
				<div className="w-100 h-100 md:w-96 md:h-96 overflow-hidden rounded-full md:rounded-full flex-shrink-0">
					<img
						src={image}
						alt={title}
						className={`object-cover w-full h-full ${classNameImg}`}
					/>
				</div>

				<div className="max-w-xl text-center md:text-left">
					<h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
					<p className="text-2xl text-gray-700 mb-4">{description}</p>
					{additionalText && (
						<p className="text-2xl text-gray-700 mb-6">{additionalText}</p>
					)}
					<button
						onClick={onClick}
						className={`${
							reversed
								? 'bg-emerald-700 hover:bg-emerald-800'
								: 'bg-red-700 hover:bg-red-800'
						} text-white font-semibold py-2 px-6 rounded-full transition`}>
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroFoodFeature;
