import { FiPlus } from 'react-icons/fi';
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';

import { Header } from '../../components/Header';

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

					<div className="todo-list">
						<div className="todo-item">
							<div>
								<span>
									<FaCheck size={16} />
								</span>
							</div>
							<p>Criar um aplicativo para nutricionistas</p>
							<FaEdit size={24} />
							<FaTrashAlt size={24} />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
