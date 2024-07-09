import url from "../assets/react.svg"
import css from "./header.module.css"

function Header() {
    return (
        <>
            <div className={css.header}>

                <img src={url} className={css.logo}/> {/* imagem */}

                <div className={css.react-name}>

                    <h2 className={css.title}>React.js</h2>
                    <p className={css.name}>i.e., using the React library for rendering the UI</p>

                </div>

            </div>
        </>
    )
}

export default Header