import { AddTodoItem } from '../../components/AddTodoItem';

import { Header } from '../../components/Header';
import { TodoList } from '../../components/TodoList';

import { Container } from './styles';

export function Main() {
	return (
		<>
			<Header />
			<Container>
				<div>
					<h1>ToDos de João Gabriel</h1>
					<AddTodoItem />
					<TodoList />
				</div>
			</Container>
		</>
	);
}
