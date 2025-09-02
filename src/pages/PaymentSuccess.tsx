import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PaymentSuccess = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [status, setStatus] = useState('Verificando pago...');
	const [order, setOrder] = useState<any>(null);

	useEffect(() => {
		const query = new URLSearchParams(location.search);
		const refPayco = query.get('x_ref_payco');

		if (refPayco) {
			fetch(`https://5a9719cb168e.ngrok-free.app/api/orders/${refPayco}`)
				.then((res) => {
					if (!res.ok) throw new Error('No se pudo verificar el pago');
					return res.json();
				})
				.then((data) => {
					const orderData = Array.isArray(data) ? data[0] : data;
					setOrder(orderData);

					if (
						orderData.status?.toLowerCase() === 'aceptado' ||
						orderData.paymentData?.x_response === 'Aceptada'
					) {
						setStatus('✅ Pago exitoso');
					} else if (orderData.status?.toLowerCase() === 'pendiente') {
						setStatus('⌛ Pago pendiente de aprobación');
					} else {
						setStatus('❌ Pago rechazado');
					}
				})
				.catch(() => setStatus('⚠️ Error al verificar el pago'));
		}
	}, [location.search]);

	// Generar factura PDF
	const generateInvoicePDF = () => {
		if (!order) return;

		const doc = new jsPDF();

		// Encabezado
		doc.setFontSize(18);
		doc.text('Factura de Compra', 105, 15, { align: 'center' });
		doc.setFontSize(12);
		doc.text(`ID Pedido: ${order.id}`, 14, 30);
		doc.text(`Fecha: ${new Date(order.createdAt).toLocaleString()}`, 14, 38);

		// Datos del cliente
		doc.setFontSize(14);
		doc.text('👤 Cliente', 14, 50);
		doc.setFontSize(12);
		doc.text(`Nombre: ${order.customerName}`, 14, 58);
		doc.text(`Teléfono: ${order.phone}`, 14, 66);
		doc.text(`Dirección: ${order.address}, ${order.neighborhood}`, 14, 74);

		// Tabla de productos
		autoTable(doc, {
			startY: 90,
			head: [['Producto', 'Cantidad', 'Precio Unitario', 'Subtotal']],
			body: order.cart.map((item: any) => [
				item.name,
				item.quantity,
				`${item.price} COP`,
				`${item.price * item.quantity} COP`,
			]),
		});

		// Totales
		const finalY = (doc as any).lastAutoTable.finalY || 120;
		doc.setFontSize(12);
		doc.text(`Costo de envío: ${order.deliveryFee} COP`, 14, finalY + 10);
		doc.setFontSize(14);
		doc.text(`Total: ${order.totalAmount} COP`, 14, finalY + 20);

		// Datos del pago
		doc.setFontSize(14);
		doc.text('💳 Detalles del Pago', 14, finalY + 40);
		doc.setFontSize(12);
		doc.text(
			`Banco: ${order.paymentData?.x_bank_name || 'N/A'}`,
			14,
			finalY + 48
		);
		doc.text(
			`Franquicia: ${order.paymentData?.x_franchise || 'N/A'}`,
			14,
			finalY + 56
		);
		doc.text(
			`Tarjeta: ${order.paymentData?.x_cardnumber || 'N/A'}`,
			14,
			finalY + 64
		);
		doc.text(
			`Estado: ${order.paymentData?.x_response || order.status}`,
			14,
			finalY + 72
		);

		// Pie de página
		doc.setFontSize(10);
		doc.text('Gracias por tu compra - Restaurante Asados Alexis', 105, 290, {
			align: 'center',
		});

		doc.save(`Factura_${order.id}.pdf`);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
			<h1 className="text-2xl font-bold mb-4">Resultado del Pago</h1>
			<p className="mb-6">{status}</p>

			{order && (
				<div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-lg text-left space-y-3">
					<h2 className="text-lg font-semibold">🧾 Información del Pedido</h2>
					<p>
						<strong>Cliente:</strong> {order.customerName}
					</p>
					<p>
						<strong>Teléfono:</strong> {order.phone}
					</p>
					<p>
						<strong>Dirección:</strong> {order.address}, {order.neighborhood}
					</p>
					<p>
						<strong>Total:</strong> {order.totalAmount} COP
					</p>
					<p>
						<strong>Descripción:</strong> {order.description}
					</p>

					{/* Botones */}
					<div className="flex gap-4 mt-6">
						<button
							onClick={generateInvoicePDF}
							className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition">
							📄 Descargar Factura
						</button>
						<button
							onClick={() => navigate('/menu')}
							className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-md transition">
							🍽 Volver al Menú
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default PaymentSuccess;
