import { createContext, PropsWithChildren, useState } from 'react';

interface ModalContextProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: PropsWithChildren<unknown>) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openModal() {
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
}
