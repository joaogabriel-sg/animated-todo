import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import logoWhiteImg from '../../assets/logo-white.svg';

import { UserOptions } from '../UserOptions';

import { Container } from './styles';

const logoVariants = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: 0,
		transition: {
			duration: 1,
			type: 'spring',
			stiffness: 40,
		},
	},
};

const buttonsContainerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			type: 'spring',
			stiffness: 40,
			delayChildren: 1.3,
			staggerChildren: 0.3,
			staggerDirection: -1,
		},
	},
};

export const buttonVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export function Header() {
	const { theme, toggleTheme } = useTheme();

	function handleToggleTheme() {
		toggleTheme();
	}

	return (
		<Container>
			<div>
				<motion.img
					variants={logoVariants}
					initial="hidden"
					animate="visible"
					src={logoWhiteImg}
					alt="to.DO"
				/>
				<motion.div
					variants={buttonsContainerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.button
						variants={buttonVariants}
						type="button"
						onClick={handleToggleTheme}
					>
						{theme.name === 'light' ? (
							<FaMoon size={32} />
						) : (
							<FaSun size={32} />
						)}
					</motion.button>
					<UserOptions />
				</motion.div>
			</div>
		</Container>
	);
}
