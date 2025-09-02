'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import {
	Minus,
	Plus,
	XCircle,
	ShoppingBag,
	Store,
	Truck,
	Trash2,
} from 'lucide-react';
import EpaycoCheckoutButton from '../components/EpaycoCheckoutButton';
import { pins } from '@/data/foods/foodsData';

interface CartItem {
	category: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

const neighborhoods = [
	{ label: 'El Laguito', value: 'El Laguito', fee: 5000 },
	{ label: 'Bocagrande', value: 'Bocagrande', fee: 6000 },
	{ label: 'Manga', value: 'Manga', fee: 7000 },
	{ label: 'Getsemaní', value: 'Getsemaní', fee: 6000 },
	{ label: 'Pie de la Popa', value: 'Pie de la Popa', fee: 5000 },
	{ label: 'Los Alpes', value: 'Los Alpes', fee: 7000 },
	{ label: 'Crespo', value: 'Crespo', fee: 6000 },
	{ label: 'Olaya', value: 'Olaya', fee: 7000 },
	{ label: 'San Fernando', value: 'San Fernando', fee: 7000 },
	{ label: 'La Castellana', value: 'La Castellana', fee: 8000 },
];

const CartPage: React.FC = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [showModal, setShowModal] = useState<'delivery' | 'pickup' | null>(
		null
	);
	const [formData, setFormData] = useState<any>(null);
	const [selectedNeighborhood, setSelectedNeighborhood] = useState<any>(null);
	const [deliveryFee, setDeliveryFee] = useState<number>(0);
	const [customerId, setCustomerId] = useState<string>('');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' });

	const findProductInPins = (name: string) => {
		for (const pin of pins) {
			const found = pin.products.find((product) => product.name === name);
			if (found) return { ...found, category: pin.title };
		}
		return null;
	};

	const validateCartItems = (storedItems: CartItem[]): CartItem[] => {
		const validItems: CartItem[] = [];
		storedItems.forEach((item) => {
			const realProduct = findProductInPins(item.name);
			if (
				realProduct &&
				realProduct.price === item.price &&
				realProduct.image === item.image &&
				realProduct.category === item.category
			) {
				validItems.push(item);
			}
		});
		return validItems;
	};

	useEffect(() => {
		const stored = localStorage.getItem('cart');
		if (stored) {
			const parsed = JSON.parse(stored);
			const validCart = validateCartItems(parsed);
			setCartItems(validCart);
			if (parsed.length !== validCart.length) {
				localStorage.setItem('cart', JSON.stringify(validCart));
			}
		}
	}, []);

	useEffect(() => {
		document.body.style.overflow = showModal ? 'hidden' : 'auto';
	}, [showModal]);

	const updateQuantity = (index: number, delta: number) => {
		const newItems = [...cartItems];
		const item = newItems[index];
		item.quantity = Math.max(1, item.quantity + delta);
		setCartItems(newItems);
		localStorage.setItem('cart', JSON.stringify(newItems));
	};

	const removeItem = (index: number) => {
		const newItems = [...cartItems];
		newItems.splice(index, 1);
		setCartItems(newItems);
		localStorage.setItem('cart', JSON.stringify(newItems));
	};

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const clearCart = () => {
		localStorage.removeItem('cart');
		setCartItems([]);
	};

	const description = cartItems
		.map((item) => `${item.category}: ${item.name} x${item.quantity}`)
		.join(', ');

