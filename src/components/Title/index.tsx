import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

const titleVariants = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: {
			duration: 1,
			delay: 1.25,
		},
	},
};

export function Title() {
	const { data } = useAuth();

	return (
		<Container variants={titleVariants} initial="hidden" animate="visible">
			ToDos de {data.name}
		</Container>
	);
}
