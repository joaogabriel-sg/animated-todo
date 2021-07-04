import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { AddTodoItem } from '../../components/AddTodoItem';
import { TodoList } from '../../components/TodoList';

import { Container } from './styles';

export function Main() {
	return (
		<>
			<Header />
			<Container>
				<div>
					<Title />
					<AddTodoItem />
					<TodoList />
				</div>
			</Container>
		</>
	);
}
