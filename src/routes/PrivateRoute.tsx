import { Route, Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router';

import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps extends RouteProps {}

export function PrivateRoute({ ...rest }: PrivateRouteProps) {
	const { data } = useAuth();

	if (!data.isSigned) return <Navigate to="/" />;

	return <Route {...rest} />;
}
