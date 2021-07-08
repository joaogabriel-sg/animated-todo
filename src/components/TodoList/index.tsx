import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1.25,
			delay: 3,
			delayChildren: 3,
			staggerChildren: 0.4,
		},
	},
};

const containerVariantsWhenDoesNotHasChildren = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0,
			delayChildren: 0,
			staggerChildren: 0,
		},
	},
};

const todoItemVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export function TodoList() {
	const { todos, deleteTodoItem, openTodoItemInEditMode, completeTodoItem } =
		useTodo();

	return (
		<Container
			variants={
				todos.length !== 0
					? containerVariants
					: containerVariantsWhenDoesNotHasChildren
			}
			initial="hidden"
			animate="visible"
		>
			{todos.map((todo) => (
				<motion.div
					variants={todoItemVariants}
					className="todo-item"
					key={todo.id}
				>
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
				</motion.div>
			))}
		</Container>
	);
}
