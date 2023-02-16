import axios from 'axios';
import { useEffect, useState } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { helpHttp } from './helpers/helpHttp';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const { deleteData } = helpHttp();
	const url = 'http://localhost:3004/users';

	const jsonDB = async () => {
		const resp = await axios(url);
		setTodos(resp.data);
		console.log(resp.data);
	};

	useEffect(() => {
		jsonDB();
	}, []);

	const handleNewTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const handleDeleteTodo = (id) => {
		console.log(id);
		setTodos(todos.filter((todo) => todo.id !== id));
		deleteData(id);
	};

	const handleEditTodo = (id) => {
		console.log(id);
	};

	return (
		<div>
			<h1>TodoApp</h1>
			<div>
				<section>
					<h4>Agregar TODO</h4>
					<TodoAdd todos={todos} onNewTodo={handleNewTodo} />
				</section>
				<section>
					<TodoList
						todos={todos}
						deleteTodo={handleDeleteTodo}
						updateTodo={handleEditTodo}
					/>
				</section>
			</div>
		</div>
	);
};
