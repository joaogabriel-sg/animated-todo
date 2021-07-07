import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

const inputVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			delay: 2,
		},
	},
};

const buttonVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			delay: 2.5,
		},
	},
};

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
			<motion.input
				variants={inputVariants}
				initial="hidden"
				animate="visible"
				type="text"
				value={title}
				onChange={({ target }) => setTitle(target.value)}
				placeholder="Digite o título da ToDo"
			/>
			<motion.button
				variants={buttonVariants}
				initial="hidden"
				animate="visible"
				type="button"
				onClick={handleAddNewTodoItem}
				disabled={title.length === 0}
			>
				<FiPlus size={32} />
			</motion.button>
		</Container>
	);
}
