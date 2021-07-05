import { createContext, PropsWithChildren, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAuth } from '../hooks/useAuth';
import { useModal } from '../hooks/useModal';

interface Todo {
	id: string;
	title: string;
	isCompleted: boolean;
}

interface TodoContextProps {
	todos: Todo[];
	todoToEdit: Todo;
	addNewTodo: (title: string) => void;
	deleteTodoItem: (id: string) => void;
	editTodoItem: (todo: Todo) => void;
	openTodoItemInEditMode: (todo: Todo) => void;
}

export const TodoContext = createContext({} as TodoContextProps);

export function TodoProvider({ children }: PropsWithChildren<unknown>) {
	const { data } = useAuth();
	const { openModal, closeModal } = useModal();
	const [todos, setTodos] = useState(data.todos);
	const [todoToEdit, setTodoToEdit] = useState({} as Todo);

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
				'@AnimatedTodo:user',
				JSON.stringify({ ...data, todos: newTodoList }),
			);
			return newTodoList;
		});
	}

	function deleteTodoItem(id: string) {
		setTodos((oldTodos) => {
			const newTodoList = oldTodos.filter((oldTodo) => oldTodo.id !== id);
			localStorage.setItem(
				'@AnimatedTodo:user',
				JSON.stringify({ ...data, todos: newTodoList }),
			);
			return newTodoList;
		});
	}

	function editTodoItem(newTodo: Todo) {
		setTodos((oldTodos) => {
			const newTodoList = oldTodos.map((oldTodo) => {
				if (oldTodo.id === newTodo.id) return newTodo;
				return oldTodo;
			});

			localStorage.setItem(
				'@AnimatedTodo:user',
				JSON.stringify({ ...data, todos: newTodoList }),
			);
			return newTodoList;
		});

		closeModal();
	}

	function openTodoItemInEditMode(todo: Todo) {
		openModal();
		setTodoToEdit(todo);
	}

	return (
		<TodoContext.Provider
			value={{
				todos,
				todoToEdit,
				addNewTodo,
				deleteTodoItem,
				editTodoItem,
				openTodoItemInEditMode,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
