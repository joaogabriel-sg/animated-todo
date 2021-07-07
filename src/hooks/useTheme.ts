import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export function useTheme() {
	const data = useContext(ThemeContext);
	return data;
}
