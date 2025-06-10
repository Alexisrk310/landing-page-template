import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutUsPage from '@/pages/AboutUsPage';
import CartPage from '@/pages/CartPage';
import ContactPage from '@/pages/ContactPage';
import GalleryPage from '@/pages/GalleryPage';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRouter;
