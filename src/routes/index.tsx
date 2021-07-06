import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Main } from '../pages/Main';

import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<PrivateRoute path="main" element={<Main />} />
		</Routes>
	);
}
