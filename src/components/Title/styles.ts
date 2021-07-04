import styled from 'styled-components';

export const Container = styled.h1`
	margin-bottom: 1rem;

	font-size: 2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.purple};

	@media (max-width: 500px) {
		text-align: center;
	}
`;
