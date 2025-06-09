import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AboutUs from '@/pages/AboutUs';
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
				<Route path="/acerca-de-nosotros" element={<AboutUs />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRouter;
