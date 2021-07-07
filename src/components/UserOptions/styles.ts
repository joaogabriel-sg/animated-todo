import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
	position: relative;
	background: ${({ theme }) => theme.white};
	width: 40px;
	height: 40px;

	border-radius: 50%;

	font-weight: 500;
	color: ${({ theme }) => theme.purple};

	cursor: pointer;

	span {
		flex: 1;
		height: 100%;

		display: grid;
		place-items: center;

		pointer-events: none;
		user-select: none;
	}

	nav {
		min-width: 13rem;

		box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);

		position: absolute;
		top: calc(100% + 8px);
		right: 0%;
		z-index: 999;

		&::before {
			content: '';
			position: absolute;
			bottom: 100%;
			right: 12px;

			border: 8px solid;
			border-bottom-color: ${({ theme }) => theme.white};

			color: transparent;
		}

		ul {
			list-style: none;
			overflow: hidden;

			button {
				background: ${({ theme }) => theme.white};
				width: 100%;

				padding: 1rem;
				border: 0;
				border-radius: 4px;

				display: flex;
				align-items: center;
				gap: 1rem;

				font-size: 1rem;
				color: ${({ theme }) => theme.purple};

				svg {
					fill: ${({ theme }) => theme.purple};
				}
			}
		}
	}
`;
