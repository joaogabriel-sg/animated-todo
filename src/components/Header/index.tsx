import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from '../../hooks/useTheme';

import logoWhiteImg from '../../assets/logo-white.svg';

import { UserOptions } from '../UserOptions';

import { Container } from './styles';

export function Header() {
	const { theme, toggleTheme } = useTheme();

	function handleToggleTheme() {
		toggleTheme();
	}

	return (
		<Container>
			<div>
				<img src={logoWhiteImg} alt="to.DO" />
				<div>
					<button type="button" onClick={handleToggleTheme}>
						{theme.name === 'light' ? (
							<FaMoon size={32} />
						) : (
							<FaSun size={32} />
						)}
					</button>
					<UserOptions />
				</div>
			</div>
		</Container>
	);
}
