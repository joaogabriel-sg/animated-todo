import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Container } from './styles';

export function TodoList() {
	return (
		<Container>
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
		</Container>
	);
}
