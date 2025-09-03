import React, { useEffect, useRef } from 'react';

interface EpaycoCheckoutButtonProps {
	amount: number;
	orderId: string;
	name: string;
	description: string;
}

const EpaycoCheckoutButton: React.FC<EpaycoCheckoutButtonProps> = ({
	amount,
	name,
	orderId,
	description,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!amount || amount <= 0) return;

		// Limpia botones anteriores
		if (containerRef.current) {
			containerRef.current.innerHTML = '';
		}

		const script = document.createElement('script');
		script.src = 'https://checkout.epayco.co/checkout.js';
		script.className = 'epayco-button';
		script.setAttribute('disable-epayco-button', 'true');

		// 🔑 Configuración básica
		script.setAttribute(
			'data-epayco-key',
			import.meta.env.VITE_EPAYCO_PUBLIC_KEY
		);
		// ⚠️ Reemplaza con tu clave pública de Epayco
		script.setAttribute('data-epayco-amount', amount.toString());
		script.setAttribute('data-epayco-name', name);
		script.setAttribute('data-epayco-description', description);
		script.setAttribute('data-epayco-currency', 'cop');
		script.setAttribute('data-epayco-country', 'CO');
		script.setAttribute('data-epayco-test', 'true'); // ⚠️ Cambia a "false" en producción
		script.setAttribute('data-epayco-external', 'true');

		// 📌 URLs de retorno y webhook
		script.setAttribute(
			'data-epayco-response',
			'https://rafaexpress.netlify.app/payments/success'
		); // redirige al cliente
		script.setAttribute(
			'data-epayco-confirmation',
			'https://731dbc3baea8.ngrok-free.app/api/orders/webhook'
		); // tu backend recibe confirmación

		// 📌 Datos extra que viajan a tu backend vía webhook
		script.setAttribute('data-epayco-extra1', orderId.toString());

		script.setAttribute(
			'data-epayco-extra2',
			localStorage.getItem('idPersona') || ''
		);

		containerRef.current?.appendChild(script);
	}, [amount, name, description]);

	return <div ref={containerRef}></div>;
};

export default EpaycoCheckoutButton;
