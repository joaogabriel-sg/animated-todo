import { FaMoon } from 'react-icons/fa';

import logoWhiteImg from '../../assets/logo-white.svg';

import { Container } from './styles';

export function Header() {
	return (
		<Container>
			<div>
				<img src={logoWhiteImg} alt="to.DO" />
				<button type="button">
					<FaMoon size={32} />
				</button>
			</div>
		</Container>
	);
}
