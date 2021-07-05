import { useContext } from 'react';

import { ModalContext } from '../contexts/ModalContext';

export function useModal() {
	const data = useContext(ModalContext);
	return data;
}
