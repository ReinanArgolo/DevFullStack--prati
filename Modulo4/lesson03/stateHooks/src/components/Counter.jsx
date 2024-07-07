import { useState } from "react";

function Counter() {
    const [count, setCount]  = useState(0);
    console.log(useState)

    const [text, setText] = useState('')

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={()  => setCount(count + 1)}>
                Clique aqui
            </button>   
        </div>
    )
}

export default Counter