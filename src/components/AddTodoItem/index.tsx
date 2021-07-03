import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function AddTodoItem() {
	return (
		<Container>
			<input type="text" placeholder="Digite seu nome para entrar" />
			<button type="button">
				<FiPlus size={32} />
			</button>
		</Container>
	);
}
