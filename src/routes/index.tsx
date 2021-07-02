import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Main } from '../pages/Main';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="main" element={<Main />} />
		</Routes>
	);
}
