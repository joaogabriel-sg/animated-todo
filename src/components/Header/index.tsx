import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import logoWhiteImg from '../../assets/logo-white.svg';

import { UserOptions } from '../UserOptions';

import { Container } from './styles';

const headerVariants = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.6,
			type: 'spring',
			when: 'beforeChildren',
			bounce: 0,
			staggerChildren: 0.4,
		},
	},
};

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
			delayChildren: 0.6,
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
		<Container variants={headerVariants} initial="hidden" animate="visible">
			<div>
				<motion.img variants={logoVariants} src={logoWhiteImg} alt="to.DO" />
				<motion.div variants={buttonsContainerVariants}>
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
