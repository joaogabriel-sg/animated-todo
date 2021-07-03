import { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Button } from './styles';

export function Login() {
	const [name, setName] = useState('');

	const formattedNameLength = name.trim().length;
	const containerOpacity = formattedNameLength / 4 - 1;

	return (
		<Container containerOpacity={containerOpacity}>
			<div>
				<header>
					<img src={logoImg} alt="to.DO" />
					<p>Seja bem-vindo a um simples projeto de todo.</p>
				</header>
				<input
					type="text"
					value={name}
					onChange={({ target }) => setName(target.value)}
					placeholder="Digite seu nome para entrar"
				/>
				<Button to="/main">Entrar no to.DO</Button>
			</div>
		</Container>
	);
}
