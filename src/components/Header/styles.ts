import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
	background: ${({ theme }) => theme.purple};
	padding: 0 1rem;

	> div {
		width: 100%;
		max-width: 940px;
		height: 100px;

		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> button {
				background: transparent;
				border: 0;

				svg {
					fill: ${({ theme }) => theme.white};
				}
			}
		}
	}
`;
