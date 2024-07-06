import '../App.css'

function telaNav() {
    return (

        <nav>
            <div className='container'>
                <div className='logo-container'>
                    <img src="src/assets/image.png" alt="" className="logo"/>
                    <h1>The Wekend</h1>
                </div>

                <div className="itens">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Content</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default telaNav