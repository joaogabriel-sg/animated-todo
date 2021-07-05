import { useState, useCallback, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

import { useModal } from '../../hooks/useModal';
import { useTodo } from '../../hooks/useTodo';

import { Container } from './styles';

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
		<Container ref={overlayRef}>
			<div>
				<header>
					<FaEdit size={32} />
					<h2>Editar ToDo</h2>
				</header>
				<label htmlFor="todo">ToDo: {todoToEdit.title}</label>
				<input
					type="text"
					id="todo"
					value={title}
					onChange={({ target }) => setTitle(target.value)}
					placeholder="Digite o novo título da ToDo"
				/>
				<div>
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
				</div>
			</div>
		</Container>
	);
}
