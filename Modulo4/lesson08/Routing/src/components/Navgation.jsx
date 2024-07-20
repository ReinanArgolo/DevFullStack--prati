import  { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
               <li><Link to='/'>Technology</Link></li>
               <li><Link to='/ciencia'>Ciencie</Link></li>
               <li><Link to='/educacao'>Education</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation