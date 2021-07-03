import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
	margin-bottom: 2.5rem;
	display: flex;

	@media (max-width: 500px) {
		justify-content: center;
	}

	input {
		background: ${({ theme }) => theme.light};
		width: 100%;
		max-width: 330px;
		height: 42px;

		padding: 0 1rem;
		border: 1px solid transparent;
		border-radius: 2px 0 0 2px;
		outline: 0;

		font-size: 0.875rem;
		font-weight: 500;
		color: ${({ theme }) => theme.purple};

		transition: border-color 0.3s;

		&:focus {
			border-color: ${({ theme }) => theme.purple};
		}

		&::placeholder {
			font-weight: 400;
			color: ${({ theme }) => theme.text};
		}
	}

	button {
		background: ${({ theme }) => theme.purple};
		width: 42px;
		height: 42px;

		border: 0;
		border-radius: 0 2px 2px 0;

		transition: background 0.3s;

		&:disabled {
			background: ${({ theme }) => lighten(0.15, theme.purple)};
			cursor: not-allowed;
		}

		&:not(:disabled):hover {
			background: ${({ theme }) => darken(0.05, theme.purple)};
		}

		svg {
			color: ${({ theme }) => theme.white};
		}
	}
`;
