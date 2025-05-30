import { useState, useEffect } from 'react';

const CustomerReviews = () => {
	const reviews = [
		{
			id: 1,
			text: '¡La comida estuvo increíble! Me encantó el ambiente y el servicio fue excelente.',
			author: 'Mario Pérez',
		},
		{
			id: 2,
			text: 'Un lugar fantástico para cenar. Cada plato es una delicia y el personal es muy amable.',
			author: 'Maria García',
		},
		{
			id: 3,
			text: 'Volveré sin duda. La calidad de los ingredientes es sobresaliente y el sabor inigualable.',
			author: 'Diego López',
		},
		{
			id: 4,
			text: 'Experiencia culinaria excepcional. Recomiendo encarecidamente probar sus especialidades.',
			author: 'Alejandra Martínez',
		},
		{
			id: 5,
			text: 'Volveré sin duda. La calidad de los ingredientes es sobresaliente y el sabor inigualable.',
			author: 'Héctor Sánchez',
		},
		{
			id: 6,
			text: 'Experiencia culinaria excepcional. Recomiendo encarecidamente probar sus especialidades.',
			author: 'Lucía Fernández',
		},
	];

	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

	// Función para pasar a la siguiente opinión
	const goToNextReview = () => {
		setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
	};

	// Función para pasar a la opinión anterior
	const goToPreviousReview = () => {
		setCurrentReviewIndex(
			(prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
		);
	};

	// Función para ir a una opinión específica por índice
	const goToReview = (index: any) => {
		setCurrentReviewIndex(index);
	};

	// Efecto para el carrusel automático
	useEffect(() => {
		const interval = setInterval(goToNextReview, 5000); // Cambia cada 5 segundos
		return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
	}, [currentReviewIndex]); // Dependencia: re-ejecuta el efecto cuando cambia el índice

	const currentReview = reviews[currentReviewIndex];

	return (
		<section className="bg-green-100 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
			{/* Ondas decorativas (background waves) */}
			{/* Puedes ajustar los SVG y los colores para que coincidan con tu diseño */}

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Lo que dicen nuestros clientes...
					</h2>
					<p className="text-gray-600 max-w-xl mx-auto">
						No te quedes solo con nuestra palabra. Lee lo que nuestros clientes
						tienen que decir sobre su experiencia gastronómica en nuestro local.
					</p>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center gap-10">
					{/* Círculos de imágenes de clientes */}
					<div className="relative w-72 h-72 flex-shrink-0">
						{/* Imagen principal de la persona con audífonos */}
						<img
							src="/logo.png" // Placeholder para la imagen principal
							alt="Cliente principal"
							className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
						/>
						{/* Pequeñas imágenes alrededor */}
						<div className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
							<img
								src="https://alexandracriollo.com/wp-content/uploads/2020/12/10-cosas-que-revela-tu-foto-de-perfil-2-1.jpg"
								alt="Cliente 1"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
						<div className="absolute top-12 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
							<img
								src="https://alexandracriollo.com/wp-content/uploads/2020/12/10-cosas-que-revela-tu-foto-de-perfil-2-1.jpg"
								alt="Cliente 2"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
						<div className="absolute bottom-8 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
							<img
								src="https://alexandracriollo.com/wp-content/uploads/2020/12/10-cosas-que-revela-tu-foto-de-perfil-2-1.jpg"
								alt="Cliente 3"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
						<div className="absolute bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
							<img
								src="https://alexandracriollo.com/wp-content/uploads/2020/12/10-cosas-que-revela-tu-foto-de-perfil-2-1.jpg"
								alt="Cliente 4"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
					</div>

					{/* Contenedor de la opinión del cliente */}
					<div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative min-h-[180px] flex flex-col justify-between">
						<p className="text-gray-700 italic text-lg leading-relaxed mb-4 p-5">
							"{currentReview.text}"
						</p>
						<p className="text-red-500 font-semibold text-right">
							- {currentReview.author}
						</p>

						{/* Puntos de navegación */}
						<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
							{reviews.map((_, index) => (
								<button
									key={index}
									onClick={() => goToReview(index)}
									className={`w-3 h-3 rounded-full ${
										index === currentReviewIndex ? 'bg-red-500' : 'bg-gray-300'
									} transition-colors duration-300 focus:outline-none`}
									aria-label={`Go to review ${index + 1}`}></button>
							))}
						</div>

						{/* Botones de navegación (flechas) */}
						<button
							onClick={goToPreviousReview}
							className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-red-500 rounded-full shadow-md p-2 hover:bg-red-100 focus:outline-none"
							aria-label="Previous review">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 19l-7-7 7-7"></path>
							</svg>
						</button>
						<button
							onClick={goToNextReview}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-red-500 rounded-full shadow-md p-2 hover:bg-red-100 focus:outline-none"
							aria-label="Next review">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomerReviews;
