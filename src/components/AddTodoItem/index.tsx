import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

export function AddTodoItem() {
	const { addNewTodo } = useTodo();
	const [title, setTitle] = useState('');

	function handleAddNewTodoItem() {
		const formattedTitle = title.trim();
		if (formattedTitle === '') return;

		addNewTodo(formattedTitle);
		setTitle('');
	}

	return (
		<Container>
			<input
				type="text"
				value={title}
				onChange={({ target }) => setTitle(target.value)}
				placeholder="Digite o título da ToDo"
			/>
			<button
				type="button"
				onClick={handleAddNewTodoItem}
				disabled={title.length === 0}
			>
				<FiPlus size={32} />
			</button>
		</Container>
	);
}
