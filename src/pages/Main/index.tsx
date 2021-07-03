import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { TodoList } from '../../components/TodoList';

import { Container } from './styles';

export function Main() {
	return (
		<>
			<Header />
			<Container>
				<div>
					<h1>ToDos de João Gabriel</h1>

					<div className="add-todo">
						<input type="text" placeholder="Digite seu nome para entrar" />
						<button type="button">
							<FiPlus size={32} />
						</button>
					</div>

					<TodoList />
				</div>
			</Container>
		</>
	);
}
