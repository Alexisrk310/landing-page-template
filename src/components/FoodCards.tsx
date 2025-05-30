

interface FoodCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
	imageSrc,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col items-center text-center max-w-sm mx-auto">
			<div className="w-60 h-60 mb-4">
				<img
					src={imageSrc}
					alt={title}
					className="w-full h-full object-cover mask-egg"
				/>
			</div>
			<h3 className="text-xl font-semibold text-gray-800">{title}</h3>
			<p className="text-sm text-gray-600 mt-2">{description}</p>
		</div>
	);
};

export default FoodCard;
