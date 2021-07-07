import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const modalVariants = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: 0,
		transition: {
			duration: 2,
			type: 'spring',
			stiffness: 50,
			delayChildren: 1.25,
			staggerChildren: 0.3,
		},
	},
};

const modalItemVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

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
			<motion.div variants={modalVariants} initial="hidden" animate="visible">
				<header>
					<motion.img variants={modalItemVariants} src={logoImg} alt="to.DO" />
					<motion.p variants={modalItemVariants}>
						Seja bem-vindo a um simples projeto de todo.
					</motion.p>
				</header>
				<motion.input
					variants={modalItemVariants}
					type="text"
					value={name}
					onChange={({ target }) => setName(target.value)}
					placeholder="Digite seu nome para entrar"
				/>
				<motion.button
					variants={modalItemVariants}
					type="button"
					onClick={handleSignInUser}
					disabled={name.length === 0 || !!name.match(/\d/g)}
				>
					Entrar no to.DO
				</motion.button>
			</motion.div>
		</Container>
	);
}
