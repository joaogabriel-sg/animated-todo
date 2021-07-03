import { Link } from 'react-router-dom';
import { darken, lighten, opacify } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.main`
	background: ${({ theme }) => opacify(-1, theme.purple)};
	min-height: 100vh;
	padding: 1rem;

	display: grid;
	place-items: center;

	div {
		background: ${({ theme }) => theme.light};

		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);

		display: flex;
		flex-direction: column;

		header {
			margin-bottom: 1.5rem;
			text-align: center;

			p {
				margin-top: 1rem;

				font-size: 1rem;
				color: ${({ theme }) => theme.text};
			}
		}

		input {
			background: ${({ theme }) => theme.background};
			width: 100%;
			max-width: 330px;
			height: 42px;

			padding: 0 1rem;
			border: 1px solid transparent;
			border-radius: 2px;
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
	}
`;

type ButtonType = { disabled?: boolean };

export const Button = styled(Link)<ButtonType>`
	background: ${({ theme }) => theme.purple};
	width: 100%;
	max-width: 330px;
	height: 42px;

	display: grid;
	place-items: center;

	border: 0;
	border-radius: 2px;
	margin-top: 1rem;

	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	color: ${({ theme }) => theme.light};

	transition: background 0.3s;

	${({ disabled = false }) =>
		disabled
			? css`
					background: ${({ theme }) => lighten(0.15, theme.purple)};
					cursor: not-allowed;
			  `
			: css`
					&:hover {
						background: ${({ theme }) => darken(0.05, theme.purple)};
					}
			  `}
`;
