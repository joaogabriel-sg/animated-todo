import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background: rgba(0, 0, 0, 0.75);
	width: 100%;
	height: 100%;

	display: grid;
	place-items: center;

	padding: 1rem;

	> div {
		background: ${({ theme }) => theme.background};
		width: 100%;
		max-width: 400px;

		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);

		header {
			display: flex;
			align-items: flex-start;
			gap: 1rem;

			margin-bottom: 2.5rem;

			color: ${({ theme }) => theme.purple};

			h2 {
				font-weight: 500;
				font-size: 2.125rem;
				line-height: 1;
			}
		}

		label {
			display: block;
			margin-bottom: 0.5rem;

			font-weight: 500;
			font-size: 1.25rem;
			color: ${({ theme }) => theme.purple};
		}

		input {
			background: ${({ theme }) => theme.light};
			width: 100%;
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
		}

		div {
			margin-top: 2rem;
			display: flex;
			gap: 1rem;

			button {
				background: transparent;
				flex: 1;
				height: 45px;

				border: 0;
				border-radius: 2px;
				padding: 0.25rem;

				font-size: 1rem;
				font-weight: 500;
				color: ${({ theme }) => theme.white};

				&:nth-child(1) {
					background: ${({ theme }) => theme.green};
					transition: background 0.3s;

					&:hover {
						background: ${({ theme }) => darken(0.05, theme.green)};
					}
				}

				&:nth-child(2) {
					color: ${({ theme }) => theme.red};
					transition: color 0.3s;

					&:hover {
						color: ${({ theme }) => darken(0.05, theme.red)};
					}
				}
			}
		}
	}
`;
