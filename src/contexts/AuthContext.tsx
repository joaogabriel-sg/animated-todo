import { useState, createContext, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
	id: string;
	title: string;
	isCompleted: boolean;
}

interface Data {
	id: string;
	name: string;
	todos: Todo[];
	isSigned: boolean;
}

interface AuthContextProps {
	data: Data;
	signIn: (name: string) => void;
	signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
	const navigate = useNavigate();
	const [data, setData] = useState<Data>(() => {
		let userDataInLocalStorage = localStorage.getItem('@AnimatedTodo:user');
		if (userDataInLocalStorage) return JSON.parse(userDataInLocalStorage);
		return {};
	});

	function signIn(name: string) {
		const formattedName = name.trim();
		if (formattedName === '') return;

		const doesTheNameHaveANumber = !!formattedName.match(/\d/g);
		if (doesTheNameHaveANumber) return;

		const newData: Data = { id: uuidv4(), name, isSigned: true, todos: [] };

		setData(newData);
		localStorage.setItem('@AnimatedTodo:user', JSON.stringify(newData));
		navigate('main');
	}

	function signOut() {
		setData({} as Data);
	}

	return (
		<AuthContext.Provider value={{ data, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
