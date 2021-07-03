import logoImg from '../../assets/logo.svg';

import { Container, Button } from './styles';

export function Login() {
	return (
		<Container>
			<div>
				<header>
					<img src={logoImg} alt="to.DO" />
					<p>Seja bem-vindo a um simples projeto de todo.</p>
				</header>
				<input type="text" placeholder="Digite seu nome para entrar" />
				<Button to="/main">Entrar no to.DO</Button>
			</div>
		</Container>
	);
}
