import { useState } from "react"
import css from './aba.module.css'

function Aba() {

    const conteudos = [
        [
            'React is extremely popular \n',
            'It makes building complex, interactive UIs a breeze\n',
            "It's powerful & flexible\n",
            "It has a very active and versatile ecosystem\n"
        ],
        [
           "Components, JSX & Props",
            "State",
            "Hooks (e.g., useEffect())",
            "Dynamic rendering"
        ],
        [
            "Official web page (react.dev)",
            "Next.js (Fullstack framework)",
            "React Native (build native mobile apps with React)"
        ],
        [
            "Vanilla JavaScript requires imperative programming",
            "Imperative Programming: You define all the steps needed to achieve a result",
            "React on the other hand embraces declarative programming",
            "With React, you define the goal and React figures out how to get there"
        ]
            
    ]

    const [content, setContent] = useState(conteudos[0])

    function handleContent(event) {
        if (event.target.id === 'btn-tab1') {
            setContent(conteudos[0])
        } else if (event.target.id === 'btn-tab2') {
            setContent(conteudos[1])
        } else if (event.target.id === 'btn-tab3') {
            setContent(conteudos[2])
        } else if (event.target.id === 'btn-tab4') {
            setContent(conteudos[3])
        } else {
            console.log('Nenhuma aba selecionada')
        }
    }



    return (
        <>
            <div className={css.container}>
                <div className={css.tabs}>
                    <button className={css.button} id="btn-tab1" onClick={handleContent}>Why React?</button>
                    <button className={css.button} id="btn-tab2" onClick={handleContent}>Core Features'</button>
                    <button className={css.buttonn} id="btn-tab3" onClick={handleContent}>Related Resources</button>
                    <button className={css.button} id="btn-tab4" onClick={handleContent}>React Vs JS</button>
                </div>

                <div className={css.content}>
                    <ul>
                        {content.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
            
        </>
       
    )

}

export default Aba