	const onSubmit = async (data: any) => {
		const idPersona = localStorage.getItem('idPersona') || crypto.randomUUID();
		localStorage.setItem('idPersona', idPersona);

		const neighborhoodName = selectedNeighborhood?.label || null;
		const fee = selectedNeighborhood?.fee || 0;
		const isValidCart =
			validateCartItems(cartItems).length === cartItems.length;
		if (!isValidCart) {
			alert(
				'El carrito ha sido modificado. Verifica los productos antes de continuar.'
			);
			clearCart();
			return;
		}

		const addressPart =
			showModal === 'delivery'
				? ` | Entregar en: ${data.address}, ${neighborhoodName}`
				: ' | Recoger en tienda';

		const descriptionWithAddress = `${description}${addressPart}`;

		setFormData({
			...data,
			description: descriptionWithAddress,
			totalAmount: totalPrice + fee,
		});

		const payload = {
			customer: {
				id: idPersona,
				name: data.name,
				phone: data.phone,
				address: showModal === 'delivery' ? data.address : null,
				neighborhood: neighborhoodName,
				cedula: showModal === 'pickup' ? data.id || null : null,
			},
			cart: cartItems, // <-- asegúrate de enviar el array de productos aquí
			deliveryFee: fee,
			totalAmount: totalPrice + fee,
			description: data.description,
			type: showModal, // "pickup" o "delivery"
			status: 'pendiente',
		};

		try {
			const res = await fetch(
				'https://5a9719cb168e.ngrok-free.app/api/orders',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				}
			);
			const pedido = await res.json();
			setCustomerId(pedido.order.id);
			console.log(customerId + ' customerId');
			console.log('Pedido guardado:', pedido);
			alert('Pedido realizado con éxito ✅');
			clearCart();
			// closeModal();
		} catch (err) {
			console.error(err);
			alert('Error al guardar el pedido ❌');
		}
	};

	const closeModal = () => {
		setShowModal(null);
		setFormData(null);
		setSelectedNeighborhood(null);
		setDeliveryFee(0);
		reset();
	};
	console.log(customerId + ' customerId');

	return (
		<div className="min-h-screen px-4 py-10 max-w-4xl mx-auto">
			<div className="text-center mb-12">
				<h1 className="text-5xl font-bold mb-4 text-teal-700 drop-shadow-sm">
					Tu Carrito
				</h1>
				<div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
			</div>

			{cartItems.length === 0 ? (
				<div className="text-center py-16">
					<ShoppingBag className="mx-auto mb-6 text-slate-400" size={80} />
					<p className="text-slate-500 text-xl font-medium">
						Tu carrito está vacío
					</p>
					<p className="text-slate-400 text-sm mt-2">
						¡Agrega algunos productos deliciosos!
					</p>
				</div>
			) : (
				<div className="space-y-6">
					{cartItems.map((item, i) => (
						<div
							key={i}
							className="relative border-0 rounded-3xl p-6 shadow-lg bg-white/80 backdrop-blur-sm ">
							<button
								onClick={() => removeItem(i)}
								className="absolute top-4 right-4 text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
								aria-label="Eliminar producto">
								<XCircle size={24} />
							</button>

							<div className="flex items-center gap-6">
								<div className="relative">
									<img
										src={item.image || '/placeholder.svg'}
										alt={item.name}
										className="w-28 h-28 object-cover rounded-2xl border-2 border-teal-100 shadow-md"
									/>
									<div className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
										x{item.quantity}
									</div>
								</div>

								<div className="flex-1">
									<h2 className="text-2xl font-bold text-slate-800 mb-2">
										{item.name}
									</h2>
									<p className="text-sm text-teal-600 font-semibold mb-2 bg-teal-50 px-3 py-1 rounded-full inline-block">
										{item.category}
									</p>
									<p className="text-sm text-slate-600 mb-4">
										Precio unitario:{' '}
										<span className="font-bold text-teal-700 text-lg">
											${item.price.toLocaleString()}
										</span>
									</p>

									<div className="flex items-center gap-3 mb-4">
										<button
											onClick={() => updateQuantity(i, -1)}
											className="p-2 border-2 border-red-200 rounded-full text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200">
											<Minus size={18} />
										</button>
										<span className="font-bold text-xl px-4 py-2 bg-slate-100 rounded-full min-w-[60px] text-center">
											{item.quantity}
										</span>
										<button
											onClick={() => updateQuantity(i, 1)}
											className="p-2 border-2 border-teal-200 rounded-full text-teal-600 hover:bg-teal-50 hover:border-teal-300 transition-all duration-200">
											<Plus size={18} />
										</button>
									</div>

									<div className="p-3 rounded-xl">
										<p className="text-lg font-bold text-teal-700">
											Subtotal: ${(item.price * item.quantity).toLocaleString()}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}

					<div className=" rounded-3xl p-8">
						<div className="text-center space-y-6">
							<div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg">
								<p className="text-3xl font-bold">
									Total: ${totalPrice.toLocaleString()}
								</p>
							</div>

							<div className="flex justify-center gap-4 flex-wrap">
								<button
									className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
									onClick={() => setShowModal('pickup')}>
									<Store size={24} /> Recoger en tienda
								</button>
								<button
									className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
									onClick={() => setShowModal('delivery')}>
									<Truck size={24} /> Envío a domicilio
								</button>
							</div>

							<button
								onClick={clearCart}
								className="flex items-center justify-center gap-2 mx-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
								<Trash2 size={20} /> Vaciar carrito
							</button>
						</div>
					</div>
				</div>
			)}

			{showModal && (
				<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
					<div className="bg-white rounded-3xl p-8 w-full max-w-2xl relative shadow-2xl border border-teal-100 max-h-[90vh] overflow-y-auto">
						<button
							className="absolute top-4 right-4 text-slate-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
							onClick={closeModal}>
							<XCircle size={32} />
						</button>

						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold text-teal-700 mb-2">
								{showModal === 'delivery'
									? '🚚 Información para domicilio'
									: '🏪 Recoger en tienda'}
							</h2>
							<div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<input
									{...register('name', { required: 'Nombre requerido' })}
									placeholder="Nombre completo"
									className="border-2 border-slate-200 focus:border-teal-400 p-4 rounded-xl w-full shadow-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
								/>
								{errors.name && (
									<p className="text-red-600 text-sm mt-2 font-medium">
										{errors.name.message as string}
									</p>
								)}
							</div>
							<div>
								<input
									{...register('description')}
									placeholder="Descripción del pedido"
									className="border-2 border-slate-200 focus:border-teal-400 p-4 rounded-xl w-full shadow-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
								/>
								{errors.description && (
									<p className="text-red-600 text-sm mt-2 font-medium">
										{errors.description.message as string}
									</p>
								)}
							</div>
							<div>
								<input
									{...register('phone', { required: 'Teléfono requerido' })}
									placeholder="Teléfono"
									className="border-2 border-slate-200 focus:border-teal-400 p-4 rounded-xl w-full shadow-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
								/>
								{errors.phone && (
									<p className="text-red-600 text-sm mt-2 font-medium">
										{errors.phone.message as string}
									</p>
								)}
							</div>
							{showModal === 'delivery' ? (
								<>
									<div>
										<input
											{...register('address', {
												required: 'Dirección requerida',
											})}
											placeholder="Dirección"
											className="border-2 border-slate-200 focus:border-teal-400 p-4 rounded-xl w-full shadow-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
										/>
										{errors.address && (
											<p className="text-red-600 text-sm mt-2 font-medium">
												{errors.address.message as string}
											</p>
										)}
									</div>

									<div>
										<Select
											options={neighborhoods}
											placeholder="Selecciona un barrio"
											onChange={(selected) => {
												setSelectedNeighborhood(selected);
												setDeliveryFee(selected?.fee || 0);
											}}
											isSearchable
											classNamePrefix="react-select"
											className="w-full"
											styles={{
												control: (base, state) => ({
													...base,
													padding: '8px 12px',
													borderColor: state.isFocused ? '#14b8a6' : '#e2e8f0',
													borderWidth: '2px',
													boxShadow: 'none',
													borderRadius: '0.75rem',
													minHeight: '56px',
													backgroundColor: state.isFocused
														? '#ffffff'
														: '#f8fafc',
													transition: 'all 0.2s',
												}),
												placeholder: (base) => ({
													...base,
													color: '#94a3b8',
												}),
												option: (base, state) => ({
													...base,
													backgroundColor: state.isSelected
														? '#14b8a6'
														: state.isFocused
														? '#f0fdfa'
														: 'white',
													color: state.isSelected ? 'white' : '#1e293b',
												}),
											}}
										/>
									</div>
								</>
							) : (
								<div className="md:col-span-2">
									<input
										{...register('id')}
										placeholder="Cédula (opcional)"
										className="border-2 border-slate-200 focus:border-teal-400 p-4 rounded-xl w-full shadow-sm outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
									/>
								</div>
							)}

							<div className="md:col-span-2">
								<div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-2xl text-center shadow-lg">
									<p className="text-2xl font-bold">
										Total a pagar: $
										{(totalPrice + deliveryFee).toLocaleString()}
									</p>
									{deliveryFee > 0 && (
										<p className="text-teal-100 text-sm mt-1">
											(Incluye ${deliveryFee.toLocaleString()} de envío)
										</p>
									)}
								</div>
							</div>

							<div className="md:col-span-2 flex justify-center mt-6">
								<button
									type="submit"
									disabled={
										!isValid ||
										(showModal === 'delivery' && !selectedNeighborhood)
									}
									className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-200 transform ${
										!isValid ||
										(showModal === 'delivery' && !selectedNeighborhood)
											? 'bg-slate-300 text-slate-500 cursor-not-allowed'
											: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
									}`}>
									✨ Confirmar datos y pagar
								</button>
							</div>
						</form>

						{customerId && formData && isValid && (
							<div className="mt-8 text-center p-6 bg-teal-50 rounded-2xl border border-teal-200">
								<EpaycoCheckoutButton
									amount={formData.totalAmount}
									name={formData.name}
									description={formData.description}
									orderId={customerId || ''}
								/>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CartPage;
