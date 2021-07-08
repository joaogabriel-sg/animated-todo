import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.todo-item {
		background: ${({ theme }) => theme.light};

		padding: 1rem;
		border-radius: 2px;

		display: flex;
		align-items: center;
		gap: 1rem;

		> div {
			position: relative;
			background: transparent;
			width: 32px;
			height: 32px;
			overflow: hidden;

			border: 1px solid ${({ theme }) => theme.purple};
			border-radius: 50%;

			cursor: pointer;

			span {
				position: absolute;
				top: -100%;

				background: ${({ theme }) => theme.purple};
				width: 100%;
				height: 100%;

				display: grid;
				place-items: center;

				transition: top 0.3s;

				svg {
					color: ${({ theme }) => theme.white};
				}
			}

			&.completed {
				span {
					top: 0;
				}
			}
		}

		p {
			flex: 1;

			font-size: 0.875rem;
			font-weight: 500;
			color: ${({ theme }) => theme.purple};
		}

		svg {
			cursor: pointer;
			color: ${({ theme }) => theme.purple};
		}
	}
`;
