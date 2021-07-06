import { FaMoon } from 'react-icons/fa';

import logoWhiteImg from '../../assets/logo-white.svg';

import { UserOptions } from '../UserOptions';

import { Container } from './styles';

export function Header() {
	return (
		<Container>
			<div>
				<img src={logoWhiteImg} alt="to.DO" />
				<div>
					<button type="button">
						<FaMoon size={32} />
					</button>
					<UserOptions />
				</div>
			</div>
		</Container>
	);
}
