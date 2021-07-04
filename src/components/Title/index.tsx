import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function Title() {
	const { data } = useAuth();

	return <Container>ToDos de {data.name}</Container>;
}
