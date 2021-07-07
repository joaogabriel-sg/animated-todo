import { createContext, PropsWithChildren, useState } from 'react';
import { DefaultTheme } from 'styled-components';

interface ThemeContextProps {
	theme: DefaultTheme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const lightTheme: DefaultTheme = {
	name: 'light',
	background: '#ECF0F1',
	text: '#AFAFAF',
	light: '#FFFFFF',
	purple: '#8A63D2',
	red: '#D26363',
	green: '#63D28F',
	white: '#FFFFFF',
};

const darkTheme: DefaultTheme = {
	name: 'dark',
	background: '#191919',
	text: '#AFAFAF',
	light: '#2D2D2D',
	purple: '#8A63D2',
	red: '#D26363',
	green: '#63D28F',
	white: '#FFFFFF',
};

export function ThemeProvider({ children }: PropsWithChildren<unknown>) {
	const [currentTheme, setCurrentTheme] = useState(() => {
		const themeInLocalStorage = localStorage.getItem('@AnimatedTodo:theme');
		if (themeInLocalStorage) {
			const storedTheme: DefaultTheme = JSON.parse(themeInLocalStorage);
			return storedTheme;
		}
		return lightTheme;
	});

	function toggleTheme() {
		setCurrentTheme((oldCurrentTheme) => {
			const newCurrentTheme =
				oldCurrentTheme.name === 'light' ? darkTheme : lightTheme;

			localStorage.setItem(
				'@AnimatedTodo:theme',
				JSON.stringify(newCurrentTheme),
			);
			return newCurrentTheme;
		});
	}

	return (
		<ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
