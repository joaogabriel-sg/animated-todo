import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
		background: string;
		text: string;
		light: string;
		purple: string;
		red: string;
		green: string;
		white: string;
	}
}
