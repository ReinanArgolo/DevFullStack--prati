import logo from "../assets/image.png"
import css from "./Header.module.css"

function Header() {

    return (
        <>
            <div className={css.header}>
                <img src={logo} alt="" className={css.logo} c/>
                <h1 className={css.title}>News Waves</h1>
            </div>
        </>
    )
}

export default Header