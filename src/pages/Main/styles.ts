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
	}
`;
