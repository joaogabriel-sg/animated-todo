import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/useTheme';

interface ThemeProps {
	children: ReactNode;
}

export function Themes({ children }: ThemeProps) {
	const { theme } = useTheme();
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
