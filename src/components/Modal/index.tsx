import { useCallback } from 'react';
import { useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

import { useModal } from '../../hooks/useModal';

import { Container } from './styles';

export function Modal() {
	const { isModalOpen, closeModal } = useModal();
	const overlayRef = useRef(null);

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

	if (!isModalOpen) return null;

	return (
		<Container ref={overlayRef}>
			<div>
				<header>
					<FaEdit size={32} />
					<h2>Editar ToDo</h2>
				</header>
				<label htmlFor="todo">ToDo:</label>
				<input type="text" id="todo" />
				<div>
					<button type="button">Confirmar</button>
					<button type="button" onClick={handleCloseModal}>
						Cancelar
					</button>
				</div>
			</div>
		</Container>
	);
}
