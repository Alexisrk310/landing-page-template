import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutUsPage from '@/pages/AboutUsPage';
import CartPage from '@/pages/CartPage';
import ContactPage from '@/pages/ContactPage';
import FailurePage from '@/pages/FailurePage';
import GalleryPage from '@/pages/GalleryPage';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PendingPage from '@/pages/PendingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentSuccess from '@/pages/PaymentSuccess';

function AppRouter() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/acerca-de-nosotros" element={<AboutUsPage />} />
				<Route path="/galeria" element={<GalleryPage />} />
				<Route path="/contacto" element={<ContactPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/payments/success" element={<PaymentSuccess />} />
				<Route path="/payments/failure" element={<FailurePage />} />
				<Route path="/payments/pending" element={<PendingPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRouter;
