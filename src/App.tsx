import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { AppRoutes } from './routes';

import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<Themes>
			<BrowserRouter>
				<AuthProvider>
					<AppRoutes />
					<GlobalStyle />
				</AuthProvider>
			</BrowserRouter>
		</Themes>
	);
}

export default App;
