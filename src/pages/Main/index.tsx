import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { Title } from '../../components/Title';
import { AddTodoItem } from '../../components/AddTodoItem';
import { TodoList } from '../../components/TodoList';

import { Container } from './styles';

export function Main() {
	return (
		<>
			<Header />
			<Modal />
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
