import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface ThemeProps {
	children: ReactNode;
}

const lightTheme: DefaultTheme = {
	background: '#ECF0F1',
	text: '#AFAFAF',
	purple: '#8A63D2',
	red: '#D26363',
};

export function Themes({ children }: ThemeProps) {
	return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
