import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';

import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<Themes>
			<BrowserRouter>
				<AppRoutes />
				<GlobalStyle />
			</BrowserRouter>
		</Themes>
	);
}

export default App;
