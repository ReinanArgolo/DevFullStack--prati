import { useState } from "react";
import css from './toDo.module.css'

function ToDo() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    return (
        <div className={css.container}>
            <h1>To Do List</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input type="text" id="input" className={css.input}/>
            <br/>
            <button onClick={() => {
                const input = document.getElementById('input');
                setTasks([...tasks, input.value]);
                input.value = '';
            }}
            className={css.botao}>Adicionar</button>
        </div>
    )
}

export default ToDo