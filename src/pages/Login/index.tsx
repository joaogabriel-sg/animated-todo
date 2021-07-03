import { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

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
				<button type="button">Entrar no to.DO</button>
			</div>
		</Container>
	);
}
