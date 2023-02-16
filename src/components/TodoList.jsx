import React from 'react';
import { TodoItems } from './TodoItems';

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItems
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}
				/>
			))}
		</ul>
	);
};
