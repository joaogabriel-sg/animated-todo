import { useState, useEffect, useRef, MouseEvent } from 'react';
import { IoExit } from 'react-icons/io5';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function UserOptions() {
	const { data, signOut } = useAuth();
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLElement>(null);

	const { name } = data;
	const twoCharacters = name.slice(0, 2).padStart(2, '0').toUpperCase();

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
			<Container ref={containerRef} onClick={handleToggleDropdown}>
				<span>{twoCharacters}</span>
				{isVisible && (
					<nav ref={dropdownRef}>
						<ul>
							<button type="button" onClick={() => signOut()}>
								<IoExit size={24} /> Sair da Conta
							</button>
						</ul>
					</nav>
				)}
			</Container>
		</>
	);
}
