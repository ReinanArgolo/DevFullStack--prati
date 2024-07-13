
import css from './Footer.module.css'

function Footer() {
    return(
        <>
            <hr />
            <div className={css.container}>
                <p>Todos os diretos reservados a <span className={css.title}>The New York Times </span></p>
                <p> Copyright &copy; 2024</p>
            </div>
            
            
        </>
    )
}
export default Footer