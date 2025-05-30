import FoodCard from '@/components/FoodCards';
import HeroFoodFeature from '@/components/HeroFoodFeature';
import Hero from '@/components/Hero';
import ImageFullScreen from '@/components/ImageFullScreen';
import CustomerReviews from '@/components/CustomerReviews ';

export const foodItems = [
	{
		imageSrc:
			'https://www.okchicas.com/wp-content/uploads/2016/02/10-recetas-de-cocina-ligera-y-saludable-1.jpg',
		title: 'Pizza',
		description:
			'Pizza is a beloved Italian dish known for its crispy crust, melted cheese, and a variety of toppings.',
	},
	{
		imageSrc:
			'https://www.okchicas.com/wp-content/uploads/2016/02/10-recetas-de-cocina-ligera-y-saludable-1.jpg',
		title: 'Pasta & Spaghetti',
		description:
			'Pasta is a staple of Italian cuisine, with a rich history dating back centuries. It comes in various shapes and sizes.',
	},
	{
		imageSrc:
			'https://www.okchicas.com/wp-content/uploads/2016/02/10-recetas-de-cocina-ligera-y-saludable-1.jpg',
		title: 'Grilled Chicken',
		description:
			'Grilled chicken served with fresh vegetables and a savory sauce. A healthy and delicious option.',
	},
];

const foodFeatures = [
	{
		title: 'Pizza',
		description:
			'La pizza es uno de los platos más populares del mundo, con orígenes en Italia. Ya sea de pepperoni, margarita o hawaiana, sus sabores conquistan todos los paladares.',
		additionalText:
			'Ideal para compartir en reuniones familiares o con amigos, la pizza se ha convertido en un símbolo de celebración y disfrute.',
		image: '/foods/pizza.png',
		buttonText: 'Ver menú',
		onClick: () => alert('Navegando al menú de pizzas...'),
	},
	{
		title: 'Hamburguesas',
		description:
			'Las hamburguesas son un ícono de la comida rápida. Combinan carne jugosa, pan tostado y una variedad de ingredientes frescos.',
		additionalText:
			'Desde las clásicas con queso hasta opciones con tocineta, huevo o incluso vegetarianas, las hamburguesas son perfectas para cualquier antojo.',
		image: '/foods/hamburg.png',
		buttonText: 'Ver menú',
		onClick: () => alert('Navegando al menú de hamburguesas...'),
	},
	{
		title: 'Picadas',
		description:
			'Las picadas colombianas son una mezcla deliciosa de carnes, papas criollas, chorizo, arepas y otras delicias tradicionales.',
		additionalText:
			'Perfectas para compartir en grupo, cada bocado ofrece una explosión de sabor típico de nuestra gastronomía.',
		image: '/foods/picada.png',
		buttonText: 'Ver menú',
		onClick: () => alert('Navegando al menú de picadas...'),
	},
	{
		title: 'Salchipapas',
		description:
			'Las salchipapas son una popular comida callejera que mezcla papas fritas crujientes con salchichas cortadas en rodajas.',
		additionalText:
			'Frecuentemente acompañadas de salsas como mayonesa, kétchup, ají o salsa tártara, son una explosión de sabor económico y delicioso.',
		image: '/foods/salchipapa.png',
		buttonText: 'Ver menú',
		onClick: () => alert('Navegando al menú de salchipapas...'),
	},
];

const HomePage = () => {
	return (
		<>
			<Hero
				tagline="Bienvenid@"
				title={`Comida Rapida\nHecha al instante\nPregunta por la tuya`}
				description="La mejor comida rapida de la ciudad, hecha al instante y con los mejores ingredientes."
				highlight="✓ También hacemos delivery"
				buttonLabel="Cotiza tu pedido"
				imageUrl="/logo.png"
				phoneNumber="(303) 654-937"
			/>
			<ImageFullScreen image="/restaurant/restaurant-01.png" />
			<div className="my-20">
				<h2 className="text-3xl font-bold text-center">
					¡Descubre nuestros deliciosos platos!
				</h2>
				<p className="text-center text-gray-600 mt-4">
					Explora nuestra variedad de opciones y elige tu favorita.
				</p>
				<div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
					{foodItems.map((item, index) => (
						<FoodCard
							key={index}
							imageSrc={item.imageSrc}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>
			{foodFeatures.map((feature, index) => (
				<div className="my-10">
					<HeroFoodFeature
						key={feature.title + index}
						{...feature}
						reversed={index % 2 === 1}
					/>
				</div>
			))}
			<Hero
				tagline="Mira lo que tenemos para ti"
				title={`Plato de la semana\n¡No te lo pierdas!`}
				description="El plato de la semana es una deliciosa opción que no puedes dejar pasar. ¡Ven y pruébalo!"
				color="red"
				highlight="✓ Está disponible solo por tiempo limitado"
				buttonLabel="Probar ahora"
				imageUrl="/foodOfTheWeek/picada.png"
				reversed={true}
			/>
			<CustomerReviews />
		</>
	);
};

export default HomePage;
