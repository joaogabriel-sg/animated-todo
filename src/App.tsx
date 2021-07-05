import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/TodoContext';
import { ModalProvider } from './contexts/ModalContext';

import { AppRoutes } from './routes';

import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<Themes>
			<BrowserRouter>
				<AuthProvider>
					<TodoProvider>
						<ModalProvider>
							<AppRoutes />
							<GlobalStyle />
						</ModalProvider>
					</TodoProvider>
				</AuthProvider>
			</BrowserRouter>
		</Themes>
	);
}

export default App;
