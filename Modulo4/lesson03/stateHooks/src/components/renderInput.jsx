import { useState } from "react";

function RenderInput() {

    const [text, setText] = useState('')

    return (
        <div>
            <input type="text" onChange={evento => setText(evento.target.value)} />   
            <p>{text}</p>
        </div>
    )
}

export default RenderInput