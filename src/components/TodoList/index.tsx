import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

export function TodoList() {
	const { todos, deleteTodoItem } = useTodo();

	if (!todos || !todos.length) return null;

	return (
		<Container>
			{todos.map((todo) => (
				<div className="todo-item" key={todo.id}>
					<div className={todo.isCompleted ? 'completed' : ''}>
						<span>
							<FaCheck size={16} />
						</span>
					</div>
					<p>{todo.title}</p>
					<FaEdit size={24} />
					<FaTrashAlt size={24} onClick={() => deleteTodoItem(todo.id)} />
				</div>
			))}
		</Container>
	);
}
