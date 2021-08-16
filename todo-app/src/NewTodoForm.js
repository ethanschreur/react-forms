import { useState } from 'react';
function NewTodoForm({ addTodo }) {
	const [ newText, setNewText ] = useState('');
	const changeNewText = (e) => {
		const { value } = e.target;
		setNewText(value);
	};
	const add = (e) => {
		e.preventDefault();
		addTodo(newText);
		setNewText('');
	};
	return (
		<div className="NewTodoForm">
			<form onSubmit={add}>
				<input type="text" placeholder="Todo text" onChange={changeNewText} value={newText} />
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

export default NewTodoForm;
