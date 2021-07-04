import { createContext, PropsWithChildren, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAuth } from '../hooks/useAuth';

interface Todo {
	id: string;
	title: string;
	isCompleted: boolean;
}

interface TodoContextProps {
	todos: Todo[];
	addNewTodo: (title: string) => void;
	deleteTodoItem: (id: string) => void;
}

export const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: PropsWithChildren<unknown>) {
	const { data } = useAuth();
	const [todos, setTodos] = useState(data.todos);

	function addNewTodo(title: string) {
		const formattedTitle = title.trim();
		if (formattedTitle === '') return;

		const newTodoItem = {
			id: uuidv4(),
			title: formattedTitle,
			isCompleted: false,
		};

		setTodos((oldTodos) => {
			const newTodoList = [...oldTodos, newTodoItem];

			localStorage.setItem(
				'AnimatedTodo:user',
				JSON.stringify({ ...data, todos: newTodoList }),
			);
			return newTodoList;
		});
	}

	function deleteTodoItem(id: string) {
		setTodos((oldTodos) => {
			const newTodoList = oldTodos.filter((oldTodo) => oldTodo.id !== id);
			return newTodoList;
		});
	}

	return (
		<TodoContext.Provider value={{ todos, addNewTodo, deleteTodoItem }}>
			{children}
		</TodoContext.Provider>
	);
}
