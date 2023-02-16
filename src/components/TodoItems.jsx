import React from 'react';

export const TodoItems = ({ todo, deleteTodo, updateTodo }) => {
	return (
		<li>
			<h5>{todo.name}</h5>
			<p>{todo.description}</p>
			<h6>{todo.date}</h6>
			<button onClick={() => deleteTodo(todo.id)}>Borrar</button>
			<button onClick={() => updateTodo(todo.id)}>Editar</button>
		</li>
	);
};
