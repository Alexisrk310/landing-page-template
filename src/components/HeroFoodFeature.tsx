import { Utensils } from "lucide-react";

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
	buttonText ,
	reversed = true,
	classNameImg = '',
	onClick,
}) => {
	return (
		<section className="flex items-center justify-center py-14 px-6 md:px-16 rounded-3xl">
			<div
				className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl w-full mx-auto ${
					reversed ? 'lg:flex-row-reverse' : ''
				}`}>
				
				{/* Imagen */}
				<div className="w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
					<img
						src={image}
						alt={title}
						className={`object-cover w-full h-[300px] sm:h-[400px] ${classNameImg}`}
					/>
				</div>

				{/* Texto */}
				<div className="text-center lg:text-left max-w-xl space-y-6">
					<h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 drop-shadow-sm">
						{title}
					</h2>
					<p className="text-lg md:text-xl text-gray-700">{description}</p>
					{additionalText && (
						<p className="text-md md:text-lg text-gray-600">{additionalText}</p>
					)}

					{/* Botón con ícono de Lucide */}
					<button
						onClick={onClick}
						className={`inline-flex items-center gap-2 ${
							reversed
								? 'bg-teal-700 hover:bg-teal-800'
								: 'bg-red-600 hover:bg-red-700'
						} text-white text-lg font-semibold py-2.5 px-6 rounded-full shadow-md transition duration-300`}>
						<Utensils className="w-5 h-5" />
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroFoodFeature;
