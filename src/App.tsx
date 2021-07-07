import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/TodoContext';
import { ModalProvider } from './contexts/ModalContext';
import { ThemeProvider } from './contexts/ThemeContext';

import { AppRoutes } from './routes';

import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<ThemeProvider>
			<Themes>
				<BrowserRouter>
					<AuthProvider>
						<ModalProvider>
							<TodoProvider>
								<AppRoutes />
								<GlobalStyle />
							</TodoProvider>
						</ModalProvider>
					</AuthProvider>
				</BrowserRouter>
			</Themes>
		</ThemeProvider>
	);
}

export default App;
