import { helpHttp } from '../helpers/helpHttp';
import { useForm } from '../helpers/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { name, description, onInputChange, onResetForm } = useForm({
		name: '',
		description: '',
	});

	const { postData } = helpHttp();

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (name.length <= 1) return;

		const newTodo = {
			id: `${new Date().getTime()}`,
			date: `${new Date()}`,
			done: false,
			name: name,
			description: description,
		};

		postData(newTodo);
		onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Asunto"
				name="name"
				value={name}
				onChange={onInputChange}
			/>
			<input
				type="text"
				placeholder="Ingrese la tarea"
				name="description"
				value={description}
				onChange={onInputChange}
			/>
			<button type="submit">Agregar</button>
		</form>
	);
};
