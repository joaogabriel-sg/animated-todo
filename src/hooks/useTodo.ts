import { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

export function useTodo() {
	const data = useContext(TodoContext);
	return data;
}
