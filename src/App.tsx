import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { AppRoutes } from './routes';

import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/global';
import { TodoProvider } from './contexts/TodoContext';

function App() {
	return (
		<Themes>
			<BrowserRouter>
				<AuthProvider>
					<TodoProvider>
						<AppRoutes />
						<GlobalStyle />
					</TodoProvider>
				</AuthProvider>
			</BrowserRouter>
		</Themes>
	);
}

export default App;
