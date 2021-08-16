import { useState } from 'react';
function Todo({ text, ind, editTodo, deleteTodo }) {
    const [editText, setEditText] = useState(text);
    const edit = ()=>{
        editTodo(ind, editText)
    }
    const remove = ()=>{
        deleteTodo(ind)
    }
    const onChange = (e)=>{
        const {value} = e.target;
        setEditText(value)
    }
	return <>
    <input type="text" value={editText} onChange={onChange}></input>
    <button onClick={edit}>Save</button>
    <button onClick={remove}>Delete</button>
    </>;
}

export default Todo;
