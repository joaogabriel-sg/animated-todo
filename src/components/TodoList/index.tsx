import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

export function TodoList() {
	const { todos, deleteTodoItem, openTodoItemInEditMode, completeTodoItem } =
		useTodo();

	if (!todos || !todos.length) return null;

	return (
		<Container>
			{todos.map((todo) => (
				<div className="todo-item" key={todo.id}>
					<div
						className={todo.isCompleted ? 'completed' : ''}
						onClick={() => completeTodoItem(todo.id)}
					>
						<span>
							<FaCheck size={16} />
						</span>
					</div>
					<p>{todo.title}</p>
					<FaEdit size={24} onClick={() => openTodoItemInEditMode(todo)} />
					<FaTrashAlt size={24} onClick={() => deleteTodoItem(todo.id)} />
				</div>
			))}
		</Container>
	);
}
