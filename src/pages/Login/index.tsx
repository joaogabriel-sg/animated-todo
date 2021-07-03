import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export function Login() {
	const { signIn } = useAuth();
	const [name, setName] = useState('');

	const formattedNameLength = name.trim().length;
	const containerOpacity = formattedNameLength / 4 - 1;

	function handleSignInUser() {
		const formattedName = name.trim();
		if (formattedName === '') return;

		const doesTheNameHaveANumber = !!formattedName.match(/\d/g);
		if (doesTheNameHaveANumber) return;

		signIn(name);
	}

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
				<button type="button" onClick={handleSignInUser}>
					Entrar no to.DO
				</button>
			</div>
		</Container>
	);
}
