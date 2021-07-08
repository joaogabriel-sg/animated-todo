import { useState, useCallback, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useModal } from '../../hooks/useModal';
import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

const overlayVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			when: 'beforeChildren',
		},
	},
	exit: {
		opacity: 0,
	},
};

const modalVariants = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.6,
			type: 'spring',
			stiffness: 120,
			delayChildren: 1,
			staggerChildren: 0.4,
		},
	},
	exit: {
		y: '-100vh',
	},
};

const headerVariants = {
	hidden: {
		opacity: 0,
		x: -10,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.4,
		},
	},
};

const labelVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		},
	},
};

const inputVariants = {
	hidden: {
		width: 0,
		opacity: 0,
		paddingLeft: 0,
		paddingRight: 0,
	},
	visible: {
		width: '100%',
		opacity: 1,
		paddingLeft: '1rem',
		paddingRight: '1rem',
		transition: {
			duration: 0.6,
		},
	},
};

const buttonsVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

export function Modal() {
	const { isModalOpen, closeModal } = useModal();
	const { todoToEdit, editTodoItem } = useTodo();
	const overlayRef = useRef(null);
	const [title, setTitle] = useState('');

	const handleCloseModal = useCallback(() => {
		closeModal();
	}, [closeModal]);

	useEffect(() => {
		if (!isModalOpen) return;

		function handleClickOutsideTheModal(event: Event) {
			if (event.target === overlayRef.current) handleCloseModal();
		}

		window.addEventListener('click', handleClickOutsideTheModal);

		return () => {
			window.removeEventListener('click', handleClickOutsideTheModal);
		};
	}, [handleCloseModal, isModalOpen]);

	function handleEditTodoItem() {
		const newTodoItem = { ...todoToEdit, title };

		editTodoItem(newTodoItem);
		setTitle('');
	}

	if (!isModalOpen) return null;

	return (
		<Container
			variants={overlayVariants}
			initial="hidden"
			animate="visible"
			ref={overlayRef}
		>
			<motion.div variants={modalVariants}>
				<motion.header variants={headerVariants}>
					<FaEdit size={32} />
					<h2>Editar ToDo</h2>
				</motion.header>
				<motion.label variants={labelVariants} htmlFor="todo">
					ToDo: {todoToEdit.title}
				</motion.label>
				<motion.input
					variants={inputVariants}
					type="text"
					id="todo"
					value={title}
					onChange={({ target }) => setTitle(target.value)}
					placeholder="Digite o novo título da ToDo"
				/>
				<motion.div variants={buttonsVariants}>
					<button
						type="button"
						onClick={handleEditTodoItem}
						disabled={title === ''}
					>
						Confirmar
					</button>
					<button type="button" onClick={handleCloseModal}>
						Cancelar
					</button>
				</motion.div>
			</motion.div>
		</Container>
	);
}
