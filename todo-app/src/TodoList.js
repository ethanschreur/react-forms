import Todo from './Todo';
import { useState } from 'react';
import uuid from 'uuid/v4';
import NewTodoForm from './NewTodoForm';
function TodoList() {
	const [ todoItems, setTodoItems ] = useState([ { text: 'hi', ind: 0 } ]);
	const editTodo = (ind, editText) => {
		const newTodoItems = [ ...todoItems ];
		newTodoItems[ind].text = editText;
		setTodoItems(newTodoItems);
	};
	const deleteTodo = (ind) => {
		const newTodoItems = [ ...todoItems ];
		newTodoItems.splice(ind, 1);
		setTodoItems(newTodoItems);
	};
	const addTodo = (text) => {
		const newTodoItems = [ ...todoItems ];
		newTodoItems.push({ text: text, ind: newTodoItems.length });
		setTodoItems(newTodoItems);
	};
	return (
		<div className="TodoList">
			<h1>Add a Todo</h1>
			<NewTodoForm addTodo={addTodo} /> <h1>Todo List</h1>
			{todoItems.map((item) => (<><Todo text={item.text} ind={item.ind} editTodo={editTodo} deleteTodo={deleteTodo} key={uuid()} /><br></br><br></br></>
				
			))}
		</div>
	);
}

export default TodoList;
