import { useState, useEffect, useRef, MouseEvent } from 'react';
import { IoExit } from 'react-icons/io5';
import { motion } from 'framer-motion';

import { useAuth } from '../../hooks/useAuth';
import { useTodo } from '../../hooks/useTodo';

import { buttonVariants } from '../Header';

import { Container } from './styles';

const navVariants = {
	hidden: {
		opacity: 0,
		translateX: 32,
		translateY: 5,
		rotateZ: -15,
	},
	visible: {
		opacity: 1,
		translateX: 0,
		translateY: 0,
		rotateZ: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export function UserOptions() {
	const { data, signOut } = useAuth();
	const { clearTodoList } = useTodo();
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLElement>(null);

	const { name } = data;
	const twoCharacters = name.slice(0, 2).padStart(2, '0').toUpperCase();

	function handleSignOutUse() {
		clearTodoList();
		signOut();
	}

	function handleToggleDropdown(event: MouseEvent) {
		if (event.target === event.currentTarget)
			setIsVisible((oldIsVisible) => !oldIsVisible);
	}

	useEffect(() => {
		function closeDropdownWhenClickOutside(event: Event) {
			if (!isVisible) return;
			if (event.target === containerRef.current) return;
			if (event.target === dropdownRef.current) return;

			const dropdownButtonList = dropdownRef.current
				? Array.from(dropdownRef.current.querySelectorAll('button'))
				: [];

			const hasAnyButtonBeenClicked = dropdownButtonList.some(
				(item) => item === event.target,
			);
			if (!hasAnyButtonBeenClicked) setIsVisible(false);
		}

		window.addEventListener('click', closeDropdownWhenClickOutside);

		return () => {
			window.removeEventListener('click', closeDropdownWhenClickOutside);
		};
	}, [isVisible]);

	return (
		<>
			<Container
				variants={buttonVariants}
				ref={containerRef}
				onClick={handleToggleDropdown}
			>
				<span>{twoCharacters}</span>
				{isVisible && (
					<motion.nav
						variants={navVariants}
						initial="hidden"
						animate="visible"
						ref={dropdownRef}
					>
						<ul>
							<button type="button" onClick={handleSignOutUse}>
								<IoExit size={24} /> Sair da Conta
							</button>
						</ul>
					</motion.nav>
				)}
			</Container>
		</>
	);
}
