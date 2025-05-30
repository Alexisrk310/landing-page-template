const Footer = () => {
	return (
		<footer className="bg-teal-700 text-white py-10 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Logo y Descripción */}
				<div>
					<h2 className="text-2xl font-bold text-white">Rafa Express</h2>
					<p className="mt-4 text-sm text-gray-100">
						Comida rápida hecha al instante con ingredientes de calidad.
					</p>
				</div>

				{/* Enlaces rápidos */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Enlaces</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<a
								href="#"
								className="text-gray-100 hover:text-red-400 transition">
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-100 hover:text-red-400 transition">
								Menú
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-100 hover:text-red-400 transition">
								Galería
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-100 hover:text-red-400 transition">
								Contacto
							</a>
						</li>
					</ul>
				</div>

				{/* Contacto */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
					<p className="text-sm text-gray-100">
						Tel:{' '}
						<a href="tel:303654937" className="text-white font-semibold">
							(303) 654-937
						</a>
					</p>
					<p className="text-sm text-gray-100">Pide tu comida favorita</p>
					<button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
						Cotiza tu pedido
					</button>
				</div>
			</div>

			<div className="mt-10 text-center text-xs text-gray-200">
				&copy; {new Date().getFullYear()} Rafa Express. Todos los derechos
				reservados.
			</div>
		</footer>
	);
};

export default Footer;
