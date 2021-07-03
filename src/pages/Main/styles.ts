import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
	min-height: calc(100vh - 100px);
	padding: 0 1rem;

	> div {
		width: 100%;
		max-width: 940px;

		margin: 4rem auto;

		h1 {
			margin-bottom: 1rem;

			font-size: 2rem;
			font-weight: 500;
			color: ${({ theme }) => theme.purple};

			@media (max-width: 500px) {
				text-align: center;
			}
		}

		.add-todo {
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
		}

		.todo-list {
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
		}
	}
`;
