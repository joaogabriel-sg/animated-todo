import styled from 'styled-components';

export const Container = styled.header`
	background: ${({ theme }) => theme.purple};
	padding: 0 1rem;

	div {
		width: 100%;
		max-width: 940px;
		height: 100px;

		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		button {
			background: transparent;
			border: 0;

			svg {
				fill: ${({ theme }) => theme.white};
			}
		}
	}
`;
