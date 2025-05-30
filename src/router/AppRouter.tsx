import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRouter() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRouter;
