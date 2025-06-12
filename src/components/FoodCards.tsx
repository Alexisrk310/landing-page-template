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
		<div className="flex flex-col items-center text-center max-w-sm mx-auto rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-stone-200">
			<img
				src={imageSrc}
				alt={title}
				className="w-full h-56 object-cover rounded-t-2xl"
			/>

			<div className="p-5 border-t border-stone-100">
				<h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
				<p className="text-sm text-stone-600">{description}</p>
			</div>
		</div>
	);
};

export default FoodCard;
